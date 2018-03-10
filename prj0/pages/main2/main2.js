// pages/main/main.js
var util = require('../../utils/util.js');

/*function show_gameover() {
  
}*/
//弃用
function countdown(that) {
  var second = that.data.second
  if (second == 0) {
    that.setData({
      second: "0"
    });
    //show_gameover(),
    /*wx.showLoading({
      title: '时间到！',
      mask: 'true',
      success: function (res) {
        setTimeout(function () {
          wx.hideLoading()
        }, 2000)
      }
    })*/
    return;
  }
  var time = setTimeout(function () {
    that.setData({
      second: second - 1
    });
    countdown(that);
  }
    , 1000)
}
var share = function () {
  Page.onShareAppMessage()
}
//timer
Page({
  onPullDownRefresh(that) {
    //nothing happens
  },

  onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },

  /**
   * 页面的初始数据
   */
  data: {
    title: ['点击方块即可开始', '大“手”子', '王の右手', '屏幕菌内牛满面', '孤独的你，有手为伴', '恭喜你打败了孤独的开发者'],
    show: '点击方块即可开始',
    num: 0,
    second: 15,
    x: 325,
    y: 300,
    color: '#7461F5',
  },

  start: function (e) {
    this.setData({
      color: '#858CD1'
    })
  },

  tap: function (e) {
    this.setData({
      color: '#7461F5',
      x: Math.random()*650,
      y: Math.random()*1000
    })
  },

  finaltap:function(e){
    if (this.data.second == 0) {
      wx.showModal({
        title: '游戏结束！',
        content: '你在“手速测试”困难关卡获得了称号“' + this.data.show + '”，手速高达' + this.data.num * 4 + '次每分钟！',
        confirmText: '再来一盘',
        cancelText: '返回',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.reLaunch({
              url: '../main2/main2',
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
            wx.reLaunch({
              url: '../index/index',
            })
          }
        }
      })
      return
    }
  },

  end: function () {
    if (this.data.second == 0) {
      wx.showModal({
        title: '游戏结束！',
        content: '你在“手速测试”困难关卡获得了称号“' + this.data.show + '”，手速高达'+this.data.num*4+'次每分钟！',
        confirmText: '再来一盘',
        cancelText: '返回',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.reLaunch({
              url: '../main2/main2',
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
            wx.reLaunch({
              url: '../index/index',
            })
          }
        }
      })
      return
    }
    if (this.data.num == 0) {
      this.setData({
        show: this.data.title[1]
      })
      countdown(this)
    }
    else if (this.data.num == 10) {
      this.setData({
        show: this.data.title[2]
      })
    }
    else if (this.data.num == 40) {
      this.setData({
        show: this.data.title[3]
      })
    }
    else if (this.data.num == 90) {
      this.setData({
        show: this.data.title[4]
      })
    }
    else if (this.data.num == 150) {
      this.setData({
        show: this.data.title[5]
      })
    }
    this.setData({
      num: this.data.num + 1
    })
    //
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    // 调用函数时，传入new Date()参数，返回值是日期和时间  
    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据  
    this.setData({
      time: time
    });
    /*
    var d_or_n = 0;
    if (time >= 6 && time < 18) {
      d_or_n = 1;
    }*/
    //判断时间，弃用
    /*const ctx = wx.createCanvasContext('myCanvas')
    ctx.rect(10, 10, 5, 5)
    ctx.setFillStyle('red')
    ctx.clip()
    ctx.fill()
    ctx.rect(80, 80, 5, 5)
    ctx.setFillStyle('red')
    ctx.fill()
    ctx.draw()*/
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})