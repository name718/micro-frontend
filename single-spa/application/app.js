import { NO_LOADED } from './app.helpers.js'

export const apps = []
export function registerApplication(name, app, activeWhen, customProps) {
    const registeration = {
        name,
        app,
        activeWhen,
        customProps,
        status: NO_LOADED
    }
    apps.push(registeration)
    // 每个应用状态变化
    reroute()
}