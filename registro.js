function ejecutar(){
    V1 = document.f_registro.titulo.value;
    V2 = document.f_registro.plataforma.value;
    V3 = document.f_registro.estado.value;
    if (V1.length==""){
        document.f_registro.titulo.style.background="red";
        alert("Error, debe indicar el titulo del videojuego, ya que es un campo obligatorio");
    }else{
        document.f_registro.titulo.style.background="blue";
        if (V2.length==""){
            document.f_registro.plataforma.style.background="red";
            alert("Error, debe indicar la plataforma deseada, ya que es un campo obligatorio");
        }else{
            document.f_registro.plataforma.style.background="blue";
            if (V3.length==""){
                document.f_registro.estado.style.background="red";
                alert("Error, debe indicar el estado deseado, ya que es un campo obligatorio");
            }else{
                document.f_registro.estado.style.background="blue";
            }
        }
    }
}