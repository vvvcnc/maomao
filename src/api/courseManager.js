import request from '../network/axios'

export function getCourseList(opts={}){
  return request({
      url:'/main/course/lists',
      method:'post',
        data:opts
  })
}