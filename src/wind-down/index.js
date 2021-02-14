const { window, StatusBarAlignment } = require('vscode')
const { getConfig } = require('../utils/index')
// @ts-ignore
const { reset: resetEditor, setSaturation } = require('./editor')

let firstActive // end of last break
let lastActive // last activity
let currentSaturation = 1.0
let timer
let statusBarItem
let alreadyRunning = false

firstActive = Date.now()
lastActive = Date.now()

const reset = () => {
  resetEditor()
  currentSaturation = 1.0
  if (statusBarItem) {
    statusBarItem.hide()
  }
}

/**
 * Re-render the UI.
 */
const update = (config) => {
  const now = Date.now()
  const minutesSinceLastActive = (now - lastActive) / 1000 / 60
  const minutesSinceFirstActive = (now - firstActive) / 1000 / 60

  if (minutesSinceLastActive > config.breakDurationMinutes) {
    // on a break
    firstActive = Date.now()
    reset()
  } else {
    // still coding
    if (minutesSinceFirstActive > config.minutesTillBreak) {
      // needs a break
      const overtimeMinutes = minutesSinceFirstActive - config.minutesTillBreak
      const overtimeFraction = overtimeMinutes / config.winddownDurationMinutes
      const newSaturation = 1 - overtimeFraction

      // avoid refreshes that do not change colors perceivably
      if (Math.abs(currentSaturation - newSaturation) > 0.01) {
        currentSaturation = newSaturation
        setSaturation(1 - overtimeFraction)
      }

      if (!statusBarItem) {
        statusBarItem = window.createStatusBarItem(StatusBarAlignment.Right)
      }
      statusBarItem.text = 'Please take a little break now! ⏳'
      statusBarItem.show()
    }
  }
}

const start = (config) => {
  if (alreadyRunning) {
    window.showInformationMessage('wind down is already running')
    return
  }

  alreadyRunning = true
  const framesPerMinute = Math.min(60, Math.max(1, config.winddownFramesPerMinute))
  timer = setInterval(() => {
    update(getConfig())
  }, 1000 * 60 / framesPerMinute)
  reset()
}

const stop = () => {
  if (!alreadyRunning) {
    window.showInformationMessage('wind down is already stopped')
    return
  }

  alreadyRunning = false
  clearInterval(timer)
  reset()
}

const configure = (config) => update(config)

/**
 * Register user activity.
 */
const logActivity = () => {
  lastActive = Date.now()
}

module.exports = {
  reset,
  update,
  start,
  stop,
  configure,
  logActivity
}
