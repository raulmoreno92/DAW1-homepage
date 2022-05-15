const imagenGrandeBox = document.getElementById("fulImgBox");
imagenGrande = document.getElementById("fulImg");

function abrirImagenGrande(reference) {
    imagenGrandeBox.style.display = "flex";
    imagenGrande.src = reference;
}

function cerrarImagen() {
    imagenGrandeBox.style.display = "none";
}

