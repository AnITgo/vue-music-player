import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

export function getSingerList() {
  const url = 'https://szc.y.qq.com/v8/fcg-bin/v8.fcg'
  const data = Object.assign({
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    g_tk: 399732606,
    loginUin: '2547516077',
    hostUin: 0,
    platform: 'yqq',
    needNewCode: 0
  }, commonParams)

  return jsonp(url, data, options)
}
