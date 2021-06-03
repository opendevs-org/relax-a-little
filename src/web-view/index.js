export const getWebviewContent = () => {
  return `
<!DOCTYPE html>
<html>
    <head>
        <style>
            table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
            }
            td, th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
            }
        </style>
    </head>
    <body>
        <p><i>> this extension provides tools to relax like giving reminders to look somewhere else, drink water, walk, do some lunges or best of all, slowly fades out the colors until you take your hands off the keyboard for a moment. comes with lot of configurations to control time of reminder, interval, water drinking intervals, generic break alert and more.</i></p>
        <p><b>🔴 WARNING! this plugin will overwrite <kbd>workbench.colorCustomizations</kbd> and <kbd>editor.tokenColorCustomizations</kbd>.</b></p>
        <p>👉 Shortcut to open Setting to change configuration: <kbd>CMD/CTRL + ,</kbd></p>
        <p>👉 Shortcut to open Command Palette: <kbd>CMD/CTRL+Shift+P</kbd></p>
        <p>👉 Please, create an issue on github if you find any bug 🐛.</p>
        <h2>⚡ available configurations</h2>
        <table>
            <tr>
                <th>configuration</th>
                <th>default</th>
                <th>description</th>
            </tr>
            <tr>
                <td><kbd>relax.minutesTillBreak</kbd></td>
                <td>25</td>
                <td>time in minutes until theme colors start fading out.</td>
            </tr>
            <tr>
                <td><kbd>relax.winddownDurationMinutes</kbd></td>
                <td>3</td>
                <td>time in minutes until theme colors have fully faded out.</td>
            </tr>
            <tr>
                <td><kbd>relax.breakDurationMinutes</kbd></td>
                <td>3</td>
                <td>time in minutes until theme colors are reset to normal.</td>
            </tr>
            <tr>
                <td><kbd>relax.winddownFramesPerMinute</kbd></td>
                <td>4</td>
                <td>color update frequency during winddown phase. usually you do not need to change this. lower it if you are distracted by screen flashes, increase it for smoother color transitions. Must be between 1 and 60.</td>
            </tr>
            <tr>
                <td><kbd>relax.minutesTillWaterBreak</kbd></td>
                <td>30</td>
                <td>time in minutes until water break. (feature will be disabled if set to 0)</td>
            </tr>
            <tr>
                <td><kbd>relax.minutesTillGenericBreak</kbd></td>
                <td>0</td>
                <td>time in minutes after which extension will ask to take break (feature will be disabled if set to 0, disables winddown if active).</td>
            </tr>
            <tr>
                <td><kbd>relax.enableBlockingNotification</kbd></td>
                <td>true</td>
                <td>do you want blocking notifications from time to time? Turn this off if you prefer text in bottom bar only.</td>
            </tr>
        </table>
        <br />
        <hr>
        <h2>⚡ available commands</h2>
        <table>
            <tr>
                <th>command</th>
                <th>description</th>
            </tr>
            <tr>
                <td><kbd>relax.enableExtension</kbd></td>
                <td>enable extension.</td>
            </tr>
            <tr>
                <td><kbd>relax.disableExtension</kbd></td>
                <td>disable extension.</td>
            </tr>
            <tr>
                <td><kbd>relax.enableWinddown</kbd></td>
                <td>enable winddown.</td>
            </tr>
            <tr>
                <td><kbd>relax.disableWinddown</kbd></td>
                <td>disable winddown.</td>
            </tr>
            <tr>
                <td><kbd>relax.enableWaterBreak</kbd></td>
                <td>enable water break.</td>
            </tr>
            <tr>
                <td><kbd>relax.disableWaterBreak</kbd></td>
                <td>disable water break.</td>
            </tr>
            <tr>
                <td><kbd>relax.enableGenericBreakAlert</kbd></td>
                <td>enable generic break (alerts only without color change) alert.</td>
            </tr>
            <tr>
                <td><kbd>relax.disableGenericBreakAlert</kbd></td>
                <td>disable generic break (alerts only without color change) alert.</td>
            </tr>
        </table>
        <br />
        <hr>
        <h3 style="text-align: center;">Made with ❤️ by <a href="https://opendevs.in" target="_blank">opendevs</a>, Happy Coding 💻</h3>
    </body>
</html>
  `;
}
