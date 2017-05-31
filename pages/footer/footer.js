
Page({
  data: {
  	isAllowPublish:wx.getStorageSync('isAllowPublish'),
    event: {
      pageEnvet: '-red', 
      pagePersonal: ''
    },
    personal: {
      pageEnvet: '', 
      pagePersonal: '-red'
    },
  }
  
})
