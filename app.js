alert("Welcome To the Ping Pong Game")
const user_1=prompt("Enter the first player name")
const user_2=prompt("Enter the second player name")

const score=document.querySelector('#players')
const H=document.querySelector('#heading')


const player_1=document.querySelector('#first_score')
const player_2=document.querySelector('#second_score')
let a=0;
let b=0;

const p1=document.querySelector('#first');

p1.addEventListener('click',function(){
a=a+1;
player_1.innerText=a;
if(a==score.value){
    a=0;
    
    alert(`Congratulation ${user_1} you win`);
    document.getElementById("first").disabled = true;
    document.getElementById("second").disabled = true;
    document.getElementById('first_score').style.color='green';
    document.getElementById('second_score').style.color='red';
}
})

document.querySelector('#second').addEventListener('click',function(){
    b=b+1;
    player_2.innerText=b;
    if(b==score.value){
        b=0;
        alert(`Congratulation ${user_2} you win`);
        document.getElementById("second").disabled = true;
        document.getElementById("first").disabled = true;
        document.getElementById('second_score').style.color='green';
        document.getElementById('first_score').style.color='red';
    }
})

document.querySelector('#Reset').addEventListener('click',function(){
    player_1.innerText=0;
    player_2.innerText=0;
    document.getElementById("first").disabled = false;
    document.getElementById("second").disabled = false;
    document.getElementById('first_score').style.color='black';
    document.getElementById('second_score').style.color='black';

})