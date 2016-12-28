<template>
  <div>
    <h4>{{ courses.length }}</h4>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        courses: []
      }
    },
    created: function () {
      this.$http.post('/api/course/listMy').then((result) => {
        console.log(result.data)
        this.courses = result.data.data.list
      }, (err) => {
        console.log(err)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
