const { Model, DataTypes } = require('sequelize');

class Contato extends Model{
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING(100),
            idade: DataTypes.INTEGER
        },{
            tableName: 'contato',
            sequelize
        })
    }
}

module.exports = Contato;
