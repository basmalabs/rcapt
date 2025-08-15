"use client";

import { OPENING_HOURS } from "@/utils/constants";
import { sectionStyles, tableStyles, currentStatusStyles } from "@/styles/footer";

export default function OperatingHours() {
  const now = new Date();
  const currentDay = now.toLocaleString( "default", { weekday: "long" } );
  const currentTimeMinutes = now.getHours() * 60 + now.getMinutes();

  // Convert "HH:MM AM/PM" to total minutes, null if Closed
  const timeToMinutes = ( timeStr: string ) => {
    if ( timeStr.toLowerCase() === "closed" ) return null;
    const [ time, modifier ] = timeStr.split( " " );
    const [ h, min ] = time.split( ":" ).map( Number );
    let hours = h;
    if ( modifier === "PM" && hours !== 12 ) hours += 12;
    if ( modifier === "AM" && hours === 12 ) hours = 0;
    const minutes = min || 0;
    return hours * 60 + minutes;
  };

  // Check if shop is open for given times
  const isOpenNow = ( opening: string, closing: string ) => {
    const openMinutes = timeToMinutes( opening );
    const closeMinutes = timeToMinutes( closing );
    return (
      openMinutes !== null &&
      closeMinutes !== null &&
      currentTimeMinutes >= openMinutes &&
      currentTimeMinutes <= closeMinutes
    );
  };

  const isCurrentlyOpen = OPENING_HOURS.some(
    ( [ day, opening, closing ] ) =>
      day === currentDay && isOpenNow( opening, closing )
  );

  return (
    <section className={ sectionStyles.container }>
      <h2 className={ sectionStyles.header }>Hours of Operation</h2>

      <div className={ currentStatusStyles.wrapper( isCurrentlyOpen ) }>
        <div className={ currentStatusStyles.label }>Current Status</div>
        <div className={ currentStatusStyles.value }>
          { isCurrentlyOpen ? "Open" : "Closed" }
        </div>
      </div>

      <table className={ tableStyles.table }>
        <tbody>
          { OPENING_HOURS.map( ( [ day, opening, closing ] ) => {
            const isRowOpen =
              day === currentDay && isOpenNow( opening, closing );
            return (
              <tr className={ tableStyles.tr( isRowOpen ) } key={ day }>
                <td className={ tableStyles.td }>{ day }</td>
                <td className={ tableStyles.td }>{ opening }</td>
                <td className={ tableStyles.td }>{ closing }</td>
              </tr>
            );
          } ) }
        </tbody>
      </table>
    </section>
  );
}
