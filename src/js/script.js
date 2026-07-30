// const header = document.querySelector('header')
// window.onscroll = () => {
//     if (window.scrollY > 200) {
//         header.classList.add('activeHeader')
//     } else {
//         header.classList.remove('activeHeader')
//     }

// }

const openNav = document.querySelector('#openNav')
const closeNav = document.querySelector('#closeNav')
const popupNav = document.querySelector('#popupNav')

openNav.addEventListener('click', () => {
    popupNav.classList.remove('!hidden')
    document.body.classList.add('!overflow-hidden')
})

closeNav.addEventListener('click', () => {
    popupNav.classList.add('!hidden')
    document.body.classList.remove('!overflow-hidden')
})






// Load More

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll("#rute-travel .rute");
    const btn = document.getElementById("loadMoreBtn");

    if (btn) {

        let visible = 56; // tampil awal
        const step = 56;  // tambahan tiap klik

        // sembunyikan semua dulu
        items.forEach((item, index) => {
            if (index >= visible) {
                item.style.display = "none";
            }
        });

        btn.addEventListener("click", () => {
            let total = visible + step;

            items.forEach((item, index) => {
                if (index < total) {
                    item.style.display = "block";
                }
            });

            visible = total;

            // sembunyikan tombol kalau semua sudah tampil
            if (visible >= items.length) {
                btn.style.display = "none";
            }
        });
    }
});