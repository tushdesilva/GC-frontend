/**
 * Merchanlist.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name:{            
      type:'string',
      required:true,
    },

    merchant_code:{
      type:'string',
      required:true,
    },

    category:{
      type:'string',
      required:true,
    },

    merchant_id:{
      type:'string',
  
    },

    logo:{
      type:'string',
      required:true,
    },

    contact_number:{
      type:'string',
      required:true,
    },

    email:{
      type:'string',
      required:true,
    },

    address_line1:{
      type:'string',
      required:true,
    },

    address_line2:{
      type:'string',
      
    },

    city:{
      type:'string',
      required:true,
    },

    country:{
      type:'string',
      
    },
    description:{
      type:'string',
      required:true,
    },

    website:{
      type:'string',
      
    },

    featured:{
      type:'number',
      required:true,
    },
    visibility:{
      type:'number',
      required:true,
    },

    contact_person_1_name:{
      type:'string',
      required:true,
    },

    contact_person_1_contact_number:{
      type:'string',
      required:true,
    },
    contact_person_1_email:{
      type:'string',
      required:true,
    },

    contact_person_1_designation:{
      type:'string',
      
    },

    

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    category : {
      model : "category",
    },

    offers : {
      collection : "offer",
      via: "merchant",
    },

  },

};

