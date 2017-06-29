<template>
  <el-row type="flex" justify="center" align="middle">
    <el-button type="success" @click="goUploadHomework">Upload Homework</el-button>
    <el-col :span="14">
      <img :src="teacher.photo" height="250" width="250" alt="">
      <p>{{teacher.name}}</p>
      <p>{{teacher.desc}}</p>
      <p>Birthday: {{teacher.birthday}}</p>
      <p>B-W-H: {{teacher.bwh}}</p>
      <p>Height: {{teacher.height}}cm</p>
      <p>Weight: {{teacher.weight}}kg</p>
    </el-col>
    <el-col :span="4" v-for="(homework, index) in homeworks" :key="homework">
      <el-card :body-style="{ padding: '0px' }" @click.native="toHomework(homework)">
        <img :src="homework.cover" class="image">
        <div class="name">
          <span v-text="homework.id"></span>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import cgiService from '../service/cgiService'
export default {
  data () {
    return {
      teacher: {}, // Object, fetch from router
      homeworks: []
    }
  },
  methods: {
    getHomeworks: function (teacherId) {
      cgiService.getAllHomeworksByTeacherId({teacherId})
        .then((res) => {
          if (res.data && res.data.length > 0) {
            this.homeworks = res.data
          }
        })
        .catch(err => {
          console.log(err)
        })
    },

    init: function () {
      console.info(this.$store.state)
      this.teacher = this.$store.state.teacher
      this.getHomeworks(this.teacher._id)
    },

    goUploadHomework: function () {
      this.$router.push({name: 'upload_homework'})
    }
  },
  created: function () {
    this.init()
  }
}
</script>

<style scoped>
 
</style>
