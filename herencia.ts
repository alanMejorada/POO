//Nivel 1:Clase base
class Vehiculo{
    public marca:string;
    public modelo:string;

    constructor(marca:string, modelo:string){
        this.marca = marca;
        this.modelo = modelo;
    }

    public arrancar(): void{
        console.log(`${this.marca} ${this.modelo} esta arrancando.`);
    }

    public detener():void{
        console.log(`${this.marca} ${this.modelo} se ha detenido.`);
    }
}