import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, Briefcase, Package, User, MapPin } from 'lucide-react';
import { useUser, useClerk } from '@clerk/clerk-react';

const Navbar = () => {
  const [ciudad, setCiudad] = useState('Tu ciudad');
  const [searchTerm, setSearchTerm] = useState('');
  const { user, isSignedIn } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
          );
          const data = await response.json();
          
          const city = data.address?.city || data.address?.town || data.address?.village || 'Tu ciudad';
          setCiudad(city);
        } catch (error) {
          setCiudad('Tu ciudad');
        }
      }, () => {
        setCiudad('Tu ciudad');
      });
    }
  }, []);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingBag className="h-8 w-8 text-scarlet-600" />
            <span className="text-xl font-bold text-scarlet-600">Messirve</span>
          </Link>

          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder={`Buscar en ${ciudad}...`}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-scarlet-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {ciudad && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center text-gray-400">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{ciudad}</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/productos" className="flex items-center space-x-1 text-gray-600 hover:text-scarlet-600">
              <Package className="h-5 w-5" />
              <span>Productos</span>
            </Link>
            <Link to="/servicios" className="flex items-center space-x-1 text-gray-600 hover:text-scarlet-600">
              <Briefcase className="h-5 w-5" />
              <span>Servicios</span>
            </Link>
            {isSignedIn && (
              <>
                <Link to="/perfil" className="flex items-center space-x-1 text-gray-600 hover:text-scarlet-600">
                  <User className="h-5 w-5" />
                  <span>Perfil</span>
                </Link>
                <button
                  onClick={handleSignOut}
                  className="text-gray-600 hover:text-scarlet-600"
                >
                  Cerrar Sesión
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;