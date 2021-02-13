const { workspace, window, StatusBarAlignment } = require('vscode')

let statusBarItem

const getConfig = () => workspace.getConfiguration('relaxALittle')

const checkAffectConfig = (event) => event.affectsConfiguration('relaxALittle')

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

module.exports = {
  getConfig,
  checkAffectConfig,
  showNotification,
  hideNotification
}
