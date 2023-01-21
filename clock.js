let ourName = prompt("İsminizi Giriniz")
let myName=document.querySelector("#myName")
myName.innerHTML =`${myName.innerHTML} ${ourName}`

let myClock=document.querySelector("#myClock")
var date = new Date();
var offset = date.getTimezoneOffset();
myClock.innerHTML=`${myClock.innerHTML} ${date}`