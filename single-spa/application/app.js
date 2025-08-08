export function registerApplication(name, app, activeWhen, customProps) {
    applications.push({
        name,
        app,
        activeWhen,
        customProps
    })
}