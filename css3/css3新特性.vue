<template>
  <div>
    常用的CSS3新标签
    ￥1.创建圆角边框：border-radius：25rpx
    添加阴影框：box-shadow: 10px（右） 10px（下） 5px（马赛克右下）100px（变大） #888888;
    CSS3 边界图片：border-image

    2.渐变颜色：background: linear-gradient(red, blue)上到下
    background: linear-gradient(to right, red , blue)左到右
    background: linear-gradient(to bottom right, red , blue)从左上角开始（到右下角）

    ￥3.文体效果：text-shadow: 5px 5px 5px #FF0000;
    white-space:nowrap  规定段落中的文本不进行换行
    text-overflow:ellipsis 显示溢出
    p {word-wrap:break-word;} 允许长文本换行

    4.2D 转换
    transform:rotate(30deg) 使…变形 旋转 加角度 固定不变的2D效果
    transform: translate(50px,100px);交互使用translate转化效果为=>根据左(X轴)和顶部(Y轴)位置给定的参数
    transform: scale(2,3) =>增加或减少的大小(X轴)(Y轴)
    transform: skew(30deg,20deg)=>skew(30deg,20deg) 元素在X轴和Y轴上倾斜20度30度

    5.过渡动画=>元素从一种样式逐渐改变为另一种的效果。（添加效果的）（指定效果的持续时间）
    transition:width 2s;（时间）加上div:hover{width:300px;}（效果）
    *transition（串 si 顺）过渡；转变3D效果

    *transition（简写4个效果）: width 2s, height 2s, transform 2s;（3D效果 翻转160度配合2D效果完成过渡）

    6.多列布局（跟复制一样）：column-count

    7.CSS3 用户界面
    resize（调整）:both;overflow:auto;
    box-sizing：border-box 属性允许您以确切的方式定义适应某个区域的具体内容。
    外形修饰（outline-offset ）

    ￥8.圆角图片：border-radius: 8px
    椭圆形图片:border-radius: 50%;
    缩略图:图片属性加padding
    **图片滤镜filter （feel特）给图片加上滤镜=>filter: blur(4px)

    ￥9.css3框大小：
    设置了 box-sizing: border-box; 则 padding(内边距) 和 border(边框) 也包含在 width 和 height 中

    ￥10.CSS3 弹性盒子(Flex Box)
    **在flex布局中，子元素也是可以设置宽跟高度**
    但是如果使用overflow:auto;就没效果了 因为盒子的宽度是自适应的!!!

    11.CSS3 多媒体查询
    1.viewport(视窗) 的宽度与高度
    2.设备的宽度与高度
    3.朝向 (智能手机横屏，竖屏)
    4.分辨率
    <link rel="stylesheet" media="mediatype and|not|only (expressions表达式)" href="print.css">

    5.例子@media screen（all所有，print打印机，screen电脑，平板，手机、speech屏幕热度器） and (min-width: 480px)
  </div>
</template>

