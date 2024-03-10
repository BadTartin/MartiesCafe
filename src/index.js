import homePage from './home.js';
import menuPage from './menu.js';
import aboutPage from './about.js';
import './style.css';

const title = document.createElement('p');
title.innerHTML = 'Martie\'s Café';
title.classList.add('title');
document.getElementById('header').appendChild(title);

homePage();

const tabs = document.querySelectorAll('.tab-button');

const content = document.querySelector('#content');
content.classList.add('fade-in');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        content.classList.remove('fade-in');
        
        setTimeout(() => {
            content.innerHTML = '';

            const tabId = tab.getAttribute('data-tab');

            switch(tabId) {
                case 'home':
                    homePage();
                    break;
                case 'menu':
                    menuPage();
                    break;
                case 'about':
                    aboutPage();
                    break;
            }

            content.classList.add('fade-in');
        }, 400);
    });
});