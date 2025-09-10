import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Settings, 
  Award, 
  Truck, 
  Users, 
  CheckCircle,
  Star,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Máy Nén Khí Trục Vít ACCOM AC-22A',
      power: '22 kW',
      pressure: '8 bar',
      capacity: '3.8 m³/min',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'Liên hệ',
      features: ['Tiết kiệm năng lượng', 'Vận hành êm ái', 'Bảo dưỡng dễ dàng']
    },
    {
      id: 2,
      name: 'Máy Nén Khí Trục Vít ACCOM AC-37A',
      power: '37 kW',
      pressure: '10 bar',
      capacity: '6.2 m³/min',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'Liên hệ',
      features: ['Công suất lớn', 'Độ bền cao', 'Hiệu suất tối ưu']
    },
    {
      id: 3,
      name: 'Máy Nén Khí Trục Vít ACCOM AC-55A',
      power: '55 kW',
      pressure: '12 bar',
      capacity: '9.8 m³/min',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'Liên hệ',
      features: ['Công nghệ hiện đại', 'Tự động hóa cao', 'Tiết kiệm chi phí']
    }
  ];

  const advantages = [
    {
      icon: <Award className="w-8 h-8 text-orange-500" />,
      title: 'Chất Lượng Hàng Đầu',
      description: 'Sản phẩm đạt tiêu chuẩn quốc tế, được kiểm định nghiêm ngặt'
    },
    {
      icon: <Settings className="w-8 h-8 text-orange-500" />,
      title: 'Công Nghệ Tiên Tiến',
      description: 'Ứng dụng công nghệ trục vít hiện đại, tiết kiệm năng lượng'
    },
    {
      icon: <Truck className="w-8 h-8 text-orange-500" />,
      title: 'Giao Hàng Toàn Quốc',
      description: 'Vận chuyển nhanh chóng, lắp đặt tại chỗ trên toàn quốc'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'Hỗ Trợ 24/7',
      description: 'Đội ngũ kỹ thuật chuyên nghiệp, hỗ trợ khách hàng 24/7'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              <Settings className="w-8 h-8 text-blue-800" />
              <span className="text-2xl font-bold text-blue-800">ACCOM</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-800 font-medium transition-colors">Trang Chủ</a>
              <a href="#products" className="text-gray-700 hover:text-blue-800 font-medium transition-colors">Sản Phẩm</a>
              <a href="#about" className="text-gray-700 hover:text-blue-800 font-medium transition-colors">Giới Thiệu</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-800 font-medium transition-colors">Liên Hệ</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <span>0123 456 789</span>
              </div>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Tư Vấn Miễn Phí
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-blue-800 font-medium">Trang Chủ</a>
                <a href="#products" className="text-gray-700 hover:text-blue-800 font-medium">Sản Phẩm</a>
                <a href="#about" className="text-gray-700 hover:text-blue-800 font-medium">Giới Thiệu</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-800 font-medium">Liên Hệ</a>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>0123 456 789</span>
                </div>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors w-fit">
                  Tư Vấn Miễn Phí
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Máy Nén Khí Công Nghiệp
                <span className="text-orange-400"> ACCOM</span>
              </h1>
              <p className="text-xl text-blue-100">
                Giải pháp nén khí chuyên nghiệp cho mọi ngành công nghiệp. 
                Chất lượng Châu Âu, giá thành tối ưu, bảo hành dài hạn.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors font-semibold flex items-center justify-center space-x-2">
                  <span>Xem Sản Phẩm</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-colors font-semibold">
                  Tư Vấn Ngay
                </button>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm">Bảo hành 2 năm</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm">Lắp đặt miễn phí</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm">Hỗ trợ 24/7</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Máy nén khí ACCOM"
                  className="w-full h-80 object-cover rounded-lg"
                />
                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-semibold text-gray-800">ACCOM AC-37A</h3>
                  <p className="text-gray-600">Công suất: 37kW | Áp suất: 10 bar</p>
                  <div className="flex items-center space-x-2">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-sm text-gray-600">(4.9/5 đánh giá)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Danh Mục Sản Phẩm
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Máy nén khí trục vít ACCOM với đầy đủ các công suất từ 7.5kW đến 355kW, 
              đáp ứng mọi nhu cầu sản xuất công nghiệp.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Hot
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-semibold text-blue-800">{product.power}</div>
                      <div className="text-gray-600">Công suất</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-blue-800">{product.pressure}</div>
                      <div className="text-gray-600">Áp suất</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-blue-800">{product.capacity}</div>
                      <div className="text-gray-600">Lưu lượng</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-2xl font-bold text-orange-500">{product.price}</div>
                    <button className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition-colors">
                      Xem Chi Tiết
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Tại Sao Chọn ACCOM?
            </h2>
            <p className="text-xl text-gray-600">
              Chúng tôi cam kết mang đến giải pháp nén khí tốt nhất cho doanh nghiệp của bạn
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center space-y-4 p-6 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex justify-center">{advantage.icon}</div>
                <h3 className="text-xl font-bold text-gray-800">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800">
                Về Công Ty ACCOM
              </h2>
              <p className="text-gray-600 text-lg">
                Với hơn 15 năm kinh nghiệm trong lĩnh vực máy nén khí công nghiệp, 
                ACCOM đã trở thành đối tác tin cậy của hàng nghìn doanh nghiệp trên toàn quốc.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Hơn 5000+ khách hàng tin tưởng</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Mạng lưới phân phối toàn quốc</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Đội ngũ kỹ thuật chuyên nghiệp</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Chứng nhận ISO 9001:2015</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-800">15+</div>
                  <div className="text-gray-600">Năm kinh nghiệm</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-800">5000+</div>
                  <div className="text-gray-600">Khách hàng</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-800">63</div>
                  <div className="text-gray-600">Tỉnh thành</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Nhà máy ACCOM"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Liên Hệ Tư Vấn
            </h2>
            <p className="text-xl text-gray-600">
              Để lại thông tin để nhận tư vấn miễn phí từ chuyên gia của chúng tôi
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-orange-500 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Địa Chỉ</h3>
                  <p className="text-gray-600">123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-orange-500 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Điện Thoại</h3>
                  <p className="text-gray-600">Hotline: 0123 456 789</p>
                  <p className="text-gray-600">Kinh doanh: 0987 654 321</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-orange-500 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">info@accom.vn</p>
                  <p className="text-gray-600">sales@accom.vn</p>
                </div>
              </div>
            </div>

            <form className="space-y-6 bg-gray-50 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Họ và tên *"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <input 
                  type="tel" 
                  placeholder="Số điện thoại *"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <input 
                type="email" 
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input 
                type="text" 
                placeholder="Công ty"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <textarea 
                rows={4}
                placeholder="Nội dung tư vấn *"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              ></textarea>
              <button 
                type="submit"
                className="w-full bg-orange-500 text-white py-4 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
              >
                Gửi Yêu Cầu Tư Vấn
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Settings className="w-8 h-8 text-orange-500" />
                <span className="text-2xl font-bold">ACCOM</span>
              </div>
              <p className="text-gray-400">
                Chuyên cung cấp máy nén khí công nghiệp chất lượng cao, 
                phục vụ mọi nhu cầu sản xuất.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Sản Phẩm</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Máy nén khí trục vít</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Máy nén khí piston</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Thiết bị hỗ trợ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Phụ tùng thay thế</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Dịch Vụ</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Tư vấn kỹ thuật</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Lắp đặt, vận hành</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bảo trì, sửa chữa</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Đào tạo vận hành</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Liên Hệ</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">123 Đường ABC, TP.HCM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">0123 456 789</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">info@accom.vn</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ACCOM. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;