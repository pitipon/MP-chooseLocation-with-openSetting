App({

  getPermission:function(obj){
    wx.chooseLocation({
      success: function (res) {    
          obj.setData({
              addr: res.address      
          })                
          console.log(44,res)
      },
      fail:function(){
          wx.getSetting({
              success: function (res) {
                  var status = res.authSetting;
                  if (!status['scope.userLocation']) {
                      wx.showModal({
                          title: 'Authorize the current location',
                          content: 'Need to get your location, please confirm the authorization, otherwise the map function will not be available',
                          success: function (tip) {
                              if (tip.confirm) {
                                  wx.openSetting({
                                      success: function (data) {
                                          if (data.authSetting["scope.userLocation"] === true) {
                                              wx.showToast({
                                                  title: 'Success',
                                                  icon: 'success',
                                                  duration: 1000
                                              })
                                             
                                              wx.chooseLocation({
                                                  success: function(res) {
                                                      obj.setData({
                                                          addr: res.address
                                                      })
                                                      console.log(44,res)
                                                  },
                                              })
                                          } else {
                                              wx.showToast({
                                                  title: 'Failure',
                                                  icon: 'success',
                                                  duration: 1000
                                              })
                                          }
                                      }
                                  })
                              }
                          }
                      })
                  }
              },
              fail: function (res) {
                  wx.showToast({
                      title: 'Failed',
                      icon: 'success',
                      duration: 1000
                  })
              }
          })
      }
  })        
 },
})    