//----------------------------------------------------Завдання 1----------------------------------------------------------------
let pp1 = document.querySelector('.First')
let pp2 = document.querySelector('.Second')
let inp3= document.querySelector('.conclusion')
let p3 = document.querySelector('.p-3')
let btn = document.querySelector('.btn')
function a1(min, max) {
    return Math.random() * (max - min) + min;
}
ab= Math.round(a1 (2,10));
ba= Math.round(a1 (2,10));

pp1.textContent = ab
pp2.textContent = ba
po=ab*ba
console.log(po)


inp3.onchange = function() {
    let numb = inp3.value;
if(numb == po){
    p3.textContent = 'Вірно'
    document.body.style.backgroundColor = "green";
}
else{
    p3.textContent = 'Невірно'
    document.body.style.backgroundColor = "red";
}
}

btn.onclick = function(){
    inp3.value = '';
    document.body.style.backgroundColor = "cornsilk";
    p3.textContent = 'Відповідь'
    function a1(min, max) {
        return Math.random() * (max - min) + min;
    }

ab= Math.round(a1 (2,10));
ba= Math.round(a1 (2,10));
po = ab * ba;
pp1.textContent = ab;
pp2.textContent = ba;

}



