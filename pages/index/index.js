const  app = getApp();
Page({
   data:{
        Addr: 'Please select location'         
    },
   
    // Select to get the location 
    getAddress: function () {
      var that = this ;
      app.getPermission(that); // Enter     that value to set the content directly on the app.js page     
    }
})
