const { Model, DataTypes } = require('sequelize');

class Telefone extends Model{
    static init(sequelize){
        super.init({
            numero: DataTypes.INTEGER,
        },{
            tableName: 'telefone',
            sequelize
        })
    }

    static associate(models){
        this.belongsTo(models.Contato,{
            foreignKey: 'id_contato',
            as: 'contato',
            onDelete: 'cascade',
            onUpdate: 'cascade'
        })
    }
}

module.exports = Telefone;
