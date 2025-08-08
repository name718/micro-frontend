import { apps } from './app.js'

export const NO_LOADED = 'NO_LOADED' // 未加载状态 
export const LOADING_SOURCE_CODE = 'LOADING_SOURCE_CODE' // 加载中状态
export const NOT_BOOTSTRAPED = 'NOT_BOOTSTRAPED' // 未启动状态
export const BOOTSTRAPPING = 'BOOTSTRAPPING' // 启动中状态
export const NOT_MOUNTED = 'NOT_MOUNTED' // 未挂载状态
export const MOUNTED = 'MOUNTED' // 已挂载状态
export const UNMOUNTING = 'UNMOUNTING' // 卸载中状态
export const UNLOADING = 'UNLOADING' // 卸载中状态
export const UPDATING = 'UPDATING' // 更新中状态
export const LOAD_ERROR = 'LOAD_ERROR' // 加载错误状态
export const SKIP_BECAUSE_BROKEN = 'SKIP_BECAUSE_BROKEN' // 跳过因为损坏而被跳过的状态

// 是不是正在激活
export function isActive(app) {
    return app.status === MOUNTED
}

// 是不是激活状态
export function shouldBeActive(app) {
    return app.activeWhen(window.location)
}

export function getAppChanges() {
    const appToLoad = []
    const appToMount = []
    const appToUnmount = []

    apps.forEach(app => {
        const appShouldBeActive = shouldBeActive(app)
        switch (app.status) {
            case NO_LOADED:
            case LOADING_SOURCE_CODE:
                if (appShouldBeActive) {
                    appToLoad.push(app)
                }
                break
            case NOT_BOOTSTRAPED:
            case BOOTSTRAPPING:
            case NOT_MOUNTED:
                if (appShouldBeActive(app)) {
                    appToMount.push(app)
                }
                break
            case MOUNTED:
                if (!appShouldBeActive(app)) {
                    appToUnmount.push(app)
                }
            default:
                break
        }   
    })

    return {
        appToLoad,
        appToMount,
        appToUnmount
    }
}