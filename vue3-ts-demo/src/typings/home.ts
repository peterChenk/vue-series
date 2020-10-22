export interface ILessons {
  title: string,
  video: string,
  poster: string,
  price: number,
  category?: string
}

export interface IHomeLessons {
  hasMore: boolean,
  loading: boolean,
  offset: number,
  limit: number,
  list: ILessons[]
}

export interface ISilders {
  url:string
}

export interface IHomeState {
  currentCategory: CATOGORY_TYPES,
  silders: ISilders[],
  lessons: IHomeLessons
}
export enum CATOGORY_TYPES {
  ALL,
  REACT,
  VUE,
  NODE
}