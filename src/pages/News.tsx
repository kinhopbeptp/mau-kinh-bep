import React from 'react';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';

const News = () => {
  const featuredPost = {
    id: 1,
    title: 'Xu Hướng Thiết Kế Nhà Bếp 2024: Kính Ốp Bếp Lên Ngôi',
    excerpt: 'Khám phá những xu hướng thiết kế nhà bếp mới nhất năm 2024 với sự góp mặt của kính ốp bếp cao cấp...',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2024-03-15',
    author: 'Nguyễn Văn A',
    category: 'Xu Hướng',
    readTime: '5 phút đọc'
  };

  const posts = [
    {
      id: 2,
      title: 'Cách Chọn Màu Sắc Kính Ốp Bếp Phù Hợp Với Không Gian',
      excerpt: 'Hướng dẫn chi tiết cách lựa chọn màu sắc kính ốp bếp để tạo không gian hài hòa và đẹp mắt...',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '2024-03-10',
      author: 'Trần Thị B',
      category: 'Hướng Dẫn',
      readTime: '4 phút đọc'
    },
    {
      id: 3,
      title: '5 Lý Do Nên Chọn Kính Cường Lực Cho Ốp Bếp',
      excerpt: 'Tìm hiểu về những ưu điểm vượt trội của kính cường lực so với các vật liệu ốp bếp khác...',
      image: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '2024-03-05',
      author: 'Lê Văn C',
      category: 'Kiến Thức',
      readTime: '3 phút đọc'
    },
    {
      id: 4,
      title: 'Quy Trình Lắp Đặt Kính Ốp Bếp Chuyên Nghiệp',
      excerpt: 'Chi tiết từng bước trong quy trình lắp đặt kính ốp bếp để đảm bảo chất lượng tốt nhất...',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '2024-02-28',
      author: 'Phạm Thị D',
      category: 'Kỹ Thuật',
      readTime: '6 phút đọc'
    },
    {
      id: 5,
      title: 'Bảo Dưỡng Kính Ốp Bếp: Bí Quyết Giữ Độ Bền Lâu Dài',
      excerpt: 'Những mẹo hay và cách bảo dưỡng kính ốp bếp hiệu quả để sản phẩm luôn như mới...',
      image: 'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '2024-02-20',
      author: 'Hoàng Văn E',
      category: 'Bảo Dưỡng',
      readTime: '4 phút đọc'
    },
    {
      id: 6,
      title: 'So Sánh Kính Ốp Bếp Và Gạch Ốp: Lựa Chọn Nào Tối Ưu?',
      excerpt: 'Phân tích ưu nhược điểm của kính ốp bếp và gạch ốp để giúp bạn đưa ra quyết định đúng đắn...',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '2024-02-15',
      author: 'Võ Thị F',
      category: 'So Sánh',
      readTime: '5 phút đọc'
    }
  ];

  const categories = ['Tất Cả', 'Xu Hướng', 'Hướng Dẫn', 'Kiến Thức', 'Kỹ Thuật', 'Bảo Dưỡng'];

  return (
    <div className="py-12">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Tin Tức & Blog
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Cập nhật những thông tin mới nhất về kính ốp bếp và xu hướng thiết kế nội thất
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Post */}
        <article className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-1/2">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{new Date(featuredPost.date).toLocaleDateString('vi-VN')}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User size={14} />
                    <span>{featuredPost.author}</span>
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{featuredPost.readTime}</span>
                  <button className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                    Đọc Tiếp
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-gray-100 hover:bg-blue-100 hover:text-blue-600 text-gray-700 rounded-lg font-medium transition-colors duration-200"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{new Date(post.date).toLocaleDateString('vi-VN')}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors duration-200">
                    Đọc Tiếp →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
            Xem Thêm Bài Viết
          </button>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Đăng Ký Nhận Tin Tức Mới Nhất
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Cập nhật những xu hướng thiết kế mới nhất, mẹo hay và ưu đãi đặc biệt 
            từ chúng tôi qua email
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
              Đăng Ký
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;