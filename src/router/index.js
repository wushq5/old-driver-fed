import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Favourite from '@/components/Favourite'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import Teacher from '@/components/Teacher'
import UploadTeacher from '@/components/UploadTeacher'
import UploadHomework from '@/components/UploadHomework'
import UpdateTeacher from '@/components/UpdateTeacher'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [{
        path: '/home/favourite',
        name: 'favourite',
        component: Favourite
      }, {
        path: '/home/upload_teacher',
        name: 'upload_teacher',
        component: UploadTeacher
      }, {
        path: '/home/sign_in',
        name: 'sign_in',
        component: SignIn
      }, {
        path: '/home/sign_up',
        name: 'sign_up',
        component: SignUp
      }]
    },
    {
      path: '/upload_homework',
      name: 'upload_homework',
      component: UploadHomework
    },
    {
      path: '/update_teacher',
      name: 'update_teacher',
      component: UpdateTeacher
    },
    {
      path: '/teacher',
      name: 'teacher',
      component: Teacher
    }
  ]
})
