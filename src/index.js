import header from './header';

import home from './home';
import menu from './menu';
import contact from './contact';

import footer from './footer';

const pages = {
  home,
  menu,
  contact
};

const content = document.getElementById('content');
const mainContentContainer = document.createElement('div');

function navLinksClickHandler(e) {
  e.preventDefault();
  
  const link = e.target;
  const page = link.hash.split('#')[1];
  
  switchNavLinkActiveState(link);
  renderPage(page);
}

function switchNavLinkActiveState(link) {
  const currentActiveLink = link.parentNode.parentNode.querySelector('a.active');
  
  currentActiveLink.classList.remove('active');
  link.classList.add('active');
}

function renderPage(page) {
  mainContentContainer.innerHTML = '';
  mainContentContainer.appendChild(pages[page]);
}


content.appendChild(header);
content.appendChild(mainContentContainer);
content.appendChild(footer);
mainContentContainer.appendChild(home);

const navLinks = document.querySelectorAll('.menu a');
navLinks.forEach(link => {
  link.addEventListener('click', navLinksClickHandler);
});