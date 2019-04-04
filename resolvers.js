const Comentario = require('./models/Comentario')
const Profesor = require('./models/Profesor')
const Curso = require('./models/Curso')

const resolvers = {
	Query:{
		cursos: () => Curso.query().eager('[profesor,comentarios]'),
        profesores:() => Profesor.query().eager('[cursos]'),
        curso:(rootValue,args) => Curso.query().eager('[profesor,comentarios]').findById(args.id),
        profesor:(rootValue,args) => Curso.query.eager('[cursos]').findById(args.id),
        
	},
    Mutation: {
        profesorAdd: (__,args) => {
            console.log(args)
            return Profesor.query().insert(args.profesor)
        },
        profesorEdit: (__,args) => {
            return Profesor.query().patchAndFetchById(args.profesorId,args.profesor)
    },
        profesorDelete(__,args){
            return Profesor.query().findById(args.profesorId).then((profesor) => {
                                return Profesor.query().deleteById(args.profesorId).then(() => profesor)
                            })
        }
    }
}


module.export = resolvers