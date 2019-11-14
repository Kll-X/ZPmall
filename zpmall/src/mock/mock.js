import Mock from 'mockjs'
import data from './data.json'
import url from '@/server.config.js'


Mock.mock(url.getVarietyItem, {data: data.list});