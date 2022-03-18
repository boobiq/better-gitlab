import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import adapter from 'axios-userscript-adapter'

export function get<T = any, R = AxiosResponse<T>> (url: string, config?: Omit<AxiosRequestConfig, 'adapter'>): Promise<R> {
  return axios.get(url, {
    adapter,
    ...config
  })
}

export function post<T = any, R = AxiosResponse<T>> (url: string, data?: any, config?: Exclude<keyof AxiosRequestConfig, 'adapter'>): Promise<R> {
  return axios.post(url, data, {
    adapter,
    ...config
  })
}
