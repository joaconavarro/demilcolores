const btnIntense = document.getElementById('btn-1');
const btnDamafrent= document.getElementById('btn-2');
const btnArosoles= document.getElementById('btn-3');
const btnCalculadora= document.getElementById('btn-4');

const intense = document.getElementById('intense');
const damafrent= document.getElementById('damafrent');
const arosoles= document.getElementById('aerosoles');
const calculadora= document.getElementById('calculadora');


btnIntense.onclick = function() {
    intense.style.display = "";
    damafrent.style.display = "none";
    arosoles.style.display = "none";
    calculadora.style.display = "none";
    
}
btnDamafrent.onclick = function() {
    damafrent.style.display = "";
    intense.style.display = "none";
    arosoles.style.display = "none";
    calculadora.style.display = "none";
    
}
btnArosoles.onclick = function() {
    damafrent.style.display = "none";
    intense.style.display = "none";
    arosoles.style.display = "";
    calculadora.style.display = "none";
    
}
btnCalculadora.onclick = function() {
    damafrent.style.display = "none";
    intense.style.display = "none";
    arosoles.style.display = "none";
    calculadora.style.display = "";
    
}
