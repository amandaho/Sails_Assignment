/**
 * Recipe.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    Recipe_Name: {
      type: "string",
      required: true
    },

    Category: {
      type: "string",
      required: true,
    },

    By_Season: {
      type: "string",
      required: true
    },

    By_Ingredient: {
      type: "string"
    },

    Baking_Time: {
      type: "integer",
      alphanumeric: true,
      min: 1
    },

    Recipe_URL: {
      type: "string",
      url: true
    },

    Date_Added: {
      type: "string",
      notNull: true
    }


  }
};
