import React from 'react';
import {
  User,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Star,
  Target,
  Facebook,
  Instagram,
  Palette,
  ShoppingBag,
  Award,
  Sparkles
} from 'lucide-react';

const CV: React.FC = () => {
  const pastelBlue = '#B3D4E0'; // Màu xanh pastel chính
  const pastelLight = '#E6F0FA'; // Màu xanh pastel nhạt
  const textGray = '#4B5E6D'; // Màu xám đậm nhẹ nhàng

  return (
    <div className="min-h-screen bg-gradient-to-b from-[rgba(230,240,250,0.8)] to-white">
      {/* Banner */}
      <div
        className="bg-cover bg-center h-48 relative shadow-md"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1187&q=80")`,
        }}
      >
        <div className="absolute inset-0 bg-[rgba(179,212,224,0.3)] backdrop-blur-sm"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <img
            src="https://res.cloudinary.com/dv8e9h3o7/image/upload/v1742919826/486146258_1645483759668171_604573198452313030_n_pj5l4i.jpg"
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-white object-cover shadow-lg transition-transform hover:scale-105"
          />
        </div>
      </div>

      {/* Navbar */}
      <div className="flex justify-center mt-16 mb-8 sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm py-3">
        <div className="flex space-x-6 text-sm font-medium">
          <a href="#objective" className={`text-[${pastelBlue}] border-b-2 border-[${pastelBlue}] pb-1 hover:text-[#8EBACF] transition-all`}>Mục tiêu</a>
          <a href="#info" className={`text-[${textGray}] hover:text-[${pastelBlue}] hover:border-b-2 hover:border-[${pastelBlue}] pb-1 transition-all`}>Thông tin</a>
          <a href="#experience" className={`text-[${textGray}] hover:text-[${pastelBlue}] hover:border-b-2 hover:border-[${pastelBlue}] pb-1 transition-all`}>Kinh nghiệm</a>
          <a href="#skills" className={`text-[${textGray}] hover:text-[${pastelBlue}] hover:border-b-2 hover:border-[${pastelBlue}] pb-1 transition-all`}>Kỹ năng</a>
          <a href="#education" className={`text-[${textGray}] hover:text-[${pastelBlue}] hover:border-b-2 hover:border-[${pastelBlue}] pb-1 transition-all`}>Chứng chỉ</a>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-16 max-w-5xl">
        <h1 className={`text-center text-3xl font-bold mb-2 text-[${textGray}]`}>Võ Bảo Ngọc</h1>
        <p className={`text-center text-[${pastelBlue}] mb-12 text-lg font-medium`}>Chuyên viên Trang điểm & Tư vấn Bán hàng</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div>
            {/* Mục tiêu nghề nghiệp */}
            <section id="objective" className="bg-white rounded-xl p-6 mb-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <Target className={`w-5 h-5 text-[${pastelBlue}] mr-2`} />
                <h2 className={`text-xl font-semibold text-[${textGray}]`}>Mục tiêu nghề nghiệp</h2>
              </div>
              <p className={`text-[${textGray}] leading-relaxed text-sm`}>
                Phát huy kỹ năng trang điểm chuyên nghiệp và kinh nghiệm tư vấn bán hàng để mang lại giá trị tối ưu cho khách hàng. Tôi hướng đến việc nâng cao tay nghề, cập nhật xu hướng làm đẹp hiện đại và đóng góp tích cực vào sự phát triển của doanh nghiệp.
              </p>
            </section>

            {/* Kinh nghiệm làm việc */}
            <section id="experience" className="bg-white rounded-xl p-6 mb-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <Briefcase className={`w-5 h-5 text-[${pastelBlue}] mr-2`} />
                <h2 className={`text-xl font-semibold text-[${textGray}]`}>Kinh nghiệm làm việc</h2>
              </div>
              <div className="space-y-6">
                <div className={`relative border-l-2 border-[${pastelLight}] pl-6`}>
                  <div className={`absolute w-3 h-3 bg-[${pastelBlue}] rounded-full -left-[7px] top-1`}></div>
                  <h3 className={`font-medium text-[${textGray}]`}>Chuyên viên Trang điểm</h3>
                  <p className={`text-[${pastelBlue}] text-sm mb-2`}>Ngọc Anh Wedding | 2024</p>
                  <ul className={`list-disc list-inside space-y-1 text-[${textGray}] text-sm`}>
                    <li>Thực hiện trang điểm chuyên nghiệp cho cô dâu và khách hàng sự kiện</li>
                    <li>Thiết kế concept trang điểm phù hợp với xu hướng và yêu cầu cá nhân</li>
                    <li>Hỗ trợ đào tạo kỹ năng cơ bản cho nhân viên mới</li>
                  </ul>
                </div>

                <div className={`relative border-l-2 border-[${pastelLight}] pl-6`}>
                  <div className={`absolute w-3 h-3 bg-[${pastelBlue}] rounded-full -left-[7px] top-1`}></div>
                  <h3 className={`font-medium text-[${textGray}]`}>Nhân viên Tư vấn Bán hàng</h3>
                  <p className={`text-[${pastelBlue}] text-sm mb-2`}>Cửa hàng Thời trang | 06/2022 - 12/2023</p>
                  <ul className={`list-disc list-inside space-y-1 text-[${textGray}] text-sm`}>
                    <li>Tư vấn sản phẩm làm đẹp dựa trên nhu cầu và sở thích của khách hàng</li>
                    <li>Quản lý tồn kho và lập báo cáo doanh thu hàng tháng</li>
                    <li>Duy trì mối quan hệ với khách hàng trung thành, tăng 15% tỷ lệ quay lại</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div>
            {/* Thông tin cá nhân */}
            <section id="info" className="bg-white rounded-xl p-6 mb-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <User className={`w-5 h-5 text-[${pastelBlue}] mr-2`} />
                <h2 className={`text-xl font-semibold text-[${textGray}]`}>Thông tin cá nhân</h2>
              </div>
              <div className="space-y-3">
                <div className={`flex items-center text-[${textGray}]`}>
                  <Calendar className={`w-4 h-4 text-[${pastelBlue}] mr-2`} />
                  <span className="text-sm">23/12/2003</span>
                </div>
                <div className={`flex items-center text-[${textGray}]`}>
                  <Phone className={`w-4 h-4 text-[${pastelBlue}] mr-2`} />
                  <a href="tel:+84367613517" className={`text-sm hover:text-[${pastelBlue}] transition-colors`}>0367 613 517</a>
                </div>
                <div className={`flex items-center text-[${textGray}]`}>
                  <Mail className={`w-4 h-4 text-[${pastelBlue}] mr-2`} />
                  <a href="mailto:vobaongoc1122@gmail.com" className={`text-sm hover:text-[${pastelBlue}] transition-colors`}>vobaongoc1122@gmail.com</a>
                </div>
                <div className={`flex items-center text-[${textGray}]`}>
                  <MapPin className={`w-4 h-4 text-[${pastelBlue}] mr-2`} />
                  <span className="text-sm">Trường Chinh, Hà Nội, Việt Nam</span>
                </div>
                <div className="flex space-x-4 mt-4">
                  <a href="https://www.facebook.com/vobaongoc23" className={`text-[${pastelBlue}] hover:text-[#8EBACF] transition-colors`}>
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/_vobaongoc" className={`text-[${pastelBlue}] hover:text-[#8EBACF] transition-colors`}>
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </section>

            {/* Kỹ năng chuyên môn */}
            <section id="skills" className="bg-white rounded-xl p-6 mb-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <Star className={`w-5 h-5 text-[${pastelBlue}] mr-2`} />
                <h2 className={`text-xl font-semibold text-[${textGray}]`}>Kỹ năng chuyên môn</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Palette />, skill: "Trang điểm cô dâu chuyên sâu" },
                  { icon: <Sparkles />, skill: "Trang điểm sự kiện cao cấp" },
                  { icon: <ShoppingBag />, skill: "Kỹ năng bán hàng và tư vấn" },
                  { icon: <Award />, skill: "Chăm sóc và phục hồi da" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`bg-[${pastelLight}] p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1`}
                  >
                    {React.cloneElement(item.icon, { className: `w-5 h-5 text-[${pastelBlue}] mx-auto mb-2` })}
                    <span className={`text-[${textGray}] text-sm font-medium`}>{item.skill}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Học vấn & Chứng chỉ */}
            <section id="education" className="bg-white rounded-xl p-6 mb-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <GraduationCap className={`w-5 h-5 text-[${pastelBlue}] mr-2`} />
                <h2 className={`text-xl font-semibold text-[${textGray}]`}>Học vấn & Chứng chỉ</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className={`font-medium text-[${textGray}]`}>Chứng chỉ Trang điểm Chuyên nghiệp</h3>
                  <p className={`text-[${pastelBlue}] text-sm`}>Chang Nguyen Academy | 12/2024</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;