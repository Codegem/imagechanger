'use strict';

var used_nums = [0, 1, 2, 3, 4, 5, 6, 7];
var sources = ["img1.jpeg", "img2.jpeg",
 "img3.jpeg", "img4.jpeg", "img5.jpeg", "img6.jpeg", "img7.jpeg", "img8.jpeg"];
const maisyti = document.getElementById("maisymas");
const rodyti = document.getElementById("rodymas");
rodyti.addEventListener('click', rodo)
function rodo(){
    const paveiksliukai = document.getElementsByClassName("paveikslai");
    for(let i = 0; i<sources.length; i++){
        if(paveiksliukai[i].style.display="none"){
            paveiksliukai[i].style.display="block";
        }
        else
            paveiksliukai[i].style.display="none";
    }
    console.log(sources.length)
maisyti.addEventListener('click', maiso)
    function maiso(){
    for (let i = 0; i < used_nums.length; i++){
        const j = Math.floor(Math.random() * i);
        const temp = used_nums[i];
        used_nums[i] = used_nums[j];
        used_nums[j] = temp;
        }
    document.getElementById("1").src = "img/"+sources[used_nums[0]];
    document.getElementById("2").src = "img/"+sources[used_nums[1]];
    document.getElementById("3").src = "img/"+sources[used_nums[2]];
    document.getElementById("4").src = "img/"+sources[used_nums[3]];
    document.getElementById("5").src = "img/"+sources[used_nums[4]];
    document.getElementById("6").src = "img/"+sources[used_nums[5]];
    document.getElementById("7").src = "img/"+sources[used_nums[6]];
    document.getElementById("8").src = "img/"+sources[used_nums[7]];
    console.log(used_nums)
    }
}