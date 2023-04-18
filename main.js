// $(document).ready(function() { 
//     $(window).scroll(function(){
//         if(this.scrollY > 20) {
//             $('.navbar').addClass("sticky");
//         } else {
//             $('.navbar').removeClass("sticky");
//         }
//     });

//     //toggle menu/navbar script
//     $('.menu-btn').click(function(){
//         $('.navbar .menu').toggleClass("active")
//         $('.menu-btn i').toggleClass("active")
//     });

//     // owl carousel script
//     $('.carousel').owlCarousel({ 
//         margin: 20,
//         loop: true,
//         autoplayTimeOut: 1000,
//         autoplayHoverPause: true, 
//         responsive: {
//             0:{
//                items: 1,
//                nav: false, 
//             },
//             600:{
//                 items: 2,
//                 nav: false, 
//             },
//             1000:{
//                 items: 3 ,
//                 nav: false, 
//             }
//         }
//     })
// });

// const loading = document.getElementById("loading");

// setTimeout(() => {
//     loading.style.opacity = "0"
//     loading.style.zIndex = "1"
// }, 1000);



window.addEventListener("scroll", function () {
    toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backtop.style.bottom = "50px";
    } else {
        backtop.style.bottom = "-50px";
    }
}



$(".owl-carousel-1").owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    margin: 20,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        700: {
            items: 2,
        },
        1000: {
            items: 3,
        },
        1556: {
            items: 4,
        },
    },
});






