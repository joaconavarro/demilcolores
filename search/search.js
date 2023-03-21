const search = () =>{
    const searchBox = document.getElementById("search-items").value.toUpperCase();
    const storeitems = document.getElementById("lista-productos");
    const productos = document.querySelectorAll(".productos");
    const nombreproducto = storeitems.getElementsByTagName("h2");

    for (var i=0; i < nombreproducto.length; i++){
        let match = productos[i].getElementsByTagName("h2")[0];

        if (match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchBox)> -1) {
                productos[i].style.display = "";
            }
            else {
                productos[i].style.display = "none";
            }
        }
    }

}