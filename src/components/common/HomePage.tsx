import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import GroupIcon from '@mui/icons-material/Group';
import ExploreIcon from '@mui/icons-material/Explore';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-main text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Never Travel Alone</h1>
              <p className="text-xl mb-8">
                Connect with fellow travelers heading to South Asia and make your journey more enjoyable, safer, and memorable.
              </p>
              <div className="flex flex-wrap gap-4">
                <RouterLink to="/profile" className="bg-white text-primary-main px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Create Profile
                </RouterLink>
                <RouterLink to="/dashboard" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Find Companions
                </RouterLink>
                <RouterLink to="/about" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
                </RouterLink>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://source.unsplash.com/random/600x400/?travel,india" 
                alt="Travel companions" 
                className="w-full max-w-lg rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Finding a travel companion is easy with our simple three-step process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card flex flex-col items-center text-center">
            <div className="bg-primary-light p-4 rounded-full mb-6">
              <FlightTakeoffIcon className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Create Your Profile</h3>
            <p className="text-gray-600">
              Sign up and create your travel profile with your personal details and travel preferences.
            </p>
          </div>
          
          <div className="card flex flex-col items-center text-center">
            <div className="bg-primary-light p-4 rounded-full mb-6">
              <ExploreIcon className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Submit Travel Details</h3>
            <p className="text-gray-600">
              Enter your flight information, travel dates, and companion preferences for your upcoming trip.
            </p>
          </div>
          
          <div className="card flex flex-col items-center text-center">
            <div className="bg-primary-light p-4 rounded-full mb-6">
              <GroupIcon className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Connect with Travelers</h3>
            <p className="text-gray-600">
              Browse matching profiles, connect with compatible travelers, and coordinate your journey together.
            </p>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Destinations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find travel companions for these amazing South Asian destinations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: 'India', image: 'https://source.unsplash.com/random/300x200/?india,taj' },
              { name: 'Pakistan', image: 'https://source.unsplash.com/random/300x200/?pakistan,lahore' },
              { name: 'Bangladesh', image: 'https://source.unsplash.com/random/300x200/?bangladesh,dhaka' },
              { name: 'Sri Lanka', image: 'https://source.unsplash.com/random/300x200/?srilanka,colombo' },
              { name: 'Nepal', image: 'https://source.unsplash.com/random/300x200/?nepal,kathmandu' }
            ].map((destination) => (
              <div key={destination.name} className="card overflow-hidden transition-transform duration-300 hover:scale-105">
                <div className="h-48 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold">{destination.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Travel Companion?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our community of travelers and make your next journey to South Asia more enjoyable.
          </p>
          <RouterLink to="/profile" className="btn-primary text-lg px-8 py-3">
            Get Started Now
          </RouterLink>
        </div>
      </section>
    </>
  );
};

export default HomePage;
