import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FormHelperText, TextField } from '@mui/material';

// Validation schema
const TravelFormSchema = Yup.object().shape({
  departureCity: Yup.string().required('Departure city is required'),
  arrivalCity: Yup.string().required('Arrival city is required'),
  ticketBooked: Yup.boolean().required('Please specify if your ticket is booked'),
  airline: Yup.string().when('ticketBooked', {
    is: true,
    then: (schema) => schema.required('Airline is required when ticket is booked'),
  }),
  flightNumber: Yup.string().when('ticketBooked', {
    is: true,
    then: (schema) => schema.required('Flight number is required when ticket is booked'),
  }),
  departureDate: Yup.date().when('ticketBooked', {
    is: true,
    then: (schema) => schema.required('Departure date is required when ticket is booked'),
  }),
  departureTime: Yup.string().when('ticketBooked', {
    is: true,
    then: (schema) => schema.required('Departure time is required when ticket is booked'),
  }),
  arrivalTime: Yup.string().when('ticketBooked', {
    is: true,
    then: (schema) => schema.required('Arrival time is required when ticket is booked'),
  }),
  isDirect: Yup.boolean().required('Please specify if your flight is direct'),
  layoverDetails: Yup.string().when('isDirect', {
    is: false,
    then: (schema) => schema.required('Layover details are required for connecting flights'),
  }),
  travelingAlone: Yup.boolean().required('Please specify if you are traveling alone'),
  numberOfCompanions: Yup.number().when('travelingAlone', {
    is: false,
    then: (schema) => schema.required('Please specify number of companions'),
  }),
  purposeOfTravel: Yup.string().required('Purpose of travel is required'),
  matchCriteria: Yup.object().shape({
    sameFlight: Yup.boolean(),
    sameDay: Yup.boolean(),
    sameAirport: Yup.boolean(),
  }),
  agePreference: Yup.string(),
  interestPreference: Yup.string(),
  contactPreference: Yup.string().required('Contact preference is required'),
  specialNotes: Yup.string(),
});

const airports = [
  'New York (JFK)', 'Los Angeles (LAX)', 'Chicago (ORD)', 'San Francisco (SFO)', 'London (LHR)',
  'Delhi (DEL)', 'Mumbai (BOM)', 'Karachi (KHI)', 'Lahore (LHE)', 'Dhaka (DAC)',
  'Colombo (CMB)', 'Kathmandu (KTM)'
];

const airlines = [
  'Air India', 'Pakistan International Airlines', 'Emirates', 'Qatar Airways', 'Etihad Airways',
  'United Airlines', 'American Airlines', 'Delta Airlines', 'British Airways', 'Lufthansa',
  'Singapore Airlines', 'Thai Airways', 'Cathay Pacific', 'Other'
];

const TravelForm = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [hasProfile, setHasProfile] = useState(false);

  useEffect(() => {
    // Check if profile exists
    const profile = localStorage.getItem('userProfile');
    if (profile) {
      setHasProfile(true);
    } else {
      // If no profile, redirect to profile creation
      navigate('/profile');
    }
  }, [navigate]);

  const steps = ['Flight Details', 'Travel Preferences', 'Matching Criteria'];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = (values: any) => {
    // In a real app, you would save this to state management or backend
    console.log(values);
    localStorage.setItem('travelDetails', JSON.stringify(values));
    
    // Navigate to the dashboard
    navigate('/dashboard');
  };

  return (
    <div className="section">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Travel Details</h1>
          <p className="text-gray-600 text-lg">
            Tell us about your upcoming trip to help find compatible travel companions
          </p>
        </div>

        {hasProfile ? (
          <div className="card">
            {/* Stepper */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                {steps.map((step, index) => (
                  <div key={step} className="flex-1 relative">
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                        activeStep === index ? 'bg-primary-main text-white' : 
                        activeStep > index ? 'bg-primary-dark text-white' : 'bg-gray-200 text-gray-600'
                      }`}>
                        {index + 1}
                      </div>
                      <div className="mt-2 text-sm font-medium text-gray-600">{step}</div>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`absolute top-5 left-1/2 w-full h-0.5 ${
                        activeStep > index ? 'bg-primary-main' : 'bg-gray-200'
                      }`}></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <Formik
              initialValues={{
                departureCity: '',
                arrivalCity: '',
                ticketBooked: false,
                airline: '',
                flightNumber: '',
                departureDate: '',
                departureTime: '',
                arrivalTime: '',
                isDirect: true,
                layoverDetails: '',
                travelingAlone: true,
                numberOfCompanions: 0,
                purposeOfTravel: '',
                matchCriteria: {
                  sameFlight: false,
                  sameDay: false,
                  sameAirport: false,
                },
                agePreference: '',
                interestPreference: '',
                contactPreference: '',
                specialNotes: '',
              }}
              validationSchema={TravelFormSchema}
              onSubmit={handleSubmit}
            >
              {({ values, errors, touched, handleChange, setFieldValue, isValid }) => (
                <Form className="space-y-6">
                  {/* Step 1: Flight Details */}
                  {activeStep === 0 && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="departureCity" className="block text-sm font-medium text-gray-700 mb-1">
                            Departure City (Airport)
                          </label>
                          <select
                            id="departureCity"
                            name="departureCity"
                            value={values.departureCity}
                            onChange={handleChange}
                            className={`form-input ${touched.departureCity && errors.departureCity ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                          >
                            <option value="">Select departure airport</option>
                            {airports.map((airport) => (
                              <option key={airport} value={airport}>{airport}</option>
                            ))}
                          </select>
                          {touched.departureCity && errors.departureCity && (
                            <p className="mt-1 text-sm text-red-600">{errors.departureCity}</p>
                          )}
                        </div>
                        
                        <div>
                          <label htmlFor="arrivalCity" className="block text-sm font-medium text-gray-700 mb-1">
                            Arrival City (Airport)
                          </label>
                          <select
                            id="arrivalCity"
                            name="arrivalCity"
                            value={values.arrivalCity}
                            onChange={handleChange}
                            className={`form-input ${touched.arrivalCity && errors.arrivalCity ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                          >
                            <option value="">Select arrival airport</option>
                            {airports.filter(airport => 
                              airport.includes('DEL') || 
                              airport.includes('BOM') || 
                              airport.includes('KHI') || 
                              airport.includes('LHE') || 
                              airport.includes('DAC') || 
                              airport.includes('CMB') || 
                              airport.includes('KTM')
                            ).map((airport) => (
                              <option key={airport} value={airport}>{airport}</option>
                            ))}
                          </select>
                          {touched.arrivalCity && errors.arrivalCity && (
                            <p className="mt-1 text-sm text-red-600">{errors.arrivalCity}</p>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="ticketBooked"
                          name="ticketBooked"
                          checked={values.ticketBooked}
                          onChange={(e) => {
                            setFieldValue('ticketBooked', e.target.checked);
                          }}
                          className="h-4 w-4 text-primary-main border-gray-300 rounded focus:ring-primary-light"
                        />
                        <label htmlFor="ticketBooked" className="ml-2 block text-sm text-gray-700">
                          I have already booked my ticket
                        </label>
                      </div>

                      {values.ticketBooked && (
                        <div className="space-y-6">
                          <div className="relative py-3">
                            <div className="absolute inset-0 flex items-center">
                              <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center">
                              <span className="bg-white px-3 text-sm text-gray-500">Flight Details</span>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                              <label htmlFor="airline" className="block text-sm font-medium text-gray-700 mb-1">
                                Airline
                              </label>
                              <select
                                id="airline"
                                name="airline"
                                value={values.airline}
                                onChange={handleChange}
                                className={`form-input ${touched.airline && errors.airline ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                              >
                                <option value="">Select airline</option>
                                {airlines.map((airline) => (
                                  <option key={airline} value={airline}>{airline}</option>
                                ))}
                              </select>
                              {touched.airline && errors.airline && (
                                <p className="mt-1 text-sm text-red-600">{errors.airline}</p>
                              )}
                            </div>
                            
                            <div>
                              <label htmlFor="flightNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                Flight Number
                              </label>
                              <input
                                type="text"
                                id="flightNumber"
                                name="flightNumber"
                                value={values.flightNumber}
                                onChange={handleChange}
                                className={`form-input ${touched.flightNumber && errors.flightNumber ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                              />
                              {touched.flightNumber && errors.flightNumber && (
                                <p className="mt-1 text-sm text-red-600">{errors.flightNumber}</p>
                              )}
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div>
                              <label htmlFor="departureDate" className="block text-sm font-medium text-gray-700 mb-1">
                                Departure Date
                              </label>
                              <input
                                type="date"
                                id="departureDate"
                                name="departureDate"
                                value={values.departureDate}
                                onChange={handleChange}
                                className={`form-input ${touched.departureDate && errors.departureDate ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                              />
                              {touched.departureDate && errors.departureDate && (
                                <p className="mt-1 text-sm text-red-600">{errors.departureDate}</p>
                              )}
                            </div>
                            
                            <div>
                              <label htmlFor="departureTime" className="block text-sm font-medium text-gray-700 mb-1">
                                Departure Time
                              </label>
                              <input
                                type="time"
                                id="departureTime"
                                name="departureTime"
                                value={values.departureTime}
                                onChange={handleChange}
                                className={`form-input ${touched.departureTime && errors.departureTime ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                              />
                              {touched.departureTime && errors.departureTime && (
                                <p className="mt-1 text-sm text-red-600">{errors.departureTime}</p>
                              )}
                            </div>
                            
                            <div>
                              <label htmlFor="arrivalTime" className="block text-sm font-medium text-gray-700 mb-1">
                                Arrival Time
                              </label>
                              <input
                                type="time"
                                id="arrivalTime"
                                name="arrivalTime"
                                value={values.arrivalTime}
                                onChange={handleChange}
                                className={`form-input ${touched.arrivalTime && errors.arrivalTime ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                              />
                              {touched.arrivalTime && errors.arrivalTime && (
                                <p className="mt-1 text-sm text-red-600">{errors.arrivalTime}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <div>
                        <p className="block text-sm font-medium text-gray-700 mb-2">
                          Is Your Flight Direct or Connecting?
                        </p>
                        <div className="flex space-x-4">
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              name="isDirect"
                              checked={values.isDirect === true}
                              onChange={() => setFieldValue('isDirect', true)}
                              className="h-4 w-4 text-primary-main border-gray-300 focus:ring-primary-light"
                            />
                            <span className="ml-2 text-sm text-gray-700">Direct</span>
                          </label>
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              name="isDirect"
                              checked={values.isDirect === false}
                              onChange={() => setFieldValue('isDirect', false)}
                              className="h-4 w-4 text-primary-main border-gray-300 focus:ring-primary-light"
                            />
                            <span className="ml-2 text-sm text-gray-700">Connecting</span>
                          </label>
                        </div>
                      </div>
                      
                      {!values.isDirect && (
                        <div>
                          <label htmlFor="layoverDetails" className="block text-sm font-medium text-gray-700 mb-1">
                            Layover Details
                          </label>
                          <input
                            type="text"
                            id="layoverDetails"
                            name="layoverDetails"
                            value={values.layoverDetails}
                            onChange={handleChange}
                            placeholder="E.g., 3-hour layover in Dubai"
                            className={`form-input ${touched.layoverDetails && errors.layoverDetails ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                          />
                          {touched.layoverDetails && errors.layoverDetails && (
                            <p className="mt-1 text-sm text-red-600">{errors.layoverDetails}</p>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Step 2: Travel Preferences */}
                  {activeStep === 1 && (
                    <div className="space-y-6">
                      <div>
                        <p className="block text-sm font-medium text-gray-700 mb-2">
                          Are You Traveling Alone?
                        </p>
                        <div className="flex space-x-4">
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              name="travelingAlone"
                              checked={values.travelingAlone === true}
                              onChange={() => setFieldValue('travelingAlone', true)}
                              className="h-4 w-4 text-primary-main border-gray-300 focus:ring-primary-light"
                            />
                            <span className="ml-2 text-sm text-gray-700">Yes, traveling alone</span>
                          </label>
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              name="travelingAlone"
                              checked={values.travelingAlone === false}
                              onChange={() => setFieldValue('travelingAlone', false)}
                              className="h-4 w-4 text-primary-main border-gray-300 focus:ring-primary-light"
                            />
                            <span className="ml-2 text-sm text-gray-700">No, traveling with others</span>
                          </label>
                        </div>
                      </div>
                      
                      {!values.travelingAlone && (
                        <div>
                          <label htmlFor="numberOfCompanions" className="block text-sm font-medium text-gray-700 mb-1">
                            Number of Companions
                          </label>
                          <input
                            type="number"
                            id="numberOfCompanions"
                            name="numberOfCompanions"
                            value={values.numberOfCompanions}
                            onChange={handleChange}
                            min="1"
                            className={`form-input w-32 ${touched.numberOfCompanions && errors.numberOfCompanions ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                          />
                          {touched.numberOfCompanions && errors.numberOfCompanions && (
                            <p className="mt-1 text-sm text-red-600">{errors.numberOfCompanions}</p>
                          )}
                        </div>
                      )}

                      <div>
                        <label htmlFor="purposeOfTravel" className="block text-sm font-medium text-gray-700 mb-1">
                          Purpose of Travel
                        </label>
                        <select
                          id="purposeOfTravel"
                          name="purposeOfTravel"
                          value={values.purposeOfTravel}
                          onChange={handleChange}
                          className={`form-input ${touched.purposeOfTravel && errors.purposeOfTravel ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                        >
                          <option value="">Select purpose</option>
                          <option value="leisure">Leisure/Tourism</option>
                          <option value="business">Business</option>
                          <option value="family">Family Visit</option>
                          <option value="education">Education/Study</option>
                          <option value="medical">Medical Visit</option>
                          <option value="religious">Religious/Pilgrimage</option>
                          <option value="other">Other</option>
                        </select>
                        {touched.purposeOfTravel && errors.purposeOfTravel && (
                          <p className="mt-1 text-sm text-red-600">{errors.purposeOfTravel}</p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Step 3: Matching Criteria */}
                  {activeStep === 2 && (
                    <div className="space-y-6">
                      <div>
                        <p className="text-lg font-semibold text-gray-700 mb-3">
                          Preferred Match Criteria
                        </p>
                        
                        <div className="space-y-3">
                          <label className="inline-flex items-center">
                            <input
                              type="checkbox"
                              name="matchCriteria.sameFlight"
                              checked={values.matchCriteria.sameFlight}
                              onChange={(e) => {
                                setFieldValue('matchCriteria.sameFlight', e.target.checked);
                              }}
                              className="h-4 w-4 text-primary-main border-gray-300 rounded focus:ring-primary-light"
                            />
                            <span className="ml-2 text-sm text-gray-700">Same Flight</span>
                          </label>
                          
                          <label className="inline-flex items-center block">
                            <input
                              type="checkbox"
                              name="matchCriteria.sameDay"
                              checked={values.matchCriteria.sameDay}
                              onChange={(e) => {
                                setFieldValue('matchCriteria.sameDay', e.target.checked);
                              }}
                              className="h-4 w-4 text-primary-main border-gray-300 rounded focus:ring-primary-light"
                            />
                            <span className="ml-2 text-sm text-gray-700">Same Day of Travel</span>
                          </label>
                          
                          <label className="inline-flex items-center block">
                            <input
                              type="checkbox"
                              name="matchCriteria.sameAirport"
                              checked={values.matchCriteria.sameAirport}
                              onChange={(e) => {
                                setFieldValue('matchCriteria.sameAirport', e.target.checked);
                              }}
                              className="h-4 w-4 text-primary-main border-gray-300 rounded focus:ring-primary-light"
                            />
                            <span className="ml-2 text-sm text-gray-700">Same Airport of Departure</span>
                          </label>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 pt-6">
                        <p className="text-lg font-semibold text-gray-700 mb-3">
                          Optional Preferences
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="agePreference" className="block text-sm font-medium text-gray-700 mb-1">
                              Age Preference
                            </label>
                            <select
                              id="agePreference"
                              name="agePreference"
                              value={values.agePreference}
                              onChange={handleChange}
                              className="form-input"
                            >
                              <option value="">No Preference</option>
                              <option value="18-24">18-24</option>
                              <option value="25-34">25-34</option>
                              <option value="35-44">35-44</option>
                              <option value="45-54">45-54</option>
                              <option value="55+">55+</option>
                            </select>
                          </div>
                          
                          <div>
                            <label htmlFor="interestPreference" className="block text-sm font-medium text-gray-700 mb-1">
                              Interest Preference
                            </label>
                            <select
                              id="interestPreference"
                              name="interestPreference"
                              value={values.interestPreference}
                              onChange={handleChange}
                              className="form-input"
                            >
                              <option value="">No Preference</option>
                              <option value="culture">Culture & History</option>
                              <option value="food">Food & Cuisine</option>
                              <option value="adventure">Adventure & Outdoors</option>
                              <option value="relaxation">Relaxation & Wellness</option>
                              <option value="shopping">Shopping & Entertainment</option>
                              <option value="photography">Photography</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 pt-6">
                        <p className="block text-sm font-medium text-gray-700 mb-2">
                          Contact Preference for Matching
                        </p>
                        <div className="flex space-x-4">
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              name="contactPreference"
                              value="email"
                              checked={values.contactPreference === 'email'}
                              onChange={handleChange}
                              className="h-4 w-4 text-primary-main border-gray-300 focus:ring-primary-light"
                            />
                            <span className="ml-2 text-sm text-gray-700">Email</span>
                          </label>
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              name="contactPreference"
                              value="phone"
                              checked={values.contactPreference === 'phone'}
                              onChange={handleChange}
                              className="h-4 w-4 text-primary-main border-gray-300 focus:ring-primary-light"
                            />
                            <span className="ml-2 text-sm text-gray-700">Phone</span>
                          </label>
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              name="contactPreference"
                              value="inApp"
                              checked={values.contactPreference === 'inApp'}
                              onChange={handleChange}
                              className="h-4 w-4 text-primary-main border-gray-300 focus:ring-primary-light"
                            />
                            <span className="ml-2 text-sm text-gray-700">In-App Message</span>
                          </label>
                        </div>
                        {touched.contactPreference && errors.contactPreference && (
                          <p className="mt-1 text-sm text-red-600">{errors.contactPreference}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="specialNotes" className="block text-sm font-medium text-gray-700 mb-1">
                          Special Notes or Requests
                        </label>
                        <textarea
                          id="specialNotes"
                          name="specialNotes"
                          rows={3}
                          value={values.specialNotes}
                          onChange={handleChange}
                          placeholder="Any additional information or requests for your travel companion"
                          className="form-input"
                        ></textarea>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between pt-5 border-t border-gray-200">
                    <button
                      type="button"
                      onClick={handleBack}
                      disabled={activeStep === 0}
                      className={`btn-outline ${activeStep === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      Back
                    </button>
                    
                    {activeStep === steps.length - 1 ? (
                      <button
                        type="submit"
                        className="btn-primary"
                      >
                        Submit
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="btn-primary"
                      >
                        Next
                      </button>
                    )}
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        ) : (
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.75.75 0 00.736-.686A3.01 3.01 0 0113 13.17v.83a.75.75 0 001.5 0v-.83A4.5 4.5 0 009 9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  Please create your profile first.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TravelForm;
