# youtube-eggjs-server

## 官方文档
- https://eggjs.org


## Yapi 地址
- http://yapi.smart-xwork.cn/project/125427/interface/api

## 配置数据库

- docker 安装数据库
- 创建容器
```sh
docker pull mongo:latest
docker run -itd --name mongo -p 27017:27017 mongo
```
- 进入容器
```sh
docker exec -it 1f5c mongo  ( 1f5c 为容器 ID )
```
- 显示所有 数据库
```sh
show dbs
```
- 显示当前连接的数据库
```
db
```
- 切换连接的数据库(没有会自动创建)
```sh
use [数据库名字] 
```
- 显示数据库所有 表
```sh
show tables

```

- 使用 egg-mongoose
    - https://www.npmjs.com/package/egg-mongoose

## 请求参数校验
- 文档 https://github.com/node-modules/parameter#rule
- 安装 egg-validage 
```sh
yarn add egg-validate
```
## 各种模块

- router.js
    - 定义 API 的 url
    - 定义请求类型 (get, post, delete)
    - 使用 controller 中 定义的方法
- controller 
    - 定义 router 中引用的方法
    - 可以处理 前端请求过了的 请求数据 处理响应数据
    - 如果要操作数据库  就 引用 service 中定义的方法

- model 
    - 定义 数据库表结构 数据模型

- service  操作数据库的方法都在这里定义

- middleware
    - 项目中使用的 中间件
    - 比如 全局错误处理 获取当前登录用户信息

- extend(拓展)
    - 定义 helper.js   主要是全局的一些 公共方法

## 使用视频云点播
- 放在本次磁盘 存储过大 还要转码 还要提供不同清晰度的文件等
- 国内知名的有 阿里云 百度云 腾讯云点播服务 成熟方案

- 这里使用阿里云 视频点播(VOD)
    - https://vod.console.aliyun.com/?spm=5176.12818093.top-nav.dbutton.5adc16d0zoUG85#/guide

    - 开通服务  

    - 可以直接在控制台 上传自己的音频视频 url 就可以直接放在自己的前端项目中使用了

- 使用 SDK 上传 音视频
    - 文档中心: https://help.aliyun.com/document_detail/51512.html?spm=5176.12672711.help.dexternal.24da1fa3WW0rv9

    - 下载 vue Demo https://help.aliyun.com/document_detail/51992.htm?spm=a2c4g.11186623.0.0.54fc2e98PleslF#topic-1959787-table-sg9-e93-qrt


## 发布上线

- 






