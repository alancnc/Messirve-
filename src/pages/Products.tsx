import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Laptop, Camera, Book, Plus } from 'lucide-react';

const Products = () => {
  const products = [
    {
      title: 'Electrónicos',
      description: 'Dispositivos y accesorios tecnológicos de última generación',
      icon: <Laptop className="w-6 h-6 text-scarlet-600" />,
      price: 'Desde $99',
    },
    {
      title: 'Fotografía',
      description: 'Equipos fotográficos profesionales y accesorios',
      icon: <Camera className="w-6 h-6 text-scarlet-600" />,
      price: 'Desde $199',
    },
    {
      title: 'Libros',
      description: 'Libros nuevos y usados en excelente estado',
      icon: <Book className="w-6 h-6 text-scarlet-600" />,
      price: 'Desde $10',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Productos Disponibles</h1>
        <Link
          to="/productos/nuevo"
          className="flex items-center space-x-2 bg-scarlet-600 text-white px-4 py-2 rounded-lg hover:bg-scarlet-700 transition-colors"
        >
          <Plus className="h-5 w-5" />
          <span>Publicar Producto</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              {product.icon}
              <h2 className="text-xl font-semibold text-gray-800 ml-3">{product.title}</h2>
            </div>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-scarlet-600 font-semibold">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products