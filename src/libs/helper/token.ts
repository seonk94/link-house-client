export function getToken() {
  const storageItem = localStorage.getItem('tokenObject');
  let result : null | string = null;
  if (storageItem) {
    const { token, exp } = JSON.parse(storageItem);

    if (new Date(exp) > new Date()) {
      result = token;
    } else {
      localStorage.removeItem('tokenObject');
    }
  }
  return result;
}
