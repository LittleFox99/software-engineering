// pages/index/pc/person.js
// var pcData=require("../../data/person-data.js");
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isRefresh: false,
    currentTab: 0,
    taskList: [{
        title:"董其昌",
        imgSrc:"/images/p-1.JPG",
        
      },{
        title:"唐伯虎",
        imgSrc:"/images/p-2.JPG",
      },
      {
        title:"神舟",
        imgSrc:"/images/p-3.JPG",
      }]
  },
  onLoad() {
  
  },
  handleClick(e) {
    let currentTab = e.currentTarget.dataset.index
    this.setData({
      currentTab
    })
  },
  handleSwiper(e) {
    let {
      current,
      source
    } = e.detail
    if (source === 'autoplay' || source === 'touch') {
      const currentTab = current
      this.setData({
        currentTab
      })
    }
  },
  handleTolower(e){
    wx.showToast({
      title: '到底啦'
    })
  },
  refresherpulling() {
    wx.showLoading({
      title: '刷新中'
    })
    setTimeout(() => {
      this.setData({
        isRefresh: false
      })
      wx.showToast({
        title: '加载完成'
      })
    }, 1500)
  }
})