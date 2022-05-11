const { Model } = require('nedb-models');
const Datastore = require("nedb");

class Dish extends Model {
  static datastore() {
    return {
      filename: "database/dishes.db",
    }
  }
    static async getMenu() {
        const menus = {
            drinks: { dishes: [] },
            starters: { dishes: [] },
            mains: { dishes: [] },
            alcohol: { dishes: [] },
        };
    
        try {
          const dishes = await this.find({});
    
          dishes.forEach(dish => {
            if (dish.hidden) return;
    
            if (dish.type === 'drink') {
              menus.drinks.dishes.push(dish);
            }
            else if (dish.type === 'starter') {
                menus.starters.dishes.push(dish);
            }
            else if (dish.type === 'main') {
                menus.mains.dishes.push(dish);
            }
            else if (dish.type === 'alcohol') {
                menus.alcohol.dishes.push(dish);
            }

          });
    
          return menus;
        }
        catch (err) {
          console.log(err);
        }
      }
    
    static async getDishById(id) {
        try {
            return await this.findOne({ id });
        }
        catch (err) {
            console.log(err);
        }
    }

    static async populateMenu(dish) {
        try {
          const data = await this.insert(dish);
          console.log('DB Appended:', data);
        }
        catch (err) {
          console.log(err);
        }
      }
}

module.exports = Dish;