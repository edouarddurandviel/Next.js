export function localStorageProvider(user: any) {
  const map = new Map(JSON.parse(localStorage.getItem('user') || user))
  window.addEventListener('beforeunload', () => {
    const appCache = JSON.stringify(Array.from(map.entries()))
    localStorage.setItem('user', appCache)
  })
  return map
}