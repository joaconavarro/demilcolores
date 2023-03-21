const trigger = document.querySelectorAll('nav li');
    trigger.forEach((menu) => menu.addEventListener('click', toggle));

    function toggle(){
        trigger.forEach((item)=> item != this? item.classList.remove('active'): null )
        if (this.classList != 'active'){
            this.classList.toggle('active');
        }
    }
  const nav = document.getElementById('nav').style.bottom = '2em';
    /*const inicio = document.getElementById("link-inicio");
    const nosotros = document.getElementById("link-nosotros");
    const articulos = document.getElementById("link-articulos");
    const muestrario = document.getElementById("link-muestrario");
    const contacto = document.getElementById("link-contacto");

    function navPosition() {
        const inicioPressed = e => { 
            document.getElementById('nav').style.bottom = '2em';
            document.getElementById('nav').style.top = null;
        }
        inicio.addEventListener("click", inicioPressed);

        const nosotrosPressed = e => { 
            document.getElementById('nav').style.bottom = null;
            document.getElementById('nav').style.top = '0.5em';
        }
        nosotros.addEventListener("click", nosotrosPressed);

        const articulosPressed = e => { 
            document.getElementById('nav').style.bottom = '2em';
            document.getElementById('nav').style.top = null;
            
        }
        articulos.addEventListener("click", articulosPressed);
        
        const contactoPressed = e => { 
            document.getElementById('nav').style.bottom = '2em';
            document.getElementById('nav').style.top = null;
        }
        contacto.addEventListener("click", contactoPressed);        
    }  
    navPosition();
    */