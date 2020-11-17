<template>
  <div class="app">
    <div class="g-header">
      <div class="m-left">
        <span></span>
        <span>积分抽奖微狗小盲盒</span>
      </div>
      <div class="m-right"></div>
    </div>
    <div class="g-body">
      <div class="m-title">
        幸运大抽奖
      </div>
      <div class="m-turntable">
        <draw @handleLuckyDraw="handleLuckyDraw"></draw>
      </div>
      <div class="m-list">
        <div class="u-list-top">
          <div class="u-list-top-left">
            中奖名单
          </div>
          <div class="u-list-top-right">
            中奖记录
            <span></span>
          </div>
        </div>
        <div class="u-list-bottom">
          <div class="u-list-item" v-for="i in 2" :key="i">
            <img class="u-item-avatar" src="./assets/背景.png"/>
            <div class="u-item-info">恭喜用户九十九 刚刚获得泡泡机一个哈哈哈</div>
            <div class="u-item-time">2分钟前</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Draw from './components/Draw'
export default {
  name: 'App',
  components: {
    Draw
  },
  methods: {
    handleLuckyDraw () {
      alert('handleLuckyDraw')
    }
  }
}
</script>

<style scoped lang="stylus">
  .app {
    box-sizing border-box
    width 750px
    height 1334px
    padding-top 70px
    background-image url("./assets/背景.png")
    background-repeat no-repeat
    background-size contain
    .g-header {
      width 694px
      height 48px
      line-height 48px
      vertical-align middle
      margin 0 auto
      .m-left {
        position relative
        float left
        font-size: 30px
        font-family: PingFang SC
        font-weight: 500
        color: #FFFFFF
        span:first-child {
          display inline-block
          margin-right 7px
          width: 15px
          height: 15px
          border: solid #FFFFFF
          border-width 4px 0 0 4px
          transform rotate(-45deg)
        }
      }
      .m-right {
        float right
        width 48px
        height 48px
        background-image url("./assets/fenxiang.png")
        background-repeat no-repeat
        background-size 48px 48px
      }
    }
    .g-body {
      width 690px
      margin 0 auto
      .m-title {
        width 420px
        height 89px
        margin 80px auto 0
        font-size 84px
        font-family PangMenZhengDao
        font-weight 400
        color #FFFFFF
        line-height 65px
      }
      .m-turntable {
        margin 107px auto 0
        text-align center
      }
      .m-zp {
        position relative
        width 614px
        height 614px
        margin 107px auto 0
        background-image url("./assets/转盘.png")
        background-repeat no-repeat
        background-size contain
        &::after {
          position absolute
          content ''
          width 130px
          height 170px
          background-image url("./assets/指针.png")
          background-repeat no-repeat
          background-size contain
          top 200px
          left 242px
        }
        span {
          position absolute
          width 130px
          text-align center
          font-size 26px
          font-family PingFang SC
          font-weight bold
          color #FC8607
        }
        span:nth-child(1) {
          top 125px
          left 245px
          transform rotate(0deg)
        }
        span:nth-child(2) {
          top 195px
          left 370px
          transform rotate(60deg)
        }
        span:nth-child(3) {
          top 365px
          left 380px
          transform rotate(120deg)
        }
        span:nth-child(4) {
          top 415px
          left 245px
          transform rotate(180deg)
        }
        span:nth-child(5) {
          top 365px
          left 105px
          transform rotate(240deg)
        }
        span:nth-child(6) {
          top 195px
          left 115px
          transform rotate(300deg)
        }
      }
      .m-list {
        width 690px
        height 253px
        margin-top 55px
        background: #FFFCD5
        border-radius: 10px
        .u-list-top {
          margin 0 30px 0 31px
          height 98px
          line-height 98px
          border-bottom  1px dashed
          border-color rgba(245, 101, 3, 0.2)
          .u-list-top-left {
            float left
            width 136px
            height 34px
            font-size 34px
            font-family PingFang SC
            font-weight bold
            color #F56503
          }
          .u-list-top-right {
            float right
            height 26px
            font-size 28px
            font-family PingFang SC
            font-weight 500
            color #F56503
            span {
              display inline-block
              margin-right 5px
              width: 12px
              height: 12px
              border: solid #F56503
              border-width 0 4px 4px 0
              transform rotate(-45deg)
            }
          }
        }
        .u-list-bottom {
          margin 0 30px 0 31px
          .u-list-item {
            width 629px
            height 38px
            line-height 38px
            margin-top 29px
            .u-item-avatar {
              float left
              width 38px
              height 38px
              border-radius 50%
            }
            .u-item-info {
              float left
              width 424px
              margin-left 12px
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
              font-size 26px
              font-family PingFang SC
              font-weight 400
              color #F56503
            }
            .u-item-time {
              float right
              font-size 26px
              font-family PingFang SC
              font-weight 500
              color #F56503
              opacity 0.49
            }
          }
        }
      }
    }
  }
</style>
