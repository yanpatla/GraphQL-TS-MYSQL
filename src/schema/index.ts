import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { GREETING } from "./Queries/Greeting";

//*Consulta Principal

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    //* Que es lo que tiene que devolver
    greeting: GREETING,
  },
});

export const Schema = new GraphQLSchema({
  //*Consutlas, que cosas puedo solicitar de graphql, ej : metodos get
  query: RootQuery,
  //*Las Funciones que Alteran Datos
  //   mutation: {},
  //* Graph QL son dos simples cosas, Consutal Datos como:Listar un Usuario, Obtener un usuario , Alterar Datos como: Crear un Usuario, Eliminarlo, Editarlo, Etc
});
