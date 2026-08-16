const inputNama = document.getElementById("inputNama");
const inputHp = document.getElementById("inputHp");
const inputCs = document.getElementById("inputCs");
const inputTlp = document.getElementById("inputTlp");

const nama = document.getElementById("nama");
const hp = document.getElementById("hp");
const cs = document.getElementById("cs");
const tlp = document.getElementById("tlp");


// NAMA
inputNama.addEventListener("input", function () {
    nama.textContent = this.value || "Nama Contoh";
});


// NOMOR HP
inputHp.addEventListener("input", function () {
    hp.textContent = this.value || "08xxxxxxxxxx";
});


// NOMOR CS DEMO
inputCs.addEventListener("input", function () {
    cs.textContent = this.value || "0812-0000-0000";
});

// NOMOR CS DEMO
inputTlp.addEventListener("input", function () {
    tlp.textContent = this.value || "0812-0000-0000";
});
