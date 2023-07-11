"use strict";
// modal
const openModal = document.querySelector('.container-add__button');
const closeModal = document.querySelector('.modal__btn-cancel');
const modal = document.querySelector('.container-modal__modal');
const fade = document.querySelector('.container-modal__fade');
const modalSaveBtn = document.querySelector('.modal__btn-save');
const modalInput = document.querySelector('#modal__input');
// list
const list = document.querySelector('.container-list');
const itemText = document.querySelector('.container-list__text');
const toggleModal = () => {
    [modal, fade].forEach((el) => { el === null || el === void 0 ? void 0 : el.classList.toggle('hide'); });
};
const modalEvents = [openModal, closeModal, fade].forEach((el) => {
    el === null || el === void 0 ? void 0 : el.addEventListener('click', () => { toggleModal(); });
});
modalSaveBtn === null || modalSaveBtn === void 0 ? void 0 : modalSaveBtn.addEventListener('click', () => createItem());
function createItem() {
    if (modalInput.value === '') {
        alert('Please Fill The Field Sir (☞ﾟヮﾟ)☞');
    }
    else {
        const item = document.createElement('li');
        item === null || item === void 0 ? void 0 : item.classList.add('container-list__item');
        const trashBtn = document.createElement('img');
        trashBtn.classList.add('container-list__icon');
        trashBtn.setAttribute('src', '../public/images/trash.svg');
        const checkboxContainer = document.createElement('div');
        checkboxContainer.classList.add('container-list__checkbox');
        const checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        checkboxContainer.appendChild(checkBox);
        const label = document.createElement('label');
        label.classList.add('container-list__text');
        label.innerHTML = modalInput.value;
        checkboxContainer.appendChild(checkBox);
        checkboxContainer.appendChild(label);
        item.appendChild(trashBtn);
        item.appendChild(checkboxContainer);
        list === null || list === void 0 ? void 0 : list.appendChild(item);
        trashBtn.addEventListener('click', removeItem);
        checkBox.addEventListener('click', () => {
            label.classList.toggle('line');
        });
        if (checkBox.checked) {
            label.classList.add('line');
        }
        modalInput.value = '';
        modal.classList.add('hide');
        fade.classList.add('hide');
    }
}
function removeItem(event) {
    const item = event.target.parentNode;
    item === null || item === void 0 ? void 0 : item.remove();
}
