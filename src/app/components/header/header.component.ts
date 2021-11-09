// Decorador para decirle a angular que es una clase (HeaderComponent)
import { Component } from '@angular/core'

//Configurar decorador
@Component({
    selector: 'app-header', //El componente que cargará todo este TS en el html
    template: `<h1>Header Component</h1>`
})

export class HeaderComponent { // Ahora debo ir al module.ts para importar mi componente

}

// Para generar el componente de manera automatica tengo que usar la consola y escribir:
// ng g c components/shared/navbar

// ng = angular generate (g) component (c) RUTA+nombre del componente