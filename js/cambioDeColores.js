const buttonGroup = document.getElementById("button-group");

function colorChange() {
    const buttonGroupPressed = e => { 
        document.getElementById('img-fondo-transparente').style.backgroundColor = e.target.id;
    }
    buttonGroup.addEventListener("click", buttonGroupPressed);

    
}  
colorChange();
