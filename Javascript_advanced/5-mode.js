#!/usr/bin/node

function changeMode(size, weight, transform, backgroundColor, color) {
    return function() {
        document.body.style.fontSize = size + "px";
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = backgroundColor;
        document.body.style.color = color;
    };
}

function main() {
    var spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    var darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    var screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');
    
    var paragraph = document.createElement('p');
    paragraph.textContent = "Welcome Holberton";
    document.body.appendChild(paragraph);

    var spookyBtn = document.createElement('button');
    spookyBtn.textContent = "Spooky";
    spookyBtn.addEventListener('click', spooky);
    document.body.appendChild(spookyBtn);

    var darkModeBtn = document.createElement('button');
    darkModeBtn.textContent = "Dark mode";
    darkModeBtn.addEventListener('click', darkMode);
    document.body.appendChild(darkModeBtn);

    var screamModeBtn = document.createElement('button');
    screamModeBtn.textContent = "Scream mode";
    screamModeBtn.addEventListener('click', screamMode);
    document.body.appendChild(screamModeBtn);
}

main()