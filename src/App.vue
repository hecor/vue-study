<template>
  <div id="app">
    <div v-if="ifLogin">
      <MyList></MyList>
    </div>
    <div v-else>
      <Login v-on:login="loginSuccess"></Login>
    </div>
  </div>
</template>

<script>
  import MyList from './components/MyList'
  import Login from './components/Login'

  export default {
    name: 'app',
    data () {
      return {
        ifLogin: false
      }
    },
    components: {
      MyList,
      Login
    },
    beforeCreate: function () {
      this.$http.post('/api/ifLogin').then((result) => {
        if (result.data.status === 0) {
          console.log(result)
          this.ifLogin = true
          console.log('ifLogin:', this.ifLogin)
        }
      }, (err) => {
        console.log(err)
      })
    },
    methods: {
      loginSuccess: function () {
        this.ifLogin = true
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
