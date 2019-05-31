import i from '@/utils/request'

const user = {
  login: params => i.post()
}

const list = {
  lists: params => i.get('/api/v1/bi/dashboard/makeshow', params)
}

export {
  user,
  list
}
