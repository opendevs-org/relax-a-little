// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const { window, ExtensionContext, workspace, } = require('vscode')
const { getConfig, checkAffectConfig } = require('./utils')
const { start: winddownStart, stop: winddownStop, configure: winddownConfigure, logActivity: winddownLogActivity } = require('./wind-down/index')

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * Log user activity.
 */
const onActivity = () => {
  winddownLogActivity()
}

/**
 * Update the color configuration.
 */
const onChange = () => {
  winddownConfigure(getConfig())
}

/**
 * Reload the configuration.
 */
const reconfigure = () => {
  winddownConfigure(getConfig())
}


const configChanged = (event) => {
  if (event.affectsConfiguration('workbench.preferredDarkColorTheme') ||
    event.affectsConfiguration('workbench.preferredDarkColorTheme') ||
    event.affectsConfiguration('workbench.colorTheme')) {
    onChange()
  }

  if (checkAffectConfig(event)) {
    reconfigure()
  }
}

const start = () => {
  winddownStart(getConfig())
}

/**
 * @param {ExtensionContext} context
 */
function activate (context) {
  reconfigure()
  start()
  onChange()

  context.subscriptions.push(window.onDidChangeWindowState(onActivity))
  context.subscriptions.push(window.onDidChangeActiveTextEditor(onActivity))
  context.subscriptions.push(window.onDidChangeTextEditorViewColumn(onActivity))
  context.subscriptions.push(window.onDidChangeTextEditorSelection(onActivity))
  context.subscriptions.push(window.onDidChangeActiveTextEditor(onActivity))
  context.subscriptions.push(workspace.onDidChangeConfiguration(configChanged))
}

// this method is called when your extension is deactivated
function deactivate () {
  winddownStop()
}

module.exports = {
  activate,
  deactivate
}
