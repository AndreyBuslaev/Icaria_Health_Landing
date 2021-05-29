$(document).ready(function(){
    $('#owl-carousel1').owlCarousel({
        stagePadding: 100,
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1.5,
                stagePadding: 0
            },
            300:{
                items:1.5,
                stagePadding: 0
            },
            500:{
                items:2.5,
                stagePadding: 0
            },
            600:{
                items:3,
                stagePadding: 0
            },
            700:{
                items:3,
                stagePadding: 50
            },
            800:{
                items:3
            },
            1000:{
                items:4
            },
            1300:{
                items:5
            }
        }
    });
    $('#owl-carousel2').owlCarousel({
        stagePadding: 0,
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:2
            },
            600:{
                items:2
            },
            800:{
                items:3
            },
        }
    })
});

const form = document.querySelector('#form-request');

form.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch('http://localhost', {
      method: 'POST',
      body: new FormData(form),
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    let result = await response.json();

    alert(result.message);
};

const year = document.querySelector('#year')
const date = new Date();
year.innerHTML = `©${date.getFullYear()} Icaria Health. All rights reserved.`;