<template>
  <div>
    <Card v-for="item in courses" :card="item"></Card>
  </div>
</template>

<script>
  import Card from './Card'

  export default {
    data () {
      return {
        courses: []
      }
    },
    components: {
      Card
    },
    created: function () {
      this.$http.post('/api/course/listMy').then((result) => {
        console.log(result.data)
        this.courses = result.data.data.list
        this.courses[0].type = ['可以学习', '建议学习']
      }, (err) => {
        console.log(err)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
