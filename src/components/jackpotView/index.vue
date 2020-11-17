<template>
  <div class="jackpot-view">
    <div class="m-con">
      <!--   灯效   -->
      <div class="u-light">
        <template v-for="(item,index) in 18">
          <span :style="{transform: `rotate(${360/18*(index)}deg)`}"></span>
        </template>
      </div>
      <!--   /灯效   -->

      <!--   转盘   -->
      <div class="u-turntable">
        <div class="u-con" :style="{transform: `rotate(${renderData.rotation}deg)`}">
          <template v-for="(item,index) in renderData.value">
            <div class="u-item" :style="[{transform: `rotate(${360/6*(index)}deg)`}]">
              <!--   扇形   -->
              <div class="u-icon"></div>
              <!--   /扇形   -->

              <div class="u-con">
                <span>{{item.name}}</span>
              </div>
            </div>
          </template>
        </div>
      </div>
      <!--   /转盘   -->

      <!--   指针   -->
      <div class="u-pointer" @click="handleLuckyDraw">
        <div class="u-con">
          <span>点击</span>
          <span>抽奖</span>
        </div>
      </div>
      <!--   /指针   -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    params: {
      type: Object,
      default: () => ({
        value: [
          {
            id: '1',
            name: 'asdasdads'
          },
          {
            id: '1',
            name: 'asdasdads'
          },
          {
            id: '1',
            name: 'asdasdads'
          },
          {
            id: '1',
            name: 'asdasdads'
          },
          {
            id: '1',
            name: 'asdasdads'
          },
          {
            id: '1',
            name: 'asdasdads'
          }
        ]
      })
    }
  },
  computed: {
    renderData () {
      return this.params
    }
  },
  methods: {
    // 抽奖
    handleLuckyDraw () {
      this.$emit('handleLuckyDraw')
    }
  }
}
</script>

<style lang="scss" scoped>
  @keyframes white-to-yellow {
    0% {
      background: #fff;
    }
    100% {
      background: #a39a1a;
    }
  }

  .jackpot-view {
    position: relative;
    width: 614px;
    height: 614px;
    margin: 50px auto;

    .m-con {
      position: relative;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      border: 24px solid #fdf051;
      border-radius: 50%;
      background-color: #fdf051;
      transform: rotate(0);
      transition: transform 300ms;

      .u-light {
        position: absolute;
        top: 50%;
        left: 50%;
        overflow: hidden;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #f1bf42;
        transform: translate(-50%, -50%);

        span {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          width: 15px;
          height: 100%;
          box-sizing: border-box;
          padding: 8px 0;
          margin: 0 auto;

          &:nth-child(odd) {
            &:before {
              content: '';
              display: flex;
              justify-content: center;
              align-items: center;
              width: 14px;
              height: 14px;
              border-radius: 50%;
              background-color: #fdf051;
              animation: white-to-yellow 600ms linear reverse infinite;
            }
          }

          &:nth-child(even) {
            &:before {
              content: '';
              display: flex;
              justify-content: center;
              align-items: center;
              width: 14px;
              height: 14px;
              border-radius: 50%;
              background-color: #fff;
              animation: white-to-yellow 600ms linear infinite;
            }
          }
        }
      }

      .u-turntable {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        overflow: hidden;
        width: 90%;
        height: 90%;
        box-sizing: border-box;
        border-radius: 50%;
        border: 10px solid #ed8b35;
        background-color: #fff;

        .u-con {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          transition: transform 300ms linear;

          .u-item {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            width: 50%;
            height: 100%;
            margin: 0 auto;

            .u-icon {
              position: fixed;
              left: -50%;
              width: 100%;
              height: 50%;
              box-sizing: border-box;
              transform: rotate(30deg) skewY(30deg);
              transform-origin: bottom right;
            }

            .u-con {
              position: absolute;
              top: 0;
              left: 0;
              display: flex;
              justify-content: center;
              align-items: flex-start;
              width: 100%;
              height: 50%;
              box-sizing: border-box;
              padding: 25% 0;

              span {
                font-size: 24px;
                color: #ec8b35;
              }
            }

            &:nth-child(odd) {
              .u-icon {
                border: 2px solid #ed8b36;
                background-color: #f9eab8;
              }
            }

            &:nth-child(even) {
              .u-icon {
                background-color: #fff;
              }
            }
          }
        }
      }

      .u-pointer {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 130px;
        height: 130px;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background-color: #f0be41;

        &:after {
          content: '';
          position: absolute;
          top: -36px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-right: 17.5px solid transparent;
          border-bottom: 40px solid #f1be41;
          border-left: 17.5px solid transparent;
        }

        .u-con {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 110px;
          height: 110px;
          border-radius: 50%;
          box-sizing: border-box;
          border: 5px solid #f9d977;
          background-color: #e46d2d;

          span {
            font-size: 24px;
            color: #fff;
          }
        }
      }
    }
  }
</style>
