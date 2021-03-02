<template>
	<div id="Responsive">
		<button type="button" class="layui-btn">一个标准的按钮</button>
		<a href="http://www.layui.com" class="layui-btn">一个可跳转的按钮</a>
		<hr>
		<div class="layui-container">  
		  常规布局（以中型屏幕桌面为例）：
		  <div class="layui-row">
			<div class="layui-col-md9">
			  你的内容 9/12
			</div>
			<div class="layui-col-md3">
			  你的内容 3/12
			</div>
		  </div>
		   
		  移动设备、平板、桌面端的不同表现：
		  <div class="layui-row">
			<div class="layui-col-xs12 layui-col-md6">
			  <img src="../assets/logo.png" />
			</div>
			<div class="layui-col-xs12 layui-col-md6">
			  <p>
				  wejwqejqwoiejhqoiwehoqiwehoiqwehoqwehoqwhe
			  </p>
			</div>
			<div class="layui-col-xs4 layui-col-sm12 layui-col-md4">
			  移动：4/12 | 平板：12/12 | 桌面：4/12
			</div>
			<div class="layui-col-xs4 layui-col-sm7 layui-col-md8">
			  移动：4/12 | 平板：7/12 | 桌面：8/12
			</div>
			<div class="layui-col-xs4 layui-col-sm5 layui-col-md4">
			  移动：4/12 | 平板：5/12 | 桌面：4/12
			</div>
		  </div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	#Responsive div{
		background: #007DDB;
		border: 1px solid #00F7DE;
	}
</style>
