
module.exports = async function (req, res, proceed) {

    Menu.find({where: {visibility:1}, select: ['name', 'slug']}).sort('order ASC').exec(async function(err, menuitems) {

    
      res.locals.menuItemList = []; // LOCAL

      // SET OTHER LOCALS


      if (err) {

        return res.badRequest('Something went wrong.');

      }
      if (menuitems) {
  
        res.locals.menuItemList = menuitems;
        return proceed();
  
      } else {

        res.locals.menuItemList = [];
        return proceed();

      }

    });
  
  
  
  };
  