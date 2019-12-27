<template>
  <div>
    <el-row :gutter="12">
      <el-col :span="8">
        <el-card shadow="hover">
          <div slot="header" class="clearfix"><h1>@Component & @Emit & @Prop & get</h1></div>
          <el-form ref="form" :model="form">
            <el-form-item>
              <el-input placeholder="请输入..." v-model="form.name" clearable></el-input>
            </el-form-item>
          </el-form>
          <el-button type="success" @click="handleOpenDialog">打开弹框 {{count}} 次</el-button>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">
          <div slot="header" class="clearfix"><h1>@Watch</h1></div>
            <el-input placeholder="please enter fullName..." v-model="fullName" clearable></el-input>
            <el-input placeholder="please enter firstName..." v-model="firstName" clearable></el-input>
            <el-input placeholder="please enter lastName..." v-model="lastName" clearable></el-input>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">
          <div slot="header" class="clearfix"><h1>@Watch ( 深度 )</h1></div>
          <el-form ref="oName" :model="oName" label-width="80px">
            <el-form-item label="fullName">
              <el-input placeholder="please enter fullName..." v-model="oName.fullName" clearable></el-input>
            </el-form-item>
            <el-form-item label="firstName">
              <el-input placeholder="please enter firstName..." v-model="oName.firstName" clearable></el-input>
            </el-form-item>
            <el-form-item label="lastName">
              <el-input placeholder="please enter lastName..." v-model="oName.lastName" clearable></el-input>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="12">
      <el-col :span="8">
        <el-card shadow="hover">
          <div slot="header" class="clearfix"><h1>Mixins ( @Component混入 )</h1></div>
          
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">
          <div slot="header" class="clearfix"><h1>@Model</h1></div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">
          <div slot="header" class="clearfix"><h1>标题名称</h1></div>
        </el-card>
      </el-col>
    </el-row>
    
    
    <DialogTest ref="dialogTest" :input="form.name"/>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Emit, Watch} from 'vue-property-decorator'
import DialogTest from './components/DialogTest.vue'
// import myMixins from '@static/js/mixins'

@Component({
  components: {DialogTest},
  // mixins: [myMixins]
})
export default class extends Vue {
  private num : number = 0
  private form = {name: '鸣人'}

  // 监视
  private fullName : string = ''
  private firstName : string = 'A'
  private lastName : string = 'B'

  // 深度监视
  private oName = {
    fullName: '',
    firstName: 'A',
    lastName: 'B'
  }

  // 计算属性
  get count() {
    return this.num
  }

  // // mixins
  // created(){
  //   console.log(this.value)
  // }

  // @Emit
  mounted(){  
    this.$on('emit-todo', function(n:string): void {
      console.log(n)
    })
    this.emitTodo("world");
  }
  @Emit()
  emitTodo(n: string): void {
    console.log('hello')
  }

  // 监听
  @Watch('firstName')
  firstNameActive(val:string): void {
    this.fullName = val + ' ' + this.lastName
  }
  @Watch('lastName', {immediate: true})
  lastNameActive (val:string): void {
    this.fullName = this.firstName + ' ' + val
  }

  // 监听 ( 深度 )
  @Watch('oName', {immediate: true, deep: true})
  oNameActive(val:string): void {
    this.oName.fullName = this.oName.firstName + ' ' + this.oName.lastName
  }

  // event foo
  private handleOpenDialog() : void {
    this.num++
    (this.$refs.dialogTest as DialogTest).openDiaglog()
  }
}
</script>
