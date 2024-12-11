// PHONE BLOCK //

const phoneInput = document.querySelector('#phone_input');
const phoneButton = document.querySelector('#phone_button');
const phoneResult = document.querySelector('#phone_result');

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick =  () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = "Ok"
        phoneResult.style.color = "green"
    } else {
        phoneResult.innerHTML = "Invalid phone number"
        phoneResult.style.color = "red"
    }
}

// TAB SLIDER

const tabContentBlocks = document.querySelectorAll('.tab_content_block');
const tabs = document.querySelectorAll('.tab_content_item');
const tabsParent = document.querySelector('.tab_content_items');

let currentTab = 0;
let tabSwitchInterval;

const hideTabContent = () => {
    tabContentBlocks.forEach((block) => (block.style.display = 'none'));
    tabs.forEach((tab) => tab.classList.remove('tab_content_item_active'));
};

const showTabContent = (id = 0) => {
    tabContentBlocks[id].style.display = 'block';
    tabs[id].classList.add('tab_content_item_active');
};

const switchTab = () => {
    currentTab = (currentTab + 1) % tabs.length; // Переключаем индекс
    hideTabContent();
    showTabContent(currentTab);
};

const startAutoSwitch = () => {
    tabSwitchInterval = setInterval(switchTab, 3000);
};

const stopAutoSwitch = () => {
    clearInterval(tabSwitchInterval);
};

hideTabContent();
showTabContent();
startAutoSwitch(); // Запускаем автоматическую смену

tabsParent.addEventListener('click', (event) => {
    const clickedTab = event.target.closest('.tab_content_item');
    if (clickedTab) {
        const clickedTabIndex = Array.from(tabs).indexOf(clickedTab);
        if (clickedTabIndex !== -1) {
            stopAutoSwitch();
            hideTabContent();
            currentTab = clickedTabIndex;
            showTabContent(currentTab);
            setTimeout(startAutoSwitch, 3000);
        }
    }
});

