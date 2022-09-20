module.exports = {


  friendlyName: 'Getoffers',


  description: 'Getoffers ajax.',


  inputs: {

    page:{
      type: 'number'
    },

    limit:{
      type: 'number'
    },

    category_id:{
      type: 'string'
    },

  },


  exits: {

  },


  fn: async function (inputs, exits) {


    console.log();

    var offers = await Offer.find({ category: inputs.category_id ,visibility: 1}).paginate(inputs.page, inputs.limit).populate('merchant');

    return exits.success({
      offers: offers,
    });

  }


};