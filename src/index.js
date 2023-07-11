// modal
var openModal = document.querySelector('.container-add__button');
var closeModal = document.querySelector('.modal__btn-cancel');
var modal = document.querySelector('.container-modal__modal');
var fade = document.querySelector('.container-modal__fade');
var modalSaveBtn = document.querySelector('.modal__btn-save');
var modalInput = document.querySelector('#modal__input');
// list
var list = document.querySelector('.container-list');
var itemText = document.querySelector('.container-list__text');
var toggleModal = function () {
    [modal, fade].forEach(function (el) { el === null || el === void 0 ? void 0 : el.classList.toggle('hide'); });
};
var modalEvents = [openModal, closeModal, fade].forEach(function (el) {
    el === null || el === void 0 ? void 0 : el.addEventListener('click', function () { toggleModal(); });
});
modalSaveBtn === null || modalSaveBtn === void 0 ? void 0 : modalSaveBtn.addEventListener('click', function () { return createItem(); });
function createItem() {
    if (modalInput.value === '') {
        alert('Please Fill The Field Sir (☞ﾟヮﾟ)☞');
    }
    else {
        var item = document.createElement('li');
        item === null || item === void 0 ? void 0 : item.classList.add('container-list__item');
        var trashBtn = document.createElement('img');
        trashBtn.classList.add('container-list__icon');
        trashBtn.setAttribute('src', '../public/images/trash.svg');
        var checkboxContainer = document.createElement('div');
        checkboxContainer.classList.add('container-list__checkbox');
        var checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        checkboxContainer.appendChild(checkBox);
        var label_1 = document.createElement('label');
        label_1.classList.add('container-list__text');
        label_1.innerHTML = modalInput.value;
        checkboxContainer.appendChild(checkBox);
        checkboxContainer.appendChild(label_1);
        item.appendChild(trashBtn);
        item.appendChild(checkboxContainer);
        list === null || list === void 0 ? void 0 : list.appendChild(item);
        trashBtn.addEventListener('click', removeItem);
        checkBox.addEventListener('click', function () {
            label_1.classList.toggle('line');
        });
        if (checkBox.checked) {
            label_1.classList.add('line');
        }
        modalInput.value = '';
        modal.classList.add('hide');
        fade.classList.add('hide');
    }
}
function removeItem(event) {
    var item = event.target.parentNode;
    item === null || item === void 0 ? void 0 : item.remove();
}
