---
title: Flex布局使用笔记
date: 2022-01-28 16:16:16
update: 2022-02-20
tags: flex
categories: css
excerpt: flex布局具有主轴（main-axis）与交叉轴（cross-axis），两轴的指定方向由属性flex-direction控制。flex-direction的方向为row时，主轴指向行（row）方向，交叉轴指向（column）方向；当flex-direction的方向为column时，主轴指向列（column）方向，交叉轴指向行（row）。
---

# Flex 布局使用笔记

## flex 容器

使用`display:flex/inline-flex;`将此元素的布局方式更改为 flex，其子元素就会遵循 flex 布局规则进行排列。

应用了弹性盒布局的子元素不再遵循正常流布局，block 级元素不会自动换行，而是按照 flex-direction 指定的方向进行排列。

我们可以对此容器设定 CSS 属性以指定子元素的排列方式，也可以对单个子元素进行单独控制。

flex 布局具有主轴（main-axis）与交叉轴（cross-axis），两个轴指定的方向是由 flex-direction 指定的。当 flex-direction 的方向改变，主轴与交叉轴的方向也会改变。即当 flex-direction 的方向为 row 时，主轴指向行（row）方向，交叉轴指向（column）方向；当 flex-direction 的方向为 column 时，主轴指向列（column）方向，交叉轴指向行（row）。所以上述的共同点是，主轴的方向与 flex-direction 的方向是一致的，换句话说，flex-direction 属性用于指定主轴的方向。

## 容器的属性主要有：

### flex-direction

确定主轴方向，默认值为 row

想象一下，我们在一张纸上写字时，通常是从左至右开始写，如果是写一幅对联，则是从上往下。flex 子元素的排列方式也与此类似。

此属性用于指定子元素的排列方向，是从上往下（column）、从左往右（row）、或是从下往上（column-reverse）、从右往左（row-reverse）

属性总结：

- column：从上往下
- row：从左往右，默认
- row-reverse：从右往左
- column-reverse：从下往上

### flex-wrap

确定是否换行，默认值为 nowrap

此属性指定子元素是否换行，如果子元素横着排后宽度之和大于父元素宽度，默认来说是需要换行的，就像打字打满一行后，编辑器会自动换行。但是此属性的默认值为 nowrap，即不换行，如果子元素的宽度之和大于父元素宽度，各子元素的宽度会被同比缩小至其之和为父元素宽度。

使用 wrap 设置父元素宽度无法容下子元素时换行；使用 wrap-reverse 设置元素从底部开始排列（从左至右）。

<img src="https://raw.githubusercontent.com/Anqing-None/PicStore/master/img/flex-wrap.png" alt="flex-wrap" style="zoom:50%;" />

<img src="https://raw.githubusercontent.com/Anqing-None/PicStore/master/img/flex-wrap-reverse.png" alt="flex-wrap" style="zoom:50%;" />

### flex-flow

flow 可以理解为“流”，此属性字面意思可以理解为 flex 的流设置，flex-flow 是 flex-direction 和 flex-wrap 两个属性的缩写（shorthand）。

即`flex-flow：row nowrap;`等价与`flex-direction:row; flex-wrap:nowrap;`。

### justify-content

指定主轴的对齐方式，默认值 flex-start

此属性可以理解为 x 轴（行）的对齐方式，但 justify-content 并不一定一直代表水平方向排列，而是随 flex-direction 的值变化。当 flex-direction 的值为 row，即行排列时，justify-content 控制水平行排列；当 flex-direction 的值为 column 时，justify-content 控制竖直列方向排列；与其相对应的则是 align-items，用于控制 y 轴（列）的对齐方式；

属性总结（以下含义仅当 flex-direction: row 时对应）：

- flex-start：默认，子元素按顺序左对齐排列
- flex-end：子元素按顺序右对齐排列
- center：居中排列
- space-around：平分父元素剩余的空间，每个元素左右两边间距相等
- space-between：将父元素剩余的空间平分作为每个元素的间隔

### align-items

指定主轴的对齐方式，默认值 flex-start

属性总结（以下含义仅当 flex-direction: row 时对应）：

- center：居中
- flex-start：居上
- flex-end：居底部
- strength：默认，子元素高度拉伸为父容器一致
- baseline：基于子元素内文本的基线对齐

### align-content

当 flex-wrap 为 wrap 时，此属性指定子元素分行排列后每一行（line）的排列方式，即每行之间的间距，每行的高度是否拉伸（默认拉伸）、每行向上对齐、向下对齐。

属性总结：

- space-between
- space-around
- strength：默认，拉伸每行的高度至父容器高度
- flex-end：居下对齐
- flex-start：居上对齐

## 子元素属性

flex 容器内的第一代子元素也可指定自身的排列方式；

### order

此属性指定排列顺序，默认值为 0，值为数值，如 1、2、3、4，元素会依据 order 进行从小到大排列；若想让某个子元素排到最后，将其 order 值改为 1；让某个子元素排到最前，将其 order 值改为-1；

### flex-grow

在主轴方向有剩余空间时，可以指定某个子元素扩大的宽度/高度。默认值为 0，即当有主轴有剩余空间时，不进行扩大。

### flex-shrink

在主轴方向宽度不够容纳子元素时，需要缩小元素宽度，默认是同比缩小，默认值为 1。可以指定单个元素是否缩小，与 flex-grow 类似。

### flex-basis

设定子元素主轴方向的宽度或高度，当 flex-direction 的方向为 row 时，相当于设定子元素的宽度；当 flex-direction 的方向为 column 时，相当于设定子元素的高度；

flex-basis 属性的优先级大于 width 属性，如果子元素本身指定了宽高，本身宽高则会被覆盖；

如果 flex-basis 设定为 0 时，子元素的宽高就会取决于内容的宽高，自身的宽高不会生效（没有设定 overflow：hidden 时）。

flex-basis 默认设定为 auto，如果元素设置了自身宽高，元素就会使用自身的宽高，如果元素没有指定自身宽高，那么就取决于内容的宽高。

### flex

flex 是 flex-grow flex-shrink flex-basis 三个属性的缩写。

如`flex: 0 1 auto;`为默认值，表示有剩余空间时不扩大，空间不够时同比缩小，宽度取决于自身设置的宽高。

如`flex: 1 1 auto;`，表示元素在主轴方向上同比缩小或扩大。

如果使用单值语法或双值语法，其他未设置的属性**并非是默认值**。

单值语法：

`flex: 1`，表示设置 flex-grow 为 1，等价于`flex: 1 1 0%;` flex-basis 并非是默认属性 auto；

`flex: 100px;`等价于`flex: 1 1 100px`;flex-grow 的值并非是默认值 0；

双值语法：

`flex: 1 100px;`，第一个参数为 flex-grow，第二个参数指定 flex-basis；

### align-self

指定单个子元素交叉轴方向的排列方式，会覆盖掉父元素 align-items 的属性。

align-self 的默认值为 stretch，如果 flex-direction 是 row 时，在子元素没有定义自己的 height 时，就表示拉伸子元素到容器的高度。flex-start flex-end center 三个值则表示沿着主轴的上下中对齐。

值：

flex-start

flex-end

center

stretch

## 参考资料：

[w3schools](https://www.w3schools.com/css/css3_flexbox_container.asp)

[2 分钟掌握 CSS flexbox 布局](https://www.bilibili.com/video/BV1P7411m7Nu)

[Flexbox 网页布局完全解构](https://www.bilibili.com/video/BV1qJ411N7TA)

[flex:0 flex:1 flex:none flex:auto 应该在什么场景下使用？](https://www.zhangxinxu.com/wordpress/2020/10/css-flex-0-1-none/)
