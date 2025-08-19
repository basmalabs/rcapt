"use client";

import clsx from "clsx";
import { useState, useEffect } from "react";
import { useUIStore } from "@/store/useUIStore";

import type { openingHour } from "@/mytypes/server";
import { getDay, getTimeInMins, timeToMinutes } from "@/utils/datetime";
import {
  textStyles, tableStyles,
  currentStatusStyles, containerStyles
} from "@/styles/footer";


function OperatingHours( ) {
  const { isMobile } = useUIStore();

  // Load opening hours from server
  const [ openingHours, setOpeningHours ] = useState<openingHour[]>( [] );

  useEffect( () => {
    const fetchOpeningHours = async () => {
      const response = await fetch( "/api/gmap/opening-hours" );
      const data = await response.json();
      setOpeningHours( data );
    };

    fetchOpeningHours();
  }, [] );

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

  const isCurrentlyOpen = openingHours.some(
    ( [ day, opening, closing ] ) =>
      day === currentDay && isOpenNow( opening, closing )
  );

  if ( isMobile ) return (
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
          { openingHours.map( ( [ day, opening, closing ] ) => {
            const isRowOpen =
              day === currentDay && isOpenNow( opening, closing );
            return (
              <tr className={ tableStyles.tr_mobile( isRowOpen ) } key={ day }>
                <td className={ tableStyles.td_mobile }>{ day }</td>
                <td className={ tableStyles.td_mobile }>{ opening }</td>
                <td className={ tableStyles.td_mobile }>{ closing }</td>
              </tr>
            );
          } ) }
        </tbody>
      </table>
    </section>
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
          {/* Top row → Days */ }
          <tr className={ tableStyles.tr_web }>
            { openingHours.map( ( [ day, opening, closing ] ) => {
              const isRowOpen =
                day === currentDay && isOpenNow( opening, closing );
              return (
                <td
                  key={ `${day}-header` }
                  className={ clsx(tableStyles.td_web( isRowOpen ), tableStyles.td_web_h) }
                >
                  { day }
                </td>
              );
            } ) }
          </tr>

          {/* Bottom row → Time ranges */ }
          <tr className={ tableStyles.tr_web }>
            { openingHours.map( ( [ day, opening, closing ] ) => {
              const isRowOpen =
                day === currentDay && isOpenNow( opening, closing );
              const dayInfo =
                opening === "Closed" ? "Closed" : `${opening} - ${closing}`;
              return (
                <td
                  key={ `${day}-info` }
                  className={ clsx(tableStyles.td_web( isRowOpen ), tableStyles.td_web_info) }
                >
                  { dayInfo }
                </td>
              );
            } ) }
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default OperatingHours;
