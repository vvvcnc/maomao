import request from '../network/axios'

export function getTypeOfWork(opts={}){
  return request({
      url:'main/job/lists',
      method:'post',
        data:opts
  })
}