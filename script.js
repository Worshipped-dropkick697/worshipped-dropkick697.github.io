const iban =
"TR350001000207775037335005";

const copyBtn = document.getElementById("copyBtn");
const copyMessage = document.getElementById("copyMessage");

copyBtn.addEventListener("click", async () => {

    try {

        await navigator.clipboard.writeText(iban);

        copyMessage.style.display = "block";

        copyBtn.innerHTML = "✅ Kopyalandı";

        setTimeout(() => {

            copyMessage.style.display = "none";

            copyBtn.innerHTML = "📋 IBAN'I KOPYALA";

        },2000);

    } catch (err) {

        alert("IBAN kopyalanamadı.");

    }

});
