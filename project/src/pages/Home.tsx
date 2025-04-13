import React from 'react';
import { ArrowRight, Star, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-16">
        <h1 className="text-5xl font-bold text-gray-900">
          Encuentra el Profesional Perfecto
          <span className="text-scarlet-600"> para tus Necesidades</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Conecta con profesionales calificados o muestra tus servicios a miles de clientes potenciales.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/servicios"
            className="px-6 py-3 bg-scarlet-600 text-white rounded-lg hover:bg-scarlet-700 transition-colors"
          >
            Buscar Servicios
          </Link>
          <Link
            to="/productos"
            className="px-6 py-3 bg-white text-scarlet-600 border border-scarlet-600 rounded-lg hover:bg-scarlet-50 transition-colors"
          >
            Explorar Productos
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="h-12 w-12 bg-scarlet-100 rounded-lg flex items-center justify-center mb-4">
            <Star className="h-6 w-6 text-scarlet-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Reseñas Verificadas</h3>
          <p className="text-gray-600">
            Comentarios reales de clientes reales para ayudarte a tomar decisiones informadas.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="h-12 w-12 bg-scarlet-100 rounded-lg flex items-center justify-center mb-4">
            <Shield className="h-6 w-6 text-scarlet-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Pagos Seguros</h3>
          <p className="text-gray-600">
            Tus transacciones están protegidas con nuestro sistema de pago seguro.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="h-12 w-12 bg-scarlet-100 rounded-lg flex items-center justify-center mb-4">
            <Users className="h-6 w-6 text-scarlet-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Red Profesional</h3>
          <p className="text-gray-600">
            Accede a una amplia red de profesionales y proveedores de servicios calificados.
          </p>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Categorías Populares</h2>
          <Link to="/servicios" className="text-scarlet-600 hover:text-scarlet-700 flex items-center gap-1">
            Ver todas <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Servicios Legales', 'Reparaciones del Hogar', 'Diseño y Creatividad', 'Tecnología'].map((category) => (
            <div
              key={category}
              className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-scarlet-600 transition-colors cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-center">{category}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;