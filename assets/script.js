const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const modal = document.querySelector('.modal');

for (const card of cards) {
    card.addEventListener('click', function() {
        modalOverlay.querySelector('iframe').src = window.location.href+`/${card.id}`;
        modalOverlay.classList.add('visible');
    });
}

document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('visible');
    modalOverlay.querySelector('iframe').src = '';
    modal.classList.remove('maximize');
});

document.querySelector('.maximize-modal').addEventListener('click', function(){
    if(modal.classList.contains('maximize')){
        modal.classList.remove('maximize');
    }else{
        modal.classList.add('maximize');
    }
});
