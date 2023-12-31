/*
Implemente la clase Semaforo con un atributo llamado color y otro de tipo booleano llamado parpadeando. El valor del atributo color será 0 cuando el semáforo esté en rojo, 1 cuando esté en ámbar, y 2 cuando esté en verde. El constructor sin parámetros inicializará todos los objetos como semáforos en rojo (color=0) y sin parpadear (parpadeando=false). Incluya los métodos consultores y modificadores estándar para los dos atributos. El código de los métodos modificadores debe asegurar que el atributo color no toma valores no permitidos, y que sólo se puede activar el parpadeo del semáforo cuando el color es ámbar. Añada un método cadenaColor, que no recibe argumentos y devuelve una cadena de caracteres indicando el color actual de semáforo (“ROJO”, “ÁMBAR”, “VERDE”). Añada un método llamado imprimir, que no recibe ningún argumento ni devuelve ningún valor. Este método imprimirá por pantalla el estado del semáforo usando mensajes del tipo: “Semáforo en ROJO”, “Semáforo en AMBAR parpadeando”, “Semáforo en AMBAR”. Añada un método llamado cambia, que cada vez que es llamado hará cambiar al semáforo del estado en que se encuentre al siguiente estado según el diagrama. Cree un proyecto web donde se instancie un semáforo y demuestre el funcionamiento de la clase implementada, para ello siga la secuencia de operaciones siguiente imprimiendo el semáforo después de cada cambio:
Cree un Semáforo.
Cambie el color a un color incorrecto.
Cambie el color a verde (2).
Ponga el atributo parpadeando a cierto.
Cambie el color a ámbar (3).
Ponga el atributo parpadeando a cierto.
Llame 5 veces al método cambio (use un  bucle)
Cree un nuevo semáforo y asigne los valores de los atributos del primer semáforo al nuevo.
*/
class Semaforo
{
    // Constructor
    constructor()
    {
        this.color = 0;
        this.parpadeando = false;
    }

    // Metodos
    getColor()
    {
        return this.color;
    }

    setColor(newColor)
    {
        if(newColor >= 0 && newColor <= 2)
            this.color = newColor;
        else
            console.log("El color no es correcto");
    }

    getParpadeando()
    {
        return this.parpadeando;
    }

    setParpadeando(parpadeando)
    {
        if(this.color == 1)
            this.parpadeando = parpadeando;
        else
            console.log("El semáforo no está en ámbar");
    }

    cadenaColor()
    {
        switch(this.color)
        {
            case 0:
                return "ROJO";
            case 1:
                return "ÁMBAR";
            case 2:
                return "VERDE";
            default:
                return "Desconocido";
        }
    }

    imprimir()
    {
        if(this.parpadeando)
            console.log("Semáforo en " + this.cadenaColor() + " parpadeando");
        else
            console.log("Semáforo en " + this.cadenaColor());
    }

    cambia()
    {
        switch(this.color)
        {
            case 0:
                this.color = 1;
                break;
            case 1:
                if(this.parpadeando)
                    this.color = 0;
                else
                    this.color = 2;
                break;
            case 2:
                this.color = 0;
                break;
            default:
                console.log("Error: Estado de semáforo desconocido");
        }
    }
}

// Ejemplo de uso en un entorno web
window.onload = function () {
  // Crear un semáforo
    const semaforo = new Semaforo();

    // Cambios en el semáforo y visualización
    semaforo.imprimir();

    // Cambiar el color a un valor incorrecto
    semaforo.setColor(5);

    // Cambiar el color a verde
    semaforo.setColor(2);
    semaforo.imprimir();

    // Poner el atributo parpadeando a true
    semaforo.setParpadeando(true);
    semaforo.imprimir();

    // Cambiar el color a ámbar
    semaforo.setColor(1);
    semaforo.imprimir();

    // Poner el atributo parpadeando a true
    semaforo.setParpadeando(true);
    semaforo.imprimir();

    // Llamar al método cambia 5 veces
    for (let i = 0; i < 5; i++) {
        semaforo.cambia();
        semaforo.imprimir();
    }

    // Crear un nuevo semáforo y asignar valores del primer semáforo
    const nuevoSemaforo = new Semaforo();
    nuevoSemaforo.setColor(semaforo.getColor());
    nuevoSemaforo.setParpadeando(semaforo.getParpadeando());
    nuevoSemaforo.imprimir();
};