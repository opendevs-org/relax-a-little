const { window, StatusBarAlignment } = require('vscode')

let timer
let alreadyRunning = false
let statusBarItem

const start = (config) => {
  if (alreadyRunning) {
    window.showInformationMessage('water break is already running', 'alright')
    return
  }

  alreadyRunning = true
  timer = setInterval(() => {
    if (config.enableBlockingNotification) {
      window.showInformationMessage('It\'s time to drink Water. 👀💧', 'alright!')
    }
    if (!statusBarItem) {
      statusBarItem = window.createStatusBarItem(StatusBarAlignment.Right)
    }
    statusBarItem.text = 'Please take a water break now!'
    statusBarItem.show()

    setTimeout(() => {
      statusBarItem.hide()
    }, 10 * 1000)
  }, 1000 * 60 * config.minutesTillWaterBreak)
}

const stop = () => {
  if (!alreadyRunning) {
    window.showInformationMessage('water break is already stopped', 'alright')
    return
  }
  if (statusBarItem) {
    statusBarItem.hide()
  }
  alreadyRunning = false
  clearInterval(timer)
}

const reset = (config) => {
  if (alreadyRunning) {
    stop()
    start(config)
  }
}

module.exports = {
  start,
  stop,
  reset
}
