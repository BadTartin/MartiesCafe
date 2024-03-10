const homePage = function() {
    
    const welcomeA = document.createElement('p');
    welcomeA.innerHTML = "Welcome to Martie's Café!";

    const welcomeB = document.createElement('p');
    welcomeB.innerHTML = "The café where you can buy Martie treats to eat";

    const welcomeBox = document.createElement('div');
    welcomeBox.appendChild(welcomeA);
    welcomeBox.appendChild(welcomeB);
    welcomeBox.classList.add('welcomebox');
    document.getElementById('content').appendChild(welcomeBox);
}

export default homePage;