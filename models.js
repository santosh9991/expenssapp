const Sequelize = require('sequelize');//use the third part module


const Process = require('process');
// console.log(Process.env)
const sequelize = new Sequelize(Process.env.localdb,{define: {
    timestamps: false, // true by default
    freezeTableName: true,
    underscored: true,
  }});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
const User = sequelize.define('User',{
  userId:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
  firstName:{
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName:{
    type: Sequelize.STRING,
    allowNull: false
  }
})
const Expenses = sequelize.define('Expenses',{
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
  misselanious:{
    type: Sequelize.FLOAT
  },
  userId:{
    type:Sequelize.INTEGER,
    allowNull: false
  }
})
const IndiaTransfer = sequelize.define('indiaTransfer',{
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
const Recepent = sequelize.define('recepent',{
  recepentId:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
  firstName:{
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName:{
    type: Sequelize.STRING,
    allowNull: false
  }
})
const PayCheck = sequelize.define('PayCheck',{
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
