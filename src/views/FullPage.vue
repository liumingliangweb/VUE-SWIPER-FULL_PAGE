<template>
  <swiper :options="swiperOption" ref="mySwiper" id="fullpage" class="site__header">
      <swiper-slide class="section">
        <div class="section-main">
            <div class="title ani" swiper-animate-effect="bounceInLeft" swiper-animate-duration="0.5s">Liu-整页H5活动demo第一页</div>
            <div   class="ani" swiper-animate-effect="bounceInUp" swiper-animate-delay="0.3s" swiper-animate-duration="0.5s"><img src="../assets/alloytouch.png"></div>
            <div  swiper-animate-delay="0.5s"  class="powered ani" swiper-animate-effect="bounceIn infinite"  swiper-animate-duration="0.5s">By AlloyTeam</div>
        </div>
      </swiper-slide>
      <swiper-slide class="section">
          <div class="section-main">
          <div class="title ani" swiper-animate-effect="flipInY"  swiper-animate-duration="0.5s" >Powerful Features</div>
          <div swiper-animate-delay="0.4s"  class="ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s"><img src="../assets/power.png"></div>
          </div>
      </swiper-slide>
      <swiper-slide class="section">
          <div class="section-main">
              <div class="title ani" swiper-animate-delay="0.1s" swiper-animate-effect="flipInY" >Scrolling Demo↓</div>
              <div id="demo0"  swiper-animate-delay="0.4s"  class="ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s">
                  <div style="height: 250px;overflow: hidden;">
                      <ul id="scroller" style="list-style: none;text-align: left;font-size: 14px;">
                          <li>Hello, AlloyTouch!</li>
                          <li>AlloyFinger</li>
                          <li>Transformjs</li>
                          <li>AlloyFlow - </li>
                          <li>Nuclear </li>
                          <li>AlloyGameEngine</li>
                          <li>Rosin</li>
                          <li>LivePool</li>
                          <li>AlloyStick</li>
                          <li>CodeStar</li>
                          <li>AlloyDesigner</li>
                          <li>JX</li>
                          <li>TEditor</li>
                          <li>JXAnimate</li>
                          <li>Spirit</li>
                          <li>AlloyImage</li>
                          <li>ModJS</li>
                          <li>Pretty row 16</li>
                          <li>stepify</li>
                          <li>AlloyTimer</li>
                          <li>Alloy Desktop</li>
                          <li>JX UI</li>
                          <li>CodeTank</li>
                          <li>iSpriter</li>
                          <li>Rythem</li>
                          <li>Go!Png </li>
                          <li> row 1</li>
                          <li> row 2</li>
                          <li> row 3</li>
                          <li>row 5</li>
                          <li> row 5</li>
                          <li> row 7</li>
                          <li> row 8</li>
                          <li> row 9</li>
                          <li> row 11</li>
                          <li> row 11</li>
                          <li> row 12</li>
                          <li> row 13</li>
                          <li> row 14</li>
                          <li> row 15</li>
                          <li> row 16</li>
                          <li> row 17</li>
                          <li> row 18</li>
                          <li> row 19</li>
                          <li> row 20</li>
                          <li> row 21</li>
                          <li> row 22</li>
                          <li> row 23</li>
                          <li> row 24</li>
                          <li style="border-bottom: none;"> row 25</li>
                      </ul>
                  </div>

              </div>
          </div>
      </swiper-slide>
      <swiper-slide class="section">
          <div class="section-main">
              <div class="title ani" swiper-animate-effect="flipInY" swiper-animate-duration="0.5s">Rotation 3D Demo↓</div>
              <div id="demo1" ><img id="demo-img" src="../assets/atLogo.png"></div>
          </div>
      </swiper-slide>
      <swiper-slide class="section">
          <div class="section-main">
          <div class="title ani" swiper-animate-delay="0.1s" swiper-animate-effect="lightSpeedIn"  swiper-animate-duration="0.5s">Physical Feedback</div>
          <div  class="ani" swiper-animate-delay="0.5s" swiper-animate-effect="flipInX"  swiper-animate-duration="0.5s"><img src="../assets/physics.png"></div>
      </div> </swiper-slide>
      <swiper-slide class="section">
          <div class="section-main">
          <div class="title ani"  swiper-animate-delay="0.1s" swiper-animate-effect="flipInY"  swiper-animate-duration="0.5s">Smooth Motion</div>
          <div  class="ani" swiper-animate-delay="0.5s" swiper-animate-effect="rotateIn"  swiper-animate-duration="0.5s"><img src="../assets/speed.png"></div>
      </div>  </swiper-slide>
      <swiper-slide class="section">
          <div class="section-main">
          <div class="title ani"  swiper-animate-delay="0.1s" swiper-animate-effect="rollIn"  swiper-animate-duration="0.5s">Simple API</div>
          <div  class="ani" swiper-animate-delay="0.5s" swiper-animate-effect="rotateIn"  swiper-animate-duration="0.5s"><img src="../assets/simple.png"></div>
          </div>  </swiper-slide>
      <swiper-slide class="section">
          <div class="section-main">
          <div class="title ani"  swiper-animate-delay="0.1s" swiper-animate-effect="flipInY"  swiper-animate-duration="0.5s">Excellent Contributors</div>
          <div  class="ani" swiper-animate-delay="0.5s" swiper-animate-effect="flipInY"  swiper-animate-duration="0.5s"><img src="../assets/contributors.png"></div>

          <div  class="ani powered" swiper-animate-delay="0.9s" swiper-animate-effect="bounceIn"  swiper-animate-duration="0.5s"> powered by <a href="https://github.com/AlloyTeam/AlloyTouch">AlloyTouch</a> FullPage Plugin and animate.css</div>
          </div> </swiper-slide>
  </swiper>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import * as swiperAni from '../utils/swiper.animate.min.js';
import AlloyTouch from 'alloytouch';
require('../utils/transform.js');

export default {
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        direction: 'vertical', // Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)。
        loop: false, // 是否开启循环
        setWrapperSize :true, // 开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
        autoHeight: true,
        height: window.innerHeight,
        width: window.innerWidth,
        on:{
          init: function(){
            swiperAni.swiperAnimateCache(this); //隐藏动画元素
            swiperAni.swiperAnimate(this); //初始化完成开始动画
          },
          slideChangeTransitionEnd: function(){
            swiperAni.swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
            //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
          }
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    init() {
        let target = document.querySelector("#demo-img");
        //给element注入transform属性
        window.Transform(target,true);

        new AlloyTouch({
            touch: "#demo1",//反馈触摸的dom
            vertical: false,//不必需，默认是true代表监听竖直方向touch
            target: target, //运动的对象
            property: "rotateY",  //被滚动的属性
            touchStart:function(evt){
                evt.stopPropagation();
            },
            bindSelf:true,
            touchMove:function(evt){
                evt.stopPropagation();
            }

        })

        let scroller = document.querySelector("#scroller");
        window.Transform(scroller,true);

        let at = new AlloyTouch({
            touch:"#demo0",//反馈触摸的dom
            target: scroller, //运动的对象
            property: "translateY",  //被滚动的属性
            min:250-4000,
            touchStart:function(evt){
                evt.stopPropagation();
            },
            touchMove:function(evt){
                evt.stopPropagation();
            },
            bindSelf:true,
            max: 0 //不必需,滚动属性的最大值
        })
    }
  },
  mounted() {
    this.init();
  },
}
</script>
<style scoped>
html,body{
    margin: 0;
    padding: 0;
    text-align: center;
    overflow: hidden;
    width: 100%;
    height: 100%;
}

*{
    box-sizing: border-box;
}

.section{
    width: 100%;
    font-size: 24px;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.section .title{
    /* line-height: 100px; */
    font-size: 24px;
    margin-bottom: 40px;
}
.site__header {
    /*-webkit-animation: bounceInUp 1s;*/
}

.powered{
    font-size: 20px;
    color: #454545;
    margin-top: 20px;
}

.section-main{
    width: 100%;
    text-align: center;;
}

a{
    text-decoration: none;
}

#demo0{
    width: 160px;
    overflow: hidden;
    border: 1px solid rgb(204, 204, 204);
    text-indent: 10px;
    margin: 0 auto;
}


#demo0 ul {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    text-align: left;
}

#demo0 li {
    padding: 0 10px;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #fff;
    background-color: #fafafa;
    font-size: 14px;
}

#demo1{
    /* height: 210px; */
    width: 220px ;
    margin: 0 auto;
    text-align: center;
}
*{
    box-sizing: border-box;
}
.progress{
    width: 100%;
    font-size: 0px;
    white-space: nowrap;
    position: fixed;
    bottom: 0px;
    height: 4px;
    background-color: #CCCCCC;
}

.progress-items{
    width: 100%;
    z-index: 2;
    height: 4px;
    position: absolute;
}
.progress-rate{
    width: 0%;
    z-index: 1;
    position: absolute;
    height: 4px;
    background-color: #00ABEB;
    transition: all .5s ease;
}
</style>
<style>
/* .swiper-container {
    width: 100%;
    height: 667px;
} */
</style>


