module.exports = {


  friendlyName: 'View home',


  description: 'Display "Home" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/cms/home'
    }

  },


  fn: async function (inputs, exits) {


    var sliderItems = await Slider.find({ visibility: 1 });
    var categoryItems = await Category.find({ visibility: 1 }).sort('createdAt DESC');
    var merchantItems = await Merchant.find({ visibility: 1 }).sort('createdAt DESC');

    // // Respond with view.

    return exits.success({
      sliderItems: sliderItems,
      categoryItems: categoryItems,
      merchantItems: merchantItems,

    });

  }


};
