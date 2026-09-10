import heroMarinatedFish from '../assets/hero-marinated-fish.jpg';

export default function Hero() {
  return (
    <section id="hero" className="pt-24 pb-12 md:pt-32 md:pb-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Ikan Marinasi Bumbu Kuning <span className="text-brand">Kaya Rempah Nusantara</span>
          </h1>
          <p className="text-lg text-gray-700 md:text-xl">
            Solusi praktis makan enak. Ikan Wader, Lele, dan Mujair segar yang dimarinasi sempurna. Siap goreng, lezat, bergizi, dan disukai keluarga.
          </p>
          <div>
            <a href="#pesan" className="inline-block bg-brand hover:bg-brand-dark text-white font-bold py-3 px-8 rounded-full shadow-lg transition transform hover:-translate-y-1">
              Beli Sekarang
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img 
            src={heroMarinatedFish}
            alt="Ikan berbumbu dengan rempah dan sayuran segar"
            className="aspect-[4/5] w-full max-w-md rounded-2xl border-4 border-white object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
