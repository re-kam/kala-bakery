import React from 'react';

export default function KalaBakery() {
  const products = [
    { id: 1, name: "Nastar Premium", price: "Dapatkan Harga Promo", image: "https://i.ibb.co.com/7d9H6MXc/Chat-GPT-Image-Jun-21-2026-07-50-50-PMas.png?auto=format&fit=crop&q=80&w=800" },
    { id: 2, name: "Delicious Kastengel ", price: "Dapatkan Harga Promo", image: "https://i.ibb.co.com/TqprJKmk/Chat-GPT-Image-Jun-21-2026-07-39-02-PM.png?auto=format&fit=crop&q=80&w=800" },
    { id: 3, name: "Thumbprint Cookies", price: "Dapatkan Harga Promo", image: "https://i.ibb.co.com/gM0xjtLs/Whats-App-Image-2026-06-21-at-19-05-30asa.jpg?auto=format&fit=crop&q=80&w=800" },
    { id: 4, name: "Lapis Legit", price: "Dapatkan Harga Promo", image: "https://i.ibb.co.com/kgFT7rQZ/Whats-App-Image-2026-06-21-at-19-05-07asa.jpg?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    /* BAGIAN MODIFIKASI 1: Menambahkan gradasi ke seluruh halaman */
    /* Kita ganti 'bg-[#fdfaf6]' menjadi gradasi dari putih ke krem muda */
    <div className="bg-gradient-to-b from-white to-[#FDFBF9] min-h-screen font-sans overflow-x-hidden text-amber-950">
      
      {/* Navbar Transparan */}
      <nav className="absolute top-0 w-full px-8 py-6 flex justify-between items-center z-20">
        <h1 className="text-3xl font-serif font-bold tracking-widest text-amber-900">KALA BAKERY</h1>
        
        <div className="hidden md:flex gap-8 text-xs font-bold tracking-widest uppercase text-amber-950">
          <a href="https://kala-bakery.vercel.app/" className="hover:text-amber-600 transition">Apa Yang Baru</a>
          <a href="https://kala-bakery.vercel.app/" className="hover:text-amber-600 transition">Produk</a>
          <a href="https://kala-bakery.vercel.app/" className="hover:text-amber-600 transition">Tentang Kami</a>
        </div>
      </nav>

      {/* Hero Section (Meniru susunan layout di referensi gambar) */}
      {/* BAGIAN MODIFIKASI 2: Menambahkan gradasi khusus di bagian Hero */}
      {/* Kita ganti 'bg-[#F4EBE1]' menjadi gradasi lembut agar terlihat premium seperti contoh */}
      <section className="relative min-h-screen flex items-center pt-20 lg:pt-0 bg-gradient-to-br from-[#FFF5EA] via-[#F4EBE1] to-[#E8D9CA]">
        
        {/* Dekorasi Gradasi Tambahan (Opsional, untuk efek kedalaman) */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-white/50 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Bagian Kiri: Teks Besar */}
          <div className="text-left pt-10 lg:pt-0">
            <p className="text-4xl text-amber-900/40 italic font-serif mb-6">Every bite, a little joy</p>
            <h2 className="text-3xl lg:text-2xl font-semibold text-[#D8A84E] leading-none mb-2 uppercase drop-shadow-sm">
              Karena kami percaya<br/>rasa terbaik datang dari perhatian
            </h2>
            <p className="text-2xl text-amber-900/40 italic font-serif mb-6">Baked with care, Shared with love<br/>JUST FOR YOU !</p>
            
            <p className="text-3xl lg:text-3xl font-serif text-amber-900 leading-none mb-1 drop-shadow-sm">
              KALA BAKERY
            </p>
            <p className="text-xl lg:text-xl font-serif text-[#D8A84E] leading-none mb-1 drop-shadow-sm">
              by Nusakalarasa
            </p>
            <p className="mb-8 max-w-md font-medium text-amber-900/80">
              Kunjungi toko offline kami atau pesan secara online untuk mendapatkan produk terbaru kami!
            </p>
            
            <div className="flex items-center gap-2 mb-10 font-bold text-lg">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058 1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              @nusakalarasa.id
            </div>
            
            <button className="bg-[#CAA784] text-white px-8 py-4 rounded-full font-bold tracking-wider hover:bg-[#b08e6c] transition shadow-lg text-sm relative z-10">
              EXPERIENCE NOW!
            </button>
          </div>

          {/* Bagian Kanan: Gambar Raksasa */}
          <div className="relative h-[40vh] lg:h-[80vh] w-full flex justify-center items-center">
             <img 
               src="https://i.ibb.co.com/nNZXcGdH/Chat-GPT-Image-Jun-21-2026-07-16-02-PMas.png?auto=format&fit=crop&q=80&w=1000" 
               alt="Butter Cheese Cake" 
               className="object-cover rounded-[3rem] shadow-2xl w-full h-full lg:scale-110 lg:translate-x-10 transform transition-transform hover:scale-105 relative z-10"
             />
          </div>
        </div>
      </section>

      {/* Katalog Produk */}
      {/* BAGIAN MODIFIKASI 3: Memastikan bagian ini tetap sinkron */}
      {/* Kita ubah agar warna backgroundnya sedikit lebih terang agar gradasi di atas terlihat kontras */}
      <section className="max-w-7xl mx-auto px-6 py-24 relative z-10 bg-white/30 backdrop-blur-sm rounded-t-[3rem] -mt-10">
        <h3 className="text-3xl font-serif font-bold text-center mb-16 text-amber-950">
          COLLECTION OF OUR BEST SELLING PRODUCTS
        </h3>
        
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
              <div className="p-6 text-center">
                <h4 className="font-bold text-lg mb-2">{product.name}</h4>
                <p className="text-[#D8A84E] font-bold mb-4">{product.price}</p>
                
                {/* Ini bagian yang kita ubah! Dari <button> menjadi <a> */}
                <a 
                  href={"https://wa.me/6287776944053?text=Halo, saya mau pesan " + product.name}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full border-2 border-[#CAA784] text-[#CAA784] py-2 rounded-full font-bold hover:bg-[#CAA784] hover:text-white transition"
                >
                  ADD TO CART
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/6287776944053" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition hover:scale-110">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>
      
    </div>
  );
}