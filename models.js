const Sequelize = require('sequelize');//use the third part module


const Process = require('process');
// console.log(Process.env)
const db = new Sequelize(Process.env.localdb,{define: {
    timestamps: false, // true by default
    freezeTableName: true,
    underscored: true,
  }});
db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
const UserModel = db.define('User',{
  userId:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName:{
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName:{
    type: Sequelize.STRING,
    allowNull: false
  }
})
const ExpensesModel = db.define('Expenses',{
  expensesId:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  transport:{
    type: Sequelize.FLOAT
  },
  gas:{
    type: Sequelize.FLOAT
  },
  food:{
    type: Sequelize.FLOAT
  },
  misselanious:{
    type: Sequelize.FLOAT
  },
  date:{
    type:Sequelize.DATEONLY,
    defaultValue: Sequelize.NOW
  },
  userId:{
    type:Sequelize.INTEGER,
    allowNull: false
  }
})
const IndiaTransferModel = db.define('indiaTransfer',{
  indiaTransferId:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  chits:{
    type: Sequelize.FLOAT
  },
  business:{
    type: Sequelize.FLOAT
  },
  yearMonth:{
    type:Sequelize.DATEONLY
  },
  userId:{
    type:Sequelize.INTEGER,
    allowNull: false
  },
  recepentId:{
    type:Sequelize.INTEGER,
    allowNull: false
  }
})
const RecepentModel = db.define('recepent',{
  recepentId:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName:{
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName:{
    type: Sequelize.STRING,
    allowNull: false
  }
})
const PayCheckModel = db.define('PayCheck',{
  PayCheckId:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId:{
    type:Sequelize.INTEGER,
    allowNull: false
  },
  stateTax:{
    type: Sequelize.FLOAT
  },
  federalTax:{
    type: Sequelize.FLOAT
  },
  medicalTax:{
    type: Sequelize.FLOAT
  },
  socialTax:{
    type: Sequelize.FLOAT
  },
  alivenss:{
    type: Sequelize.FLOAT
  },
  netPay:{
    type: Sequelize.FLOAT
  },
  yearMonth:{
    type:Sequelize.DATEONLY
  },
  hoursWorked:{
    type: Sequelize.INTEGER
  },
  payPerHour:{
    type: Sequelize.FLOAT
  }
})
// User.sync({force:true}).then(()=>{
//   return User.create({
//     firstName: 'santosh',
//     lastName: 'kesireddy'
//   }
//   )
// })
// Expenses.sync({force:true}).then(()=>{
//   return Expenses.create({
//     food: 11.9,
//     userId:1
//   }
//   )
// })
insertExpenses=()=>{
  return Expenses.create({
      food: 8.19,
      transport:7,
      userId:1,
      date:"2018-01-23"
    })
};

insertUser = ()=>{
  return User.create({
    firstName: 'krishna',
    lastName: 'kesireddy'
    })
};
// db.models.User.findOne({where:{
//   userId:2
// }}).then(users=>{
//   console.log(users)
// })
// insertUser();
// insertExpenses();
// console.log(sequelize.models)
// const User = db.models.user;
// const Expenses = db.models.expenses;
// export {User,Expenses}
module.exports = db;
