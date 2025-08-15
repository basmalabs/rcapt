import { OPENING_HOURS } from "@/utils/constants";

const now = new Date();
const currentDay = now.toLocaleString( "default", { weekday: "long" } );
const currentDayIndex = now.getDay();
const currentTimeMinutes = now.getHours() * 60 + now.getMinutes();

export function isOpen(day:string, opening:string, closing:string) {
  if ( day !== currentDay ) return false;
  
  const openMinutes = timeToMinutes(opening);
  const closeMinutes = timeToMinutes( closing );

  if ( openMinutes === null || closeMinutes === null ) return false;
  
  return currentTimeMinutes >= openMinutes && currentTimeMinutes <= closeMinutes;
}

export function timeToMinutes( timeStr: string ) {
  if ( timeStr.toLowerCase() === "closed" ) return null;

  const [ time, modifier ] = timeStr.split( " " );
  let [ hours, minutes ] = time.split( ":" ).map( Number );

  if ( modifier === "PM" && hours !== 12 ) hours += 12;
  else if ( modifier === "AM" && hours === 12 ) hours = 0;

  return hours * 60 + minutes;
}

export function isWithinOperatingHours( opening: string, closing: string, nowMinutes: number ) {
  const openMinutes = timeToMinutes( opening );
  const closeMinutes = timeToMinutes( closing );
  if ( openMinutes === null || closeMinutes === null ) return false;

  return nowMinutes >= openMinutes && nowMinutes <= closeMinutes;
}

export const isCurrentlyOpen = isOpen( currentDay, OPENING_HOURS[ currentDayIndex ][ 1 ], OPENING_HOURS[ currentDayIndex ][ 2 ] );