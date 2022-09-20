module.exports = {


  friendlyName: 'View offers',


  description: 'Display "Offers" page.',

  inputs :{
    category:{
    type : "string"
    }

  },


  exits: {

    success: {
      viewTemplatePath: 'pages/cms/offers'
    }

  },

  fn: async function (inputs, exits) {


    var category = await Category.findOne({slug:inputs.category, visibility:1});
 
    // HANDLE IF CATEGORY CANT BE FOUND : THROW TO 404 PAGE
    if(!category){
      return this.res.notFound();
    }

    var offers = await Offer.find({ category: category.id ,visibility: 1}).paginate(0, 3).populate('merchant');
    var offercount = await Offer.count({category: category.id, visibility:1}); // GET TOTAL COUNT

    
    // Respond with view.
    return exits.success({
      offers: offers,
      category:category,
      totalCount : offercount,
      page:0,
      limit:3,

    });

  }


};