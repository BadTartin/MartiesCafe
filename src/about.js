const aboutPage = function() {
    
    const contactTitle = document.createElement('p');
    contactTitle.innerHTML = "Contact";

    const contactA = document.createElement('div');
    contactA.classList.add('contactinfo');
    const contactA1 = document.createElement('p');
    contactA1.innerHTML = "Staff:";
    const contactA2 = document.createElement('p');
    contactA2.innerHTML = "*Bark! Bark! Whine!*";
    contactA.appendChild(contactA1);
    contactA.appendChild(contactA2);

    const contactB = document.createElement('div');
    contactB.classList.add('contactinfo');
    const contactB1 = document.createElement('p');
    contactB1.innerHTML = "Boyfriend Staff:";
    const contactB2 = document.createElement('p');
    contactB2.innerHTML = "*Whine! Bark! Whine!*";
    contactB.appendChild(contactB1);
    contactB.appendChild(contactB2);

    const contactBox = document.createElement('div');
    contactBox.appendChild(contactTitle);
    contactBox.appendChild(contactA);
    contactBox.appendChild(contactB);
    contactBox.classList.add('contactbox');
    document.getElementById('content').appendChild(contactBox);
}

export default aboutPage;