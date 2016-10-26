import DataType from 'sequelize';
import Model from '../sequelize';

const Kanji = Model.define('Kanji', {

  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },

  keyword: {
    type: DataType.STRING(10),
    allowNull: false,
  },

  hantu: {
    type: DataType.STRING(45),
  },

  radical: {
    type: DataType.STRING(10),
  },

  onyomi: {
    type: DataType.STRING(50),
  },

  kunyomi: {
    type: DataType.STRING(200),
  },

  strokes: {
    type: DataType.INTEGER,
    defaultValue: 9999,
  },

  grade: {
    type: DataType.INTEGER,
    defaultValue: 9999,
  },

  jlpt: {
    type: DataType.INTEGER,
    defaultValue: 0,
  },

  jouyou: {
    type: DataType.INTEGER,
    defaultValue: 9999,
  },

  rtk6th: {
    type: DataType.INTEGER,
    defaultValue: 9999,
  },

  rank: {
    type: DataType.INTEGER,
    defaultValue: 9999,
  },

}, {

  indexes: [
    { fields: ['keyword'] },
    { fields: ['hantu'] },
    { fields: ['radical'] },
    { fields: ['strokes'] },
    { fields: ['grade'] },
    { fields: ['jlpt'] },
    { fields: ['jouyou'] },
    { fields: ['rtk6th'] },
    { fields: ['rank'] },
  ],

});

export default Kanji;
