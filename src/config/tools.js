/**
 * 设置本地存储
 */
export const setStore =  (key, val) => {
    if (!key) return;
    if (typeof val !== 'string') {
        val = JSON.stringify(val);
    }
    localStorage.setItem(key, val);
}
/**
 * 获取本地存储
 */
export const getStore = key => {
    if (!key) return;
    return localStorage.getItem(key);
}
/**
 * 删除本地存储
 */
export const getStore = key => {
    if (!key) return;
    return localStorage.removeItem(key);
}