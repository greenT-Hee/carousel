const listAnimal = document.querySelector('.list-animal')

const arrPic = [
    "src/img/tiger.png alt = 'tiger'",
    "src/img/sheep.png alt = 'sheep'",
    "src/img/panda.png alt = 'panda'",
    "src/img/cow.png alt = 'cow'",
    "src/img/horse.png alt = 'horse'",
    "src/img/monkey.png alt = 'monkey'"
];

arrPic.forEach(item => {
    const elLi = document.createElement('li');
    elLi.innerHTML = `<img src=${item}>`;
    listAnimal.appendChild(elLi);
})

//offsetWidth: 요소의 너비값
const items = listAnimal.querySelectorAll('li');
const radius = items[0].offsetWidth * items.length/ 2 /3.14;

items.forEach((item, index) => {
    if(index === 0){
        item.style.transform = `rotateY(0) translateZ(${radius}px)`
    }else{
        item.style.transform = `rotateY(${360/items.length * index}deg) translateZ(${radius}px)`
    }
});


const btnRight = document.querySelector('.btn-right');
const btnLeft = document.querySelector('.btn-left');
const btnRandom = document.querySelector('.btn-random');
const angle = 360/items.length;
let currAngle = 0;

btnRight.addEventListener('click',(event) => {
    listAnimal.style.transform = `translate(-50%, -50%) rotateY(${currAngle += angle}deg)`    
})

btnLeft.addEventListener('click',(event) => {
    listAnimal.style.transform = `translate(-50%, -50%) rotateY(${currAngle -= angle}deg)`    
})

btnRandom.addEventListener('click',(event) => {
    listAnimal.style.transform = `translate(-50%, -50%) rotateY(${currAngle += 300}deg)`
})

// document.addEventListener('click', (event) => {
//     if (window.innerWidth / 2 < event.clientX) {
//         currAngle += angle;
//     } else {
//         currAngle -= angle;
//     }

//     listAnimal.style.transform = `translate(-50%, -50%) rotateY(${currAngle}deg)`;
// });




// const angle = 360 / items.length;
// let currAngle = 0;

// document.addEventListener('click', (event) => {
//     //screenX는 듀얼 모니터에서 다르게 작동할 수도 있다. (사용하고 있는 전체 모니터를 전체 너비를 기준으로 잡기 때문)
//     //clientX는 보고있는 화면(뷰포트 기준) - 범용적
//     //윈도우의 너비에서 왼쪽부터 X축 방향으로 얼마나 갔는가
//     //아래는 바로 오르쪽을 나타내는 식
//     if (window.innerWidth / 2 < event.clientX) {

//         currAngle += angle;
//     } else {

//         currAngle -= angle;
//     }

//     center.style.transform = `translate(-50%, -50%) rotateY(${currAngle}deg)`;
// });