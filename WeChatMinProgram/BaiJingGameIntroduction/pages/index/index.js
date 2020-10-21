//index.js
//获取应用实例
const app = getApp()
var postsData=require("../../data/gonglue.js");
// console.log(postsData);

Page({

  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3','demo-text-4','demo-text-5'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    isRefresh: false,
    interval: 2000,
    duration: 500,
    circular: true,
    currentData : 0,
    grid:[{
      name:'npc',
      url:'',
      icon:'/images/ic-1.JPG',
      pcid:0
    },{
      name:'探险',
      url:'',
      icon:'/images/ic-2.JPG',
      pcid:1
    },{
      name:'理财',
      url:'',
      icon:'/images/ic-3.JPG',
      pcid:2
    }
    ,{
      name:'农牧',
      url:'',
      icon:'/images/ic-4.JPG',
      pcid:3
    },{
      name:'建造',
      url:'',
      icon:'/images/ic-5.JPG',
      pcid:4
    },{
      name:'天级',
      url:'',
      icon:'/images/ic-6.JPG',
      pcid:5

    },{
      name:'侯级',
      url:'',
      icon:'/images/ic-7.JPG',
      pcid:6
    }
    ,{
      name:'卿级',
      url:'',
      icon:'/images/ic-8.JPG',
      pcid:7
    },{
      name:'士级',
      url:'',
      icon:'/images/ic-9.JPG',
      pcid:8
    }],
   
   
  },
  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  onLoad: function (options) {
    this.setData({ 
      post_key:postsData.glList
      });//将数据传递到data中
  },
  //获取当前滑块的index
  bindchange:function(e){
    const that  = this;
    that.setData({
      currentData: e.detail.current
    })
  },
  //点击切换，滑块index赋值
  checkCurrent:function(e){
    const that = this;

    if (that.data.currentData === e.target.dataset.current){
        return false;
    }else{

      that.setData({
        currentData: e.target.dataset.current
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
  },
  goDetailArticle(e) {
    var postId = e.currentTarget.dataset.postid;
    console.log(e);
    console.log(postId);
    wx.navigateTo({
     url: '../detail/article?id='+postId
    })
   },
   onItemClick: function(e){
      var pcId=e.currentTarget.dataset.pcid;
      // var pcName=e.currentTarget.dataset.name;
      console.log(e);
      console.log(pcId);
      // console.log(pcName);
      wx.navigateTo({
        url: '/pages/index/pc/person?id='+pcId
       })
   }
 

  
})
