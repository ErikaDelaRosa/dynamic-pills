/*if ( ($(window).height() + 100) < $(document).height() ) {
    $('#top-link-block').removeClass('hidden').affix({
        // how far to scroll down before link "slides" into view
        offset: {top:100}
    });
}*/

function windowLoad () {
    alert ('Welcome to the cinema!');
}
/*
function myFunction() {
    var element = document.getElementById("toystory");
    element.classList.toggle("toystory");
}*/

document.getElementById('toystory').onclick = function() {
	document.getElementById('toystory1').style.display = 'block';
}`

function bluBg(){
    this.style.backgroundColor = '#98D8F8";
}
let lights = document.querySelector('#navmenu');
lights.addEventListener('mouseover', bluBg);