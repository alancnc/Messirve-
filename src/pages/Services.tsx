import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Code, Headphones, Plus } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Consultoría',
      description: 'Asesoramiento experto para tus necesidades empresariales',
      icon: <Wrench className="w-6 h-6 text-scarlet-600" />,
      price: 'Desde $50/hora',
    },
    {
      title: 'Desarrollo',
      description: 'Soluciones de software personalizadas según tus requisitos',
      icon: <Code className="w-6 h-6 text-scarlet-600" />,
      price: 'Desde $75/hora',
    },
    {
      title: 'Soporte',
      description: 'Soporte técnico y mantenimiento 24/7',
      icon: <Headphones className="w-6 h-6 text-scarlet-600" />,
      price: 'Desde $30/hora',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Nuestros Servicios</h1>
        <Link
          to="/servicios/nuevo"
          className="flex items-center space-x-2 bg-scarlet-600 text-white px-4 py-2 rounded-lg hover:bg-scarlet-700 transition-colors"
        >
          <Plus className="h-5 w-5" />
          <span>Publicar Servicio</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              {service.icon}
              <h2 className="text-xl font-semibold text-gray-800 ml-3">{service.title}</h2>
            </div>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <p className="text-scarlet-600 font-semibold">{service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;