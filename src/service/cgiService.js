'use strict'

import HttpService from './httpService'

let httpService = new HttpService()

export default {
  getAllTeachers: (config) => httpService._get('/teachers', config),

  createOneTeacher: (data, config) => httpService._post('/teachers', data, config),

  getAllHomeworksByTeacherId: (urlParams, config) => httpService._get(`/teachers/${urlParams.teacherId}/homeworks`, config),

  createOneHomework: (data, config) => httpService._post('/teachers/homeworks', data, config),

  signIn: (data, config) => httpService._post('/sign_in/adm', data, config)
}
