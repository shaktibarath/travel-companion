import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { MenuItem, FormHelperText, FormControl, Select, InputLabel, TextField } from '@mui/material';

const countries = [
  'United States', 'Canada', 'United Kingdom', 'Australia', 'India', 
  'Pakistan', 'Bangladesh', 'Sri Lanka', 'Nepal', 'Other'
];

// Validation schema
const ProfileSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short')
    .max(50, 'Too Long')
    .required('First name is required'),
  lastName: Yup.string()
    .min(2, 'Too Short')
    .max(50, 'Too Long')
    .required('Last name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9+\-()\s]*$/, 'Invalid phone number format'),
  nationality: Yup.string()
    .required('Nationality is required'),
  bio: Yup.string()
    .max(500, 'Bio must be less than 500 characters'),
});

const ProfileCreation = () => {
  const navigate = useNavigate();

  const handleSubmit = (values: any) => {
    // In a real app, you would save this to state management or backend
    console.log(values);
    localStorage.setItem('userProfile', JSON.stringify(values));
    
    // Navigate to the travel form
    navigate('/travel-form');
  };

  return (
    <div className="section">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Create Your Travel Profile</h1>
          <p className="text-gray-600 text-lg">
            Tell us about yourself so we can help you find the perfect travel companion
          </p>
        </div>

        <div className="card">
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              nationality: '',
              bio: '',
            }}
            validationSchema={ProfileSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, values, handleChange, setFieldValue }) => (
              <Form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      className={`form-input ${touched.firstName && errors.firstName ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                    />
                    {touched.firstName && errors.firstName && (
                      <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      className={`form-input ${touched.lastName && errors.lastName ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                    />
                    {touched.lastName && errors.lastName && (
                      <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      className={`form-input ${touched.email && errors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                    />
                    {touched.email && errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      className={`form-input ${touched.phone && errors.phone ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                    />
                    {touched.phone && errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="nationality" className="block text-sm font-medium text-gray-700 mb-1">
                    Nationality
                  </label>
                  <select
                    id="nationality"
                    name="nationality"
                    value={values.nationality}
                    onChange={handleChange}
                    className={`form-input ${touched.nationality && errors.nationality ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                  >
                    <option value="" disabled>Select your nationality</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                  {touched.nationality && errors.nationality && (
                    <p className="mt-1 text-sm text-red-600">{errors.nationality}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                    Bio (Optional)
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    value={values.bio}
                    onChange={handleChange}
                    rows={4}
                    className={`form-input ${touched.bio && errors.bio ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                    placeholder="Tell us a little about yourself, your travel style, and interests"
                  />
                  {touched.bio && errors.bio && (
                    <p className="mt-1 text-sm text-red-600">{errors.bio}</p>
                  )}
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="btn-primary"
                  >
                    Save & Continue
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ProfileCreation;
