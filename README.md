# 自习室预约平台微信小程序

#### 介绍
自习室预约平台微信小程序是基于uni-app+uView+HBuilder X开发的预约类小程序，目前小程序端的基础页面已经完成，剩下待完善的界面以及显示逻辑bug待后面有时间再完善。

小程序的后端代码仓库：[自习室预约平台后端](https://gitee.com/zmn_repository/study-room-vue.git)

这个小程序是模仿去K书小程序写的，除了主题色，样式布局方面基本差不多。很多地方还有待完善，如有任何问题可以提交issue。

#### 软件架构
##### 小程序端

- 开发工具：HBuilder X
- UI框架：uView 2.0

#### 目录结构说明

``` markdown
|-- wx-study-room
<<<<<<< HEAD
    ├─common						#通用请求，一言api
    │  └─request
    │      └─api
    ├─components					#通用组件
    │  ├─my-action-sheet
    │  ├─my-card-package
    │  ├─my-index-card
    │  ├─my-index-ER
    │  ├─my-learn-record
    │  ├─my-login
    │  ├─my-navbar
    │  ├─my-pay-record
    │  ├─my-pay-status
    │  ├─my-popup
    │  ├─my-seat-area
    │  └─my-tabbar
    ├─config						#全局配置，以及请求封装
    ├─node_modules					#uview 模块，更改了一小部分组件源码
    │  └─uview-ui
    ├─other_pages					#除主体模块的其他页面
    │  ├─check-seat
    │  ├─payment
    │  ├─rank
    │  ├─recharge
    │  ├─recharge-card
    │  ├─recharge-locker
    │  ├─seat
    │  └─static
    │      ├─package
    │      └─rank
    ├─other_pages_mine				#个人信息模块的其他页面
    │  ├─account
    │  ├─card_package
    │  ├─learn_record
    │  ├─locker
    │  └─static
    ├─pages							#主体模块页面
    │  ├─index
    │  ├─mine
    │  ├─order
    │  └─test
    ├─static						#主体模块静态文件
    │  ├─index
    │  ├─mine
    │  ├─order
    │  └─package
    ├─store							# vue store
    └─utils
=======
├─common						#通用请求，一言api
│  └─request
│      └─api
├─components					#通用组件
│  ├─my-action-sheet
│  ├─my-card-package
│  ├─my-index-card
│  ├─my-index-ER
│  ├─my-learn-record
│  ├─my-login
│  ├─my-navbar
│  ├─my-pay-record
│  ├─my-pay-status
│  ├─my-popup
│  ├─my-seat-area
│  └─my-tabbar
├─config						#全局配置，以及请求封装
├─node_modules					#uview 模块，更改了一小部分组件源码
│  └─uview-ui
├─other_pages					#除主体模块的其他页面
│  ├─check-seat
│  ├─payment
│  ├─rank
│  ├─recharge
│  ├─recharge-card
│  ├─recharge-locker
│  ├─seat
│  └─static
│      ├─package
│      └─rank
├─other_pages_mine				#个人信息模块的其他页面
│  ├─account
│  ├─card_package
│  ├─learn_record
│  ├─locker
│  └─static
├─pages							#主体模块页面
│  ├─index
│  ├─mine
│  ├─order
│  └─test
├─static						#主体模块静态文件
│  ├─index
│  ├─mine
│  ├─order
│  └─package
├─store							# vue store
└─utils
>>>>>>> master
```

#### 平台模块说明

- 首页
  - 导航栏：门店选择
  - 轮播图：优惠信息
  - 余额充值、卡券套餐、美团兑换（未开发）
  - 个人二维码（未开发）
  - 热门活动（半开发）
- 预约
  - 门店信息展示
  - 预约时间选择
- 我的（个人信息）
  - 个人信息
  - 平台账户信息
  - 排行榜
  - 意见反馈（待完善）


#### 安装教程

1. 克隆该代码到你自己的电脑上

   ``` 
   git clone https://gitee.com/zmn_repository/wx-study-room.git
   ```

2.  使用HBuilder编辑器打开项目，如果你电脑上没有该编辑工具请下载：https://www.dcloud.io/hbuilderx.html

3.  找到/App.vue

4.  配置好的Hbuilder，例如设置好微信开发者工具的路径，小程序appid等，配置教程请参考uni-app官网：https://uniapp.dcloud.io/quickstart-hx

#### 小程序端页面效果演示

![主体模块展示](https://gitee.com/peacefulCC/images/blob/master/images/wx_study_room/%E4%B8%BB%E4%BD%93%E6%A8%A1%E5%9D%97%E5%B1%95%E7%A4%BA.png)

![首页模块展示](https://gitee.com/peacefulCC/images/raw/master/images/wx_study_room/%E9%A6%96%E9%A1%B5%E6%A8%A1%E5%9D%97.png)

![预约模块展示](https://gitee.com/peacefulCC/images/raw/master/images/wx_study_room/%E9%A2%84%E7%BA%A6%E6%A8%A1%E5%9D%97.png)

![个人信息模块展示](https://gitee.com/peacefulCC/images/raw/master/images/wx_study_room/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF.png)

![登录流程展示](https://gitee.com/peacefulCC/images/raw/master/images/wx_study_room/%E7%99%BB%E5%BD%95%E6%A8%A1%E5%9D%97.png)

#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request

**代码不易，如果此项目有给您带来帮助的话可以给项目一个 Star 嘛。**
