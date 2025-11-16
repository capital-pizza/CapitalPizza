/* =========================================
   SCROLL TO TOP BUTTON
========================================= */
const scrollBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

/* =========================================
   DANE MENU (przepisujemy z twojego HTML)
========================================= */

const menuData = {

    /* ======= PIZZA ======= */
    pizza: {
        title: "PIZZA",
        sizes: ["Mała (25cm)", "Średnia (30cm)", "Familijna (40cm)"],
        items: [
            { nr: 1, name: "Capital", desc: "Sos pomidorowy, ser mozzarella, salami, szynka, pieczarki, kukurydza, oliwki, cebula, oregano", prices: ["37 zł", "52 zł", "76 zł"] },
            { nr: 2, name: "Margherita", desc: "Sos pomidorowy, ser mozzarella, oregano", prices: ["34 zł", "46 zł", "67 zł"] },
            { nr: 3, name: "Chicken", desc: "Sos pomidorowy, ser mozzarella, kurczak, pieczarki, cebula, kukurydza, oregano", prices: ["41 zł", "53 zł", "77 zł"] },
            { nr: 4, name: "Studencka", desc: "Sos pomidorowy, ser mozzarella, pieczarki, papryka, cebula, oliwki, oregano", prices: ["40 zł", "52 zł", "75 zł"] },
            { nr: 5, name: "Pulled Pork", desc: "Sos pomidorowy, ser mozzarella, szarpana wieprzowina, jalapeno, cebula, kukurydza, nachosy, oregano", prices: ["41 zł", "53 zł", "77 zł"] },
            { nr: 6, name: "Tropicana", desc: "Sos pomidorowy, ser mozzarella, szynka, ananas, oregano", prices: ["37 zł", "51 zł", "75 zł"] },
            { nr: 7, name: "Salami", desc: "Sos pomidorowy, ser mozzarella, salami x2, oregano", prices: ["37 zł", "50 zł", "75 zł"] },
            { nr: 8, name: "Pinokio", desc: "Sos pomidorowy, ser mozzarella, szynka, kukurydza, oregano", prices: ["37 zł", "49 zł", "74 zł"] },
            { nr: 9, name: "Capriciosa", desc: "Sos pomidorowy, ser mozzarella, szynka, pieczarki, papryka, oregano", prices: ["37 zł", "49 zł", "74 zł"] },
            { nr: 10, name: "Fantazja", desc: "Sos pomidorowy, ser mozzarella, 5 dowolnych składników, oregano", prices: ["41 zł", "57 zł", "82 zł"] },
            { nr: 11, name: "Diavolo", desc: "Sos pomidorowy, ser mozzarella, salami, cebula, czosnek, jalapeno ostre, oregano", prices: ["39 zł", "52 zł", "75 zł"] },
            { nr: 12, name: "Pietro", desc: "Sos pomidorowy, ser mozzarella, salami, szynka, cebula, jalapeno ostre, oregano", prices: ["40 zł", "53 zł", "76 zł"] },
            { nr: 13, name: "Rybacka", desc: "Sos pomidorowy, ser mozzarella, pieczarki, tuńczyk, cebula, czosnek, oliwki, oregano", prices: ["40 zł", "53 zł", "76 zł"] },
            { nr: 14, name: "Bacon", desc: "Sos pomidorowy, ser mozzarella, bekon, cebula, czosnek, kapary, oregano", prices: ["40 zł", "52 zł", "75 zł"] },
            { nr: 15, name: "Farmerska", desc: "Sos pomidorowy, ser mozzarella, kiełbasa, pieczarki, cebula, czosnek, oregano", prices: ["40 zł", "52 zł", "75 zł"] },
            { nr: 16, name: "Spinako", desc: "Sos pomidorowy, ser mozzarella, szpinak, cebula, czosnek, pieczarki, oregano", prices: ["37 zł", "50 zł", "73 zł"] },
            { nr: 17, name: "Cztery sery", desc: "Sos pomidorowy, mozzarella, pleśniowy, favita, parmezan", prices: ["40 zł", "53 zł", "76 zł"] },
            { nr: 18, name: "Bella", desc: "Sos pomidorowy, ser mozzarella, pieczarki, szpinak, suszone pomidory, kurczak, favita, oregano", prices: ["40 zł", "53 zł", "76 zł"] },
            { nr: 19, name: "Francesco", desc: "Sos biały, ser mozzarella, bekon, suszone pomidory, rukola, oregano", prices: ["40 zł", "52 zł", "76 zł"] },
            { nr: 20, name: "Sweet Chicken", desc: "Sos pomidorowy, ser mozzarella, kurczak, ananas, kukurydza, papryka, oregano", prices: ["41 zł", "55 zł", "77 zł"] },
            { nr: 21, name: "Wiking", desc: "Sos pomidorowy, ser mozzarella, bekon, salami, kukurydza, frytki, podwójny ser mozzarella, oregano", prices: ["50 zł", "66 zł", "91 zł"] },
            { nr: 22, name: "Parma", desc: "Sos pomidorowy, ser mozzarella, szynka parmeńska, parmezan, pomidorki koktajlowe, rukola, oregano", prices: ["47 zł", "60 zł", "86 zł"] }
        ]
    },

    /* ======= DODATKI DO PIZZY ======= */
    dodatki_do_pizzy: {
        title: "Dodatki do pizzy",
        sizes: ["Mała", "Średnia", "Duża"],
        items: [
            {
                name: "Warzywa i dodatki roślinne",
                desc: "* pieczarki, pomidor, cebula, czosnek, kukurydza, ananas, szpinak, papryczki jalapeno ostre, papryka, oliwki czarne, oliwki zielone, suszone pomidory, rukola",
                prices: ["2,00 zł", "3,00 zł", "4,00 zł"]
            },
            {
                name: "Dodatki mięsne",
                desc: "* szynka, kiełbasa, salami, kurczak, bekon, tuńczyk, szarpana wieprzowina",
                prices: ["3,00 zł", "4,00 zł", "5,00 zł"]
            },
            {
                name: "Dodatki serowe i sosy",
                desc: "* ser favita, ser pleśniowy, ser parmezan, zapiekany majonez, sos tabasco",
                prices: ["3,00 zł", "4,00 zł", "5,00 zł"]
            },
            {
                name: "Dodatki premium",
                desc: "* ser mozzarella",
                prices: ["5,00 zł", "6,00 zł", "7,00 zł"]
            }
        ]
    },

    /* ======= ZESTAWY OBIADOWE ======= */
    zestawy: {
        title: "Zestawy obiadowe",
        items: [
            {
                nr: 1,
                name: "Gyros",
                desc: "Kawałki kurczaka, frytki lub ziemniaki, świeże warzywa, sos winegret, sos czosnkowy lub ketchup pikantny",
                prices: ["38 zł"]
            },
            {
                nr: 2,
                name: "Frytki Szefuncia",
                desc: "Frytki z posypką z kurczaka zapiekane serem mozzarella, świeże warzywa, sos",
                prices: ["38 zł"]
            },
            {
                nr: 3,
                name: "Frytki Szefowej",
                desc: "Frytki z kurczaka, salami, bekon, zapiekane serem mozzarella, sos",
                prices: ["38 zł"]
            },
            {
                nr: 4,
                name: "Frytki z posypką mięsną",
                desc: "Frytki z posypką z kurczaka, ketchup pikantny lub sos czosnkowy",
                prices: ["30 zł"]
            }
        ]
    },

    /* ======= BURGERY SZARPANA ======= */
    burgery_wieprz: {
        title: "Burgery z szarpaną wieprzowiną",
        items: [
            { nr: 1, name: "Klasyczny", desc: "Bułka maślana, sos BBQ, sałata, szarpana wieprzowina, cebula, sos firmowy", prices: ["32 zł"] },
            { nr: 2, name: "Z serem", desc: "Bułka maślana, sos BBQ, sałata, szarpana wieprzowina, ser, cebula, sos firmowy", prices: ["34 zł"] },
            { nr: 3, name: "Z bekonem i serem", desc: "Bułka maślana, sos BBQ, sałata, szarpana wieprzowina, ser, bekon, cebula, sos firmowy", prices: ["36 zł"] },
            { nr: 4, name: "Z piklami", desc: "Bułka maślana, sos BBQ, sałata, szarpana wieprzowina, ser, pikle, cebula, sos firmowy", prices: ["33 zł"] },
            { nr: 5, name: "Z jalapeno", desc: "Bułka maślana, sos BBQ, sałata, szarpana wieprzowina, ser, jalapeno, cebula, sos firmowy", prices: ["33 zł"] }
        ]
    },

    /* ======= BURGERY WOŁOWE ======= */
    burgery_wolowina: {
        title: "Burgery z wołowiną",
        sizes: ["1 kotlet", "2 kotlety", "3 kotlety"],
        items: [
            { nr: 1, name: "Klasyczny", desc: "Bułka, sos BBQ, sałata, wołowina, cebula, sos firmowy", prices: ["33 zł", "46 zł", "59 zł"] },
            { nr: 2, name: "Z serem", desc: "Bułka, sos BBQ, sałata, wołowina, ser, cebula, sos firmowy", prices: ["37 zł", "50 zł", "63 zł"] },
            { nr: 3, name: "Z bekonem i serem", desc: "Bułka, sos BBQ, sałata, wołowina, ser, bekon, cebula, sos firmowy", prices: ["38 zł", "51 zł", "64 zł"] },
            { nr: 4, name: "Z piklami", desc: "Bułka, sos BBQ, sałata, wołowina, ser, pikle, cebula, sos firmowy", prices: ["36 zł", "49 zł", "62 zł"] },
            { nr: 5, name: "Z jalapeno", desc: "Bułka, sos BBQ, sałata, wołowina, ser, jalapeno, cebula, sos firmowy", prices: ["36 zł", "49 zł", "62 zł"] }
        ]
    },

    /* ======= SAŁATKI ======= */
    salatki: {
        title: "Sałatki",
        items: [
            { nr: 1, name: "Sałatka grecka", desc: "Pomidor, ogórek, papryka, cebula, favita, oliwki, sałata, winegret", prices: ["30 zł"] },
            { nr: 2, name: "Sałatka CAPITAL", desc: "Kurczak, sałata, kukurydza, ogórek, papryka, pomidor, winegret", prices: ["30 zł"] }
        ]
    },

    /* ======= PIEROGI ======= */
    pierogi: {
        title: "Pierogi",
        sizes: ["Mała (10 szt.)", "Duża (16 szt.)"],
        items: [
            { nr: 1, name: "Pierogi ruskie", desc: "", prices: ["18 zł", "26 zł"] }
        ]
    },

    /* ======= DODATKI ======= */
    dodatki: {
        title: "Dodatki",
        items: [
            { name: "Frytki", prices: ["12 zł"] },
            { name: "Opiekane ziemniaczki", prices: ["14 zł"] },
            { name: "Bułeczka czosnkowa", prices: ["2 zł"] },
            { name: "Opakowanie", prices: ["2 zł"] }
        ]
    },

    /* ======= SOSY I OLIWY ======= */
    sosy: {
        title: "Sosy i oliwa",
        items: [
            { name: "Sos czosnkowy", prices: ["2 zł"] },
            { name: "Ketchup pikantny", prices: ["2 zł"] },
            { name: "Ostry Sos Piri Piri", prices: ["3 zł"] },
            { name: "Zabójczy Sos Szefa", prices: ["4 zł"] },
            { name: "Oliwa 50 ml", prices: ["6 zł"] },
            { name: "Oliwa 80 ml", prices: ["7 zł"] }
        ]
    },

    /* ======= PIWA ======= */
    piwa: {
        title: "Piwa bezalkoholowe",
        items: [
            { name: "Żywiec białe", prices: ["10,50 zł"] },
            { name: "Żywiec jabłko", prices: ["10,50 zł"] },
            { name: "Żywiec lemon", prices: ["10,50 zł"] },
            { name: "Heineken 0%", prices: ["9,50 zł"] }
        ]
    },

    /* ======= NAPOJE ======= */
    napoje: {
        title: "Napoje zimne",
        sizes: ["200 ml", "500 ml", "1 l"],
        items: [
            { name: "Sok pomarańczowy", prices: ["7 zł", "-", "12,50 zł"] },
            { name: "Cisowianka", prices: ["6,50 zł"] },
            { name: "Pepsi", prices: ["7 zł", "8,50 zł", "12,50 zł"] },
            { name: "Lipton Ice Tea", prices: ["-", "8,50 zł", "-"] }
        ]
    }
};

/* =========================================
   RENDEROWANIE WSZYSTKICH SEKCJI
========================================= */

function renderSection(id, data) {

    const container = document.getElementById(id);

    let html = `
        <h2 class="section-title">${data.title}</h2>
    `;

    // Rozmiary
    if (data.sizes) {
        html += `<div class="sizes-row">`;
        data.sizes.forEach(s => html += `<div>${s}</div>`);
        html += `</div>`;
    }

    // Items
    html += `<div class="menu-items">`;

    data.items.forEach(item => {
        const nr = item.nr ? `${item.nr}. ` : "";
        const desc = item.desc ? `<div class="item-desc">${item.desc}</div>` : "";

        // Liczba cen → dobieramy klasę
        let priceClass = "";
        if (item.prices.length === 1) priceClass = "one-price";
        if (item.prices.length === 2) priceClass = "two-prices";
        if (id === "burgery-wieprz") priceClass = "one-price"; // wymuszamy 1 cenę

        html += `
            <div class="menu-item ${priceClass}">
                <div class="item-text">
                    <div class="item-title">${nr}${item.name}</div>
                    ${desc}
                </div>
                <div class="item-prices">
                    ${item.prices.map(p => `<div class="price-box">${p}</div>`).join("")}
                </div>
            </div>
        `;
    });

    html += `</div>`;

    container.innerHTML = html;
}

/* =========================================
   ŁADOWANIE WSZYSTKIEGO MENU
========================================= */
document.addEventListener("DOMContentLoaded", () => {
    renderSection("pizza", menuData.pizza);
    renderSection("dodatki-pizza", menuData.dodatki_do_pizzy);
    renderSection("zestawy-obiadowe", menuData.zestawy);
    renderSection("burgery-wieprz", menuData.burgery_wieprz);
    renderSection("burgery-wolowina", menuData.burgery_wolowina);
    renderSection("salatki", menuData.salatki);
    renderSection("pierogi", menuData.pierogi);
    renderSection("dodatki", menuData.dodatki);
    renderSection("sosy", menuData.sosy);
    renderSection("piwa", menuData.piwa);
    renderSection("napoje", menuData.napoje);
});
