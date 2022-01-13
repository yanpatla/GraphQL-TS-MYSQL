import { GraphQLList, GraphQLString } from "graphql";
import { Users } from "../../Entities/Users";
import { UserType } from "../typeDef/User";
export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  async resolve() {
    return  await Users.find();
 

    
  },
};
