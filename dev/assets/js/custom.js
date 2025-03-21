const burger = document.querySelector('#btn-burger');
const mobileContainer = document.querySelector('#mobile-container');
const video = document.querySelector('#video');
const play = document.querySelector('#play');
const stop = document.querySelector('#stop');
const pause = document.querySelector('#pause');

function playVideo() {
    video.play();
}

function stopVideo() {
    video.pause(); 
    video.currentTime = 0; 
}

function pauseVideo() {
    video.pause();
}

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
    
}


ModalTrigers.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();

        const datatriger = item.getAttribute('data-triger-modal');
        const modal = document.querySelector('#' + datatriger);


            showModal();
           modal.classList.add('show');        
    });
});

modalClose.forEach(close => {
    close.addEventListener('click', closeModal);
});

