const navbar = document.querySelector(".navbar");
const langEI = document.querySelector(".lan");
const about = document.querySelector(".about");
const ery = document.querySelector(".ery");
const ali = document.querySelector(".ali");
const eren = document.querySelector(".eren");
const evren = document.querySelector(".evren");
const mert = document.querySelector(".mert");
const eslem = document.querySelector(".eslem");
const us = document.querySelector(".us");
const link = document.querySelectorAll("#lan");
const lanhome = document.querySelector("#lanhome");
const lanabout = document.querySelector("#lanabout");
const lanuye = document.querySelector("#lanuye");
const lancontact = document.querySelector("#lancontact");



const menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener ("click", function(){
    navbar.classList.toggle("active");
    document.addEventListener("click", function(e) {
        if (
            !e.composedPath().includes(menuBtn) &&
            !e.composedPath().includes(navbar) 
        ){
            navbar.classList.remove("active");
        }
    })
})

link.forEach(Element => {
    Element.addEventListener('click', () => {
        langEI.querySelector('.active').classList.remove('active');
        Element.classList.add('active');


        const attr = Element.getAttribute('language');

        about.textContent = data[attr].about;
        ery.textContent = data[attr].ery;
        ali.textContent = data[attr].ali;
        eren.textContent = data[attr].eren;
        evren.textContent = data[attr].evren;
        mert.textContent = data[attr].mert;
        eslem.textContent = data[attr].eslem;
        us.textContent = data[attr].us;
        lanhome.textContent = data[attr].lanhome;
        lanabout.textContent = data[attr].lanabout;
        lanuye.textContent = data[attr].lanuye;
        lancontact.textContent = data[attr].lancontact;
    });
});

var data = {
    "turkish": {
        "about": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum nulla voluptates quasi, quod eşit güzelleşmeler hariç olmak üzere. Fugit autem dicta eaque facilis! Dolorem aperiam vero odio autem, eaque Laborum Incident Asperiores Aspernatur, Nobis, Animi Architecto! Adipisci aliquam nesciunt orane ipsum exercitationem non placeat, unde suscipit sit, tempore, accusamus obcaecati nobis voluptatem! Tamamen değil, çünkü delectus debitis ipsum et eius, farklı bir voluptas mollitia mı? Ne yazık ki bu bir sonuç değil!",
        "ery": "(Solo Gitarist)",
        "ali": "(Solo Gitarist)",
        "eren": "(Ritim Gitarist)",
        "evren": "(Ritim Gitarist, Solist)",
        "mert": "(Bateri)",
        "eslem": "(Bass Gitarist)",
        "us": "Bizimle İletişime Geçin",
        "lanhome": "Ana Sayfa",
        "lanabout": "Hakkımızda",
        "lanuye": "Müzisyenlerimiz",
        "lancontact": "İletişim"
    },
    "english": {
        "about": "If the customer is very smart, he or she will be able to achieve the desired result. There are no pleasures of things, as it were, but what will happen is a happy distinction. But the words and those are easy to escape! I will open the pain, but with hatred, and those hardships fall more harshly, for us, the architect of the mind! They do not know for some reason that the exercise itself does not please them, so it is taken, at the time, we accuse ourselves of being blinded by pleasure! Is it not because the whole of which you must choose him and his is the distinction of the soul pleasure and softness? It takes methods that do not know the consequences!",
        "ery": "(Solo Guitarist)",
        "ali": "(Solo Guitarist)",
        "eren": "(Ryhtm Guitarist)",
        "evren": "(Ryhtm Guitarist, Vocal)",
        "mert": "(Drummer)",
        "eslem": "(Bass Guitarist)",
        "us": "Contact Us",
        "lanhome": "Home",
        "lanabout": "About Us",
        "lanuye": "Musician",
        "lancontact": "Contact"
    }
};