module.exports= `

 type Profesor{
    id : ID!
    nombre:String!
    nacionalidad: String @deprecated(reason:"Esta feo")
    genero:Genero
    cursos: [Curso]
}


 enum Genero{
    Masculino
    Femenino
 }

 input NuevoProfesor{
    nombre: String!
    genero: Genero
    nacionalidad: String!
}

input ProfesorEditable{
    nombre: String
    genero: Genero
    nacionalidad: String
}
`