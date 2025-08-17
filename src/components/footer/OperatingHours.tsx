"use client";

import clsx from "clsx";
import { OPENING_HOURS } from "@/utils/constants";
import { getDay, getTimeInMins, timeToMinutes } from "@/utils/datetime";
import {
  textStyles, tableStyles,
  currentStatusStyles, containerStyles
} from "@/styles/footer";
import { useState, useEffect } from "react";

export default function OperatingHours() {
  // Get current day and current time.
  const [ currentTimeMinutes, setCurrentTimeMinutes ] = useState( getTimeInMins() );
  const [ currentDay, setCurrentDay ] = useState( getDay() );

  // Update current time and day every 30 seconds
  useEffect( () => {
    const interval = setInterval( () => {
      setCurrentTimeMinutes( getTimeInMins() );
      setCurrentDay( getDay() );
    }, 30_000 ); // every 30 seconds

    return () => clearInterval( interval );
  }, [] );

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
    <section className={ clsx(containerStyles.container) }>
      <h2 className={ textStyles.h1 }>Hours of Operation</h2>

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
