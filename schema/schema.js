const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
  GraphqlFloat,
  GraphQLSchema
} = graphql;
const db = require('../models')
// import {User,Expenses} from '../models'

const UserType = new GraphQLObjectType({
  name:'User',
  fields:() => ({
    userId:{type:GraphQLInt,
    resolve:(root)=>{
      console.log(root);
      return root['userId']}},
    firstName:{type:GraphQLString,
    resolve:(root)=>{return root['firstName']}},
    lastName:{type:GraphQLString,
    resolve:(root)=>{return root['lastName']}}
  })
})
const RootQuery = new GraphQLObjectType({
  name: 'RootQeryType',
  fields:()=>({
    user:{
    type: new GraphQLList(UserType)
    // user: {type:UserType}
  }}),
  resolve: (parentValue,args) => {
    // console.log(db.models.User.findAll())
    // console.log(db.models.User.findOne({where:{
    //   userId:2
    // }}).then((user)=>user.User));
    return db.models.User.findAll();
  }
})
module.exports = new GraphQLSchema({
    query:RootQuery
})
