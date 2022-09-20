module.exports = {


  friendlyName: 'View merchantoffers',


  description: 'Display "Merchantoffers" page.',



  exits: {

    success: {
      viewTemplatePath: 'pages/cms/merchantoffers'
    }

  },


  fn: async function (inputs,exits) {

    var categoryitems = await Category.find({visibility:1});

   
        return exits.success({
          categoryitems :  categoryitems,
        });
  }


};
