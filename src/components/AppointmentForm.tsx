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
import type { openingHour } from "@/server/utils/types";
import { TIME_ZONE } from "@/utils/constants";

const styles = {
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
  warning: clsx( "text-yellow-800 dark:text-yellow-200 text-sm mb-4" ),
  error: clsx( "text-red-600 dark:text-red-400 text-sm mt-1" ),
  button: clsx(
    "w-full mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
  ),
  mainHeading: clsx(
    "text-2xl md:text-4xl font-bold",
    "text-green-600 dark:text-green-400"
  ),
  mainSubHeading: clsx( "text-base md:text-lg" ),
  divHeading: clsx(
    "text-xl md:text-2xl mb-2",
    "text-green-800 dark:text-green-200"
  ),
};

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
    .required( "Required" ),
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

function AppointmentForm() {
  const [ timezoneWarning, setTimezoneWarning ] = useState<string | null>( null );

  const [ selectedDate, setSelectedDate ] = useState<Date | null>( null );
  const [ selectedTimeOfDay, setSelectedTimeOfDay ] = useState<string>( "Anytime" );
  const [ openingHours, setOpeningHours ] = useState<openingHour[]>( [] );

  const [ isSubmitting, setIsSubmitting ] = useState( false );
  const [ submitMessage, setSubmitMessage ] = useState<string | null>( null );

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
    const cached = sessionStorage.getItem( "openingHours" );
    if ( cached ) {
      setOpeningHours( JSON.parse( cached ) );
      return; // skip fetch if cache exists
    }
    const fetchOpeningHours = async () => {
      const response = await fetch( "/api/gmap/opening-hours");
      const data = await response.json();
      setOpeningHours( data );
      sessionStorage.setItem( "openingHours", JSON.stringify( data ) );
    };

    fetchOpeningHours();
  }, [] );

  const minDate = useMemo( () => {
    const minDate = computeDefaultStartDate( openingHours );
    setSelectedDate( minDate );
    return minDate;
  }, [ openingHours ] );

  const getTimeFilter = useCallback(
    ( time: Date ) => {
      if ( !selectedDate ) return false;
      return filterTime( time, selectedDate, openingHours );
    },
    [ selectedDate, openingHours ]
  );

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm( {
    resolver: yupResolver( appointmentSchema ),
    defaultValues: {
      appointmentDate: minDate, // your minDate
      timeOfDay: "Anytime",
      preferredContact: "Email",
      returningPatient: false,
      dateFlexibility: true,
    },
  } );

  const onSubmit = async ( data: AppointmentFormData ) => {
    setIsSubmitting( true ); // disable button

    try {
      const response = await fetch( "/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify( data ),
      } );

      if ( !response.ok ) {
        const errorText = await response.text();
        throw new Error( errorText || "Failed to submit" );
      }

      setSubmitMessage( "Appointment submitted successfully!" );
      reset();
    } catch ( error: unknown ) {
      console.error( "Error saving appointment:", error );
      setSubmitMessage( "Failed to submit appointment. Please try again." );
    } finally {
      setIsSubmitting( false );

      // Hide the message after 3 seconds
      setTimeout( () => setSubmitMessage( null ), 5000 );
    }

  };

  return (
    <section className={ styles.container }>
      <div className={ styles.headerDiv }>
        <h1 className={ styles.mainHeading }>
          Book an Appointment
        </h1>
        <p className={ styles.mainSubHeading }>
          Fill out the form and we&rsquo;ll confirm your booking.
        </p>
      </div>

      <form onSubmit={ handleSubmit( onSubmit ) }>
        {/* --- Personal Info --- */ }
        <h2 className={ styles.divHeading }>
          Personal Information
        </h2>

        <div className={ styles.groupDiv }>

          <div className={ styles.fieldDiv }>
            <label className={ styles.label }>
              First Name *
            </label>
            <input
              type="text"
              { ...register( "firstName" ) }
              className={ styles.input }
            />
            { errors.firstName && (
              <p className={ styles.error }>
                { errors.firstName.message }
              </p>
            ) }
          </div>

          <div className={ styles.fieldDiv }>
            <label className={ styles.label }>
              Last Name *
            </label>
            <input
              type="text"
              { ...register( "lastName" ) }
              className={ styles.input }
            />
            { errors.lastName && (
              <p className={ styles.error }>
                { errors.lastName.message }
              </p>
            ) }
          </div>

          <div className={ styles.fieldDiv }>
            <label className={ styles.label }>
              Contact Email *
            </label>
            <input
              type="email"
              { ...register( "email" ) }
              className={ styles.input }
            />
            { errors.email && (
              <p className={ styles.error }>
                { errors.email.message }
              </p>
            ) }
          </div>

          <div className={ styles.fieldDiv }>
            <label className={ styles.label }>
              Contact Phone Number *
            </label>
            <input
              type="tel"
              { ...register( "phone" ) }
              className={ styles.input }
            />
            { errors.phone && (
              <p className={ styles.error }>
                { errors.phone.message }
              </p>
            ) }
          </div>

          <div className={ styles.fieldDiv }>
            <label className={ styles.label }>
              Preferred Contact Method *
            </label>
            <select
              { ...register( "preferredContact" ) }
              className={ styles.input }
            >
              <option value="Email">Email</option>
              <option value="Phone">Phone</option>
            </select>
            { errors.preferredContact && (
              <p className={ styles.error }>
                { errors.preferredContact.message }
              </p>
            ) }
          </div>

          <div className={ styles.fieldDiv }>
            <label className={ styles.label }>
              Are you a returning patient? *
            </label>
            <select
              { ...register( "returningPatient" ) }
              className={ styles.input }
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            { errors.returningPatient && (
              <p className={ styles.error }>
                { errors.returningPatient.message }
              </p>
            ) }
          </div>
        </div>

        {/* --- Appointment Preferences --- */ }
        <h2 className={ styles.divHeading }>
          Appointment Preferences
        </h2>
        { timezoneWarning && (
          <p className={ styles.warning }>
            { timezoneWarning }
          </p>
        ) }
        <div className={ styles.groupDiv }>

          {/* Date Picker */ }
          <div className={ styles.fieldDiv }>
            <label className={ styles.label }>
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
                  className={ styles.input }
                  dateFormat="MMMM d, yyyy"
                  minDate={ minDate }
                />
              ) }
            />
            { errors.appointmentDate && (
              <p className={ styles.error }>
                { errors.appointmentDate.message }
              </p>
            ) }
          </div>

          {/* Date Flexibility */ }
          <div className={ styles.fieldDiv }>
            <label className={ styles.label }>
              Date Flexibility *
            </label>
            <select
              { ...register( "dateFlexibility" ) }
              className={ styles.input }
            >
              <option value="true">Flexible</option>
              <option value="false">Not Flexible</option>
            </select>
          </div>

          {/* Time of Day */ }
          <div className={ styles.fieldDiv }>
            <label className={ styles.label }>
              Preferred Time of Day *
            </label>
            <select
              { ...register( "timeOfDay" ) }
              className={ styles.input }
              onChange={ ( e ) => setSelectedTimeOfDay( e.target.value ) }
            >
              <option value="Morning">Morning</option>
              <option value="Lunch">Lunch Hour - Midday</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
              <option value="Anytime">Anytime</option>
            </select>
            { errors.timeOfDay && (
              <p className={ styles.error }>
                { errors.timeOfDay.message }
              </p>
            ) }
          </div>

          {/* Preferred Appointment Time (only if not "Anytime") */ }
          { selectedTimeOfDay !== "Anytime" && (
            <div className={ styles.fieldDiv }>
              <label className={ styles.label }>
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
                    filterTime={ getTimeFilter }
                    className={ styles.input }
                    placeholderText="Select a time"
                  />
                ) }
              />
              { errors.appointmentTime && (
                <p className={ styles.error }>{ errors.appointmentTime.message }</p>
              ) }
            </div>
          ) }
        </div>

        {/* --- Additional Info --- */ }
        <h2 className={ styles.divHeading }>
          Additional Information
        </h2>
        <div className={ styles.groupDiv }>
          {/* <div className={ appointmentFormStyles.fieldDiv }> */ }
          {/* <label className={ appointmentFormStyles.label }>Notes</label> */ }
          <textarea
            { ...register( "notes" ) }
            className={ styles.input }
            rows={ 3 }
            placeholder="Add any details about your visit..."
          />
          {/* </div> */ }
        </div>

        {/* Submit */ }
        { submitMessage && (
          <p
            className={ clsx(
              "mt-2 text-center",
              submitMessage.includes( "success" ) ? "text-green-600" : "text-red-500"
            ) }
          >
            { submitMessage }
          </p>
        ) }
        <button
          type="submit"
          className={ styles.button }
          disabled={ isSubmitting }
        >
          { isSubmitting ? "Submitting..." : "Submit Appointment" }
        </button>
      </form>
    </section>
  );
}

export default AppointmentForm;
