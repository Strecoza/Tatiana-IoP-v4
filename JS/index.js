const footer = document.querySelector('footer');

const rightsL = document.createElement('p');
rightsL.className = 'rights';
rightsL.innerHTML = "____________________________________________________________"
footer.appendChild(rightsL);

let today = new Date();
let thisYear = today.getFullYear();

const copyright = document.createElement('p');
copyright.className = 'rights';
copyright.innerHTML = "This content is © " + thisYear + " T.Pripisnova personal project. All rights reserved";
footer.appendChild(copyright);




