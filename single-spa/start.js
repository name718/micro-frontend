export function start() {
    applications.forEach(app => {
        if (app.activeWhen(window.location)) {
            app.app.bootstrap()
        }
    })
}