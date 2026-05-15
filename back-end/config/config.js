const { Sequelize } = require("sequelize");
require("dotenv").config()

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);


// sequelize.sync({
//   force : true
// })

sequelize.authenticate()
.then(()=> console.log("db connected")
)
.catch((error)=>console.log(error)
)


module.exports = sequelize;