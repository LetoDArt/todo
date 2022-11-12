export const useErrorGetter = <T, E>(touched: T, errors: E) => (name: string) => {
  const hasBeenTouched = touched[name as keyof T]
  const error = errors[name as keyof E]
  return hasBeenTouched && error ? error : null
}
