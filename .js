let daftarTugas = [];

function tambahTugas () { 
let input = document.getElementById("tugas") ;

if (input.value === "") { 
return;
}

daftarTugas.push({ judul: input.value, selesai: false });
input.value = "";
tampilkan () ;
}
function tandaiSelesai (index) { 
daftarTugas [index] .selesai = !daftarTugas[index].selesai;
tampilkan () ;
}

function hapusTugas (index) {
daftarTugas.splice(index, 1); 
tampilkan ();
}

function tampilkan() {
let html = "";

for (let i = 0; i < daftarTugas.length; i++) { 
let kelas = "";
if (daftarTugas[i].selesai) { 
kelas = "selesai";
}

html += "<Ii class='" + kelas + "'>" + daftarTugas[i].judul +
" <button onclick='tandaiSelesai(" + i + ")'>Selesai</button>" +
" <button onclick='hapusTugas(" + i + ")'>Hapus</button></li>";
}
document.getElementById("daftar") .innerHTML = html;
}
