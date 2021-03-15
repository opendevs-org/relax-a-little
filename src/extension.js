// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const { window, ExtensionContext, commands, workspace, } = require('vscode')
const { getConfig, checkAffectConfig } = require('./utils')
const { start: winddownStart, stop: winddownStop, configure: winddownConfigure, logActivity: winddownLogActivity } = require('./wind-down/index')
const { start: waterBreakStart, stop: waterBreakStop, reset: waterBreakReset } = require('./water-break/index')
const { start: genericBreakStart, stop: genericBreakStop, reset: genericBreakReset } = require('./generic-break/index')

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
  waterBreakReset(getConfig())
  genericBreakReset(getConfig())
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
  waterBreakStart(getConfig())
  genericBreakReset(getConfig())
}

/**
 * @param {ExtensionContext} context
 */
const activate = (context) => {
  reconfigure()
  start()
  onChange()

  context.subscriptions.push(window.onDidChangeWindowState(onActivity))
  context.subscriptions.push(window.onDidChangeActiveTextEditor(onActivity))
  context.subscriptions.push(window.onDidChangeTextEditorViewColumn(onActivity))
  context.subscriptions.push(window.onDidChangeTextEditorSelection(onActivity))

  context.subscriptions.push(workspace.onDidChangeConfiguration(configChanged))

  commands.registerCommand('relax.enableExtension', start)
  commands.registerCommand('relax.disableExtension', deactivate)
  commands.registerCommand('relax.enableWinddown', () => winddownStart(getConfig()))
  commands.registerCommand('relax.disableWinddown', winddownStop)
  commands.registerCommand('relax.enableWaterBreak', () => waterBreakStart(getConfig()))
  commands.registerCommand('relax.disableWaterBreak', waterBreakStop)
  commands.registerCommand('relax.enableGenericBreakAlert', () => genericBreakStart(getConfig()))
  commands.registerCommand('relax.disableGenericBreakAlert', genericBreakStop)
}

// this method is called when your extension is deactivated
const deactivate = () => {
  winddownStop()
  waterBreakStop()
  genericBreakStop()
}

module.exports = {
  activate,
  deactivate
}
