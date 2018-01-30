// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//导入路由自定义的路由模块
//如果router目录下有index.js的话，默认就会找到它，不需要写index
import router from './router'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	components: {
		App
	},
	template: '<App/>',
	/*需要把录音实例挂载到这个router选项中*/
	router
})