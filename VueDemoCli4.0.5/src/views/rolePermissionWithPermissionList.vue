<template>
	<el-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="pmsId"
      label="权限码"
      width="180">
    </el-table-column>
    <el-table-column
      prop="roleId"
      label="角色码"
      width="180">
    </el-table-column>
    <el-table-column
      prop="dspname"
      label="权限名称"
	  width="180">
    </el-table-column>
	<el-table-column
	  prop="pmsistr"
	  label="权限"
	  width="180">
	</el-table-column>
	<el-table-column
	  prop="type"
	  label="类型"
	  width="180">
	</el-table-column>
  </el-table>
</template>

<script>
	export default {
		data() {
		  return {
			tableData: []
		  }
		},
		mounted() {
			var that = this;
			that.axios
                .post('/api/test/getRolePermissionWithPermissionListData',{
                    current:2,
                    size:200
                })
                .then(function(response){
                    window.console.log(response);
                    that.tableData = response.data.records;
                    window.console.log(response.data.records);
                })
                .catch(function (error) {
                    window.console.log(error);
                });
		},
		methods: {
		  tableRowClassName({row, rowIndex}) {
			window.console.log(row);
			if (rowIndex%2 === 1) {
			  return 'warning-row';
			}
			return '';
		  }
		},
		
  }
</script>

<style>
	.el-table .warning-row {
		background: #f0f9eb;
	}
</style>
