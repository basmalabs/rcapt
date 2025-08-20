"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import clsx from "clsx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
  computeDefaultStartDate,
  filterDate, filterTime
} from "@/utils/datetime";
import type { openingHour } from "@/mytypes/server";
import { TIME_ZONE } from "@/utils/constants";

// Validation schema
const appointmentSchema = yup.object( {
  firstName: yup.string().required( "Required" ),
  lastName: yup.string().required( "Required" ),
  email: yup.string().email( "Invalid email" ).required( "Required" ),
  phone: yup
    .string()
    .required( "Required" )
    .matches( /^\+?[0-9\s-]{7,15}$/, "Invalid phone number" ),
  preferredContact: yup
    .string()
    .required( "Required" )
    .oneOf( [ "Email", "Phone" ], "Invalid contact method" ),
  returningPatient: yup
    .boolean()
    .required( "Required" ),
  appointmentDate: yup
    .date()
    .required( "Required" )
    .typeError( "Required" ),
  dateFlexibility: yup.boolean().required( "Required" ),
  timeOfDay: yup
    .string()
    .oneOf( [ "Morning", "Lunch", "Afternoon", "Evening", "Anytime" ] )
    .required( "Required" ),
  appointmentTime: yup
    .date().nullable()
    .when( "timeOfDay", {
      is: ( val: string ) => val !== "Anytime",
      then: ( schema ) => schema.required( "Required" ),
    } ),
  notes: yup.string().nullable(),
} );

type AppointmentFormData = yup.InferType<typeof appointmentSchema>;

const appointmentFormStyles = {
  container: clsx(
    "max-w-2xl mx-auto p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg"
  ),
  headerDiv: clsx( "mb-8 text-center" ),
  groupDiv: clsx(
    "w-full flex",
    "flex-col md:flex-row md:flex-wrap gap-4"
  ),
  fieldDiv: clsx( "mb-4 w-full md:w-[48%]" ),
  label: clsx(
    "block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
  ),
  input: clsx(
    "w-full p-2",
    "border border-green-400 rounded-lg",
    "text-gray-900 dark:text-gray-100 dark:bg-gray-800",
    "focus:ring-2 focus:ring-green-400 focus:outline-none"
  ),
  warning: clsx( "text-yellow-800 text-sm mb-4" ),
  error: clsx( "text-red-500 text-sm mt-1" ),
  button: clsx(
    "w-full mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
  ),
  mainHeading: clsx( "text-2xl md:text-4xl font-bold" ),
  mainSubHeading: clsx( "text-base md:text-lg" ),
  divHeading: clsx( "text-xl md:text-2xl font-semibold mb-2" ),
};

function AppointmentForm() {
  const [ timezoneWarning, setTimezoneWarning ] = useState<string | null>( null );

  const [ selectedDate, setSelectedDate ] = useState<Date | null>( null );
  const [ selectedTimeOfDay, setSelectedTimeOfDay ] = useState<string>( "Anytime" );
  const [ openingHours, setOpeningHours ] = useState<openingHour[]>( [] );

  // Checking time zone mismatch
  useEffect( () => {
    const userTZ = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if ( userTZ !== TIME_ZONE ) {
      setTimezoneWarning(
        `Your timezone (${userTZ}) differs from the company's timezone (${TIME_ZONE}). All times are shown in company time.`
      );
    }
  }, [] );

  // Load Opening Hours
  useEffect( () => {
    const fetchOpeningHours = async () => {
      const response = await fetch( "/api/gmap/opening-hours", {
        next: { revalidate: 60 * 60 * 24 * 7 }
      } );
      const data = await response.json();
      setOpeningHours( data );
    };

    fetchOpeningHours();
  }, [] );

  const minDate = useMemo( () => {
    return computeDefaultStartDate( openingHours );
  }, [ openingHours ] );

  useEffect( () => {
    if ( minDate && !selectedDate ) setSelectedDate( minDate );
  }, [ minDate ] );

  const getTimeFilter = useCallback(
    ( date: Date | null ) => ( time: Date ) => {
      if ( !date ) return false;
      return filterTime( time, date, openingHours );
    },
    [ selectedDate, openingHours ]
  );

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm( {
    resolver: yupResolver( appointmentSchema ),
  } );

  const onSubmit = ( data: AppointmentFormData ) => {
    console.log( "Appointment data:", data );
    // send to API for MongoDB save
  };

  return (
    <section className={ appointmentFormStyles.container }>
      <div className={ appointmentFormStyles.headerDiv }>
        <h1 className={ appointmentFormStyles.mainHeading }>
          Book an Appointment
        </h1>
        <p className={ appointmentFormStyles.mainSubHeading }>
          Fill out the form and we&rsquo;ll confirm your booking.
        </p>
      </div>

      <form onSubmit={ handleSubmit( onSubmit ) }>
        {/* --- Personal Info --- */ }
        <h2 className={ appointmentFormStyles.divHeading }>
          Personal Information
        </h2>

        <div className={ appointmentFormStyles.groupDiv }>

          <div className={ appointmentFormStyles.fieldDiv }>
            <label className={ appointmentFormStyles.label }>
              First Name *
            </label>
            <input
              type="text"
              { ...register( "firstName" ) }
              className={ appointmentFormStyles.input }
            />
            { errors.firstName && (
              <p className={ appointmentFormStyles.error }>
                { errors.firstName.message }
              </p>
            ) }
          </div>

          <div className={ appointmentFormStyles.fieldDiv }>
            <label className={ appointmentFormStyles.label }>
              Last Name *
            </label>
            <input
              type="text"
              { ...register( "lastName" ) }
              className={ appointmentFormStyles.input }
            />
            { errors.lastName && (
              <p className={ appointmentFormStyles.error }>
                { errors.lastName.message }
              </p>
            ) }
          </div>

          <div className={ appointmentFormStyles.fieldDiv }>
            <label className={ appointmentFormStyles.label }>
              Contact Email *
            </label>
            <input
              type="email"
              { ...register( "email" ) }
              className={ appointmentFormStyles.input }
            />
            { errors.email && (
              <p className={ appointmentFormStyles.error }>
                { errors.email.message }
              </p>
            ) }
          </div>

          <div className={ appointmentFormStyles.fieldDiv }>
            <label className={ appointmentFormStyles.label }>
              Contact Phone Number *
            </label>
            <input
              type="tel"
              { ...register( "phone" ) }
              className={ appointmentFormStyles.input }
            />
            { errors.phone && (
              <p className={ appointmentFormStyles.error }>
                { errors.phone.message }
              </p>
            ) }
          </div>

          <div className={ appointmentFormStyles.fieldDiv }>
            <label className={ appointmentFormStyles.label }>
              Preferred Contact Method *
            </label>
            <select
              { ...register( "preferredContact" ) }
              className={ appointmentFormStyles.input }
              defaultValue="Email"
            >
              <option value="Email">Email</option>
              <option value="Phone">Phone</option>
            </select>
            { errors.preferredContact && (
              <p className={ appointmentFormStyles.error }>
                { errors.preferredContact.message }
              </p>
            ) }
          </div>

          <div className={ appointmentFormStyles.fieldDiv }>
            <label className={ appointmentFormStyles.label }>
              Are you a returning patient? *
            </label>
            <select
              { ...register( "returningPatient" ) }
              className={ appointmentFormStyles.input }
              defaultValue="false"
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            { errors.returningPatient && (
              <p className={ appointmentFormStyles.error }>
                { errors.returningPatient.message }
              </p>
            ) }
          </div>
        </div>

        {/* --- Appointment Preferences --- */ }
        <h2 className={ appointmentFormStyles.divHeading }>
          Appointment Preferences
        </h2>
        { timezoneWarning && (
          <p className={ appointmentFormStyles.warning }>
            { timezoneWarning }
          </p>
        ) }
        <div className={ appointmentFormStyles.groupDiv }>
          {/* Date Picker */ }
          <div className={ appointmentFormStyles.fieldDiv }>
            <label className={ appointmentFormStyles.label }>
              Preferred Date *
            </label>
            <Controller
              control={ control }
              name="appointmentDate"
              render={ ( { field } ) => (
                <DatePicker
                  placeholderText="Select a date"
                  selected={ field.value || minDate }
                  onChange={ ( date ) => {
                    if ( !date ) return;
                    field.onChange( date );
                    setSelectedDate( date );
                  } }
                  filterDate={ ( d ) => filterDate( d, openingHours ) }
                  className={ appointmentFormStyles.input }
                  dateFormat="MMMM d, yyyy"
                  minDate={ minDate }
                />
              ) }
            />
            { errors.appointmentDate && (
              <p className={ appointmentFormStyles.error }>
                { errors.appointmentDate.message }
              </p>
            ) }
          </div>

          {/* Date Flexibility */ }
          <div className={ appointmentFormStyles.fieldDiv }>
            <label className={ appointmentFormStyles.label }>
              Date Flexibility *
            </label>
            <select
              { ...register( "dateFlexibility" ) }
              className={ appointmentFormStyles.input }
              defaultValue="true"
            >
              <option value="true">Flexible</option>
              <option value="false">Not Flexible</option>
            </select>
          </div>

          {/* Time of Day */ }
          <div className={ appointmentFormStyles.fieldDiv }>
            <label className={ appointmentFormStyles.label }>
              Preferred Time of Day *
            </label>
            <select
              { ...register( "timeOfDay" ) }
              className={ appointmentFormStyles.input }
              onChange={ ( e ) => setSelectedTimeOfDay( e.target.value ) }
              defaultValue="Anytime"
            >
              <option value="Morning">Morning</option>
              <option value="Lunch">Lunch Hour - Midday</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
              <option value="Anytime">Anytime</option>
            </select>
            { errors.timeOfDay && (
              <p className={ appointmentFormStyles.error }>
                { errors.timeOfDay.message }
              </p>
            ) }
          </div>

          {/* Preferred Appointment Time (only if not "Anytime") */ }
          { selectedTimeOfDay !== "Anytime" && (
            <div className={ appointmentFormStyles.fieldDiv }>
              <label className={ appointmentFormStyles.label }>
                Preferred Appointment Time
              </label>
              <Controller
                control={ control }
                name="appointmentTime"
                render={ ( { field } ) => (
                  <DatePicker
                    selected={ field.value }
                    onChange={ ( t ) => field.onChange( t ) }
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={ 30 }
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    filterTime={ getTimeFilter( selectedDate ) }
                    className={ appointmentFormStyles.input }
                    placeholderText="Select a time"
                  />
                ) }
              />
              { errors.appointmentTime && (
                <p className={ appointmentFormStyles.error }>{ errors.appointmentTime.message }</p>
              ) }
            </div>
          ) }
        </div>

        {/* --- Additional Info --- */ }
        <h2 className={ appointmentFormStyles.divHeading }>
          Additional Information
        </h2>
        <div className={ appointmentFormStyles.groupDiv }>
          {/* <div className={ appointmentFormStyles.fieldDiv }> */ }
          {/* <label className={ appointmentFormStyles.label }>Notes</label> */ }
          <textarea
            { ...register( "notes" ) }
            className={ appointmentFormStyles.input }
            rows={ 3 }
            placeholder="Add any details about your visit..."
          />
          {/* </div> */ }
        </div>

        {/* Submit */ }
        <button type="submit" className={ appointmentFormStyles.button }>
          Submit Appointment
        </button>
      </form>
    </section>
  );
}

export default AppointmentForm;
