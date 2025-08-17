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