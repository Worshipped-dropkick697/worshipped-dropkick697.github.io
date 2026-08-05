document.addEventListener("DOMContentLoaded", () => {
    const copyButton = document.getElementById("copyButton");

    if (copyButton) {
        copyButton.addEventListener("click", async () => {
            const iban = "TR35 0001 0002 0777 5037 3350 05";

            try {
                await navigator.clipboard.writeText(iban);
                copyButton.textContent = "✔ IBAN Kopyalandı";
            } catch (e) {
                copyButton.textContent = "Kopyalama başarısız";
            }

            setTimeout(() => {
                copyButton.textContent = "IBAN'I KOPYALA";
            }, 2000);
        });
    }
});
