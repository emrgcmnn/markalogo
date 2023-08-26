import React, { useState , useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Facesvg from '../svg/face.svg';
import Twitsvg from '../svg/tw.svg';
import Whatsappsvg from '../svg/wa.svg';
import Inssvg from '../svg/ins.svg';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    campaign: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    company: false,
  });

  const [showPopup, setShowPopup] = useState(false); 
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (
      formData.firstName === '' ||
      formData.lastName === '' ||
      formData.email === '' ||
      formData.phone === '' ||
      formData.company === ''
    ) {
      alert('Lütfen zorunlu alanları doldurun.');
      return;
    }
    console.log(formData);
    // Burada kendi form işleme kodlarınızı ekleyebilirsiniz.
    setShowPopup(true); // Popup'ı göster
    alert("SİPARİŞİNİZ BAŞARIYLA OLUŞTURULDU. TARAFINIZA EN GEÇ 15 DK. İÇİNDE GERİ DÖNÜŞ SAĞLANICAKTIR"); // Alert göster
    setTimeout(() => {
        setShowPopup(false);
        window.location.reload(); // Sayfayı yeniden yükle
      }, 1000); // 2 saniye beklet
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };




  const [state, handleSubmit] = useForm("mwkdorqy");




  return (
    <div className="bg-gray-100 min-h-screen justify-center items-center p-12">
        <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Sipariş Formu</h2>
      <form
  onSubmit={(e) => {
    handleSubmit(e);
    handleSubmitForm(e);
  }}
  action="https://formspree.io/f/mwkdorqy"
  method="POST"
  className="space-y-4"
>
  <div className="grid grid-cols-2 gap-4">
    <input
      type="text"
      name="isim"
      placeholder="Adınız"
      value={formData.isim}
      onChange={handleChange}
      className={`p-2 border rounded w-full ${
        formErrors.isim ? "border-red-500" : ""
      }`}
    />
    <input
      type="text"
      name="soyisim"
      placeholder="Soyadınız"
      value={formData.soyisim}
      onChange={handleChange}
      className={`p-2 border rounded w-full ${
        formErrors.soyisim ? "border-red-500" : ""
      }`}
    />
  </div>
  <input
    type="email"
    name="email"
    placeholder="E-posta"
    value={formData.email}
    onChange={handleChange}
    className={`p-2 border rounded w-full ${
      formErrors.email ? "border-red-500" : ""
    }`}  />
  <input
    type="text"
    name="telefon"
    placeholder="Telefon Numaranız"
    value={formData.telefon}
    onChange={handleChange}
    className={`p-2 border rounded w-full ${
      formErrors.telefon ? "border-red-500" : ""
    }`}  />
  <input
    type="text"
    name="firmaAdı"
    placeholder="Şirket İsmi"
    value={formData.firmaAdı}
    onChange={handleChange}
    className={`p-2 border rounded w-full ${
      formErrors.firmaAdı ? "border-red-500" : ""
    }`}  />
  <div>
    <label className="block font-bold mb-1">Kampanya Türü:</label>
    <select
      name="kampanya"
      value={formData.kampanya}
      onChange={handleChange}
      className="p-2 border rounded w-full"
    >
      <option value="">Seçiniz</option>
      <option value="logo">Logo Kampanyası</option>
      <option value="website">Web Sitesi Kampanyası</option>
    </select>
  </div>
  <div>
    <label className="block font-bold mb-1">Siparişinizle Alakalı Ek Bilgiler:</label>
    <textarea
      name="extrabilgi"
      value={formData.extrabilgi}
      onChange={handleChange}
      className="p-2 border rounded w-full"
    />
  </div>
  <button
    type="submit"
    disabled={state.submitting}
    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
  >
    Gönder
  </button>

</form>
    </div>
    <div name="footer" id="footer" class="text-center py-4">
        <h1 class="text-3xl font-bold mb-4">İLETİŞİM</h1>
        
        <div class="flex justify-center">
            
            <a target="_blank" href='https://www.facebook.com' class="w-1/4 text-center">
                <button>
                    <img src={Facesvg} alt="Facebook" class="mx-auto mb-2 w-8 h-8"/>
                </button>
            </a>

            <a target="_blank" href='https://www.twitter.com' class="w-1/4 text-center">
                <button>
                    <img src={Twitsvg} alt="Twitter" class="mx-auto mb-2 w-8 h-8"/>
                </button>
            </a>
            
            <a target="_blank" href='https://wa.me/<+905318471853>' class="w-1/4 text-center">
                <button >
                    <img src={Whatsappsvg} alt="WhatsApp" class="mx-auto mb-2 w-8 h-8"/>
                </button>
            </a>
            
            <a target="_blank" href='https://www.instagram.com/markalogoo' class="w-1/4 text-center">
                <button>
                    <img src={Inssvg} alt="Instagram" class="mx-auto mb-2 w-8 h-8"/>
                </button>
            </a>
        </div>
    </div>
    </div>
    
  );
};

export default Form;
