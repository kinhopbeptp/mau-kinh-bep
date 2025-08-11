import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Truck, Clock, Star, Phone } from 'lucide-react';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Kính Ốp Bếp Trắng Ngọc Trai',
      price: '1.200.000',
      image: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Kính cường lực cao cấp, màu trắng ngọc trai sang trọng'
    },
    {
      id: 2,
      name: 'Kính Ốp Bếp Xanh Ngọc',
      price: '1.350.000',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Thiết kế hiện đại với màu xanh ngọc độc đáo'
    },
    {
      id: 3,
      name: 'Kính Ốp Bếp Đen Granite',
      price: '1.500.000',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Phong cách sang trọng với họa tiết granite tự nhiên'
    }
  ];

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Chất Lượng Đảm Bảo',
      description: 'Sử dụng kính cường lực cao cấp, an toàn tuyệt đối'
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Lắp Đặt Tận Nhà',
      description: 'Đội ngũ kỹ thuật chuyên nghiệp, lắp đặt nhanh chóng'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Bảo Hành Dài Hạn',
      description: 'Cam kết bảo hành 5 năm, hỗ trợ 24/7'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Kính Ốp Bếp
                <span className="block text-orange-400">Cao Cấp</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Biến nhà bếp của bạn thành không gian hiện đại và sang trọng với 
                kính ốp bếp chất lượng cao, thiết kế đa dạng và dịch vụ chuyên nghiệp.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/san-pham"
                  className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105"
                >
                  Xem Sản Phẩm
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a
                  href="tel:0123456789"
                  className="inline-flex items-center bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Tư Vấn Ngay
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Nhà bếp hiện đại với kính ốp bếp"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tại Sao Chọn Chúng Tôi?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Chúng tôi cam kết mang đến cho bạn những sản phẩm chất lượng nhất 
              cùng dịch vụ hoàn hảo
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-blue-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sản Phẩm Nổi Bật
            </h2>
            <p className="text-lg text-gray-600">
              Khám phá những mẫu kính ốp bếp được yêu thích nhất
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Hot
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} fill="currentColor" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 ml-2">(4.9)</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">
                        {product.price}₫
                      </div>
                      <div className="text-sm text-gray-500">/ m²</div>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-300">
                    Liên Hệ Báo Giá
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/san-pham"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Xem Tất Cả Sản Phẩm
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sẵn Sàng Thay Đổi Nhà Bếp Của Bạn?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Liên hệ ngay với chúng tôi để được tư vấn miễn phí và nhận báo giá tốt nhất
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/lien-he"
              className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 text-lg"
            >
              Liên Hệ Ngay
              <ArrowRight className="ml-2 w-6 h-6" />
            </Link>
            <a
              href="tel:0123456789"
              className="inline-flex items-center bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
            >
              <Phone className="mr-2 w-6 h-6" />
              0123 456 789
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;