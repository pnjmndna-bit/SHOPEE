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

// NOMOR CS
inputCs.addEventListener("input", function () {
    cs.textContent = this.value || "0812-0000-0000";
});

// NOMOR TELEPON
inputTlp.addEventListener("input", function () {
    tlp.textContent = this.value || "0812-0000-0000";
});


// ===============================
// DOWNLOAD DEMO PAGE
// ===============================

const downloadBtn = document.getElementById("downloadBtn");

if (downloadBtn) {

    downloadBtn.addEventListener("click", async function () {

        const target = document.getElementById("demoPage");

        if (!target) {
            alert("demoPage tidak ditemukan.");
            return;
        }

        if (typeof html2canvas === "undefined") {
            alert("html2canvas belum dimuat.");
            return;
        }

        try {

            downloadBtn.disabled = true;
            downloadBtn.textContent = "Membuat gambar...";

            const canvas = await html2canvas(target, {
                scale: 2,
                useCORS: true,
                allowTaint: false,
                backgroundColor: "#ffffff",

                scrollX: 0,
                scrollY: 0,

                width: target.scrollWidth,
                height: target.scrollHeight,

                windowWidth: target.scrollWidth,
                windowHeight: target.scrollHeight
            });

            const link = document.createElement("a");

            link.download = "demo-page.png";
            link.href = canvas.toDataURL("image/png");

            document.body.appendChild(link);
            link.click();
            link.remove();

        } catch (error) {

            console.error(error);
            alert("Gagal membuat gambar.");

        } finally {

            downloadBtn.disabled = false;
            downloadBtn.textContent = "Download Gambar";

        }

    });

}
