const EventEmitter = require('node:events')

class UserActionTracker extends EventEmitter{
    actions = []

    constructor() {
        super()
    }

    logAction(action) {
        if(typeof action != 'string' || !action.trim()) {
            throw new Error(`${action} is not a string`)
        }

        this.actions.push(action)
        this.emit('actionLogged', action)

        if(this.actions.length > 5) {
            this.emit('maxActions')
        }
    }

    getActionCount() {
        return this.actions.length
    }
}

module.exports = UserActionTracker

