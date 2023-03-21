let rendimientoLatex;
let rendimientoEsmalte;
let rendimientoMembrana;

function calcular() {
    const ancho = document.querySelector('[data-ancho]');
    const alto = document.querySelector('[data-alto]');  
    let metrosCuadrados = ancho.value*alto.value*4;
    const ventanas =document.querySelector('[data-ventanas]');
    const puertas =document.querySelector('[data-puertas]');

    const areaVentanas = ventanas.value *1.5;
    const areaPuertas = puertas.value *1.5;
    
    cantidadManos();
    const latex = document.querySelector('[data-latex]');
    const esmalte = document.querySelector('[data-esmalte]');
    const membrana = document.querySelector('[data-membrana]');
    metrosCuadrados = metrosCuadrados - areaPuertas - areaVentanas;
    
    const result = document.querySelector('[data-result]');
    
    if(latex.checked){       
        return(result.value = (metrosCuadrados/rendimientoLatex).toFixed(1));
    }
    else if(esmalte.checked){
        return(result.value = Math.ceil(metrosCuadrados/rendimientoEsmalte).toFixed(1));
    }
    else if(membrana.checked){
        return(result.value = Math.ceil(metrosCuadrados/rendimientoMembrana).toFixed(1));
    }    
}
function cantidadManos(){
    const unaMano = document.querySelector('[data-unamano]');
    const dosManos = document.querySelector('[data-dosmanos]');
    const tresManos = document.querySelector('[data-tresmanos]');
    if(unaMano.checked){
        rendimientoLatex = 10;
        rendimientoEsmalte = 12;
        rendimientoMembrana = 8;
    }
    else if(dosManos.checked){
        rendimientoLatex = 5;
        rendimientoEsmalte = 6;
        rendimientoMembrana = 4;
    }
    else if(tresManos.checked){
        rendimientoLatex = 3.4;
        rendimientoEsmalte = 4;
        rendimientoMembrana = 2.7;
    }
}