const app = getApp()


Page({
  data: {
    isRefresh: false,
    currentTab: 0,
    taskList: [{
      name: '四季',
      bjList:[
        {
          title:"寒辰",
          imgSrc:"/images/bj-1.JPG",
          
        },{
          title:"九秋",
          imgSrc:"/images/bj-2.JPG",
        },
        {
          title:"杨春",
          imgSrc:"/images/bj-3.JPG",
        },
        {
          title:"朱夏",
          imgSrc:"/images/bj-4.JPG",
        }
      ],
    }, {
      name: '苏州府',
      bjList:[
        {
          title:"望海潮",
          imgSrc:"/images/s-1.JPG",
          
        },{
          title:"宴清都",
          imgSrc:"/images/s-2.JPG",
        },
        {
          title:"撼庭秋",
          imgSrc:"/images/s-3.JPG",
          
        },{
          title:"江南好",
          imgSrc:"/images/s-4.JPG",
        }
      ],
    }, {
      name: '杭州府',
      bjList:[
        {
          title:"祭祀活动",
          imgSrc:"/images/jisi.JPG",
          
        },{
          title:"扇艺工坊",
          imgSrc:"/images/shanyi.JPG",
        },
        {
          title:"特产商栈",
          imgSrc:"/images/techan.JPG",
        },
        {
          title:"文化商栈",
          imgSrc:"/images/wenhua.JPG",
        }
      ],
    }, {
      name: '应天府',
      bjList:[
        {
          title:"昭君",
          imgSrc:"/images/yt-1.JPG",
          
        },{
          title:"西市",
          imgSrc:"/images/yt-2.JPG",
        },{
          title:"东市",
          imgSrc:"/images/yt-3.JPG",
        },{
          title:"文吴",
          imgSrc:"/images/yt-4.JPG",
        }
      ],
    }

    ]
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
      title: '到底啦！'
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
    }, 2000)
  }
})