import header from './header';
import home from './home';
import menu from './menu';
import footer from './footer';

const content = document.getElementById('content');

content.appendChild(header);
content.appendChild(home);
content.appendChild(footer);

function navLinksClickHandler(e) {
  e.preventDefault();
  console.log(e);
  
}

const navLinks = document.querySelectorAll('.menu a');
navLinks.forEach(link => {
  link.addEventListener('click', navLinksClickHandler);
});
