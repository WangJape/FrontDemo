<template>
  <div id="app">
	<transition id="AppContainer" name = "slide-fade">
		<router-view/>
	</transition>
  </div>
</template>

<style lang="scss">
	*{
		margin: 0;
		padding: 0;
		border: 0;
	}
	/* 可以设置不同的进入和离开动画 */
	/* 设置持续时间和动画函数 */
	.slide-fade-enter{
	  transform: translateX(20px);
	  opacity: 0;
	}
	.slide-fade-leave-to{
		transform: translateX(-20px);
		opacity: 0;
	}
	.slide-fade-enter-active {
	  transition: all .2s ease .1s;
	}
	.slide-fade-leave-active {/* .slide-fade-leave-active 用于 vue 2.1.8 以下版本 */ 
	  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}

</style>
