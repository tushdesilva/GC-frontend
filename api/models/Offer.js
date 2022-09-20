/**
 * Offer.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    offer_id:{
      type: 'string',
    },

    category:{
      type: 'string',
    },

    merchant:{
      type:'string',
    },

    offer_heading:{ 
      type:'string',
      required: true,
    },

    image: {
      type: "string",
      required: true,
    },

    mobile_image: {
      type: "string",
      required: true,
    },

    discount_type:{ // 0 - percentage   1 - fixed
      type:'number',
      defaultsTo: 0,
    },

    discount:{
      type:'number',
      defaultsTo: 0,
    },

    card_type:{ 
      type:'string',
      required: true,
    },

    visibility:{ // 0 - Unpublish     1 - Publish
      type:'number',
      defaultsTo: 0,
    },

    description: {
      type: "string",
      required: true,
    },

    termsandconditions: {
      type: "string",
      required: true,
    },

    valid_date_from:{ 
      type:'number',
      required: true,
    },

    valid_date_to:{
      type:'number',
      required: true,
    },

    start_publish_date:{
      type:'number',
      required: true,
    },

    featured: { // 0 - not featured   1 - featured
      type: "number",
      defaultsTo: 0,
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    merchant : {
      model : "merchant",
    },

    category : {
      model : "category",
    },


  },

};

