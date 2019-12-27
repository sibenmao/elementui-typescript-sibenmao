<template>
  <div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <span>prop传递 : {{input?input:'nothing...'}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'

@Component
export default class DialogTest extends Vue{
  @Prop(String) input!: string
  private dialogVisible: boolean = false

  openDiaglog():void {
    this.dialogVisible = true
  }
}

 
</script>
