const refs = {
    titleLvl: document.getElementById('top'),
    content: document.getElementById('content'),
    hardLvl: document.getElementById('hardLvl'),
    control: document.getElementsByName('lvl'),
    divBtn: document.getElementById('divBtn'),
    nextBTN: document.getElementById('nextBTN'),
    area: document.getElementById('area'),
    answerTask: document.getElementsByClassName('answerTask'),
    results: document.getElementById('results'),

};

    refs.nextBTN.addEventListener('click', nextTask);




let all = 0; //всього
let goo = 0; //правильно
let bee = 0; //помилки


for (let i = 2; i < 10; i++) {
    if(i !== 2) {
        refs.hardLvl.innerHTML += `
        <div class="form_radio_btn">
        <input type = "radio" id = "contactChoice${i}" name = "lvl" value = ${i}>
        <label for="contactChoice${i}">${i}</label>
        </div>`
    } else {
        refs.hardLvl.innerHTML += `
        <div class="form_radio_btn">
        <input type = "radio" id = "contactChoice${i}" name = "lvl" value = ${i} checked>
        <label for="contactChoice${i}">${i}</label>
        </div>`
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
        goo +=1;
        all +=1;
        let currLvl = wathLvl(refs.control);
        let randomInt = randomInteger(1,10);
        let res = currLvl*randomInt;
        refs.area.innerHTML = "<div class='inputDiv'>"+ currLvl + '*' + randomInt + '='+"<input id='edit' type='tel' onchange='showInp(this.value, " + res + ")'/></div>";
        refs.results.innerHTML = `<h3 class="restext"> Усьго: ${all}</h3> <h3 class="restext">Правильно: ${goo}</h3> <h3 class="restext">Помилився: ${bee}</h3>`;
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
        refs.area.innerHTML = "<div class='inputDiv'>"+ currLvl + '*' + randomInt + '='+"<input id='edit' type='tel' onchange='showInp(this.value, " + res + ")'/></div>";
        refs.results.innerHTML = `<h3 class="restext"> Усьго: ${all}</h3> <h3 class="restext">Правильно: ${goo}</h3> <h3 class="restext">Помилився: ${bee}</h3>`;
        let el = document.getElementById('edit');
        el.focus();
    }
}



function nextTask (e){
    if(refs.nextBTN.value === 'Почати'){
        refs.nextBTN.classList.toggle('active');
        refs.titleLvl.classList.toggle('hidden');
        let currLvl = wathLvl(refs.control);
        let randomInt = randomInteger(1,10);
        let res = currLvl*randomInt;
        refs.area.innerHTML = "<div class='inputDiv'>"+ currLvl + '*' + randomInt + '='+"<input id='edit' type='tel' onchange='showInp(this.value, " + res + ")'/></div>";
        refs.results.innerHTML = `<h3 class="restext"> Усьго: ${all}</h3> <h3 class="restext">Правильно: ${goo}</h3> <h3 class="restext">Помилився: ${bee}</h3>`;
        let el = document.getElementById('edit');
        el.focus();
        if(refs.nextBTN.classList.length>0){
            refs.nextBTN.value = 'Спочатку'
        }else {
            refs.nextBTN.value = 'Почати'
        }
        e.preventDefault();
    }else {
        refs.nextBTN.classList.toggle('active')
        refs.titleLvl.classList.toggle('hidden');
        refs.content.classList.remove('good', 'bed');
        if(refs.nextBTN.classList.length>0){
            refs.nextBTN.value = 'Спочатку'
        }else {
            refs.nextBTN.value = 'Почати'
        }
         all = 0;
         goo = 0;
         bee = 0;
         refs.area.innerHTML = '';
         refs.results.innerHTML = '';



    }
    //refs.content.classList.add('base');
    //refs.content.classList.remove('good', 'bed');


}