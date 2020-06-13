export interface User {
    /*
    nome: {
       type: String,
       required: true,
   },
   telefone: {
       type: String,
       required: true,
   },
   idade: {
       type: String,
       required: true
   }
    */

    nome: string
    telefone?: string
    idade: number
    id?: string
}