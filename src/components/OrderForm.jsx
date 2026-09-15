import { useState } from 'react';

export default function OrderForm() {
  const [formData, setFormData] = useState({ name: '', fishType: 'Wader', qty: 1, message: '' });
  
  const prices = { "Wader": 18000, "Lele": 12000, "Mujair": 10000 };
  const totalPrice = prices[formData.fishType] * formData.qty;

  const handleSubmit = (e) => {
    e.preventDefault();
    const phone = "6281331954404"; // Ganti dengan nomor WA Anda
    const text = `Halo, saya ${formData.name}.%0A%0ASaya ingin memesan:%0AProduk: Ikan ${formData.fishType} Bumbu Kuning%0AJumlah: ${formData.qty} pack%0ATotal Harga: Rp ${totalPrice.toLocaleString('id-ID')}%0APesan Tambahan: ${formData.message}%0A%0AMohon info cara pembayarannya. Terima kasih.`;
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${text}`, '_blank');
  };

  return (
    <section id="pesan" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Pesan Sekarang</h2>
            <p className="text-gray-500 mt-2">Isi form di bawah, kami akan melayani Anda melalui WhatsApp.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
              <input type="text" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand focus:ring-brand p-3 border bg-gray-50"
                onChange={(e) => setFormData({...formData, name: e.target.value})} />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Jenis Ikan</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand focus:ring-brand p-3 border bg-gray-50"
                  onChange={(e) => setFormData({...formData, fishType: e.target.value})}>
                  <option value="Wader">Wader 500 g (Rp 13.000)</option>
                  <option value="Lele">Lele 4 ekor (Rp 10.000)</option>
                  <option value="Mujair">Mujair 7 ekor (Rp 6.000)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Jumlah (Pack)</label>
                <input type="number" min="1" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand focus:ring-brand p-3 border bg-gray-50"
                  value={formData.qty} onChange={(e) => setFormData({...formData, qty: parseInt(e.target.value) || 1})} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Pesan Tambahan (Alamat/Catatan)</label>
              <textarea rows="3" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand focus:ring-brand p-3 border bg-gray-50"
                onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
            </div>

            <div className="bg-brand-light p-4 rounded-lg flex justify-between items-center">
              <span className="text-gray-700 font-medium">Total Harga:</span>
              <span className="text-2xl font-bold text-brand-dark">Rp {totalPrice.toLocaleString('id-ID')}</span>
            </div>

            <button type="submit" className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-4 rounded-xl shadow-lg transition text-lg flex justify-center items-center gap-2">
              Kirim Pesanan Via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
