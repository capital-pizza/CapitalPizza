document.addEventListener("DOMContentLoaded", () => {

    /* ================================
       STICKY HEADER DLA KAŻDEJ KATEGORII
       ================================ */
    const stickyHeaders = document.querySelectorAll(".sticky-header");

    const activateSticky = () => {
        stickyHeaders.forEach(header => {
            const rect = header.getBoundingClientRect();
            if (rect.top <= 0) {
                header.classList.add("active");
            } else {
                header.classList.remove("active");
            }
        });
    };

    window.addEventListener("scroll", activateSticky);
    activateSticky();

    /* ================================
       DYNAMICZNE ROZPOZNAWANIE TYPU KATEGORII
       ================================ */

    document.querySelectorAll(".price-grid").forEach(grid => {
        const count = grid.querySelectorAll(".price-box").length;

        if (count === 1) {
            grid.classList.add("single");       // 1 cena = pełna szerokość (3 pola)
        } 
        else if (count === 2) {
            grid.classList.add("double");       // 2 ceny = symetryczny układ 1 --- 3
        } 
        else if (count === 3) {
            grid.classList.add("triple");       // 3 ceny = jak pizza
        }
    });

    /* ================================
       PRZYCISK SCROLL TO TOP (↑)
       ================================ */
    const scrollBtn = document.getElementById("scrollTopBtn");

    const handleScrollBtn = () => {
        if (window.scrollY > 400) {
            scrollBtn.style.opacity = "1";
            scrollBtn.style.pointerEvents = "auto";
        } else {
            scrollBtn.style.opacity = "0";
            scrollBtn.style.pointerEvents = "none";
        }
    };

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", handleScrollBtn);
    handleScrollBtn();
});
