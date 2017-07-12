'use strict'

import HttpService from './httpService'

let httpService = new HttpService()

export default {
  getAllTeachers: (config) => httpService._get('/teachers', config),

  createOneTeacher: (data, config) => httpService._post('/teachers', data, config),

  updateTeacher: (urlParams, data, config) => httpService._put(`/teachers/${urlParams.teacherId}`, data, config),

  getAllHomeworksByTeacherId: (urlParams, config) => httpService._get(`/teachers/${urlParams.teacherId}/homeworks`, config),

  createOneHomework: (data, config) => httpService._post('/teachers/homeworks', data, config),

  signIn: (data, config) => httpService._post('/user/token', data, config),

  signUp: (data, config) => httpService._post('/user', data, config),

  getInfo: (config) => httpService._get('/user', config)

}
