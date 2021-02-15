# relax a little ☕

## write code 👨‍💻 while staying healthy 💪 (CURRENTLY IN PREVIEW)

![Version](https://img.shields.io/badge/version-0.0.2-blue.svg?cacheSeconds=2592000)
![Prerequisite](https://img.shields.io/badge/vscode-%5E1.52.0-blue.svg)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/open-devs/relax-a-little#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/open-devs/relax-a-little/graphs/commit-activity)
[![Twitter: opendevs\_2020](https://img.shields.io/twitter/follow/opendevs\_2020.svg?style=social)](https://twitter.com/opendevs\_2020)
![relaxALittle](https://github.com/open-devs/relax-a-little/workflows/relaxALittle/badge.svg)

> this extension provides tools to relax like giving reminders to look somewhere else, drink water, walk, do some lunges or best of all, slowly fades out the colors until you take your hands off the keyboard for a moment. comes with lot of configurations to control time of reminder, interval, water drinking intervals and more

**🔴 WARNING! this plugin will overwrite `workbench.colorCustomizations` and `editor.tokenColorCustomizations`.**

## 🙌 support us

**save money on medications instead give a ⭐️ if this project helped you &**

<a href="https://www.buymeacoffee.com/opendevs" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

## 🏠 [homepage](https://github.com/open-devs/relax-a-little)

## ✨ demo

### winddown feature

![winddown feature](static/images/demo.gif)

### water break feature

In status bar:

![water break feature](static/images/water-break.png)

## prerequisites

- vscode ^1.52.0

## installation

[install relax-a-little from the vs code marketplace](https://marketplace.visualstudio.com/items?itemName=open-devs.relax-a-little)

## ⚡ Available Configurations

| Configuration                                | Description                                          |
| ----------------------------------------------| ----------------------------------------------------- |
| <kbd>relaxALittle.minutesTillBreak</kbd>      | Time in minutes until theme colors start fading out.   |
| <kbd>relaxALittle.winddownDurationMinutes</kbd> | Time in minutes until theme colors have fully faded out. |
| <kbd>relaxALittle.breakDurationMinutes</kbd>       | Time in minutes until theme colors are reset to normal. |
| <kbd>relaxALittle.winddownFramesPerMinute</kbd>    | Color update frequency during winddown phase. Usually you do not need to change this. Lower it if you are distracted by screen flashes, increase it for smoother color transitions. Must be between 1 and 60.   |
| <kbd>relaxALittle.minutesTillWaterBreak</kbd>   | Time in minutes until water break.        |
| <kbd>relaxALittle.enableBlockingNotification</kbd>        | Do you want blocking notifications from time to time? Turn this off if you prefer text in bottom bar only.            |

## ⚡ Available Commands

| Command                                | Description                                          |
| ----------------------------------------------| ----------------------------------------------------- |
| <kbd>relaxALittle.enableExtension</kbd>      | Enable extension.   |
| <kbd>relaxALittle.disableExtension</kbd> | Disable extension. |
| <kbd>relaxALittle.enableWinddown</kbd>       | Enable Winddown. |
| <kbd>relaxALittle.disableWinddown</kbd>    | Disable Winddown.   |
| <kbd>relaxALittle.enableWaterBreak</kbd>   | Enable Water Break.        |
| <kbd>relaxALittle.disableWaterBreak</kbd>        | Disable Water Break.            |

## development

- `npm install` or `yarn`
- in vs code, "Run", "Start Debugging" or press `F5`

## Publishing

- `npm run build`
- `vsce package`
- upload package to marketplace

## Related Projects

- inspired by Android's [Digital Wellbeing](https://www.android.com/digital-wellbeing/)
- [emacs-winddown](https://github.com/syohex/emacs-winddown)
- [atheos-winddown](https://github.com/HLSiira/Atheos-Winddown)
- [vscode-winddown](https://github.com/schneefux/vscode-winddown)

## Author

👤 **open devs**

- Website: https://opendevs.in/
- Twitter: [@opendevs_2020](https://twitter.com/@opendevs_2020)
- Github: [@open-devs](https://github.com/open-devs)
- LinkedIn: [@open-devs](https://www.linkedin.com/company/open-devs/)
- core members: [@mikr13](https://github.com/mikr13), [@alok722](https://github.com/alok722)

## 🤝 contributing

contributions, issues and feature requests are welcome!

feel free to check [issues page](https://github.com/open-devs/relax-a-little/issues). you can also take a look at the [contributing guide](https://github.com/open-devs/relax-a-little/blob/master/CONTRIBUTING.md).

## 📝 license

copyright © 2021 [open devs](https://github.com/open-devs).

this project is [MIT](https://github.com/open-devs/relax-a-little/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
