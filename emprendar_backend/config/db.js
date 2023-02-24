const { Sequelize } = require("sequelize");

require("dotenv").config();

const { PGUSER, PGDATABASE, PGPASSWORD, PGHOST, PGPORT } = process.env;


//creamos la instancia de sequelize
const sequelize = new Sequelize(
  `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`,
  {
    dialect: "postgres",
  }
);

//creamos una funcion para conectarnos a la bd
const conectarDB = async () => {
  try {
    await sequelize.authenticate();
  } catch (error) {

    //si hay un error consologear y salir de la conexion
    console.log(error);

    process.exit(1);
  }
};

//exportaamos la funcion y la instancia para luego crear los modelos

module.exports = { conectarDB, sequelize };
