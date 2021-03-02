<template>
	<div>
		<div style="width: 100%;height: 70px;background: #212A31;">
			<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
			  <el-radio-button :label="false">展开</el-radio-button>
			  <el-radio-button :label="true">收起</el-radio-button>
			</el-radio-group>
		</div>
		
		<div ref="IndexBody" style="position: relative;height: 600px;"><!-- 此处高度使用JS动态控制 -->
			
			<div class="nav-div" >
				
			<el-menu default-active="" class="el-menu-vertical" 
				@open="handleOpen" 
				@close="handleClose" 
				:collapse="isCollapse"
				background-color="#545c64">
			  <el-submenu index="1">
				<template slot="title">
				  <i class="el-icon-location"></i>
				  <span slot="title">导航一</span>
				</template>
				<el-menu-item-group>
				  <span slot="title">分组一</span>
				  <router-link to="/about"><el-menu-item index="1-1-1">about</el-menu-item></router-link>
				  <router-link to="/rolePermissionWithPermissionList"><el-menu-item index="1-1-2">rolePermissionWithPermissionList</el-menu-item></router-link>
				  <router-link to="/Responsive"><el-menu-item index="1-1-3">Responsive</el-menu-item></router-link>
				  <router-link to="/news"><el-menu-item index="1-1-4">news</el-menu-item></router-link>
				</el-menu-item-group>
				<el-menu-item-group title="分组2">
					<el-menu-item index="1-2">选项3</el-menu-item>
					<router-link to="/about"><el-menu-item index="1-1-1">about</el-menu-item></router-link>
					<router-link to="/about"><el-menu-item index="1-1-1">about</el-menu-item></router-link>
					<router-link to="/about"><el-menu-item index="1-1-1">about</el-menu-item></router-link>
					<router-link to="/about"><el-menu-item index="1-1-1">about</el-menu-item></router-link>
					<router-link to="/about"><el-menu-item index="1-1-1">about</el-menu-item></router-link>
					<router-link to="/about"><el-menu-item index="1-1-1">about</el-menu-item></router-link>
				</el-menu-item-group>
				<el-submenu index="1-3">
				  <span slot="title">选项4</span>
				  <el-menu-item index="1-3-1">选项1</el-menu-item>
				</el-submenu>
			  </el-submenu>
			  <el-menu-item index="2">
				<i class="el-icon-menu"></i>
				<span slot="title">导航二</span>
			  </el-menu-item>
			  <el-menu-item index="3" disabled>
				<i class="el-icon-document"></i>
				<span slot="title">导航三</span>
			  </el-menu-item>
			  <el-menu-item index="4">
				<i class="el-icon-setting"></i>
				<span slot="title">导航四</span>
			  </el-menu-item>
			</el-menu>
			</div>
			<div ref="MainContainer" class="MainContainer">
				<transition id="IndexContainer" name = "IndexContainer">
					<router-view/>
				</transition>
			</div>
		</div>
		<div style="width: 100%;height: 70px;background: #212A31;"></div>
	</div>
</template>

<script>
	export default{
		name: 'Index',
		data() {
		  return {
			isCollapse: false
		  };
		},
		mounted() {
			/* 动态设置网页主题高度Start */
			let indexBodyHeight = this.$refs.IndexBody.style.height;
			let documentHeight = document.documentElement.clientHeight || document.body.clientHeight;
			if(documentHeight > parseInt(indexBodyHeight)){
				 this.$refs.IndexBody.style.height = documentHeight-124 +"px";
			}
			/* 动态设置网页主题高度End */
			if(this.isCollapse){
				/* var mainContainer = document.getElementById("MainContainer"); */
				/* calc(100% - 65px) */
				this.$refs.MainContainer.style.left = "65px";
				this.$refs.MainContainer.style.width = "calc(100% - 65px)";
			}else{
				this.$refs.MainContainer.style.left = "201px";
				this.$refs.MainContainer.style.width = "calc(100% - 201px)";
			}
		},
		watch:{
			isCollapse:function(){
				if(this.isCollapse){
					this.$refs.MainContainer.style.left = "65px";
					this.$refs.MainContainer.style.width = "calc(100% - 65px)";
				}else{
					this.$refs.MainContainer.style.left = "201px";
					this.$refs.MainContainer.style.width = "calc(100% - 201px)";
				}
			}
		},
		methods: {
		  handleOpen(key, keyPath) {
			window.console.log(key, keyPath);
		  },
		  handleClose(key, keyPath) {
			window.console.log(key, keyPath);
		  }
		}
	}
</script>

<style>
/* 导航栏容器样式 */
	.nav-div{
		display: inline-block;
		overflow: hidden;
		height: 100%;
		overflow-y: auto;
		scrollbar-width: none;/* 适配大多数浏览器的设置不显示滚动条，就是不适合webkit内核浏览器 */
	}
/* 设置webkit内核浏览器，不显示滚动条 */
	.nav-div::-webkit-scrollbar {
        display: none;
    }
/* 设置导航栏的收缩与展开  Start */
	.el-menu-vertical:not(.el-menu--collapse) {
		width: 200px;
		min-height: 100%;
	}
	.el-menu-vertical{
		min-height: 100%;
	}
/* 设置导航栏的收缩与展开  End */
	
/* 导航内容主容器样式 */
	.MainContainer{
		position: absolute; 
		top:0px;
		bottom: 0px;/* 绝对定位，必须写bottom才能使局部滚动生效 */
		width: calc(100% - 65px);
		overflow-y: auto;
		transition:.3s cubic-bezier(.645,.045,.355,1);/* 贝塞尔转换速度曲线，与elementUI的全局转换曲线相同 */
	}
	
/* 设置div的滚动条样式，适用于webkit内核的浏览器      Start */
	.MainContainer::-webkit-scrollbar{
		width: 5px;     /*高宽分别对应横竖滚动条的尺寸*/
        height: 5px;
        border-radius: 10px;
	}
	.MainContainer::-webkit-scrollbar-thumb{/*滚动条里面小方块*/
        border-radius: 10px;
        /* -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.8); */
        background: #535353;
    }
	.MainContainer::-webkit-scrollbar-track
	{/*滚动条里面轨道*/
        /* -webkit-box-shadow: inset 0 0 100px rgba(0,0,0,0.2); */
        border-radius: 10px;
        background: #EDEDED;
    }
/* 设置div的滚动条样式，适用于webkit内核的浏览器      End */
	




/* 可以设置内容不同的进入和离开动画，设置持续时间和动画函数 */
	.IndexContainer-enter{
	  transform: translateX(20px);
	  opacity: 0;
	}
	.IndexContainer-leave-to{
		transform: translateX(-20px);
		opacity: 0;
	}
	.IndexContainer-enter-active {
	  transition: all .2s ease .1s;
	}
	.IndexContainer-leave-active {/* .slide-fade-leave-active 用于 vue 2.1.8 以下版本 */ 
	  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
</style>
