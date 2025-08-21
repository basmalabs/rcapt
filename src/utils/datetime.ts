import { TIME_ZONE } from "@/utils/constants";
import type { openingHour } from "@/mytypes/server";

// Get current time in minutes at the company timezone
export const getTimeInMins = () => {
  const [ hrStr, minStr ] = new Date()
    .toLocaleTimeString( "en-US", {
      hour: "2-digit",
      hour12: false,
      minute: "2-digit",
      timeZone: TIME_ZONE
    } ).split( ":" );
  return parseInt( hrStr, 10 ) * 60 + parseInt( minStr, 10 );
};

// Get current day in the company timezone
export const getDay = () => {
  return new Date().toLocaleString( "default", {
    weekday: "long",
    timeZone: TIME_ZONE
  } );
};

// Convert "HH:MM AM/PM" to total minutes, null if Closed
export const timeToMinutes = ( timeStr: string ) => {
  if ( timeStr.toLowerCase() === "closed" ) return null;

  // Replace non-breaking spaces with normal space
  const normalized = timeStr.replace( /\u202f/g, " " ).trim();

  const [ time, modifier ] = normalized.split( " " );
  const [ h, min ] = time.split( ":" ).map( Number );
  let hours = h;
  if ( modifier === "PM" && hours !== 12 ) hours += 12;
  if ( modifier === "AM" && hours === 12 ) hours = 0;
  const minutes = min || 0;
  return hours * 60 + minutes;
};

export const timeAgo = ( isoDateStr: string ) => {
  const now = new Date();
  const reviewDate = new Date( isoDateStr );
  const timeDiff = now.getTime() - reviewDate.getTime(); // In microseconds

  const hours = Math.floor( timeDiff / ( 1000 * 60 * 60 ) );
  const days = Math.floor( timeDiff / ( 1000 * 60 * 60 * 24 ) );
  const weeks = Math.floor( days / 7 );

  // Calculate months & years more accurately
  let months =
    now.getMonth() -
    reviewDate.getMonth() +
    12 * ( now.getFullYear() - reviewDate.getFullYear() );

  let years = now.getFullYear() - reviewDate.getFullYear();

  // Adjust months if the current day is before the review day
  if ( now.getDate() < reviewDate.getDate() ) months--;

  // Adjust years if necessary
  if (
    now.getMonth() < reviewDate.getMonth() ||
    ( now.getMonth() === reviewDate.getMonth() &&
      now.getDate() < reviewDate.getDate() )
  ) years--;

  if ( days === 0 ) {
    if ( hours === 0 ) return "moments ago";
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  }
  if ( days === 1 ) return "yesterday";
  if ( days < 7 ) return `${days} days ago`;
  if ( weeks < 5 ) return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  if ( months < 12 ) return `${months} month${months > 1 ? "s" : ""} ago`;
  return `${years} year${years > 1 ? "s" : ""} ago`;
};

// Appointment Form Helper Functions

export const dateInCompanyTZ = ( date: Date ): Date => {
  const parts = date.toLocaleString( "en-US", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "numeric",
    day: "numeric",
  } ).split( "/" ).map( Number ); // [month, day, year]

  // Note: JS months are 0-based
  return new Date( parts[ 2 ], parts[ 0 ] - 1, parts[ 1 ] );
};

const addDays = ( base: Date, n: number ) => {
  const d = new Date( base );
  d.setDate( d.getDate() + n );
  return d;
};

const isOpenTuple = ( open: string, close: string ) =>
  open.toLowerCase() !== "closed" && close.toLowerCase() !== "closed";

const getScheduleForDate = ( date: Date, openingHours: openingHour[] ) => {
  const dayName = date.toLocaleString( "en-US", {
    weekday: "long",
  } );
  return openingHours.find( ( [ day ] ) => day === dayName );
};

export const computeDefaultStartDate = ( openingHours: openingHour[] ) => {
  
  // start from tomorrow
  let d = addDays( dateInCompanyTZ( new Date() ), 1 ); 

  for ( let i = 0; i < 7; i++ ) {
    const tuple = getScheduleForDate( d, openingHours );
    if ( tuple && isOpenTuple( tuple[ 1 ], tuple[ 2 ] ) ) return d;
    d = addDays( d, 1 );
  }

  // fallback: just return the day after fromDate
  return addDays( dateInCompanyTZ( new Date() ), 1 );
};

export const filterDate = ( date: Date, openingHours: openingHour[] ): boolean => {
  const dayName = date.toLocaleDateString( "en-US", {
    weekday: "long",
  } );
  const daySchedule = openingHours.find( d => d[0] === dayName );
  if ( !daySchedule ) return false;
  return daySchedule[1] !== "Closed";
}

export const filterTime = ( time: Date, selectedDate: Date, openingHours: openingHour[] ): boolean => {
  // No opening hours provided, assume open
  if ( !openingHours.length ) return true;

  // Get the day's schedule
  const selectedDayName = selectedDate.toLocaleDateString( "default", { weekday: "long" } );
  const schedule = openingHours.find( ( [ d ] ) => d === selectedDayName );

  if ( !schedule || schedule[ 1 ] === "Closed" ) return false;

  const minutes = time.getHours() * 60 + time.getMinutes();
  const openMinutes = timeToMinutes( schedule[ 1 ] )!;
  const closeMinutes = timeToMinutes( schedule[ 2 ] )!;

  return minutes >= openMinutes  && minutes <= closeMinutes;
}