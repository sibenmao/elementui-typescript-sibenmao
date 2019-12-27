// 1. vue-class-component提供
// import Vue from 'vue'
// import  Component  from 'vue-class-component'
// @Component
// export default class myMixins extends Vue {
//   val: string = "HelloTypeScript"
// }


// 2. @Component中混入.
import { Vue, Component } from 'vue-property-decorator';

// declare module 'vue/types/vue' {
//     interface Vue {
//       value: string;
//     }
// }

// @Component
// export default class myMixins extends Vue {
//   value: string = 'Hello woolllloodddd'
// }