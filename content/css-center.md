+++
date = '2026-02-23T10:42:03+08:00'
draft = false
title = 'Css Center'
+++

<!-- 直接在 Markdown 中嵌入 HTML 和 CSS，方便练习 -->
<style>
/* 容器通用样式 */
.center-container {
  width: 400px;
  height: 300px;
  border: 2px solid #ccc;
  margin: 20px auto; /* 页面中水平居中容器本身 */
}

/* 1. Flex 水平垂直居中（推荐） */
.flex-center {
  display: flex;
  justify-content: center; /* 水平 */
  align-items: center; /* 垂直 */
  background: #f5f5f5;
}

/* 2. 单行文字垂直居中（行高法） */
.line-height-center {
  line-height: 300px; /* 行高 = 容器高度 */
  text-align: center; /* 水平居中 */
  background: #e8f4f8;
}

/* 3. 绝对定位 + transform 居中 */
.position-center {
  position: relative; /* 父元素相对定位 */
  background: #fdf2f8;
}
.position-center .child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 水平+垂直偏移自身50% */
  background: #fbb6ce;
  padding: 10px 20px;
}

/* 4. Grid 居中（极简） */
.grid-center {
  display: grid;
  place-items: center; /* 一行搞定水平+垂直 */
  background: #f0f8fb;
}
</style>

<h2>CSS 居中效果演示</h2>

<!-- 1. Flex 居中示例 -->
<div class="center-container flex-center">
  <p>Flex 水平垂直居中</p>
</div>

<!-- 2. 行高法居中示例 -->
<div class="center-container line-height-center">
  单行文字行高法垂直居中
</div>

<!-- 3. 绝对定位居中示例 -->
<div class="center-container position-center">
  <div class="child">绝对定位+transform 居中</div>
</div>

<!-- 4. Grid 居中示例 -->
<div class="center-container grid-center">
  <p>Grid 水平垂直居中</p>
</div>