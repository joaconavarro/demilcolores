<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./css/estilos_contacto.css">
        <h5><mark> PEDÍ TU PRESUPUESTO!
        <br>
            Averiguá por envíos al interior.</mark>
        </h5>
        <img id="foto_interior" src="./css/interior.jpg">
        <img id= "foto_exterior" src="./css/exterior.jpg">
    </head>
    <body>
        <div>
            <form id="resultado_radio1">
                <input type="radio" onclick='functionCalledExt()' name="Interior-Exterior" value="Int">Exterior 
            </form>
            <form id="resultado_radio2">
            <input type="radio" onclick='functionCalledInt()' name="Interior-Exterior" value="Ext">Interior
            </form>
            <script>
                function functionCalledInt() {
                    window.open("https://www.google.com/search?q=imagenes+hogar+interior+pintura&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj15b_bkKT4AhXTu5UCHeDrA1wQ_AUoAXoECAEQAw&biw=1366&bih=625&dpr=1#imgrc=na0jDhkI4U5H5M");
                }
            </script>
            <script>
                function functionCalledExt() {
                    window.open("https://www.google.com/search?q=imagnes+hogar+exterior+pinturas&tbm=isch&ved=2ahUKEwi2luuUkaT4AhXKN7kGHQRbDXIQ2-cCegQIABAA&oq=imagnes+hogar+exterior+pinturas&gs_lcp=CgNpbWcQAzoGCAAQHhAIOggIABCABBCxAzoFCAAQgAQ6CwgAEIAEELEDEIMBOgQIABBDOgcIABCxAxBDOgYIABAKEBhQ_QZY2Cxgji5oAHAAeAKAAY8DiAGwIZIBCDIyLjYuMC40mAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=peCjYvavNMrv5OUPhLa1kAc&bih=625&biw=1366");
                }
            </script>
        </div>
        
        <div>
            <form id="enviar_consulta" action = "enviar_consulta.php" method = "POST">
                <input id=A1 type="text" name= "nombre" placeholder="Nombre" class="contacto_input" required>
                <br> 
                <input id=A1 type="text" name= "apellido" placeholder="Apellido" class="contacto_input" required>
                <br> 
                <input id=A1 type="text" name= "celular" placeholder="Celular" class="contacto_input" required>
                <br>
                <input id=A1 type="text" name= "email" placeholder="E-mail" class="contacto_input" required>
                <br>
                <br>  
                <textarea type="text" name= "mensaje" placeholder="Haga su consulta aquí: " 
                id="mensaje" cols="39" rows= "10"> </textarea>      
                <input id= "enviar" type="submit" value= "Enviar" class="contacto_btn"> 
            </form> 
        </div>
    </body>
</html>
