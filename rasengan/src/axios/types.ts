export interface AxiosWrapperParams<D, Q, E> {
  method: string,
  url: string,
  data?: D,
  query?: Q,
  extraHeaders?: E,
}
