export default function Features() {
  const features = [
    { title: "Bumbu Meresap", desc: "Dimarinasi lebih dari 12 jam dengan rempah asli pilihan." },
    { title: "100% Praktis", desc: "Tidak perlu repot membersihkan & meracik bumbu, tinggal goreng!" },
    { title: "Tanpa Pengawet", desc: "Aman dikonsumsi setiap hari oleh anak-anak hingga dewasa." }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Kenapa Memilih Kami?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {features.map((f, i) => (
            <div key={i} className="p-6 bg-brand-light rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold text-brand-dark mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}