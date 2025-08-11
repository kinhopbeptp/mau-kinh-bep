import React from 'react';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: '1000+', label: 'Khách Hàng Hài Lòng' },
    { icon: <Clock className="w-8 h-8" />, number: '5+', label: 'Năm Kinh Nghiệm' },
    { icon: <Award className="w-8 h-8" />, number: '99%', label: 'Đánh Giá Tích Cực' },
    { icon: <CheckCircle className="w-8 h-8" />, number: '24/7', label: 'Hỗ Trợ Khách Hàng' }
  ];

  const values = [
    {
      title: 'Chất Lượng',
      description: 'Chúng tôi cam kết chỉ sử dụng những vật liệu cao cấp nhất, đảm bảo độ bền và tính thẩm mỹ cho mọi sản phẩm.'
    },
    {
      title: 'Uy Tín',
      description: 'Với hơn 5 năm trong ngành, chúng tôi đã xây dựng được niềm tin vững chắc từ hàng nghìn khách hàng.'
    },
    {
      title: 'Sáng Tạo',
      description: 'Luôn cập nhật xu hướng mới nhất, mang đến những giải pháp thiết kế độc đáo và hiện đại.'
    },
    {
      title: 'Dịch Vụ',
      description: 'Đội ngũ chuyên nghiệp, tư vấn tận tâm và hỗ trợ khách hàng 24/7 trong quá trình sử dụng.'
    }
  ];

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Về Chúng Tôi
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Chúng tôi là đơn vị hàng đầu trong lĩnh vực cung cấp và lắp đặt kính ốp bếp cao cấp, 
              với sứ mệnh mang đến những không gian bếp hiện đại và sang trọng nhất.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Câu Chuyện Của Chúng Tôi
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Được thành lập vào năm 2019 với khát vọng mang đến những giải pháp 
                kính ốp bếp chất lượng cao cho mọi gia đình Việt Nam. Chúng tôi bắt đầu 
                từ một xưởng nhỏ với đội ngũ chỉ 3 người, nhưng với niềm đam mê và sự 
                cam kết không ngừng về chất lượng.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ngày hôm nay, chúng tôi tự hào là một trong những đơn vị uy tín nhất 
                trong ngành, với hơn 1000 khách hàng tin tưởng và sử dụng dịch vụ. 
                Chúng tôi không ngừng đầu tư vào công nghệ, con người và quy trình 
                để mang đến trải nghiệm tốt nhất cho khách hàng.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Xưởng sản xuất kính ốp bếp"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Giá Trị Cốt Lõi
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Những giá trị định hướng mọi hoạt động của chúng tôi
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-all duration-300 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Đội Ngũ Chuyên Nghiệp
            </h2>
            <p className="text-lg text-gray-600">
              Những con người tâm huyết, chuyên nghiệp đứng sau mỗi sản phẩm
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Nguyễn Văn A',
                role: 'Giám Đốc Điều Hành',
                image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                name: 'Trần Thị B',
                role: 'Trưởng Phòng Thiết Kế',
                image: 'https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                name: 'Lê Văn C',
                role: 'Trưởng Phòng Kỹ Thuật',
                image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400'
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;