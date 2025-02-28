import React, { useState, useEffect, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import FlightIcon from '@mui/icons-material/Flight';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Dialog, Transition } from '@headlessui/react';

// Mock data for travel companions
const mockTravelers = [
  {
    id: 1,
    name: 'John Smith',
    photo: 'https://source.unsplash.com/random/400x300/?person,man',
    destination: 'Delhi (DEL)',
    departureDate: '2023-07-15',
    airline: 'Air India',
    flightNumber: 'AI102',
    purpose: 'Tourism',
    bio: 'Passionate photographer looking to explore India for the first time. Interested in architecture and street photography.',
    nationality: 'United States',
    email: 'john.smith@example.com',
    phone: '+1 555-123-4567',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    photo: 'https://source.unsplash.com/random/400x300/?person,woman',
    destination: 'Mumbai (BOM)',
    departureDate: '2023-07-16',
    airline: 'Emirates',
    flightNumber: 'EK506',
    purpose: 'Business',
    bio: 'Business consultant visiting Mumbai for meetings. Looking for someone who knows the city well.',
    nationality: 'United Kingdom',
    email: 'sarah.j@example.com',
    phone: '+44 20 7123 1234',
  },
  {
    id: 3,
    name: 'Raj Patel',
    photo: 'https://source.unsplash.com/random/400x300/?indian,man',
    destination: 'Kathmandu (KTM)',
    departureDate: '2023-07-20',
    airline: 'Nepal Airlines',
    flightNumber: 'RA205',
    purpose: 'Tourism',
    bio: 'Adventure enthusiast looking to trek in the Himalayas. Experienced trekker who has hiked across 3 continents.',
    nationality: 'Canada',
    email: 'raj.p@example.com',
    phone: '+1 416-555-7890',
  },
  {
    id: 4,
    name: 'Maria Garcia',
    photo: 'https://source.unsplash.com/random/400x300/?latina,woman',
    destination: 'Colombo (CMB)',
    departureDate: '2023-07-22',
    airline: 'Sri Lankan Airlines',
    flightNumber: 'UL104',
    purpose: 'Leisure',
    bio: 'First time visiting Sri Lanka. Interested in beaches, wildlife, and learning about local culture.',
    nationality: 'Spain',
    email: 'maria.g@example.com',
    phone: '+34 91 555 1212',
  },
  {
    id: 5,
    name: 'Ahmed Hassan',
    photo: 'https://source.unsplash.com/random/400x300/?middle-eastern,man',
    destination: 'Lahore (LHE)',
    departureDate: '2023-07-25',
    airline: 'Pakistan International Airlines',
    flightNumber: 'PK204',
    purpose: 'Family Visit',
    bio: 'Visiting family in Lahore. Looking for someone to share the journey and perhaps explore the city together.',
    nationality: 'United Arab Emirates',
    email: 'ahmed.h@example.com',
    phone: '+971 4 123 4567',
  },
  {
    id: 6,
    name: 'Lisa Wong',
    photo: 'https://source.unsplash.com/random/400x300/?asian,woman',
    destination: 'Delhi (DEL)',
    departureDate: '2023-07-15',
    airline: 'Air India',
    flightNumber: 'AI102',
    purpose: 'Tourism',
    bio: 'Food blogger excited to experience Indian cuisine and culture. Planning to visit Delhi, Agra, and Jaipur.',
    nationality: 'Singapore',
    email: 'lisa.w@example.com',
    phone: '+65 6123 4567',
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [destination, setDestination] = useState('');
  const [dateRange, setDateRange] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [travelers, setTravelers] = useState(mockTravelers);
  const [filteredTravelers, setFilteredTravelers] = useState(mockTravelers);
  const [openProfileModal, setOpenProfileModal] = useState(false);
  const [selectedTraveler, setSelectedTraveler] = useState<any>(null);
  const [hasProfile, setHasProfile] = useState(false);
  const [hasTravelDetails, setHasTravelDetails] = useState(false);

  useEffect(() => {
    // Check if profile and travel details exist
    const profile = localStorage.getItem('userProfile');
    const travelDetails = localStorage.getItem('travelDetails');
    
    if (profile) {
      setHasProfile(true);
    }
    
    if (travelDetails) {
      setHasTravelDetails(true);
    }
  }, []);

  useEffect(() => {
    // Filter travelers based on search term and filters
    let filtered = travelers;
    
    if (searchTerm) {
      filtered = filtered.filter(
        (traveler) =>
          traveler.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          traveler.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
          traveler.airline.toLowerCase().includes(searchTerm.toLowerCase()) ||
          traveler.purpose.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (destination) {
      filtered = filtered.filter((traveler) => traveler.destination === destination);
    }
    
    if (dateRange) {
      const today = new Date();
      let endDate = new Date();
      
      switch (dateRange) {
        case 'week':
          endDate.setDate(today.getDate() + 7);
          break;
        case 'month':
          endDate.setMonth(today.getMonth() + 1);
          break;
        case 'threeMonths':
          endDate.setMonth(today.getMonth() + 3);
          break;
        default:
          break;
      }
      
      filtered = filtered.filter((traveler) => {
        const travelDate = new Date(traveler.departureDate);
        return travelDate >= today && travelDate <= endDate;
      });
    }
    
    setFilteredTravelers(filtered);
  }, [searchTerm, destination, dateRange, travelers]);

  const handleViewProfile = (traveler: any) => {
    setSelectedTraveler(traveler);
    setOpenProfileModal(true);
  };

  const handleCloseModal = () => {
    setOpenProfileModal(false);
    setSelectedTraveler(null);
  };

  const handleRequestConnection = (traveler: any) => {
    // In a real app, this would send a connection request
    alert(`Connection request sent to ${traveler.name}!`);
  };

  const handleAddTravelDetails = () => {
    if (hasProfile) {
      navigate('/travel-form');
    } else {
      navigate('/profile');
    }
  };

  const destinations = Array.from(new Set(travelers.map((traveler) => traveler.destination)));

  return (
    <div className="section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Find Travel Companions</h1>
          <p className="text-gray-600 text-lg">
            Connect with fellow travelers heading to South Asia
          </p>
        </div>

        {(!hasProfile || !hasTravelDetails) && (
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded-md">
            <div className="flex justify-between items-center">
              <p className="text-blue-700">
                {!hasProfile 
                  ? 'Create your profile to connect with travelers.' 
                  : 'Add your travel details to find better matches.'}
              </p>
              <button 
                onClick={handleAddTravelDetails}
                className="btn-outline text-sm"
              >
                {!hasProfile ? 'Create Profile' : 'Add Travel Details'}
              </button>
            </div>
          </div>
        )}

        <div className="card mb-8">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4 items-center">
            <div className="md:col-span-3">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="form-input pl-10"
                  placeholder="Search by name, destination, airline..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="md:col-span-3">
              {showFilters && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="form-input"
                    >
                      <option value="">Any Destination</option>
                      {destinations.map((dest) => (
                        <option key={dest} value={dest}>{dest}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <select
                      value={dateRange}
                      onChange={(e) => setDateRange(e.target.value)}
                      className="form-input"
                    >
                      <option value="">Any Date Range</option>
                      <option value="week">Next 7 Days</option>
                      <option value="month">Next 30 Days</option>
                      <option value="threeMonths">Next 3 Months</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
            
            <div className="text-right md:col-span-1">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="text-primary-main hover:text-primary-dark inline-flex items-center"
              >
                <FilterListIcon className="h-5 w-5 mr-1" />
                {showFilters ? 'Hide' : 'Filter'}
              </button>
            </div>
          </div>
        </div>

        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold">
            {filteredTravelers.length} Travelers Found
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTravelers.map((traveler) => (
            <div key={traveler.id} className="card overflow-hidden flex flex-col transition-all duration-300 hover:shadow-hover">
              <div className="h-48 overflow-hidden">
                <img
                  src={traveler.photo}
                  alt={traveler.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-4 flex-grow">
                <h3 className="text-xl font-semibold mb-3">{traveler.name}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <LocationOnIcon className="h-5 w-5 text-primary-main mr-2" />
                    <span>{traveler.destination}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <DateRangeIcon className="h-5 w-5 text-primary-main mr-2" />
                    <span>{new Date(traveler.departureDate).toLocaleDateString()}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <FlightIcon className="h-5 w-5 text-primary-main mr-2" />
                    <span>{traveler.airline} - {traveler.flightNumber}</span>
                  </div>
                </div>
                
                <span className="inline-block px-3 py-1 text-sm font-medium text-primary-main bg-primary-light/10 rounded-full mb-4">
                  {traveler.purpose}
                </span>
                
                <div className="border-t border-gray-100 pt-3 mt-auto">
                  <p className="text-gray-600 line-clamp-2 h-12 mb-4">
                    {traveler.bio}
                  </p>
                </div>
              </div>
              
              <div className="px-4 py-3 bg-gray-50 border-t border-gray-100 flex justify-between">
                <button 
                  onClick={() => handleViewProfile(traveler)}
                  className="text-gray-700 hover:text-primary-main font-medium"
                >
                  View Profile
                </button>
                <button 
                  onClick={() => handleRequestConnection(traveler)}
                  disabled={!hasProfile || !hasTravelDetails}
                  className={`btn-primary py-1 px-3 text-sm ${(!hasProfile || !hasTravelDetails) ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  Connect
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredTravelers.length === 0 && (
          <div className="text-center py-12">
            <div className="text-xl font-semibold text-gray-500 mb-2">
              No travelers found matching your criteria.
            </div>
            <p className="text-gray-500">
              Try adjusting your search or filters.
            </p>
          </div>
        )}

        {/* Traveler Profile Modal using Headless UI */}
        <Transition.Root show={openProfileModal} as="div">
          <Dialog as="div" className="relative z-50" onClose={handleCloseModal}>
            <Transition.Child
              as="div"
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
                <Transition.Child
                  as="div"
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  {selectedTraveler && (
                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full max-w-4xl">
                      <div className="bg-white px-4 pb-4 pt-5 sm:p-6">
                        <div className="sm:flex sm:items-start">
                          <div className="text-center sm:text-left w-full">
                            <Dialog.Title as="h3" className="text-xl font-semibold leading-6 text-gray-900 border-b pb-4 mb-4">
                              Traveler Profile
                            </Dialog.Title>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                              <div className="md:col-span-1">
                                <img
                                  src={selectedTraveler.photo}
                                  alt={selectedTraveler.name}
                                  className="w-full rounded-lg shadow-sm"
                                />
                              </div>
                              
                              <div className="md:col-span-2">
                                <h2 className="text-2xl font-bold mb-1">{selectedTraveler.name}</h2>
                                <p className="text-primary-main font-medium mb-4">{selectedTraveler.nationality}</p>
                                
                                <p className="text-gray-700 mb-6">{selectedTraveler.bio}</p>
                                
                                <div className="border-t border-gray-200 pt-4 mb-6">
                                  <h3 className="text-lg font-semibold mb-3">Travel Details</h3>
                                  
                                  <div className="space-y-4">
                                    <div className="flex items-center">
                                      <div className="bg-primary-light/20 p-2 rounded-full mr-3">
                                        <LocationOnIcon className="h-5 w-5 text-primary-main" />
                                      </div>
                                      <div>
                                        <p className="text-sm text-gray-500">Destination</p>
                                        <p className="font-medium">{selectedTraveler.destination}</p>
                                      </div>
                                    </div>
                                    
                                    <div className="flex items-center">
                                      <div className="bg-primary-light/20 p-2 rounded-full mr-3">
                                        <DateRangeIcon className="h-5 w-5 text-primary-main" />
                                      </div>
                                      <div>
                                        <p className="text-sm text-gray-500">Departure Date</p>
                                        <p className="font-medium">{new Date(selectedTraveler.departureDate).toLocaleDateString()}</p>
                                      </div>
                                    </div>
                                    
                                    <div className="flex items-center">
                                      <div className="bg-primary-light/20 p-2 rounded-full mr-3">
                                        <FlightIcon className="h-5 w-5 text-primary-main" />
                                      </div>
                                      <div>
                                        <p className="text-sm text-gray-500">Flight</p>
                                        <p className="font-medium">{selectedTraveler.airline} - {selectedTraveler.flightNumber}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="border-t border-gray-200 pt-4">
                                  <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
                                  
                                  <div className="space-y-4">
                                    <div className="flex items-center">
                                      <div className="bg-primary-light/20 p-2 rounded-full mr-3">
                                        <EmailIcon className="h-5 w-5 text-primary-main" />
                                      </div>
                                      <div>
                                        <p className="text-sm text-gray-500">Email</p>
                                        <p className="font-medium">{selectedTraveler.email}</p>
                                      </div>
                                    </div>
                                    
                                    <div className="flex items-center">
                                      <div className="bg-primary-light/20 p-2 rounded-full mr-3">
                                        <PhoneIcon className="h-5 w-5 text-primary-main" />
                                      </div>
                                      <div>
                                        <p className="text-sm text-gray-500">Phone</p>
                                        <p className="font-medium">{selectedTraveler.phone}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                          type="button"
                          className={`btn-primary sm:ml-3 ${(!hasProfile || !hasTravelDetails) ? 'opacity-50 cursor-not-allowed' : ''}`}
                          onClick={() => {
                            handleRequestConnection(selectedTraveler);
                            handleCloseModal();
                          }}
                          disabled={!hasProfile || !hasTravelDetails}
                        >
                          Request Connection
                        </button>
                        <button
                          type="button"
                          className="mt-3 sm:mt-0 btn-outline"
                          onClick={handleCloseModal}
                        >
                          Close
                        </button>
                      </div>
                    </Dialog.Panel>
                  )}
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </div>
  );
};

export default Dashboard;
