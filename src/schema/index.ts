import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { CREATE_USER } from "./Mutations/User";
import { GREETING } from "./Queries/Greeting";
import { GET_ALL_USERS } from "./Queries/User";

//*Consulta Principal

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    //* Que es lo que tiene que devolver
    greeting: GREETING,
    getAllUsers: GET_ALL_USERS,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUsers: CREATE_USER,
  },
});

export const Schema = new GraphQLSchema({
  //*Consutlas, que cosas puedo solicitar de graphql, ej : metodos get
  query: RootQuery,
  //*Las Funciones que Alteran Datos
  mutation: Mutation,
  //* Graph QL son dos simples cosas, Consutal Datos como:Listar un Usuario, Obtener un usuario , Alterar Datos como: Crear un Usuario, Eliminarlo, Editarlo, Etc
});
