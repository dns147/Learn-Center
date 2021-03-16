/* Настройка прелоадера */
document.body.onload = function() {
    setTimeout(function() {
        var preloader = document.getElementById('page-preloader');
        if (!preloader.classList.contains('done'))
        {
            preloader.classList.add('done');
        }
    }, 1000);
}

// Настройки слайдера
$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 3,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnFocus: false,
        pauseOnHover: false,  
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 630,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // Настройки спойлера для меню подвала  
    $('.spoiler-arrow').click(function(even) {
        $(this).toggleClass('active');
    });
   
});

// Настройка размеров глобуса
function sizeglobe() {
    size = document.getElementById("size").value;
    elem = document.getElementById("globe");
    elem.style.transform = 'scale(' + size + ')';
};


// Настройки выпадающего меню на тачскринах
let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};

let body=document.querySelector('body');
    if (isMobile.any()){
        body.classList.add('touch');
        let arrow=document.querySelectorAll('.arrow');
        for (i = 0; i < arrow.length; i++){
            let thisLink=arrow[i].previousElementSibling;
            let subMenu=arrow[i].nextElementSibling;
            let thisArrow=arrow[i];

            thisLink.classList.add('parent');
            arrow[i].addEventListener('click', function(){
                subMenu.classList.toggle('open');
                thisArrow.classList.toggle('active');
            });
        }
    } else {
        body.classList.add('mouse');
    };


// Настройки для работы теста    
function btn__next0() {
    document.getElementById('quest0').style.display = "none";
    document.getElementById('quest1').style.display = "block";
}; 

function radio__active1() {
    let radios = document.getElementsByName('answer1');
    let sum = 0;
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            document.getElementById('btn__next1').style.display = "block";
            sum += + radios[i].value;
        }
    }  
};

function answer1() {
    let radios = document.getElementsByName('answer1');
    for (let i = 0; i < radios.length; i++) {
        if (radios[0].checked) {
            document.getElementById('ans11').style.display = "block";
            document.getElementById('answer1_1').style.color = "red";
            document.getElementById('answer1_02').setAttribute("disabled", "disabled");
            document.getElementById('answer1_03').setAttribute("disabled", "disabled");
        }
        if (radios[1].checked) {
            document.getElementById('ans12').style.display = "block";
            document.getElementById('answer1_2').style.color = "green";
            document.getElementById('answer1_01').setAttribute("disabled", "disabled");
            document.getElementById('answer1_03').setAttribute("disabled", "disabled");
        }
        if (radios[2].checked) {
            document.getElementById('ans13').style.display = "block";
            document.getElementById('answer1_3').style.color = "red";
            document.getElementById('answer1_01').setAttribute("disabled", "disabled");
            document.getElementById('answer1_02').setAttribute("disabled", "disabled");
        }
    }  
};

function btn__next1() {
    document.getElementById('quest1').style.display = "none";
    document.getElementById('quest2').style.display = "block";
}; 

function radio__active2() {
    let radios = document.getElementsByName('answer2');
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            document.getElementById('btn__next2').style.display = "block";
        }
    }  
};

function answer2() {
    let radios = document.getElementsByName('answer2');
    for (let i = 0; i < radios.length; i++) {
        if (radios[0].checked) {
            document.getElementById('ans21').style.display = "block";
            document.getElementById('answer2_1').style.color = "green";
            document.getElementById('answer2_02').setAttribute("disabled", "disabled");
            document.getElementById('answer2_03').setAttribute("disabled", "disabled");
        }
        if (radios[1].checked) {
            document.getElementById('ans22').style.display = "block";
            document.getElementById('answer2_2').style.color = "red";
            document.getElementById('answer1_01').setAttribute("disabled", "disabled");
            document.getElementById('answer1_03').setAttribute("disabled", "disabled");
        }
        if (radios[2].checked) {
            document.getElementById('ans23').style.display = "block";
            document.getElementById('answer2_3').style.color = "red";
            document.getElementById('answer1_01').setAttribute("disabled", "disabled");
            document.getElementById('answer1_02').setAttribute("disabled", "disabled");
        }
    }  
};

function btn__next2() {
    document.getElementById('quest2').style.display = "none";
    document.getElementById('quest3').style.display = "block";
};

function radio__active3() {
    let radios = document.getElementsByName('answer3');
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            document.getElementById('btn__next3').style.display = "block";
        }
    }  
};

function answer3() {
    let radios = document.getElementsByName('answer3');
    for (let i = 0; i < radios.length; i++) {
        if (radios[0].checked) {
            document.getElementById('ans31').style.display = "block";
            document.getElementById('answer3_1').style.color = "red";
            document.getElementById('answer3_02').setAttribute("disabled", "disabled");
            document.getElementById('answer3_03').setAttribute("disabled", "disabled");
        }
        if (radios[1].checked) {
            document.getElementById('ans32').style.display = "block";
            document.getElementById('answer3_2').style.color = "red";
            document.getElementById('answer3_01').setAttribute("disabled", "disabled");
            document.getElementById('answer3_03').setAttribute("disabled", "disabled");
        }
        if (radios[2].checked) {
            document.getElementById('ans33').style.display = "block";
            document.getElementById('answer3_3').style.color = "green";
            document.getElementById('answer3_01').setAttribute("disabled", "disabled");
            document.getElementById('answer3_02').setAttribute("disabled", "disabled");
        }
    }  
};

function btn__next3() {
    document.getElementById('quest3').style.display = "none";
    document.getElementById('quest4').style.display = "block";
};

function radio__active4() {
    let radios = document.getElementsByName('answer4');
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            document.getElementById('btn__next4').style.display = "block";
        }
    }
};

function answer4() {
    let radios = document.getElementsByName('answer4');
    for (let i = 0; i < radios.length; i++) {
        if (radios[0].checked) {
            document.getElementById('ans41').style.display = "block";
            document.getElementById('answer4_1').style.color = "green";
            document.getElementById('answer4_02').setAttribute("disabled", "disabled");
            document.getElementById('answer4_03').setAttribute("disabled", "disabled");
        }
        if (radios[1].checked) {
            document.getElementById('ans42').style.display = "block";
            document.getElementById('answer4_2').style.color = "red";
            document.getElementById('answer4_01').setAttribute("disabled", "disabled");
            document.getElementById('answer4_03').setAttribute("disabled", "disabled");
        }
        if (radios[2].checked) {
            document.getElementById('ans43').style.display = "block";
            document.getElementById('answer4_3').style.color = "red";
            document.getElementById('answer4_01').setAttribute("disabled", "disabled");
            document.getElementById('answer4_02').setAttribute("disabled", "disabled");
        }
    }  
};

function btn__next4() {
    document.getElementById('quest4').style.display = "none";
    document.getElementById('quest5').style.display = "block";
};

function radio__active5() {
    let radios = document.getElementsByName('answer5');
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            document.getElementById('btn__next5').style.display = "block";
        }
    }
};

function answer5() {
    let radios = document.getElementsByName('answer5');
    for (let i = 0; i < radios.length; i++) {
        if (radios[0].checked) {
            document.getElementById('ans51').style.display = "block";
            document.getElementById('answer5_1').style.color = "red";
            document.getElementById('answer5_02').setAttribute("disabled", "disabled");
            document.getElementById('answer5_03').setAttribute("disabled", "disabled");
        }
        if (radios[1].checked) {
            document.getElementById('ans52').style.display = "block";
            document.getElementById('answer5_2').style.color = "red";
            document.getElementById('answer5_01').setAttribute("disabled", "disabled");
            document.getElementById('answer5_03').setAttribute("disabled", "disabled");
        }
        if (radios[2].checked) {
            document.getElementById('ans53').style.display = "block";
            document.getElementById('answer5_3').style.color = "green";
            document.getElementById('answer5_01').setAttribute("disabled", "disabled");
            document.getElementById('answer5_02').setAttribute("disabled", "disabled");
        }
    }  
};


function btn__next5() {
    document.getElementById('quest5').style.display = "none";
    document.getElementById('rezult').style.display = "block";

    // Результат теста
    document.getElementById('summa').innerHTML = 
        Number($("input:radio[name='answer1']:checked").val()) + 
        Number($("input:radio[name='answer2']:checked").val()) +
        Number($("input:radio[name='answer3']:checked").val()) +
        Number($("input:radio[name='answer4']:checked").val()) +
        Number($("input:radio[name='answer5']:checked").val()) + ' из 5';
};


