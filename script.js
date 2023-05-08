let btnAdd = document.getElementById('add');
let btnClear = document.getElementById('clear');

let container = document.getElementById('container');
let pets = localStorage.getItem('pets');

if (pets != undefined) {
    pets = JSON.parse(pets);
    pets.forEach((pet, i) => {
        let petElem = document.createElement('div');
        petElem.innerHTML = `
            <br>
            Pet <span class="num">${i + 1}</span>: ${pet.pet}<br>
            Name: ${pet.name}<br>
            Age: <span class="num">${pet.age}</span> Years
        `;
        petElem.setAttribute('class', 'pet');
        container.appendChild(petElem);
    });
}

let count = 1;
btnAdd.addEventListener('click', () => {
    let pet = prompt('Enter pet (ex: dog, cat, etc)');
    let name = prompt('Enter the name of your pet');
    let age = prompt('Enter the age of your pet');

    let petElem = document.createElement('div');
    petElem.innerHTML = `
        <br>
        Pet: ${pet}<br>
        Name: ${name}<br>
        Age: <span class="num">${age}</span> Years
    `;
    petElem.setAttribute('class', 'pet');
    container.appendChild(petElem);

    let newPet = {
        pet: pet,
        name: name,
        age: age
    };

    let pets = localStorage.getItem('pets');
    if (pets == undefined) {
        pets = [];
    } else {
        pets = JSON.parse(pets);
    }
    pets.push(newPet);
    localStorage.setItem('pets', JSON.stringify(pets));

    count++;
});


btnClear.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
    alert('Data cleared!');
});