module.exports = {


  friendlyName: 'View offerdetails',


  description: 'Display "Offerdetails" page.',

  inputs:{
    category:{
      type: 'string'
    }
  },

  exits: {

    success: {
      viewTemplatePath: 'pages/cms/offerdetails'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
