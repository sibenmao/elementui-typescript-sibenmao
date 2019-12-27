<template>
  <div>
    <el-row :gutter="12">
      <el-col :span="8">
        <el-card shadow="hover">
          <div slot="header" class="clearfix"><h1>Mixins ( vue-class-component )</h1></div>
          
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">
          <div slot="header" class="clearfix"><h1>标题名称</h1></div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">
          <div slot="header" class="clearfix"><h1>标题名称</h1></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
  import {Vue, Component, Emit, Watch} from 'vue-property-decorator'
  // import Component,{mixins} from 'vue-class-component'
  // import myMixins from '@/mixins/mixins.ts'
  @Component
  // export class myComponent extends mixins(myMixins) {// 直接extends myMinxins 也可以正常运行
  //   created(){     
  //     console.log(this.val)
  //   }
  // }
  export default class extends Vue {}
</script>
