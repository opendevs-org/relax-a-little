const { workspace, window, StatusBarAlignment } = require('vscode')

let statusBarItem

const getConfig = () => workspace.getConfiguration('relax')

/**
 * checks if extension setting changes affect relax a little
 * @param {Object} event window event
 */
const checkAffectConfig = (event) => event.affectsConfiguration('relax')

/**
 * Sets notification
 * @param {Object} message - message object with values for {blocking: String, nonBlocking: String!}
 * @param {string} confirmation - confirmation message for close button
 * @param {boolean} [onlyInformative=false] - only informative message
 */
const showNotification = (message, confirmation, onlyInformative = false) => {
  const config = getConfig()
  if ((config.enableBlockingNotification && message.blocking) || onlyInformative) {
    window.showInformationMessage(message.blocking, confirmation)
  }
  if (!onlyInformative) {
    if (!statusBarItem) {
      statusBarItem = window.createStatusBarItem(StatusBarAlignment.Right)
    }
    statusBarItem.text = message.nonBlocking
    statusBarItem.show()
  }

  return statusBarItem
}

const hideNotification = (statusBarItem) => {
  if (statusBarItem) {
    statusBarItem.hide()
  }
}


/**
 * Update the workspace configuration file.
 * @param {Object} settings key-values to write into the configuration
 */
const applySettings = (settings) => {
  if (!settings) {
    return // no settings, nothing to do
  }
  const workspaceSettings = workspace.getConfiguration()
  Object.keys(settings).forEach((k) => {
    workspaceSettings.update(k, settings[k], true).then(undefined, (reason) => {
      console.error(reason)
      window.showErrorMessage(
        `You tried to apply \`${ k }: ${ settings[k] }\` but this is not a valid VS Code settings
          key/value pair.`
      )
    })
  })
}

module.exports = {
  getConfig,
  checkAffectConfig,
  showNotification,
  hideNotification,
  applySettings
}
