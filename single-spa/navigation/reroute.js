import { getAppChanges } from '../application/app.helpers.js'

export function reroute() {
    // 当前路由下，应用状态情况
    const { appToLoad, appToMount, appToUnmount } = getAppChanges()
}