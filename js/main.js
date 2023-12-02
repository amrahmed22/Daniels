let about= $('#About').offset().top;
let blog= $('#Blog').offset().top;




// $(window).scroll(function () { 
//     let scroll =$(window).scrollTop();

//     if (scroll>=about-1000) {
//         $('nav').css('backgroundColor', 'black');
//         $('#btn').fadeIn(500);
//     }
//     else
//     {
//         $('nav').css('backgroundColor', 'transparent');
//         $('#btn').fadeOut(500);


//     }
// });









$(window).scroll(function()
{
    let wscroll = $(window).scrollTop();

    if(wscroll<=blog-500)
    {
        let counter1 = 0;
let x = setInterval(() => {
    if (counter1==168) {
        clearInterval(x)
    }
    document.getElementById('c1').innerHTML=counter1;
    counter1++;
}, 10);
let counter2 = 0;
let y = setInterval(() => {
    if (counter2==115) {
        clearInterval(y)
    }
    document.getElementById('c2').innerHTML=counter2;
    counter2++;
}, 10);
let counter3 = 0;
let z = setInterval(() => {
    if (counter3==96) {
        clearInterval(z)
    }
    document.getElementById('c3').innerHTML=counter3;
    counter3++;
}, 10);
let counter4 = 0;
let a = setInterval(() => {
    if (counter4==73) {
        clearInterval(a)
    }
    document.getElementById('c4').innerHTML=counter4;
    counter4++;
}, 10);
    }
})

$(document).ready(function () {
    $('#loading .spinner').fadeOut(1000,()=>{
        $('#loading').fadeOut(1000,()=>{
            $('body').css('overflow-y','auto')
        })
    })
});


// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

let menu = document.querySelector('.menu')
let navItem = document.getElementsByClassName('navLink')
let bars = document.querySelector('.open-menu')
let times = document.querySelector('.close-menu')


bars.addEventListener('click',()=> {
    menu.style.right = '0'
})

times.addEventListener('click',()=> {
    menu.style.right = '-100%'
})

for (let i = 0; i < navItem.length; i++) {
    
    navItem[i].addEventListener('click',()=> {
        menu.style.right = '-100%'
    })
}





