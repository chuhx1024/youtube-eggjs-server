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