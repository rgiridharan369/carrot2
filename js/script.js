/* header menu starts */

const animateOpenNav = () => {
    tl.to(".nav-container", 0.2, {
        autoAlpha: 1,
        delay: 0.1,
    });
    tl.to(
        ".site-logo",
        0.2,
        {
            color: "#fff",
        },
        "-=0.1"
    );
};

const tl = gsap.timeline({ paused: true });

const openNav = () => {
    animateOpenNav();
    const navBtn = document.getElementById("menu-toggle-btn");
    navBtn.onclick = function (e) {
        navBtn.classList.toggle("active");
        tl.reversed(!tl.reversed());
    };
};

openNav();

tl.from(".flex>div", 0.4, {
    opacity: 0,
    y: 10,
    stagger: {
        amount: 0.04,
    },
});

tl.to(
    ".nav-links >a",
    0.8,
    {
        top: 0,
        ease: "power2.inOut",
        stagger: {
            amount: 0.1,
        },
    },
    "-=0.4"
);

tl.from(
    ".nav-footer",
    0.3,
    {
        opacity: 0,
    },
    "-=0.5"
).reverse();
/* header menu ends */


/**Slider starts */

jQuery(document).ready(function () {
    jQuery('.carrotslider').slick({
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 5000,
        fade: true,
        cssEase: 'ease-in-out',
        touchThreshold: 100
    })
});
/**Slider ends */

/* Show reels thumnails loop from video */
const video = document.getElementById("reelvideo");

video.addEventListener("timeupdate", function () {
    if (video.currentTime >= 7) {// Play only the first 7 seconds of the video
        video.currentTime = 1;
    }
});


/**popup video play button */
let btn = document.querySelector('.play_btn');
let clip = document.querySelector('.clip');
let close = document.querySelector('.close');
let relvideo = document.querySelector('.clip video');
btn.onclick = function () {
    btn.classList.add('active');
    clip.classList.add('active');
    relvideo.play();
}
close.onclick = function () {
    btn.classList.remove('active');
    clip.classList.remove('active');
    relvideo.pause();
}


// team-member-section :: Starts

// team-member-section :: Ends

// Event videos:: starts
jQuery(document).ready(function () {
    jQuery('.eventvideo').slick({
        infinite: true,
        autoplay: false,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    })
});

// Event videos ends


//Patrons

jQuery(document).ready(function () {
    jQuery('.patron_carousel').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        dots: false,
        speed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            }
        ]
    })
});


jQuery(document).ready(function () {
    jQuery('.patron_carousel_rtl').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        dots: false,
        speed: 2500,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            }
        ]
    })
});

/****/
