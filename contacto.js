function ejecutar(){
    v1 = document.f_contacto.nombre.value;
    v2 = document.f_contacto.apellido_p.value;
    v3 = document.f_contacto.correo.value;
    if (v1.length==""){
        document.f_contacto.nombre.style.background="red";
        alert("Error, debe indicar su nombre, ya que es un campo obligatorio");
    }else{
        document.f_contacto.nombre.style.background="blue";
        if (v2.length==""){
            document.f_contacto.apellido_p.style.background="red";
            alert("Error, debe indicar su Apellido Paterno, ya que es un campo obligatorio");
        }else{
            document.f_contacto.apellido_p.style.background="blue";
            if (v3.length==""){
                document.f_contacto.correo.style.background="red";
                alert("Error, debe indicar su correo, ya que es un campo obligatorio");
            }else{
                document.f_contacto.correo.style.background="blue";
            }
        }
    }
}
