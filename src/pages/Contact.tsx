import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form or show success message
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Điện Thoại',
      details: ['0123 456 789', '0987 654 321'],
      action: 'tel:0123456789'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['info@kinhopbep.vn', 'support@kinhopbep.vn'],
      action: 'mailto:info@kinhopbep.vn'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Địa Chỉ',
      details: ['123 Đường ABC, Quận XYZ', 'TP. Hồ Chí Minh, Việt Nam'],
      action: '#'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Giờ Làm Việc',
      details: ['Thứ 2 - Chủ nhật: 8:00 - 18:00', 'Hỗ trợ 24/7 qua hotline'],
      action: '#'
    }
  ];

  return (
    <div className="py-12">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Liên Hệ
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Chúng tôi sẵn sàng tư vấn và hỗ trợ bạn 24/7. Hãy liên hệ ngay để được báo giá tốt nhất!
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-blue-600 mb-4 flex justify-center">
                {info.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {info.title}
              </h3>
              <div className="space-y-1">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
              {info.action !== '#' && (
                <a
                  href={info.action}
                  className="inline-block mt-3 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors duration-200"
                >
                  Liên hệ ngay →
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <MessageSquare className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">
                Gửi Tin Nhắn
              </h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Họ và Tên *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Nhập họ và tên"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Số Điện Thoại *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Nhập số điện thoại"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Nhập email (không bắt buộc)"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Chủ Đề
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Chọn chủ đề</option>
                  <option value="consultation">Tư vấn sản phẩm</option>
                  <option value="quote">Yêu cầu báo giá</option>
                  <option value="installation">Lắp đặt</option>
                  <option value="warranty">Bảo hành</option>
                  <option value="other">Khác</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tin Nhắn *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Mô tả chi tiết yêu cầu của bạn..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Gửi Tin Nhắn
              </button>
            </form>
          </div>

          {/* Map & Additional Info */}
          <div className="space-y-8">
            {/* Map */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-300 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4326002932166!2d106.69925081533426!3d10.776699292320293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4b3328eb2f%3A0x1b56c26e3b0b2c4!2sHo%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1633943234567!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Showroom & Xưởng Sản Xuất
                </h3>
                <p className="text-gray-600 text-sm">
                  Quý khách có thể đến trực tiếp showroom để xem mẫu và tư vấn chi tiết
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Liên Hệ Nhanh
              </h3>
              <div className="space-y-3">
                <a
                  href="tel:0123456789"
                  className="flex items-center p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors duration-200"
                >
                  <Phone className="w-5 h-5 text-green-600 mr-3" />
                  <div>
                    <div className="font-semibold text-green-700">Gọi Ngay</div>
                    <div className="text-sm text-green-600">0123 456 789</div>
                  </div>
                </a>
                
                <a
                  href="https://zalo.me/0123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200"
                >
                  <MessageSquare className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <div className="font-semibold text-blue-700">Chat Zalo</div>
                    <div className="text-sm text-blue-600">Hỗ trợ 24/7</div>
                  </div>
                </a>
                
                <a
                  href="mailto:info@kinhopbep.vn"
                  className="flex items-center p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors duration-200"
                >
                  <Mail className="w-5 h-5 text-orange-600 mr-3" />
                  <div>
                    <div className="font-semibold text-orange-700">Gửi Email</div>
                    <div className="text-sm text-orange-600">info@kinhopbep.vn</div>
                  </div>
                </a>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Câu Hỏi Thường Gặp
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-semibold text-gray-800">Thời gian lắp đặt?</div>
                  <div className="text-gray-600">2-3 ngày làm việc sau khi đo đạc</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Bảo hành bao lâu?</div>
                  <div className="text-gray-600">5 năm cho sản phẩm, 2 năm lắp đặt</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Có tư vấn miễn phí?</div>
                  <div className="text-gray-600">Có, tư vấn và báo giá hoàn toàn miễn phí</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;