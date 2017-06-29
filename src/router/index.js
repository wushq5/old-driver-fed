import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import SignIn from '@/components/SignIn'
import Teacher from '@/components/Teacher'
import UploadTeacher from '@/components/UploadTeacher'
import UploadHomework from '@/components/UploadHomework'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/sign_in',
      name: 'sign_in',
      component: SignIn
    },
    {
      path: '/upload_teacher',
      name: 'upload_teacher',
      component: UploadTeacher
    },
    {
      path: '/upload_homework',
      name: 'upload_homework',
      component: UploadHomework
    },
    {
      path: '/teacher',
      name: 'teacher',
      component: Teacher
    }
  ]
})
