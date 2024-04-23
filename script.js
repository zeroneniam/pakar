// Data tanaman dan kondisi tumbuh
let tanaman = [
  { nama: "Padi", kondisi: ["Sawah", "Tropis"] },
  { nama: "Jagung", kondisi: ["Sawah", "Tropis"] },
  { nama: "Mentimun", kondisi: ["Pot", "Tropis"] },
  { nama: "Selada", kondisi: ["Pot", "Tropis"] },
  { nama: "Kelapa", kondisi: ["Pantai", "Tropis"] },
  { nama: "Jeruk Bali", kondisi: ["Pantai", "Tropis"] },
  { nama: "Terong", kondisi: ["Sawah", "Subtropis"] },
  { nama: "Tomat", kondisi: ["Sawah", "Subtropis"] },
  { nama: "Lavender", kondisi: ["Pot", "Subtropis"] },
  { nama: "Rosemary", kondisi: ["Pot", "Subtropis"] },
  { nama: "Pohon Bakau", kondisi: ["Pantai", "Subtropis"] },
  { nama: "Pohon Cemara Laut", kondisi: ["Pantai", "Subtropis"] },
  { nama: "Bayam", kondisi: ["Sawah", "Sedang"] },
  { nama: "Kangkung", kondisi: ["Sawah", "Sedang"] },
  { nama: "Mint", kondisi: ["Pot", "Sedang"] },
  { nama: "Peterseli", kondisi: ["Pot", "Sedang"] },
  { nama: "Jeruk Bali", kondisi: ["Pantai", "Sedang"] },
  { nama: "Jambu Air", kondisi: ["Pantai", "Sedang"] },
];

// Fungsi untuk memilih tanaman berdasarkan kondisi
function pilihTanaman() {
  let kondisiTanah = document.getElementById("kondisiTanah").value;
  let kondisiIklim = document.getElementById("kondisiIklim").value;
  let tanamanCocok = [];

  tanaman.forEach(function (item) {
    if (
      item.kondisi.includes(kondisiTanah) &&
      item.kondisi.includes(kondisiIklim)
    ) {
      tanamanCocok.push(item.nama);
    }
  });

  let hasilElement = document.getElementById("hasil");
  if (tanamanCocok.length != 0) {
    hasilElement.textContent = "Tanaman yang cocok: " + tanamanCocok.join(", ");
  } else {
    hasilElement.textContent = "Tanaman tidak ditemukan: ";
  }
}
