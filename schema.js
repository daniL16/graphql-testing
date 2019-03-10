const {makeExecutableSchema, addMockFunctionsToSchema} = require('graphql-tools')
const casual = require('casual')

const typeDefs = `
 type Curso{
     id: ID!
     titulo: String!
     descripcion: String!
     profesor: Profesor
     rating: Float
	comentarios: [Comentario]   
	}

 type Profesor{
    id : ID!
    nombre:String!
    nacionalidad: String @deprecated(reason:"Esta feo")
    genero:Genero
    cursos: [Curso]
}

 type Comentario{
    id: ID!
    nombre: String!
    cuerpo: String!
 }
 enum Genero{
    Masculino
    Femenino
 }
 type Query {
   cursos: [Curso]
   profesores:[Profesor]
   curso(id: Int): Curso
   profesor(id: Int): Profesor
 }


`

const resolvers = {
	Query:{
		cursos: () => {
			return[{id:1,titulo:'Curso de GrQL',descripcion:'TEst'},{id:1,titulo:'Curso de SQL',descripcion:'Test'}]

	}
}}

const schema = makeExecutableSchema({ typeDefs,resolvers})

addMockFunctionsToSchema({schema,mocks: { 
					Curso: () => {
							return {id:casual.uiid, titulo:casual.sentence,description:casual.sentences(2)}
						      },
					Profesor: () => {return {nombre:casual.name}}
					}, preserveResolvers:false
			})

module.exports = schema
