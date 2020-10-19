import { Module } from 'vuex'
import { CATOGORY_TYPES, IHomeState, ILessons, ISilders, IHomeLessons } from '../../typings/home'
import { IGlobalState } from '../index'
import * as Types from '../action-types'
import { getSilder, getLessons } from '@/api/home'


// 首页中应该存放的数据
const state:IHomeState = {
  currentCategory: CATOGORY_TYPES.ALL,
  silders: [],
  lessons: {
    hasMore: true, // 有没有更多数据
    loading: false, // 默认没有正在加载
    offset: 0,
    limit: 5,
    list: []
  }
}

const home:Module<IHomeState, IGlobalState> = {
  namespaced: true,
  state,
  mutations: {
    [Types.SET_CATEGORY](state, payload:CATOGORY_TYPES) {
      state.currentCategory = payload
    },
    [Types.SET_SLIDER_LIST](state, payload:ISilders[]) {
      state.silders = payload
    },
    [Types.SET_LOADING](state, payload:boolean) {
      state.lessons.loading = payload
    },
    [Types.SET_LESSON_LIST](state, payload:IHomeLessons) {
      state.lessons.list = [...state.lessons.list, ...payload.list]
      state.lessons.hasMore = payload.hasMore
      state.lessons.offset = state.lessons.offset + payload.list.length
    }
  },
  actions: {
    async [Types.SET_SLIDER_LIST]({commit}) {
      const silders = await getSilder<ISilders>()
      commit(Types.SET_SLIDER_LIST, silders)
    },
    async [Types.SET_LESSON_LIST]({commit}) {
      if (state.lessons.loading) {
        return
      }
      if (!state.lessons.hasMore) {
        return
      }
      commit(Types.SET_LOADING, true) // 开始加载

      const lessons = await getLessons<IHomeLessons>(state.currentCategory, state.lessons.offset, state.lessons.limit)
      commit(Types.SET_LESSON_LIST, lessons)

      commit(Types.SET_LOADING, false) // 加载结束
    }
  }
}

export default home