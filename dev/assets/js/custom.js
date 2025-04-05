const burger = document.querySelector('#btn-burger');
const mobileContainer = document.querySelector('#mobile-container');
const processVideo = document.querySelector('#video');
const play = document.querySelector('#play');
const stop = document.querySelector('#stop');
const pause = document.querySelector('#pause');

const html = document.querySelector('#html');
const css = document.querySelector('#css');
const js = document.querySelector('#js');

const rengeInput = document.querySelector('#volume-range')


function currentHTML() {
    video.currentTime = 180; 
}

function currentCSS() {
    video.currentTime = 60; 
}


function currentJS() {
    video.currentTime = 120; 
}


function playVideo() {
    processVideo.play();
}

function stopVideo() {
    processVideo.pause();  
}

function pauseVideo() {
    processVideo.pause();
}

html.addEventListener('click', ()=> {
    currentHTML()
    video.volume - 0.5;
})

css.addEventListener('click', ()=> {
    currentCSS()
})

js.addEventListener('click', ()=> {
    currentJS()
})

play.addEventListener('click', () => {
    playVideo();
    console.log('play');
});

stop.addEventListener('click', () => {
    stopVideo(); 
    console.log('stop');
});

pause.addEventListener('click', () => {
    pauseVideo(); 
    console.log('pause');
});



burger.addEventListener('click', ()=> {
    burger.classList.toggle('active')
    mobileContainer.classList.toggle('show')
})

/*modal*/

const ModalTrigers = document.querySelectorAll('[data-triger-modal]');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const modalClose = document.querySelectorAll('[data-modal-close]');

function showModal() {
    body.classList.add('overflow-hidden');
    overlay.classList.add('show');
}

function closeModal() {
    const openModal = document.querySelector('.modal.show');
    body.classList.remove('overflow-hidden');
    overlay.classList.remove('show');
    openModal.classList.remove('show');
    stopVideo();    
}


ModalTrigers.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();

        const datatriger = item.getAttribute('data-triger-modal');
        const modal = document.querySelector('#' + datatriger);


           showModal();
           
           
           if(modal.classList.contains('video-process')) {
            modal.classList.add('show'); 
            playVideo()
           } else {
            modal.classList.add('show')
           }
    })
});

modalClose.forEach(close => {
    close.addEventListener('click', closeModal);
});

const x = 4

if (x == 2) {
    console.log('x == 2');
} else if (x == 4) {
    console.log('x == 4');
} else if (x == 6) {
    console.log('x == 6');
} else if (x == 8) {
    console.log('x == 8');
} else {
    console.log('не задовільняє жодних умов');
}

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 48,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },

        1026: {
            slidesPerView: 2,
            spaceBetween: 48,
          },

        1215: {
          slidesPerView: 3,
          spaceBetween: 48,
        },

        1560: {
          slidesPerView: 4,
          spaceBetween: 48,
        }
    }

  });