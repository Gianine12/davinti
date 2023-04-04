'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('telefone', 
    { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true 
      },

      numero: {
        type: Sequelize.STRING(16),
        allowNull: false
      },

      id_contato: {
        type: Sequelize.INTEGER,
        references: {
          model:'contato',
          key: 'id'
        },
        onUpdate : 'CASCADE',
        onDelete : 'CASCADE',
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('users');
  }
};
