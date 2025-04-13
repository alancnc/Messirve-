import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';

const NewProduct = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    stock: '',
    condition: 'new',
    images: [] as File[],
  });

  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, ...newFiles],
      }));

      const newPreviewUrls = newFiles.map(file => URL.createObjectURL(file));
      setPreviewUrls(prev => [...prev, ...newPreviewUrls]);
    }
  };

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
    
    URL.revokeObjectURL(previewUrls[index]);
    setPreviewUrls(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log('Producto a publicar:', formData);
      
      setFormData({
        title: '',
        description: '',
        price: '',
        category: '',
        stock: '',
        condition: 'new',
        images: [],
      });
      
      previewUrls.forEach(url => URL.revokeObjectURL(url));
      setPreviewUrls([]);
      
      alert('Producto publicado exitosamente!');
    } catch (error) {
      console.error('Error al publicar el producto:', error);
      alert('Error al publicar el producto. Por favor, intente nuevamente.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Publicar Nuevo Producto</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Título del Producto
          </label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scarlet-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Categoría
          </label>
          <select
            id="category"
            value={formData.category}
            onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scarlet-500 focus:border-transparent"
            required
          >
            <option value="">Selecciona una categoría</option>
            <option value="electronics">Electrónica</option>
            <option value="clothing">Ropa y Accesorios</option>
            <option value="home">Hogar y Jardín</option>
            <option value="sports">Deportes</option>
            <option value="toys">Juguetes</option>
            <option value="books">Libros</option>
          </select>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Descripción
          </label>
          <textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scarlet-500 focus:border-transparent h-32"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
              Precio
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
              <input
                type="number"
                id="price"
                value={formData.price}
                onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                className="w-full pl-8 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scarlet-500 focus:border-transparent"
                required
                min="0"
                step="0.01"
              />
            </div>
          </div>

          <div>
            <label htmlFor="stock" className="block text-sm font-medium text-gray-700 mb-1">
              Stock Disponible
            </label>
            <input
              type="number"
              id="stock"
              value={formData.stock}
              onChange={(e) => setFormData(prev => ({ ...prev, stock: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scarlet-500 focus:border-transparent"
              required
              min="1"
            />
          </div>
        </div>

        <div>
          <label htmlFor="condition" className="block text-sm font-medium text-gray-700 mb-1">
            Estado del Producto
          </label>
          <select
            id="condition"
            value={formData.condition}
            onChange={(e) => setFormData(prev => ({ ...prev, condition: e.target.value }))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scarlet-500 focus:border-transparent"
            required
          >
            <option value="new">Nuevo</option>
            <option value="like-new">Como Nuevo</option>
            <option value="good">Buen Estado</option>
            <option value="fair">Estado Regular</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Imágenes del Producto
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
            <div className="space-y-1 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label htmlFor="images" className="relative cursor-pointer bg-white rounded-md font-medium text-scarlet-600 hover:text-scarlet-500">
                  <span>Sube tus imágenes</span>
                  <input
                    id="images"
                    name="images"
                    type="file"
                    className="sr-only"
                    multiple
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </label>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG hasta 10MB</p>
            </div>
          </div>

          {/* Preview de imágenes */}
          {previewUrls.length > 0 && (
            <div className="mt-4 grid grid-cols-3 gap-4">
              {previewUrls.map((url, index) => (
                <div key={index} className="relative">
                  <img
                    src={url}
                    alt={`Preview ${index + 1}`}
                    className="h-24 w-24 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-scarlet-600 text-white py-3 px-4 rounded-lg hover:bg-scarlet-700 transition-colors"
        >
          Publicar Producto
        </button>
      </form>
    </div>
  );
};

export default NewProduct;