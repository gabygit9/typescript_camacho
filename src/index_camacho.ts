let mensaje: string = "Hola mundo"

mensaje = "mensaje cambiado"


mensaje = "chao mundo"
console.log(mensaje)
console.log(typeof [])

let extincionDinosaurios = 76_000_000
let dinosaurioFavorito = "T-Rex"
let extintos = true

function chancho(config: any) {
    return config
}

let animales: string [] = ['chancho', 'feliz', 'felipe']
let numeros: number[] = [1, 2, 3, 4, 5]
let checks: boolean[] = []
let nums: Array<number> = []

let tupla: [number, string[]] = [1, ['felipe', 'feliz']]

const chica = 's'
const mediana = 'm'
const grande = 'g'
const extraGrande = 'xl'

enum Talla {Chica, Mediana, Grande, ExtraGrande}

const variable1 = Talla.Grande
console.log(variable1)

const enum LoadingState {Idle,Loading,Success,Error}

const estado = LoadingState.Success

type Direccion ={
    calle: string,
    numero: number,
    pais: string
}
type Persona = {
    readonly id: number,
    nombre: string,
    talla: Talla
    direccion: Direccion
}

const objeto: Persona = { 
    id: 1, 
    nombre: 'Hola mundo', 
    talla: Talla.Grande,
    direccion: {
        numero: 1,
        calle: 'calle',
        pais: 'mexico'
    } 
}

const arr: Persona [] = []