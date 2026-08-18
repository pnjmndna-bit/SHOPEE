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

const downloadBtn = document.getElementById("downloadBtn");

if (downloadBtn) {
    downloadBtn.addEventListener("click", async () => {

        const target = document.getElementById("demoPage");

        if (!target) {
            alert("demoPage tidak ditemukan.");
            return;
        }

        try {
            downloadBtn.disabled = true;
            downloadBtn.textContent = "Membuat gambar...";

            const canvas = await html2canvas(target, {
                scale: 3,

                useCORS: true,
                allowTaint: false,

                backgroundColor: null,

                scrollX: 0,
                scrollY: 0,

                width: target.offsetWidth,
                height: target.offsetHeight,

                windowWidth: target.offsetWidth,
                windowHeight: target.offsetHeight
            });

            const link = document.createElement("a");

            link.download = "demo-page.png";
            link.href = canvas.toDataURL("image/png", 1.0);

            document.body.appendChild(link);
            link.click();
            link.remove();

        } catch (error) {
            console.error(error);
            alert("Gagal membuat gambar.");
        }

        downloadBtn.disabled = false;
        downloadBtn.textContent = "Download Gambar";
    });
}
