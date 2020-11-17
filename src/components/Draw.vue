<template>
  <div class="m-draw">
    <div class="u-light">
      <span v-for="i in 10 " :key="i" :style="{transform: 'rotate(' + i * 18 + 'deg)',
       '--animation': i % 2 === 0 ? 'light-white-to-yellow 1s linear infinite' : 'light-yellow-to-white 1s linear infinite'}"></span>
    </div>
    <div class="u-turntable">
      <div class="u-tt-container" v-for="(item,index) in data" :key="item.id" :style="{transform: 'rotate(' + index * 60 + 'deg)'}">
        <div class="u-tt-front">
          <span>{{item.info}}</span>
        </div>
        <div class="u-tt-show" :style="{backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#FDEBB2'}"></div>
      </div>
    </div>
    <div class="u-point"></div>
  </div>
</template>

<script>
export default {
  name: 'Draw',
  data () {
    return {
      data: [{
        id: 1,
        info: '谢谢参与'
      }, {
        id: 2,
        info: '微狗小盲盒（二阶）'
      }, {
        id: 3,
        info: '谢谢参与'
      }, {
        id: 4,
        info: '微狗小盲盒（二阶）'
      }, {
        id: 5,
        info: '谢谢参与'
      }, {
        id: 6,
        info: '微狗小盲盒（二阶）'
      }]
    }
  }
}
</script>

<style scoped lang="stylus">
  .m-draw {
    position relative
    display inline-block
    width 614px
    height 614px
    box-sizing border-box
    border 26px solid
    border-radius 50%
    border-color #FFF102
    .u-light {
      position absolute
      width 565px
      height 565px
      top -1px
      left 0
      box-sizing border-box
      border 28px solid #FABD01
      border-radius 50%
      span {
        position absolute
        width 26px
        height 100%
        top 0
        left calc(50% - 13px)
        &:before {
          content ''
          position absolute
          width 20px
          height 20px
          border-radius 50%
          top -24px
          left 3px
          background-color #F56503
          animation var(--animation)
        }
        &:after {
          content ''
          position absolute
          width 20px
          height 20px
          border-radius 50%
          bottom -24px
          left 3px
          background-color #F56503
          animation var(--animation)
        }
      }
    }
    .u-turntable {
      position absolute
      width 511px
      height 511px
      top 25px
      left 27px
      box-sizing border-box
      border 20px solid #FC8607
      border-radius 50%
      overflow hidden
      .u-tt-container {
        position absolute
        width 50%
        height 50%
        top 0
        left 25%
        transform-origin 50% 100%
        .u-tt-front {
          position absolute
          top 0
          left 0
          width 100%
          height 235px
          /*line-height 235px*/
          text-align center
          vertical-align middle
          border 1px solid white 0.0
          box-sizing border-box
          font-size 26px
          font-family PingFang SC
          font-weight bold
          color #FC8607
          z-index 99
          span {
            position absolute
            width 130px
            text-align center
            top 50px
            left 55px
          }
        }
        .u-tt-show {
          position absolute
          top 0
          left 0
          width 100%
          height 235px
          border: 4px solid #FC8607
          box-sizing border-box
          background-color #ffffff
          transform-origin 0% 100%
          transform translate(50%,0%) rotate(-60deg) skewX(-30deg)
        }
      }
    }
  }
</style>
