const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
  GraphqlFloat,
  GraphQLSchema,
  GraphQLID
} = graphql;
const db = require('../models')
// import {User,Expenses} from '../models'


const ExpensesType = new GraphQLObjectType({
  name:'Expenses',
  fields:() => ({
    expensesId:{type:GraphQLInt,}
    ,
    transport:{type:GraphQLString,}
    ,
    gas:{type:GraphQLString,
    },
    food:{type:GraphQLString,},
    misselanious:{type:GraphQLString,},
    date:{type:GraphQLString,},
    userId:{type:GraphQLString,},
  })
})
const UserType = new GraphQLObjectType({
  name:'User',
  fields:() => ({
    userId:{type:GraphQLInt,}
    ,
    firstName:{type:GraphQLString,}
    ,
    lastName:{type:GraphQLString,
    },
    expenses:{type:new GraphQLList(ExpensesType),
      resolve:(parentValue,args)=>{
        // console.log("parent values",typeof(parentValue), parentValue.dataValues.userId)
        // console.log("Expenses",
        // db.models.Expenses.findAll({where:{userId:parentValue.User}}))
        return db.models.Expenses.findAll({
          where:{userId:parentValue.dataValues.userId}})
      }
    }
  })
})
const RootQuery = new GraphQLObjectType({
  name: 'RootQeryType',
  fields:()=>({
    user:{
    type: new GraphQLList(UserType),
    args: {id:{type:GraphQLInt}},
    resolve: (parentValue,args) => {
      console.log(db.models.User.findAll(
        {include:[ db.models.Expenses ]}
      ))
      return db.models.User.findAll()


    }},
      expenses:{
      type: new GraphQLList(ExpensesType),
      resolve: (parentValue,args) => {
        // console.log(db.models.User.findAll())
        // console.log(db.models.User.findOne({where:{
        //   userId:2
        // }}).then((user)=>user.User));
        return db.models.Expenses.findAll()


    // user: {type:UserType}
  }
}})
});


module.exports = new GraphQLSchema({
    query:RootQuery
})
// const User = new GraphQLObjectType({
//   name: 'User',
//   fields: () => ({
//     id: {
//       type: GraphQLID
//     },
//     name: {
//       type: GraphQLString
//     }
//   })
// });
// const Query = new GraphQLObjectType({
//   name: 'Query',
//   fields: () => ({
//     viewer: {
//       type: User,
//       resolve() {
//         return {
//           id: '123',
//           name: 'freiksenet'
//         }
//       }
//     }
//   })
// });
//
// const Schema = new GraphQLSchema({
//   query: Query
// });
// graphql(Schema, `{
//   viewer {
//     id,
//     text
//   }
// }`).then((result) => console.log(result));
