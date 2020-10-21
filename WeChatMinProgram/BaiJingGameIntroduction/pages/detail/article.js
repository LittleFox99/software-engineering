var postsData=require("../../data/gonglue.js");
Page(
  {
    data:{
       
    },
    onLoad:function(options){
      var postId=options.id;
    this.data.postId = postId;//把postId发送到data中，方便其他函数中调用（由于不需要进行数据绑定，因此没必要使用setData）
    var data = postsData.glList[postId];//postId与数据索引刚好相同，获取单篇文章的数据
    this.setData({...data});//发送数据到data中
      console.log(postsData);
      console.log(options);
    }
  }
)