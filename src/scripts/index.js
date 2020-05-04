/*if ( ($(window).height() + 100) < $(document).height() ) {
    $('#top-link-block').removeClass('hidden').affix({
        // how far to scroll down before link "slides" into view
        offset: {top:100}
    });
}*/

function windowLoad () {
    alert ('Welcome to the cinema!');
}

function myFunction() {
    var element = document.getElementById("toystory");
    element.classList.toggle("toystory1");
}

function descriptionShow (){
    document.getElementById("pill").style.display = "block";
}

function showTime (){
    (navmenu.classList.contains("active"));
}



//(movieItem.classList.contains("active"))      
// movieItem.classList.remove("active");
//this.classList.remove("hover");  
//this.classList.add("active");
/*
document.getElementById("toystory").onclick = function() {
	document.getElementById("toystory1").style.display = 'inline-flex';//flex
}`
*/
function bluBg(){
    this.style.backgroundColor = "#98D8F8";
}
let lights = document.querySelector('#navmenu');
lights.addEventListener('mouseover', bluBg);


import { data } from "./data.js";
let parsedData = JSON.parse(data);
console.log(parsedData);
const section = document.querySelector(".container");
parsedData.forEach((obj) => {
  console.log(obj);
  let { id, title, description, image } = obj;
  //console.log(id);
  let card = ` <div id=${id}>
  <h2> ${title} </h2>
  <img src=${image} alt=${title}>
  <h6> ${description} </h6>
  </div>
  `;
  section.innerHTML += card;
});