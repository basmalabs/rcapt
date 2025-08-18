import { TIME_ZONE } from "@/utils/constants";

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
  const [ time, modifier ] = timeStr.split( " " );
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

  const minutes = Math.floor( timeDiff / ( 1000 * 60 ) );
  const hours = Math.floor( minutes / 60 );
  const days = Math.floor( hours / 24 );
  const weeks = Math.floor( days / 7 );
  const months = Math.floor( days / 30 ); // approximate
  const years = Math.floor( days / 365 ); // approximate

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
