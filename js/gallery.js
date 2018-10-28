toggleModal = () => {
    var selectedItem = document.querySelectorAll(':hover');
    var modalBgr = document.querySelector('.modal-bgr');

    selectedItem[5].classList.toggle('modal-gallery-item');
    modalBgr.classList.toggle('modal-bgr-on');
}

toggleModalBgr = () => {
    var selectedItem = document.querySelector('.modal-gallery-item');
    var modalBgr = document.querySelector('.modal-bgr');
    
    modalBgr.classList.toggle('modal-bgr-on');
    selectedItem.classList.remove('modal-gallery-item')
}