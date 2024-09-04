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

// Lesson-14 MESSAGE FORM //
let messageForm = document.querySelector ('[name = "leave_message"]');
messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const uName = e.target.usersName.value;
    const uEmail = e.target.usersEmail.value;
    const uMessage = e.target.usersMessage.value;

    console.log("Added name: ", uName );
    console.log("Added email: ", uEmail );
    console.log("Added message: ", uMessage );

    //GET New Message Data//
    let messageSection = document.getElementById('messages');
    let messageList = messageSection.querySelector('ul');
    let newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href= "mailto: ${uEmail} "> ${uName}: </a><span> ${uMessage} </span>`


    //Create removeButton //
    let removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';
    removeButton.addEventListener('click', (e) => {
        let entry = removeButton.parentNode;
        entry.remove();
    })

    messageList.appendChild(newMessage);
    newMessage.appendChild(removeButton);
    messageForm.reset();
})

// fetch API request from GitHub 
const myGitHubName = 'Strecoza';
fetch(`https://api.github.com/users/${myGitHubName}/repos`)
    .then((response) => {
        if(!response.ok){
            throw new Error ('Request failed');
        } else {
            return response.text();
            //console.log(response);
        }   
        })
    .then((data) => {
        const repos = JSON.parse(data);
        console.log(repos);
        const projectList = document.getElementById ('Projects').querySelector('ul');
        for( let repo of repos){
            let project = document.createElement('li');
            project.innerText = repo.name;
            projectList.appendChild(project);
        }
    })
    .catch ((error) => {
        console.error('Error', error);
});
