<template>
  <div>
    <navMenu></navMenu>
    <el-row type="flex" justify="center" align="middle">
      <el-col :span="8">
        <p class="txt-tag">Username</p>
        <el-input v-model="username" placeholder="username"></el-input>
        <p class="txt-tag">Password</p>
        <el-input v-model="password" type="password" placeholder="password"></el-input>
        <el-button class="btn-login" type="success" @click="login">Login</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import navMenu from './comps/navMenu'
import cgiService from '../service/cgiService'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  components: {
    navMenu
  },
  methods: {
    login: function () {
      cgiService.signIn({
        username: this.username,
        password: this.password
      }).then(res => {
        if (res.data.status === 'SUCCESS') {
          // redirect
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
  .txt-tag {
    font-size: 15px;
  }
	.btn-login {
    margin-top: 20px;
    width: 100%;
  }
</style>
