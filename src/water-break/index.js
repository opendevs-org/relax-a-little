const { window, workspace } = require('vscode')

let timer

const start = (config) => {
  if (config.waterBreakActive) {
    return
  }
  const workspaceSettings = workspace.getConfiguration()
  workspaceSettings.update('relaxALittle.waterBreakActive', true, true)
    .then(undefined, (reason) => console.error(reason))
  timer = setInterval(() => {
    window.showInformationMessage('It\'s time to drink Water.');
  }, 1000 * 60 / config.minutesTillWaterBreak)
}

const stop = (config) => {
  if (!config.winddownActive) {
    return
  }
  const workspaceSettings = workspace.getConfiguration()
  workspaceSettings.update('relaxALittle.winddownActive', false, true)
    .then(undefined, (reason) => console.error(reason))
  clearInterval(timer);
}

module.exports = {
  start,
  stop
}
