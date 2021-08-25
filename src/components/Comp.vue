

<script lang="jsx">
import { ref } from "vue";
export default {
  setup() {
    const counter = ref(1000)
    const increment = () => {
      counter.value++
    }
    return () => (
      <>
        <div>compppp</div>
        <p onClick={increment}>{counter.value}</p>
      </>
    )
  }
}

  // ======== 原始写法 ========
  // export default {
  //   data () {
  //     return {
  //       counter: 11111
  //     }
  //   },
  //   render(h) {
  //     return (
  //       <div>
  //         <div>comp jsx</div>
  //         <p onClick={this.increment}>{this.counter}</p>
  //       </div>
  //     )
  //   },
  //   methods: {
  //     increment () {
  //       this.counter++
  //     }
  //   }
  // }
</script>

<style scoped>

</style>
