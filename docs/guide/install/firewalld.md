---
# This is the title of the article
# title: One-click Script
# This is the icon of the page
icon: code
# This control sidebar order
order: 9
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - linux
  - 防火墙
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# Linux 防火墙firewall-cmd配置命令大全



启动CentOS/RHEL 7后，防火墙规则设置由firewalld服务进程默认管理。
一个叫做firewall-cmd的命令行客户端支持和这个守护进程通信以永久修改防火墙规则。


查看状态
```bash
firewall-cmd --state
```
查看防火墙所有信息
```bash
firewall-cmd --list-all
```
查看已经开放的端口：
```bash
firewall-cmd --list-ports
```
如要查询是否开启80端口
```bash
firewall-cmd --query-port=80/tcp
```
永久打开一个新端口（如TCP/8080）
如果不使用“–permanent”标记，把么防火墙规则在重启后会失效
```bash
firewall-cmd --permanent --zone=public --add-port=8080/tcp
```
命令含义：
```bash
–zone #作用域
–add-port=8080/tcp #添加端口，格式为：端口/通讯协议
–permanent #永久生效，没有此参数重启后失效
```
开放多个端口
```bash
firewall-cmd --permanent --zone=public --add-port=80-90/tcp
```
移除一个端口
```bash
firewall-cmd --permanent --zone=public --remove-port=8080/tcp
```
重新加载防火墙
添加或删除开发端口必须重新加载才会生效
```bash
firewall-cmd --reload
```
firewall的基本启动/停止/重启命令
```bash
systemctl stop firewalld 		#停止firewall
systemctl start firewalld 		#启动firewall
systemctl restart firewalld 	#重启firewall
systemctl enable firewalld 		#开启firewall开机启动
systemctl disable firewalld 	#禁止firewall开机启动
```
查看本机已经启用的监听端口
```bash
netstat -ant 	#CentOS7以下使用
ss -ant	 		#7及以上使用ss
```
常用命令总结

```bash
firewall-cmd --state                           #查看防火墙状态，是否是running
firewall-cmd --reload                          #重新载入配置，比如添加规则之后，需要执行此命令
firewall-cmd --get-zones                       #列出支持的zone
firewall-cmd --get-services                    #列出支持的服务，在列表中的服务是放行的
firewall-cmd --query-service ftp               #查看ftp服务是否支持，返回yes或者no
firewall-cmd --add-service=ftp                 #临时开放ftp服务
firewall-cmd --add-service=ftp --permanent     #永久开放ftp服务
firewall-cmd --remove-service=ftp --permanent  #永久移除ftp服务
firewall-cmd --add-port=80/tcp --permanent     #永久添加80端口 
iptables -L -n                                 #查看规则，这个命令是和iptables的相同的
man firewall-cmd                               #查看帮助
```
