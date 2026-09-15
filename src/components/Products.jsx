export default function Products() {
  const products = [
    { name: "Wader Bumbu Kuning", desc: "Satu kotak penuh (500 g), gurih dan renyah.", price: 13000, img: "https://i.pinimg.com/736x/55/fa/9e/55fa9e855163816fcd10697f8a1fbf53.jpg?w=300" },
    { name: "Lele Bumbu Kuning", desc: "Isi 4 ekor, daging lembut dengan bumbu meresap.", price: 10000, img: "https://i.pinimg.com/736x/e9/30/9f/e9309f4639da4063bc7b56dca4c3d631.jpg?w=300" },
    { name: "Mujair Bumbu Kuning", desc: "Isi 7 ekor, ukuran pas dengan rasa otentik.", price: 6000, img: "https://i.pinimg.com/736x/23/f2/c7/23f2c74b4132300427d8058bc25e5eec.jpg?w=300" }
  ];

  // Digandakan agar animasi infinity scroll tidak terputus
  const displayProducts = [...products, ...products, ...products, ...products];

  return (
    <section id="produk" className="py-20 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pilihan Produk Spesial</h2>
        <p className="text-gray-400">Siap goreng kapan saja, rasa bintang lima harga kaki lima.</p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee whitespace-nowrap gap-6 px-4">
          {displayProducts.map((p, index) => (
            <div key={index} className="w-72 bg-white rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
              <img src={p.img} alt={p.name} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 truncate">{p.name}</h3>
                <p className="text-gray-600 text-sm mt-1 whitespace-normal h-10">{p.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-brand-dark font-bold text-lg">Rp {p.price.toLocaleString('id-ID')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
