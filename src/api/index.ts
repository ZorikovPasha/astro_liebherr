import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { ArticleType, ConstructionType, MachineryType, OrderType, RequestType } from '../types/dataTypes'

export const apiConfig = {
  returnRejectedPromiseOnError: true,
  baseURL: process.env.NODE_ENV === 'production' ? 'https://reactliebherrback.glitch.me/' : 'http://localhost:5000',
  headers: {
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
}

export class Axios {
  protected _axios: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this._axios = axios.create(config)
  }
}

class Api extends Axios {
  constructor(config: AxiosRequestConfig) {
    super(config)
  }

  success = <T>(response: AxiosResponse<T>): T => {
    return response.data
  }

  error = <T>(error: AxiosError<T>): void => {
    throw error
  }

  get = <T>(url: string): Promise<T> => {
    return this._axios
      .get(url)
      .then(this.success)
      .catch((error: AxiosError<Error>) => {
        throw error
      })
  }
  post = <T, B>(url: string, data?: B): Promise<T> => {
    return this._axios
      .post(url, data)
      .then(this.success)
      .catch((error: AxiosError<Error>) => {
        return error
      })
  }
}

class PublicApi extends Api {
  constructor(config: AxiosRequestConfig) {
    super(config)
  }

  getMachinery = (query: string) => {
    return this.get<{ items: MachineryType[]; total: number; chunk: number }>('/api/machinery' + query)
  }

  getSingleMachinery = (id: number) => {
    return this.post<{ machinery: MachineryType; similarOnes: MachineryType[] }, { id: number }>('/api/machinery', { id })
  }

  getSingleConstruction = (id: string) => {
    return this.post<{ construction: ConstructionType; similarOnes: ConstructionType[] }, { id: string }>('/api/construction', { id })
  }

  getConstructions = () => {
    return this.get<{ constructions: ConstructionType[]; hasMore: boolean }>('/api/constructions')
  }

  getConstructionsIds = () => {
    return this.get<{ items: number[] }>('/api/constructions/ids')
  }

  getArticles = (portionIdx: number) => {
    return this.get<{ items: ArticleType[]; hasMore: boolean }>('/api/articles?chunk=' + portionIdx)
  }

  getArticlesIds = () => {
    return this.get<{ items: number[] }>('/api/articles/ids')
  }

  getSingleArticle = (id: string) => {
    return this.post<ArticleType, { id: string }>('/api/article', { id })
  }

  sendRequest = (data: RequestType) => {
    return this.post<{ success: Boolean }, RequestType>('/api/question', data)
  }

  makeOrder = (userData: OrderType) => {
    return this.post<{ success: Boolean }, { id: string }>('/api/order', {
      ...userData,
    })
  }
}

export const publicApi = new PublicApi(apiConfig)
