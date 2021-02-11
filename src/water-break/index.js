const { window } = require('vscode')

let timer
let alreadyRunning = false

const start = (config) => {
  if (alreadyRunning) {
    window.showInformationMessage('water break is already running', 'Ok')
    return
  }

  alreadyRunning = true
  timer = setInterval(() => {
    window.showInformationMessage('It\'s time to drink Water. 👀💧', 'alright!')
  }, 1000 * 60 * config.minutesTillWaterBreak)
}

const stop = () => {
  if (!alreadyRunning) {
    window.showInformationMessage('water break is already stopped', 'Ok')
    return
  }

  alreadyRunning = false
  clearInterval(timer)
}

module.exports = {
  start,
  stop
}
