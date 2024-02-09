export class Equipo{
    id;
    direccion;
    pais;
    imagenUrl;
    email;
    añoFundado;
    nombre;
    telefono;
    cancha;
    webSite;

    constructor (id,direccion,pais,imagenUrl,email,añoFundado,nombre,telefono,cancha,
        webSite){
            this.id=id;
            this.direccion=direccion;
            this.pais=pais;
            this.imagenUrl=imagenUrl;
            this.email=email;
            this.añoFundado=añoFundado;
            this.nombre=nombre;
            this.telefono=telefono;
            this.cancha=cancha;
            this.webSite=webSite;
        }

}