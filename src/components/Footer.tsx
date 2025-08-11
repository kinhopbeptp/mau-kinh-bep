import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <div className="w-8 h-8 flex items-center justify-center font-bold text-lg">K</div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Kính Ốp Bếp Cao Cấp</h3>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Chuyên cung cấp và lắp đặt kính ốp bếp cao cấp với chất lượng đảm bảo, 
              thiết kế hiện đại và dịch vụ tư vấn tận tâm.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liên Kết Nhanh</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/gioi-thieu" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Giới Thiệu
                </Link>
              </li>
              <li>
                <Link to="/san-pham" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Sản Phẩm
                </Link>
              </li>
              <li>
                <Link to="/tin-tuc" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Tin Tức
                </Link>
              </li>
              <li>
                <Link to="/lien-he" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Liên Hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Dịch Vụ</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Tư vấn thiết kế miễn phí</li>
              <li>Lắp đặt tận nhà</li>
              <li>Bảo hành dài hạn</li>
              <li>Hỗ trợ 24/7</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liên Hệ</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="mt-1 text-blue-400" />
                <div className="text-sm text-gray-300">
                  123 Đường ABC, Quận XYZ<br />
                  TP. Hồ Chí Minh
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400" />
                <div className="text-sm text-gray-300">0123 456 789</div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400" />
                <div className="text-sm text-gray-300">info@kinhopbep.vn</div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={16} className="mt-1 text-blue-400" />
                <div className="text-sm text-gray-300">
                  Thứ 2 - Chủ nhật<br />
                  8:00 - 18:00
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 Kính Ốp Bếp Cao Cấp. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;