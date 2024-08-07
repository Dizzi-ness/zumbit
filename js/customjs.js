function showImage(src) {
    // Crear un modal
    var modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0,0,0,0.8)";
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.zIndex = "1000";

    // Crear la imagen dentro del modal
    var img = document.createElement("img");
    img.src = src;
    img.style.maxWidth = "90%";
    img.style.maxHeight = "90%";
    img.style.border = "2px solid white";

    // Agregar la imagen al modal
    modal.appendChild(img);

    // Agregar el modal al cuerpo del documento
    document.body.appendChild(modal);

    // Cerrar el modal al hacer clic en cualquier parte del mismo
    modal.onclick = function () {
        document.body.removeChild(modal);
    }
}