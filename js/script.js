
// ------------toggle icon navbar------------
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');

};


// ------------scrol section active------------
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // ------------sticky navbar----------------
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);




    // ------------remove toggle icons and navbar when click navbar link (scroll)----------------

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');


};



// ----------------scroll reveal----------------
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });






// ----------------typed js----------------
var typed = new Typed('.multiple-text', {
    strings: ['Frontend Developers.', 'Video Editors.', 'Real Estate Skip Tracers.', 'Real Estate Leads Genrators.'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});






// -----------form submitting-----------

let url = 'https://script.google.com/macros/s/AKfycbzdsH48R-YuzOGGksvveJahC0cTkdhARxFs5RWpVkzXu3Dh7s9KJWGPwYQL08RsSCUx/exec';
let form = document.querySelector('#form');
form.addEventListener("submit", (e) => {
    e.target.btn.innerHTML = "Submitting...";
    let d = new FormData(form);
    fetch(url, {
        method: "post",
        body: d
    }).then((res) => res.text())
        .then((finalRes) => {
            e.target.btn.innerHTML = "submit"
            document.getElementById("res").innerHTML = finalRes;
            form.reset();
            setTimeout(() => {
                document.getElementById("res").innerHTML = "";
            }, 5000)

        })
    e.preventDefault();
});


