const refs = {
    content: document.getElementById('content'),
    hardLvl: document.getElementById('hardLvl'),
    control: document.getElementsByName('lvl'),
    nextBTN: document.getElementById('nextBTN'),
    area: document.getElementById('area'),
    answerTask: document.getElementsByClassName('answerTask'),
    results: document.getElementById('results'),
};

    refs.nextBTN.addEventListener('click', nextTask)

let all = 0; //всього
let goo = 0; //правильно
let bee = 0; //помилки


for (let i = 2; i < 10; i++) {
    if(i !== 2){
        refs.hardLvl.innerHTML += `<input type = "radio" id = "contactChoice${i}" name = "lvl" value = ${i}>
        <label for="contactChoice${i}">${i}</label>`
    } else {
        refs.hardLvl.innerHTML += `<input type = "radio" id = "contactChoice${i}" name = "lvl" value = ${i} checked>
        <label for="contactChoice${i}">${i}</label>`
    }
}

function wathLvl(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].checked) {
            return arr[i].value
        }
    }
    return false
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function showInp (inp, result){
    if( inp == result){
        refs.content.classList.remove('good', 'bed');
        refs.content.classList.add('good')
        goo +=1
        all +=1;
        let currLvl = wathLvl(refs.control);
        let randomInt = randomInteger(1,10);
        let res = currLvl*randomInt;
        refs.area.innerHTML = "<div class='inputDiv'>"+ currLvl + '*' + randomInt + '='+"<input id='edit' type='text' onchange='showInp(this.value, " + res + ")'/></div>";
        refs.results.innerHTML = `<h3 class="restext"> Усьго: ${all} Правильно: ${goo} Помилився: ${bee}</h3>`;
        let el = document.getElementById('edit');
        el.focus();

    } else {
        refs.content.classList.remove('good', 'bed');
        refs.content.classList.add('bed')
        bee +=1
        all +=1;
        let currLvl = wathLvl(refs.control);
        let randomInt = randomInteger(1,10);
        let res = currLvl*randomInt;
        refs.area.innerHTML = "<div class='inputDiv'>"+ currLvl + '*' + randomInt + '='+"<input id='edit' type='text' onchange='showInp(this.value, " + res + ")'/></div>";
        refs.results.innerHTML = `<h3 class="restext"> Усьго: ${all} Правильно: ${goo} Помилився: ${bee}</h3>`;
        let el = document.getElementById('edit');
        el.focus();
    }
}



function nextTask (e){
    //refs.content.classList.add('base');
    //refs.content.classList.remove('good', 'bed');
    let currLvl = wathLvl(refs.control);
    let randomInt = randomInteger(1,10);
    let res = currLvl*randomInt;
    refs.area.innerHTML = "<div class='inputDiv'>"+ currLvl + '*' + randomInt + '='+"<input id='edit' type='text' onchange='showInp(this.value, " + res + ")'/></div>";
    refs.results.innerHTML = `<h3 class="restext"> Усьго: ${all} Правильно: ${goo} Помилився: ${bee}</h3>`;
    let el = document.getElementById('edit');
    el.focus();
    e.preventDefault();
}