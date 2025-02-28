import React from 'react';
import { Link } from 'react-router-dom';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import GroupsIcon from '@mui/icons-material/Groups';
import SecurityIcon from '@mui/icons-material/Security';
import ExploreIcon from '@mui/icons-material/Explore';
import PeopleIcon from '@mui/icons-material/People';
import PublicIcon from '@mui/icons-material/Public';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary-dark">
        <div className="absolute inset-0">
          <img 
            className="w-full h-full object-cover opacity-30"
            src="https://source.unsplash.com/random/1800x600/?travel,landscape" 
            alt="Travel landscape" 
          />
          <div className="absolute inset-0 bg-primary-dark mix-blend-multiply" aria-hidden="true"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">About Travel Companion</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Connecting travelers for safer, more enjoyable journeys across South Asia
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="relative py-16 overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
            <svg className="absolute top-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
              <defs>
                <pattern id="74b3fd99-0a6f-4271-bef2-e80eeafdf357" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" className="text-primary-light/20" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
            </svg>
            <svg className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
              <defs>
                <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" className="text-primary-light/20" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
            </svg>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl mb-6">Our Story</h2>
              <div className="prose prose-lg prose-primary text-gray-600">
                <p>
                  Travel Companion was born from a simple observation: traveling to unfamiliar places can be both exciting and intimidating, especially when going alone.
                </p>
                <p>
                  Our founder experienced this firsthand during a solo trip to India in 2019. While waiting at the airport for a connecting flight, she struck up a conversation with another traveler heading to the same destination. They ended up sharing a taxi, exchanging travel tips, and even meeting up for dinner later in their trip.
                </p>
                <p>
                  This chance encounter transformed her journey and inspired the creation of Travel Companion — a platform that facilitates these connections, making travel safer, more enjoyable, and more meaningful for everyone.
                </p>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="rounded-xl overflow-hidden shadow-xl ring-1 ring-black ring-opacity-5 lg:transform lg:rotate-1 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="https://source.unsplash.com/random/600x400/?travel,friends" 
                  alt="Travelers meeting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-primary-light/10 text-primary-main">
              Our Purpose
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Mission & Vision
            </h2>
            <p className="mt-3 max-w-3xl mx-auto text-xl text-gray-500">
              We're on a mission to transform solo journeys into shared adventures
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-main to-primary-light rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative p-8 bg-white ring-1 ring-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                <div className="flex items-center space-x-5">
                  <div className="flex-shrink-0 bg-primary-main rounded-xl p-3">
                    <PeopleIcon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="mt-6 text-gray-600 leading-relaxed">
                  To connect travelers heading to the same destinations, creating a safer, more enjoyable, and culturally immersive travel experience through meaningful human connections.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  We believe that travel is better when shared, and that connecting with others can transform an ordinary journey into an extraordinary adventure.
                </p>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary-main to-secondary-light rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative p-8 bg-white ring-1 ring-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                <div className="flex items-center space-x-5">
                  <div className="flex-shrink-0 bg-secondary-main rounded-xl p-3">
                    <PublicIcon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="mt-6 text-gray-600 leading-relaxed">
                  A world where no traveler ever feels alone or unsafe in a new destination, where cultural bridges are built through shared experiences, and where the joy of discovery is multiplied through connection.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  We envision Travel Companion becoming the essential platform for anyone traveling to South Asia, fostering a global community of travelers who support and enrich each other's journeys.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="text-center">
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-primary-light/10 text-primary-main">
                What We Stand For
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Core Values
              </h2>
              <p className="mt-3 max-w-3xl mx-auto text-xl text-gray-500">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="mt-16">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-14 w-14 rounded-xl bg-primary-main text-white">
                      <SecurityIcon className="h-8 w-8" aria-hidden="true" />
                    </div>
                    <p className="ml-20 text-xl font-semibold text-gray-900">Safety First</p>
                  </dt>
                  <dd className="mt-3 ml-20 text-base text-gray-600">
                    We prioritize the safety and security of our users through thorough verification processes, privacy controls, and proactive safety measures.
                  </dd>
                </div>
                
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-14 w-14 rounded-xl bg-primary-main text-white">
                      <ConnectWithoutContactIcon className="h-8 w-8" aria-hidden="true" />
                    </div>
                    <p className="ml-20 text-xl font-semibold text-gray-900">Meaningful Connections</p>
                  </dt>
                  <dd className="mt-3 ml-20 text-base text-gray-600">
                    We believe in the power of authentic human connections to enhance travel experiences and create lasting memories.
                  </dd>
                </div>
                
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-14 w-14 rounded-xl bg-primary-main text-white">
                      <ExploreIcon className="h-8 w-8" aria-hidden="true" />
                    </div>
                    <p className="ml-20 text-xl font-semibold text-gray-900">Cultural Respect</p>
                  </dt>
                  <dd className="mt-3 ml-20 text-base text-gray-600">
                    We promote cultural understanding, respectful travel practices, and the celebration of diverse perspectives and traditions.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="relative bg-gradient-to-r from-primary-dark to-primary-main">
        <div className="relative py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="relative overflow-hidden rounded-2xl bg-primary-dark px-6 py-10 shadow-xl sm:px-12 sm:py-20">
              <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
                <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1463 360">
                  <path className="text-primary-light text-opacity-40" fill="currentColor" d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z" />
                  <path className="text-primary-light text-opacity-20" fill="currentColor" d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z" />
                </svg>
              </div>
              <div className="relative">
                <div className="sm:text-center">
                  <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                    Ready to Experience Connected Travel?
                  </h2>
                  <p className="mt-6 mx-auto max-w-2xl text-lg text-indigo-100">
                    Join thousands of travelers who have found companions, created memories, and traveled with greater confidence through our platform.
                  </p>
                </div>
                <div className="mt-10 sm:flex sm:justify-center">
                  <div className="rounded-md shadow">
                    <Link to="/profile" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-main bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                      Create Your Profile
                    </Link>
                  </div>
                  <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                    <Link to="/dashboard" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-white text-white bg-primary-main bg-opacity-60 hover:bg-opacity-70 md:py-4 md:text-lg md:px-10">
                      Find Companions
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;