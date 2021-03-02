<template>
  <div>
  <!-- banner部分 -->
  <div class="banner news">
    <div class="title">
      <p>实时新闻</p>
      <p class="en">Real-time News</p>
    </div>
  </div>
  <!-- main -->
  <div class="main-news">
    <div class="layui-container">
      <div class="layui-row layui-col-space20">
      	<!--开始-->
        <div class=" content newsBox layui-container"><!--  -->
            <div class="news-content layui-row">
				<!-- 图片 -->
				<div class="layui-col-xs12 layui-col-md6">
					<router-link  to="/newsDetail"  >
						<img src="../assets/logo.png">
					</router-link>
				</div>
				
				<!-- 总文字 -->
				<div class="layui-col-xs12 layui-col-md6">
					<div class="news-panel  ">
						<!-- 标题 -->
						<strong class="news-title"><router-link to="/newsDetail"></router-link></strong>
						<!-- 内容文字 -->
						<p class="news-detail"><span><div class="detail" style="text-overflow:ellipsis"></div></span></p><br/>
						<!-- 时间 -->
						<p class="read-push"><router-link to="/newsDetail">[详细]&nbsp;&nbsp;</router-link>阅读 <span></span>&nbsp;&nbsp;&nbsp;&nbsp;发布时间：<span></span></p>
					</div>
				</div>
            </div>
        </div>
        <!--结束-->
      </div>
      <div id="page"></div>
    </div>
  </div>
  </div>
</template>
<script>
  
</script>

<style scoped>
  .news-title {
    text-align: left;
  }
  .news-detail {
    color:#505050;
    overflow:hidden;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    text-align: left;
  }
/*  .news-content {
    display: flex;
  } */
  .newsBox {
    width:580px;
    height:180px;
  }
  #page {
    margin-top: 5%;
    width:100%;
    display: flex;
    justify-content: center;
  }
</style>
