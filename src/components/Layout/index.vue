<style lang="scss">
  .layout-main{
    height:100%;
    .el-aside {
      color: #333;
      .el-menu { border:none }
    }
    .el-container.is-vertical {
      .el-header {
        text-align:right; 
        font-size: 12px;
        line-height: 60px;
        margin-bottom: 3px;
        box-shadow: 0 4px 4px rgba(0,21,41,.08);
      }
    }
  }
</style>

<template>
  <div class="layout-main">
    <el-container style="height: 100%">
      <el-aside width="200px" style="background-color:#304156;height:100%">
        <el-menu
          :default-active="$route.path"
          text-color="#BFCBD9"
          active-text-color="#409EFF"
          background-color="#304156"
          unique-opened
          router>
          <el-menu-item index="/dashboard"><i class="el-icon-s-grid"></i>控制面板</el-menu-item>
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-help"></i>测试管理</template>
            <el-menu-item index="/test/tone_page"><i class="el-icon-top"></i>测试菜单-1</el-menu-item>
            <el-menu-item index="/test/ttwo_page"><i class="el-icon-bottom"></i>测试菜单-2</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      
      <el-container>
        <el-header>
          <el-dropdown>
            <i class="el-icon-user-solid" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>sibenmao</span>
        </el-header>
        
        <el-main style="background-color: #f0f2f5">
          <!-- <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
          </el-table> -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang='ts'>
export default {
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      tableData: Array(15).fill(item)
    }
  }
}
</script>