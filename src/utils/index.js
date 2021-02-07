const { workspace } = require('vscode')

const getConfig = () => workspace.getConfiguration('relaxALittle')

const checkAffectConfig = (event) => event.affectsConfiguration('relaxALittle')

module.exports = {
    getConfig,
    checkAffectConfig
}