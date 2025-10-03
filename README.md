# Kirby Walking Extension 🌟

A cute Chrome extension that makes Kirby randomly walk across the bottom of your screen!

![Kirby walking animation preview](preview.gif)
*Note: Add a screenshot or GIF here once you create one!*

## What it does

- Kirby walks across the bottom of your browser at random intervals
- He disappears for 3-10 seconds between walks
- Works on every webpage
- Completely non-intrusive (doesn't block clicks or interfere with browsing)

## Installation

Since this is a fan project, it's not on the Chrome Web Store. Here's how to install it manually:

1. **Download this repository**
   - Click the green "Code" button at the top of this page
   - Select "Download ZIP"
   - Extract the ZIP file to a folder on your computer

2. **Open Chrome Extensions page**
   - Go to `chrome://extensions/` in your Chrome browser
   - Or click the three dots menu → More Tools → Extensions

3. **Enable Developer Mode**
   - Toggle the "Developer mode" switch in the top right corner

4. **Load the extension**
   - Click "Load unpacked" button (top left)
   - Select the folder where you extracted the files
   - The extension should now appear in your extensions list!

5. **Start browsing!**
   - Visit any website and wait a few seconds
   - Kirby will randomly appear and walk across your screen!

## Customization

Want to tweak how Kirby behaves? Open `content.js` and adjust these values:
```javascript
const speed = 1.5;           // How fast Kirby moves (higher = faster)
const bottomOffset = 50;     // Distance from bottom of screen
const minWaitTime = 3000;    // Minimum wait time in milliseconds (3 seconds)
const maxWaitTime = 10000;   // Maximum wait time in milliseconds (10 seconds)
const pixelsPerFrame = 14;   // Animation speed (lower = faster walking animation)
After making changes, go to chrome://extensions/ and click the refresh icon on the extension, then reload any webpage to see your changes.
File

manifest.json - Extension configuration
content.js - The magic that makes Kirby walk
kirby-sprites.png - Kirby sprite sheet

Credits

Sprite Art: HD KIRBY SPRITE SHEET by Sonicjeremy on DeviantArt
Kirby Character: © Nintendo / HAL Laboratory

Disclaimer
This is a fan-made project for personal use. Kirby and all related characters are property of Nintendo and HAL Laboratory. This extension is not affiliated with, endorsed by, or connected to Nintendo or HAL Laboratory in any way.
License
This code is provided for educational and personal use only. Please respect the original sprite artist's work and Nintendo's intellectual property.

Made with ❤️ for Kirby fans everywhere! Poyo! 🎮
