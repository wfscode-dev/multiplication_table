const refs = {
    titleLvl: document.getElementById('top'),
    content: document.getElementById('content'),
    typelVL: document.getElementById('typeLvl'),
    hardLvl: document.getElementById('hardLvl'),
    control: document.getElementsByName('lvl'),
    typecontrol: document.getElementsByName('typeLVL'),
    divBtn: document.getElementById('divBtn'),
    divTwoBtn: document.getElementById('divTwoBtn'),

    area: document.getElementById('area'),
    answerTask: document.getElementsByClassName('answerTask'),
    results: document.getElementById('results'),

    slider: document.getElementById('slider'),
    sliderItems: document.getElementById('slider-items'),
    sliderBTNDiv: document.getElementById('sliderBtnDiv'),
    nextBTN: document.getElementById('nextBTN'),
    repBTN: document.getElementById('repBTN'),

};

    refs.nextBTN.addEventListener('click', nextTask);
    refs.repBTN.addEventListener('click', showTable)

for (let i = 2; i < 10; i++) {
    refs.sliderItems.innerHTML += `
     <div class="slider-item" >
                <div class="table-helf">
                    <p>${i}·1=${i}</p>
                    <p>${i}·2=${i * 2}</p>
                    <p>${i}·3=${i * 3}</p>
                    <p>${i}·4=${i * 4}</p>
                    <p>${i}·5=${i * 5}</p>
                </div>
                <div class="table-helf">
                    <p>${i}·6=${i * 6}</p>
                    <p>${i}·7=${i * 7}</p>
                    <p>${i}·8=${i * 8}</p>
                    <p>${i}·9=${i * 9}</p>
                    <p>${i}·10=${i * 10}</p>
                </div>
            </div>
    `
}

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

function showInp (inp, result){

    if( inp == result){
        goo +=1;
    } else {
        bee +=1
    }
    all +=1;
    let currLvl = whatLevel(refs.control);
    let currType = whatLevel(refs.typecontrol);
    let randomInt = randomInteger(1,10, randomPrev);
    randomPrev = randomInt
    if (currType === 'multiplication'){
        let res = currLvl*randomInt;
        refs.area.innerHTML = "<div class='inputDiv'>"+ currLvl + '·' + randomInt + '='+"<input id='edit' type='tel' onchange='showInp(this.value, " + res + ")'/></div>";
        refs.results.innerHTML = `<h3 class="restext"> Усьго: ${all}</h3> <h3 class="restext">Правильно: ${goo}</h3> <h3 class="restext">Помилився: ${bee}</h3>`;
    }else {

        let res = randomInt*currLvl/currLvl;
        refs.area.innerHTML = "<div class='inputDiv'>"+ currLvl*randomInt + ':' + currLvl + '='+"<input id='edit' type='tel' onchange='showInp(this.value, " + res + ")'/></div>";
        refs.results.innerHTML = `<h3 class="restext"> Усьго: ${all}</h3> <h3 class="restext">Правильно: ${goo}</h3> <h3 class="restext">Помилився: ${bee}</h3>`;
    }
    let el = document.getElementById('edit');
    el.focus();
}

function showTable() {
    refs.slider.classList.toggle('hidden')
    refs.sliderBTNDiv.classList.toggle('hidden')
    refs.titleLvl.classList.toggle('hidden');
    refs.divBtn.classList.toggle('hidden')
    refs.repBTN.classList.toggle('open')
    if(refs.repBTN.classList.length>0){
        refs.repBTN.value = 'Закрити'
    }else {
        refs.repBTN.value = 'Повторити'
    }
    init();
}



function nextTask (e){
    if(refs.nextBTN.value === 'Почати'){
        refs.nextBTN.classList.toggle('active');
        refs.titleLvl.classList.toggle('hidden');
        refs.divTwoBtn.classList.toggle('hidden');
        let currLvl = whatLevel(refs.control);
        let currType = whatLevel(refs.typecontrol);
        let randomInt = randomInteger(1,10, randomPrev);
        randomPrev = randomInt
        if (currType === 'multiplication'){
            let res = currLvl*randomInt;
            refs.area.innerHTML = "<div class='inputDiv'>"+ currLvl + '·' + randomInt + '='+"<input id='edit' type='tel' onchange='showInp(this.value, " + res + ")'/></div>";
            refs.results.innerHTML = `<h3 class="restext"> Усьго: ${all}</h3> <h3 class="restext">Правильно: ${goo}</h3> <h3 class="restext">Помилився: ${bee}</h3>`;
        }else {

            let res = randomInt*currLvl/currLvl;
            refs.area.innerHTML = "<div class='inputDiv'>"+ currLvl*randomInt + ':' + currLvl + '='+"<input id='edit' type='tel' onchange='showInp(this.value, " + res + ")'/></div>";
            refs.results.innerHTML = `<h3 class="restext"> Усьго: ${all}</h3> <h3 class="restext">Правильно: ${goo}</h3> <h3 class="restext">Помилився: ${bee}</h3>`;
        }
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
        refs.divTwoBtn.classList.toggle('hidden');

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
}

//slider

const images = document.querySelectorAll('.slider-item');
const sliderLine = document.querySelector('.slider-items');
let count = 0;
let width;

function init(){
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + "px";
    images.forEach(item => {
        item.style.width = width+"px";
        item.style.height = "auto";
    })
    rollSlider();
}

window.addEventListener('resize', init);


document.querySelector('.slider-next').addEventListener('click', function (){
    count++;
    if(count >= images.length){
        count = 0;
    }
    rollSlider();
})

document.querySelector('.slider-prev').addEventListener('click', function (){
    count--;
    if(count <0 ){
        count = images.length-1;
    }
    rollSlider();
})

function rollSlider(){
    sliderLine.style.transform = "translate(-"+count*width+"px)"
}
