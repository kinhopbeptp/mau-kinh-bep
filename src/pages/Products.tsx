import React, { useState } from 'react';
import { Star, Filter, Grid, List } from 'lucide-react';

const Products = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tất Cả' },
    { id: 'solid', name: 'Màu Đơn Sắc' },
    { id: 'pattern', name: 'Có Họa Tiết' },
    { id: 'premium', name: 'Cao Cấp' }
  ];

  const products = [
    {
      id: 1,
      name: 'Kính Ốp Bếp Trắng Ngọc Trai',
      category: 'solid',
      price: '1.200.000',
      originalPrice: '1.500.000',
      image: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.9,
      reviews: 125,
      description: 'Kính cường lực cao cấp với màu trắng ngọc trai sang trọng, phù hợp với mọi phong cách nội thất.',
      features: ['Kính cường lực 8mm', 'Chống xước', 'Dễ vệ sinh', 'Bảo hành 5 năm'],
      discount: 20
    },
    {
      id: 2,
      name: 'Kính Ốp Bếp Xanh Ngọc',
      category: 'solid',
      price: '1.350.000',
      originalPrice: '1.600.000',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.8,
      reviews: 89,
      description: 'Thiết kế hiện đại với màu xanh ngọc độc đáo, tạo điểm nhấn cho không gian bếp.',
      features: ['Màu sắc độc đáo', 'Kính cường lực', 'Chống ẩm mốc', 'Lắp đặt dễ dàng'],
      discount: 16
    },
    {
      id: 3,
      name: 'Kính Ốp Bếp Đen Granite',
      category: 'pattern',
      price: '1.500.000',
      originalPrice: '1.800.000',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.9,
      reviews: 156,
      description: 'Phong cách sang trọng với họa tiết granite tự nhiên, mang lại vẻ đẹp cổ điển.',
      features: ['Họa tiết tự nhiên', 'Chống trầy xước', 'Dễ lau chùi', 'Đẳng cấp cao'],
      discount: 17
    },
    {
      id: 4,
      name: 'Kính Ốp Bếp Vân Đá Marble',
      category: 'premium',
      price: '1.800.000',
      originalPrice: '2.200.000',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 5.0,
      reviews: 203,
      description: 'Sản phẩm cao cấp với vân đá marble sang trọng, hoàn hảo cho những không gian đẳng cấp.',
      features: ['Vân đá marble', 'Siêu bền', 'Chống thấm nước', 'Premium quality'],
      discount: 18
    },
    {
      id: 5,
      name: 'Kính Ốp Bếp Xám Titan',
      category: 'solid',
      price: '1.400.000',
      originalPrice: '1.650.000',
      image: 'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.7,
      reviews: 98,
      description: 'Màu xám titan hiện đại, phù hợp với xu hướng thiết kế industrial.',
      features: ['Màu xám titan', 'Chống bám bẩn', 'Dễ bảo dưỡng', 'Thời trang'],
      discount: 15
    },
    {
      id: 6,
      name: 'Kính Ốp Bếp Hoa Văn Cổ Điển',
      category: 'pattern',
      price: '1.650.000',
      originalPrice: '1.950.000',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.8,
      reviews: 112,
      description: 'Hoa văn cổ điển tinh tế, mang đến vẻ đẹp truyền thống cho không gian bếp.',
      features: ['Hoa văn cổ điển', 'Thủ công tinh xảo', 'Độc đáo', 'Giá trị thẩm mỹ cao'],
      discount: 15
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const ProductCard = ({ product }: { product: typeof products[0] }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        {product.discount > 0 && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            -{product.discount}%
          </div>
        )}
        <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Hot
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4 text-sm line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">
            {product.rating} ({product.reviews} đánh giá)
          </span>
        </div>

        <div className="mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-blue-600">
              {product.price}₫
            </span>
            <span className="text-lg text-gray-400 line-through">
              {product.originalPrice}₫
            </span>
          </div>
          <div className="text-sm text-gray-500">/ m²</div>
        </div>

        <div className="space-y-2 mb-4">
          {product.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-gray-600">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
              {feature}
            </div>
          ))}
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-300">
          Liên Hệ Báo Giá
        </button>
      </div>
    </div>
  );

  const ProductListItem = ({ product }: { product: typeof products[0] }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col md:flex-row">
        <div className="relative md:w-1/3">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 md:h-full object-cover"
          />
          {product.discount > 0 && (
            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              -{product.discount}%
            </div>
          )}
        </div>
        <div className="p-6 md:w-2/3">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            {product.name}
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {product.description}
          </p>
          
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={16} 
                  fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-2">
              {product.rating} ({product.reviews} đánh giá)
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            {product.features.map((feature, index) => (
              <div key={index} className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                {feature}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold text-blue-600">
                  {product.price}₫
                </span>
                <span className="text-xl text-gray-400 line-through">
                  {product.originalPrice}₫
                </span>
              </div>
              <div className="text-sm text-gray-500">/ m²</div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300">
              Liên Hệ Báo Giá
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="py-12">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sản Phẩm
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Khám phá bộ sưu tập kính ốp bếp đa dạng với chất lượng cao cấp
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter & View Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center space-x-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg ${
                viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg ${
                viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Products Grid/List */}
        <div className={
          viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
            : 'space-y-6'
        }>
          {filteredProducts.map((product) => 
            viewMode === 'grid' ? (
              <ProductCard key={product.id} product={product} />
            ) : (
              <ProductListItem key={product.id} product={product} />
            )
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Không Tìm Thấy Sản Phẩm Phù Hợp?
          </h3>
          <p className="text-gray-600 mb-6">
            Liên hệ với chúng tôi để được tư vấn thiết kế theo yêu cầu riêng
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
            Tư Vấn Thiết Kế Riêng
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;