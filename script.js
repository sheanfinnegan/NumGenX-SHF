$(document).ready(function () {
    $(window).on('load', function () {
        setTimeout(function () {
            $('.preloader').fadeOut(700)
        }, 800)
    });

    $('.balik').mouseenter(function () {
        $(this).addClass('hover')
    });
    $('.balik').mouseleave(function () {
        $(this).removeClass('hover')
    })

    const angka = document.getElementsByClassName('pass');

    const butPertama = document.getElementsByTagName('button');

    butPertama[0].onclick = function () {
        const soundEpek = new Audio();
        soundEpek.src = "SoundEffect/Ding.mp3";
        soundEpek.play();
        for (let i = 0; i < angka.length; i++) {
            angka[i].textContent = Math.floor(Math.random() * 10);
        }
    }

    butPertama[1].addEventListener('click', function () {
        const soundError = new Audio();
        soundError.src = "SoundEffect/Error.mp3";
        soundError.play();
        for (let j = 0; j < angka.length; j++) {
            angka[j].textContent = 0;
        }
    })
})