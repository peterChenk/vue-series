import { CATOGORY_TYPES, ISilders } from '@/typings/home'
import axios from './index'

// 获取轮播图
export function getSilder<T> () {
  return axios.get<T, T>('/slider/list')
}

// 获取课程

// export function getLessons<T>(category: CATOGORY_TYPES, offset: number = 0, limit: number = 5) {
export function getLessons<T>(category: CATOGORY_TYPES, offset = 0, limit = 5) {
  return axios.get<T, T>(`/lesson/list?category=${category}&offset=${offset}&limit=${limit}`)
}