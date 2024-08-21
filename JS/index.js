//----SKILLS SECTION----//
let skills = ["JavaScript", "HTML", "CSS", "GitHub"];
let skillsSection = document.querySelector('#skills');
let skillsList = skillsSection.querySelector('ul');
for (let i = 0; i < skills.length; i++){
    let skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}


//----FOOTER----//

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




