module.exports = {


  friendlyName: 'View cms',


  description: 'Display "Cms" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/cms'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
