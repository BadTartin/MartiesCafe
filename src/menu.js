// import berriesImage from './noun-berries-2484585.svg';

const menuPage = function() {
    
    //    factory function to make menu items?
    const createMenuItem = function(name, price) {
        return {
            name: name,
            price: price
        };
    };

    const apps = document.createElement('div');
    apps.classList.add('menusection');

    // appetizers
    const apps_left = document.createElement('div');
    const apps_left_img = document.createElement('img');
    apps_left_img.src = 'noun-berries-2484585.svg';
    // apps_left_img.src = berriesImage;
    apps_left_img.width = 50;
    apps_left.appendChild(apps_left_img);
    apps_left.classList.add('menu_item', 'title_left');
    apps.appendChild(apps_left);

    const apps_title = document.createElement('div');
    apps_title.innerHTML = 'Appetizers';
    apps_title.classList.add('menu_item','menu_title');
    apps.appendChild(apps_title);

    const apps_right = document.createElement('div');
    const apps_right_img = document.createElement('img');
    apps_right_img.src = 'noun-berries-2484585.svg';
    apps_right_img.width = 50;
    apps_right.appendChild(apps_right_img);
    apps_right.classList.add('menu_item');
    apps.appendChild(apps_right);

    // Create menu item objects using the factory function
    const blueberries = createMenuItem('Blueberries', '$11');
    const carrots = createMenuItem('Carrots', '$8');
    const cucumber = createMenuItem('Cucumber', '$6');
    const dirt = createMenuItem('Dirt', '$5');
    const twigs = createMenuItem('Twigs', '$8');

    // Create an array of menu item objects
    const appItems = [blueberries, carrots, cucumber, dirt, twigs];

    // Loop through the menu item objects and create the corresponding elements
    appItems.forEach(item => {
        const itemName = document.createElement('p');
        itemName.innerHTML = item.name;
        const itemPrice = document.createElement('p');
        itemPrice.innerHTML = item.price;
        const itemBox = document.createElement('div');
        itemBox.classList.add('menu_item');
        itemBox.appendChild(itemName);
        itemBox.appendChild(itemPrice);
        apps.appendChild(itemBox);
    });

    // mains
    const mains = document.createElement('div');
    mains.classList.add('menusection');
    // // street chicken, bison burgers, kibble

    const mains_left = document.createElement('div');
    const mains_left_img = document.createElement('img');
    mains_left_img.src = 'noun-dog-bowl-3625676.svg';
    mains_left_img.width = 50;
    mains_left.appendChild(mains_left_img);
    mains_left.classList.add('menu_item', 'title_left');
    mains.appendChild(mains_left);

    const mains_title = document.createElement('div');
    mains_title.innerHTML = 'Mains';
    mains_title.classList.add('menu_item','menu_title');
    mains.appendChild(mains_title);

    const mains_right = document.createElement('div');
    const mains_right_img = document.createElement('img');
    mains_right_img.src = 'noun-dog-bowl-3625676.svg';
    mains_right_img.width = 50;
    mains_right.appendChild(mains_right_img);
    mains_right.classList.add('menu_item');
    mains.appendChild(mains_right);

    const streetchicken = createMenuItem('Street Chicken', '$23');
    const bisonburger = createMenuItem('Bison Burger', '$29');
    const kibble = createMenuItem('Kibble', '$22');

    // Create an array of menu item objects
    const mainsItems = [streetchicken, bisonburger, kibble];

    // Loop through the menu item objects and create the corresponding elements
    mainsItems.forEach(item => {
        const itemName = document.createElement('p');
        itemName.innerHTML = item.name;
        const itemPrice = document.createElement('p');
        itemPrice.innerHTML = item.price;
        const itemBox = document.createElement('div');
        itemBox.classList.add('menu_item');
        itemBox.appendChild(itemName);
        itemBox.appendChild(itemPrice);
        mains.appendChild(itemBox);
    });



    const drinks = document.createElement('div');
    drinks.classList.add('menusection');
    // // street water, park water, bowl water

    const drinks_left = document.createElement('div');
    const drinks_left_img = document.createElement('img');
    drinks_left_img.src = 'noun-dog-bowl-3625676.svg';
    drinks_left_img.width = 50;
    drinks_left.appendChild(drinks_left_img);
    drinks_left.classList.add('menu_item', 'title_left');
    drinks.appendChild(drinks_left);

    const drinks_title = document.createElement('div');
    drinks_title.innerHTML = 'Drinks';
    drinks_title.classList.add('menu_item','menu_title');
    drinks.appendChild(drinks_title);

    const drinks_right = document.createElement('div');
    const drinks_right_img = document.createElement('img');
    drinks_right_img.src = 'noun-dog-bowl-3625676.svg';
    drinks_right_img.width = 50;
    drinks_right.appendChild(drinks_right_img);
    drinks_right.classList.add('menu_item');
    drinks.appendChild(drinks_right);

    

    const dogbowlwater = createMenuItem('Dog Bowl Water', '$9');
    const parkpuddle = createMenuItem('Park Puddle', '$11');
    const sidewalkgravy = createMenuItem('Street Gravy', '$12');


    const drinksItems = [dogbowlwater, parkpuddle, sidewalkgravy];

    drinksItems.forEach(item => {
        const itemName = document.createElement('p');
        itemName.innerHTML = item.name;
        const itemPrice = document.createElement('p');
        itemPrice.innerHTML = item.price;
        const itemBox = document.createElement('div');
        itemBox.classList.add('menu_item');
        itemBox.appendChild(itemName);
        itemBox.appendChild(itemPrice);
        drinks.appendChild(itemBox);
    });

    const menunav = document.createElement('div');
    menunav.classList.add('menu-navigation');

    const apps_img = document.createElement('img');
    apps_img.src = 'noun-berries-2484585.svg';
    apps_img.width = 50;

    const apps_nav = document.createElement('div');
    apps_nav.appendChild(apps_img);
    menunav.appendChild(apps_nav);
    
    const mains_img = document.createElement('img');
    mains_img.src = 'noun-dog-bowl-3625676.svg';
    mains_img.width = 50;

    const mains_nav = document.createElement('div');
    mains_nav.appendChild(mains_img);
    menunav.appendChild(mains_nav);

    
    const drinks_img = document.createElement('img');
    drinks_img.src = 'noun-dog-bowl-1110108.svg';
    drinks_img.width = 50;

    const drinks_nav = document.createElement('div');
    drinks_nav.appendChild(drinks_img);
    menunav.appendChild(drinks_nav);

    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.appendChild(menunav);

    document.getElementById('content').appendChild(menu);

    // Add menu sections to an array
    const sections = [apps, mains, drinks];

    // Add click event listeners to the navigation items
    apps_nav.addEventListener('click', () => showSection(0));
    mains_nav.addEventListener('click', () => showSection(1));
    drinks_nav.addEventListener('click', () => showSection(2));

    function showSection(index) {
        const activeSection = menu.querySelector('.active');

        if (activeSection && activeSection === sections[index]) {
            return; // Do nothing if the active section is clicked
        }

        if (activeSection) {
            activeSection.classList.remove('active');
            setTimeout(() => {
                menu.removeChild(activeSection);
            }, 500);
        }
    
        const newSection = sections[index];
        menu.appendChild(newSection);
        setTimeout(() => {
            newSection.classList.add('active');
        }, 0);
    }
    // Show the first section by default
    showSection(0);

};


export default menuPage;