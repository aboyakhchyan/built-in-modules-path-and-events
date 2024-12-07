const EventEmitter = require('node:events')

class Timer extends EventEmitter {
    #duration
    constructor(second) {
        super()
        this.#duration = second
    }

    start() {
        console.log('Timer started...')

        let timerCount = this.#duration
        this.on('timer-start', () => {
            console.log(`Timer remaining ${timerCount} seconds`)
        })

        const timerGenerator = () => {
            if(timerCount < 0) {
                this.on('timer-end', () => {
                    console.log('Timer ended...')
                })

                return
            }

            let timeNow = Date.now()

            while(Date.now() - timeNow < 1000) {

            }
            this.emit('timer-start')
            timerCount--

            timerGenerator()
        }
        timerGenerator()

        this.emit('timer-end')
    }
}


module.exports = Timer

