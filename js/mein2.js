const refs = {
    startBTN: document.getElementById('startBTN'),
    area: document.getElementById('area'),
    checkBTN: document.getElementById('checkBTN'),
    results: document.getElementById('results'),
    taskArea: document.getElementById('task'),
    control: document.getElementsByName('typeLVL'),

};

refs.startBTN.addEventListener('click', startTrain);

function checkAnswer (){
    let box = document.querySelectorAll('.box')
    let count = 0
    box.forEach((el) => {
            if(el.classList.contains('check')){
                count +=1
            }
    })
    let x = document.querySelector('#task').textContent
    if(count == x){
        refs.area.innerHTML = "<div>Молодець</div>"
        all+=1
        goo+=1
        setTimeout(() => startTrain(),500)

    }else {
        refs.area.innerHTML = "<div>Майже</div>"
        all+=1
        bee+=1
        setTimeout(() => startTrain(),500)
    }

}

function colorChange(e){
    const isEl = e.target.classList.contains('box');
    if (!isEl) {
        return;
    }
    const paintDot = e.target;
    paintDot.classList.toggle('check')
}

function startTrain(){
    if(refs.startBTN.value === 'Почати'){
        refs.area.innerHTML = ''
        if(whatLevel(refs.control) == 3){
            let random = randomInteger(1,3)
            refs.taskArea.innerHTML="<div>"+random+"</div>"
            refs.area.innerHTML = "<div class='box'></div> <div class='box'></div> <div class='box'></div>"
            refs.checkBTN.innerHTML= "<button class='checkBTN'>Перевірити</button>"
            refs.results.innerHTML = `<h3 class="restext"> Усьго: ${all}</h3> <h3 class="restext">Правильно: ${goo}</h3> <h3 class="restext">Помилився: ${bee}</h3>`;

        } else if (whatLevel(refs.control) == 5){
            let random = randomInteger(1,5)
            refs.taskArea.innerHTML="<div>"+random+"</div>"
            refs.area.innerHTML = "<div class='box'></div> <div class='box'></div> <div class='box'></div> <div class='box'></div> <div class='box'></div>"
            refs.checkBTN.innerHTML= "<button class='checkBTN'>Перевірити</button>"
            refs.results.innerHTML = `<h3 class="restext"> Усьго: ${all}</h3> <h3 class="restext">Правильно: ${goo}</h3> <h3 class="restext">Помилився: ${bee}</h3>`;
        } else if (whatLevel(refs.control) == 10){
            let random = randomInteger(1,10)
            refs.taskArea.innerHTML="<div>"+random+"</div>"
            for (let i = 0; i <= whatLevel(refs.control)-1; i++){
                refs.area.innerHTML += "<div class='box'></div>"
            }
            refs.checkBTN.innerHTML= "<button class='checkBTN'>Перевірити</button>"
            refs.results.innerHTML = `<h3 class="restext"> Усьго: ${all}</h3> <h3 class="restext">Правильно: ${goo}</h3> <h3 class="restext">Помилився: ${bee}</h3>`;
        }
    }
        let checkBTN = document.querySelector('.checkBTN')
        checkBTN.addEventListener('click', checkAnswer)
        let box = document.querySelectorAll('.box')
        box.forEach(el => el.addEventListener('click', colorChange))
    }


let all = 0; //всього
let goo = 0; //правильно
let bee = 0; //помилки
let randomPrev = 0; //предидущее случайное число


function whatLevel(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].checked) {
            return arr[i].value
        }
    }
    return false
}

function randomInteger(min, max, randomPrev) {
    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    return rand !== randomPrev? rand: randomInteger(min, max, randomPrev);
}







