!function(e){var n={};function t(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(a,i,function(n){return e[n]}.bind(null,i));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);const a=document.createElement("header");a.innerHTML='<div class="logo">Mamma mia!</div>';var i=a;const o=document.createElement("main"),r=document.createElement("figure"),l=document.createElement("section");r.innerHTML='<img src="./img/ristorante-ambrosia.jpg" alt="Restaurante Ambrosia">',l.innerHTML="\n  <h1>DIVINA CUCINA</h1>\n  <p>Nell’antica Roma l’ambrosia era il nettare degli dèi, per questo l’abbiamo scelto come nome del Ristorante Ambrosia dell’Hotel Artemide di Roma.</p>\n  <p>Perché non c’è niente di più divino delle pietanze che prepariamo ogni giorno per i nostri ospiti. Con amore, con passione e con dedizione assoluta.</p>\n  <p>Divina è la pasta fresca della brigata guidata dallo chef Massimo Gonnella, che nei suoi ravioli, negli gnocchi e nelle fettuccine mette tutta l’arte gastronomica ereditata dalla famiglia.</p>\n  <p>Come assolutamente divino è affondare la forchetta nel velluto del suo delizioso tortino al cioccolato, mentre tutta Roma si sdraia ai tuoi piedi da questa terrazza panoramica che domina la Capitale.</p>\n",o.classList.add("two-cols"),o.appendChild(r),o.appendChild(l);var c=o;const s=document.createElement("main");s.innerHTML='\n  <h1 class="text-center">What a great menu!!! mmmmmm</h1>\n  <h3>First dishes:</h3>\n  <ul>\n    <li>Borsch</li>\n    <li>Minestrone</li>\n    <li>Chief soup</li>\n  </ul>\n  <h3>Beverages:</h3>\n  <ul>\n    <li>Bloody Marry</li>\n    <li>Djinn</li>\n    <li>Ice tea</li>\n  </ul>\n  <h3>Awesome desserts:</h3>\n  <ul>\n    <li>Cheese cake</li>\n    <li>Strawberry pancakes</li>\n    <li>Donuts</li>\n  </ul>\n',s.style.padding="0 25px";var d=s;const u=document.createElement("main");u.innerHTML='\n  <h1 class="text-center">Contact us:</h1>\n  <p>We are located near the corner of Corners street, 29, New City</p>\n  <p>Phone number: 1234-567-890</p>\n',u.style.padding="0 25px";var m=u;const p=document.createElement("footer");p.innerHTML='\n  <ul class="menu">\n    <li>\n      <a href="#home" class="active">Home</a>\n    </li>\n    <li>\n      <a href="#menu">Menu</a>\n    </li>\n    <li>\n      <a href="#contact">Contact</a>\n    </li>\n  </ul>\n';var f=p;const h={home:c,menu:d,contact:m},v=document.getElementById("content"),g=document.createElement("div");function b(e){e.preventDefault();const n=e.target,t=n.hash.split("#")[1];!function(e){e.parentNode.parentNode.querySelector("a.active").classList.remove("active"),e.classList.add("active")}(n),function(e){g.innerHTML="",g.appendChild(h[e])}(t)}v.appendChild(i),v.appendChild(g),v.appendChild(f),g.appendChild(c),document.querySelectorAll(".menu a").forEach(e=>{e.addEventListener("click",b)})}]);