<template>
  <div class="hello">
    <el-form :inline="true" :model="form" class="demo-form-inline">
      <el-form-item>
        <el-input v-model="form.phoneNumber" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        form: {
          phoneNumber: '',
          password: ''
        }
      }
    },
    methods: {
      onSubmit () {
        console.log('submit!')
        this.$http.post('/api/login', this.form).then((result) => {
          if (result.data.status === 0) {
            console.log('login success')
            console.log(result)
            this.$emit('login')
          } else {
            console.log(result)
          }
        }, (err) => {
          console.log(err)
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
