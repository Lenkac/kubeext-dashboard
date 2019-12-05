## Preparation

You need to install [node](https://nodejs.org/) and [git](https://git-scm.com/) locally. The project is based on [ES2015+](https://es6.ruanyifeng.com/), [vue](https://cn.vuejs.org/index.html), [vuex](https://vuex.vuejs.org/zh-cn/), [vue-router](https://router.vuejs.org/zh-cn/), [vue-cli](https://github.com/vuejs/vue-cli) , [axios](https://github.com/axios/axios) and [element-ui](https://github.com/ElemeFE/element), all request data is simulated using [Mock.js](https://github.com/nuysoft/Mock).
node版本v12.x

## 本机运行

```bash
# clone the project
git clone https://github.com/kubesys/kubeext-dashboard.git

# enter the project directory
cd kubeext-dashboard

# install dependency
npm install

# develop
npm run dev
```

This will automatically open http://localhost:9527

## 镜像运行

```bash
# 运行
./build.sh   
#修改本机host文件
vi /etc/hosts   
[本机ip] dashboard.cloudplus.io    
[本机ip] monitor.cloudplus.io
[本机ip] vm-console.cloudplus.io
[本机ip] dashboardcontainer-console.cloudplus.io
```

## Advanced

```bash
# preview the release environment effect
npm run preview

# preview the release environment effect + static resource analysis
npm run preview -- --report

# code format check
npm run lint

# code format check and auto fix
npm run lint -- --fix
```

Refer to [Documentation](https://panjiachen.github.io/vue-element-admin-site/guide/essentials/deploy.html) for more information

## Online Demo

[Preview](https://panjiachen.github.io/vue-element-admin)

## Startup

```
vncserver

cd /home/iscas/VM-terminal/websockify
./websockify.py --web ../ --target-config=./token/token.conf 6080

cd /home/iscas/kubeext-backend
java -jar kubeext-backend-1.4.0.jar

cd /home/iscas/apache-tomcat-8.5.47/bin
```

## License

[MIT](https://github.com/PanJiaChen/vue-element-admin/blob/master/LICENSE)
