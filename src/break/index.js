const { window, StatusBarAlignment } = require('vscode')

let timer
let alreadyRunning = false
let statusBarItem

const start = (config) => {
  if (alreadyRunning) {
    window.showInformationMessage('generic break is already running')
    return
  }

  alreadyRunning = true
  timer = setInterval(() => {
    if (config.enableBlockingNotification) {
      window.showInformationMessage('it\'s time to take break. 🎧', 'cool!')
    }
    if (!statusBarItem) {
      statusBarItem = window.createStatusBarItem(StatusBarAlignment.Right)
    }
    statusBarItem.text = 'please take a break now! 🎧'
    statusBarItem.show()

    setTimeout(() => {
      statusBarItem.hide()
    }, 10 * 1000)
  }, 1000 * 60 * config.minutesTillBreakAlert)
}

const stop = () => {
  if (!alreadyRunning) {
    window.showInformationMessage('break is already stopped')
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
