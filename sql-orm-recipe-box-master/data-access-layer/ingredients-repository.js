const { Op } = require('sequelize');
const { sequelize } = require('../models');
let Ingredient;
let moduleError;

try {
  const db = require('../models');
  ({ Ingredient } = db);
  if (Ingredient === undefined) {
    moduleError = 'It looks like you need to generate the Ingredient model.';
  }
} catch (e) {
  console.error(e);
  if (e.message.includes('Cannot find module')) {
    moduleError = 'It looks like you need initialize your project.';
  } else {
    moduleError = `An error was raised "${e.message}". Check the console for details.`;
  }
}
/* Don't change code above this line ******************************************/



async function createNewIngredient(amount, recipeId, measurementUnitId, foodStuff) {
  const ingredient = await Ingredient.create({amount:amount,recipeId:recipeId,measurementUnitId:measurementUnitId,foodStuff:foodStuff})
  await sequelize.close()
}



/* Don't change code below this line ******************************************/
module.exports = {
  createNewIngredient,
  loadingDbError: moduleError,
};
