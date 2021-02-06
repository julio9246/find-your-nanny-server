module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      number: DataTypes.STRING,
      password: DataTypes.STRING,
    });  
    return User;
  }