const mapUrl = 'https://www.google.com/maps/embed?pb=!4v1789051886225!6m8!1m7!1ssKsYJUwin69TQjO6wfULag!2m2!1d-7.764008838605028!2d113.7216261157844!3f206.76016994966906!4f-6.086214316792578!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin';

export default function LocationMap() {
  return (
    <section id="lokasi" className="bg-brand-light py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 font-semibold uppercase tracking-widest text-brand-dark">Lokasi Kami</p>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Temukan kami di Google Maps</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Kunjungi lokasi kami melalui peta di bawah. Hubungi kami terlebih dahulu untuk memastikan ketersediaan pesanan sebelum datang.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-brand/10 bg-white p-2 shadow-xl sm:p-3">
          <iframe
            title="Lokasi IkanKuning.id"
            src={mapUrl}
            className="h-80 w-full rounded-2xl border-0 sm:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
