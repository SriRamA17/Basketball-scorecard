let s1=document.getElementById("score1")
let s2=document.getElementById("score2")
let count1=0
let count2=0
function s11(){
    count1+=1
    s1.innerText=count1
    
}
function s12(){
    count1+=2
    s1.innerText=count1
}
function s13(){
    count1+=3
    s1.innerText=count1
}
function s21(){
    count2+=1
    s2.innerText=count2
}
function s22(){
    count2+=2
    s2.innerText=count2
}
function s23(){
    count2+=3
    s2.innerText=count2
}
function reset(){
    count1=0
    count2=0
    s1.innerText=count1
    s2.innerText=count2
}