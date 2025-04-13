import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Camera, Save } from 'lucide-react';
import { useUser } from '@clerk/clerk-react';
import { useProfile } from '../hooks/useProfile';

const Profile = () => {
  const { user } = useUser();
  const { profile, loading, error, updateProfile } = useProfile();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
  });

  React.useEffect(() => {
    if (profile) {
      setFormData({
        name: profile.name || '',
        email: profile.email || '',
        phone: profile.phone || '',
        location: profile.location || '',
      });
    }
  }, [profile]);

  const handleSave = async () => {
    try {
      await updateProfile(formData);
      setIsEditing(false);
      alert('Perfil actualizado exitosamente!');
    } catch (error) {
      console.error('Error al actualizar el perfil:', error);
      alert('Error al actualizar el perfil. Por favor, intente nuevamente.');
    }
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!profile || !user) {
    return <div>No se encontró el perfil</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="bg-scarlet-600 h-32"></div>
        <div className="px-6 py-4 relative">
          <div className="absolute -top-16">
            <div className="relative">
              <img
                src={user.imageUrl}
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
              />
            </div>
          </div>
          <div className="mt-16 flex justify-between items-center">
            <div>
              {isEditing ? (
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="text-3xl font-bold text-gray-900 bg-gray-100 rounded px-2"
                />
              ) : (
                <h1 className="text-3xl font-bold text-gray-900">{profile.name}</h1>
              )}
              <p className="text-gray-500">Professional Service Provider</p>
            </div>
            <button
              onClick={isEditing ? handleSave : () => setIsEditing(true)}
              className="flex items-center space-x-2 bg-scarlet-600 text-white px-4 py-2 rounded-lg hover:bg-scarlet-700 transition-colors"
            >
              {isEditing ? (
                <>
                  <Save className="h-5 w-5" />
                  <span>Guardar</span>
                </>
              ) : (
                <span>Editar Perfil</span>
              )}
            </button>
          </div>
        </div>

        <div className="border-t border-gray-200 px-6 py-4">
          <div className="space-y-4">
            <div className="flex items-center text-gray-700">
              <Mail className="h-5 w-5 text-gray-400 mr-2" />
              {isEditing ? (
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-gray-100 rounded px-2 py-1 flex-1"
                />
              ) : (
                <span>{profile.email}</span>
              )}
            </div>
            <div className="flex items-center text-gray-700">
              <Phone className="h-5 w-5 text-gray-400 mr-2" />
              {isEditing ? (
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-gray-100 rounded px-2 py-1 flex-1"
                />
              ) : (
                <span>{profile.phone}</span>
              )}
            </div>
            <div className="flex items-center text-gray-700">
              <MapPin className="h-5 w-5 text-gray-400 mr-2" />
              {isEditing ? (
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="bg-gray-100 rounded px-2 py-1 flex-1"
                />
              ) : (
                <span>{profile.location}</span>
              )}
            </div>
            <div className="flex items-center text-gray-700">
              <Calendar className="h-5 w-5 text-gray-400 mr-2" />
              <span>Member since {new Date(profile.created_at).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;