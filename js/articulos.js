const btnInterior = document.getElementById('a-interior');
const btnExterior= document.getElementById('a-exterior');
const btnEsmaltes= document.getElementById('a-esmaltes');
const btnAeroSintetico= document.getElementById('a-aerosintetico');
const btnGraff= document.getElementById('a-graff');

const interior = document.getElementById('interior');
const exterior= document.getElementById('exterior');
const esmaltes= document.getElementById('esmaltes');
const aero= document.getElementById('aerosintetico');
const graff= document.getElementById('graff');


btnInterior.onclick = function() {
    interior.style.display = "";
    exterior.style.display = "none";
    aero.style.display = "none";
    esmaltes.style.display = "none";
    graff.style.display = "none";
    
}
btnExterior.onclick = function() {
    exterior.style.display = "";
    interior.style.display = "none";
    aero.style.display = "none";
    esmaltes.style.display = "none";
    graff.style.display = "none";
    
}
btnAeroSintetico.onclick = function() {
    exterior.style.display = "none";
    interior.style.display = "none";
    aero.style.display = "";
    esmaltes.style.display = "none";
    graff.style.display = "none";
    
}
btnGraff.onclick = function() {
    exterior.style.display = "none";
    interior.style.display = "none";
    aero.style.display = "none";
    esmaltes.style.display = "none";
    graff.style.display = "";
    
}
btnEsmaltes.onclick = function() {
    exterior.style.display = "none";
    interior.style.display = "none";
    aero.style.display = "none";
    esmaltes.style.display = "";
    graff.style.display = "none";
    
}
