export default function Testimonials() {
  const reviews = [
    { name: "Budi, 34", text: "Bumbunya berasa banget! Praktis banget buat sarapan.", left: "10%", delay: "0s" },
    { name: "Siti, 42", text: "Anak saya yang susah makan ikan jadi suka wader ini.", left: "30%", delay: "2s" },
    { name: "Andi, 28", text: "Lele-nya fresh, digoreng garing enak banget.", left: "55%", delay: "1s" },
    { name: "Rina, 37", text: "Mujairnya tebal dagingnya, rempahnya nusantara bgt!", left: "75%", delay: "4s" },
    { name: "Arif, 45", text: "Selalu nyetok di kulkas. Istri senang ga repot masak.", left: "20%", delay: "5s" },
    { name: "Lina, 31", text: "Harga murah tapi kualitas resto. Mantap!", left: "65%", delay: "6s" },
  ];

  return (
    <section id="testimoni" className="py-20 bg-brand-light relative h-[600px] overflow-hidden">
      <div className="absolute top-10 left-0 w-full text-center z-10">
        <h2 className="text-3xl font-bold text-brand-dark">Kata Mereka Yang Sudah Beli</h2>
        <p className="text-gray-700 mt-2">Ratusan keluarga Indonesia telah membuktikan kelezatannya.</p>
      </div>
      
      {/* Container Hujan Testimoni */}
      <div className="relative w-full h-full max-w-6xl mx-auto pt-24">
        {reviews.map((r, i) => (
          <div 
            key={i} 
            className="absolute w-64 p-4 bg-white rounded-xl shadow-xl border-b-4 border-brand animate-rain opacity-0"
            style={{ left: r.left, animationDelay: r.delay }}
          >
            <p className="text-gray-600 italic mb-2">"{r.text}"</p>
            <p className="text-brand-dark font-bold text-sm">- {r.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}