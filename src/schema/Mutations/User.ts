import { GraphQLBoolean, GraphQLID, GraphQLString } from "graphql";
import { Users } from "../../Entities/Users";
import { UserType } from "../typeDef/User";
import bcrypt from "bcryptjs";

export const CREATE_USER = {
  //*Quiere deccir que cuando yo ejecute esta funcion me va a devolver por  respuesta un String
  type: UserType,
  args: {
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  },

  //*El Resolve Recive 2 paramteros, parent para recivir la funcion que este encima de esta y el otro son los Argumentos
  async resolve(_: any, args: any) {
    const { name, username, password } = args;

    const encryptpassword = await bcrypt.hash(password, 10);
    const result = await Users.insert({
      name: name,
      username: username,
      password: encryptpassword,
    });
    console.log(result);
    return {
      ...args,
      id: result.identifiers[0].id,
    };
  },
};

export const DELETE_USER = {
  type: GraphQLBoolean,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(_: any, { id }: any) {
    const result = await Users.delete(id);
    if (result.affected === 1) return true;
    return false;
  },
};
