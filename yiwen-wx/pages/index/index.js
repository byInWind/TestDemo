//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
  },
  clickMe: function () {
    console.log(111);
    wx.request({
      url: 'https://interface.meiriyiwen.com/article/today?dev=1', 
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res)
      }
    })
  },
  onLoad: function () {
   
  }
})
