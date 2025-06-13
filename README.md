# Signin Web Extension

A beautiful, modern web extension with signin/login functionality that supports both popup and side panel interfaces.

## Features

- **Keyboard Shortcuts**: 
  - `Cmd+J` (Mac) / `Ctrl+J` (Windows/Linux) - Opens signin popup
  - `Cmd+K` (Mac) / `Ctrl+K` (Windows/Linux) - Opens signin side panel
- **Responsive Design**: Optimized for both popup and side panel layouts
- **Modern UI**: Beautiful gradient backgrounds, smooth animations, and micro-interactions
- **Form Validation**: Complete signin/signup form with validation
- **Password Visibility Toggle**: Enhanced UX with show/hide password functionality

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the extension:
   ```bash
   npm run build:extension
   ```

3. Load the extension in Chrome:
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked" and select the `dist` folder

## Usage

Once installed, you can:
- Press `Cmd+J` anywhere on any webpage to open the signin popup
- Press `Cmd+K` anywhere on any webpage to open the signin side panel
- Click the extension icon in the toolbar to open the popup

## Project Structure

```
├── manifest.json          # Extension manifest
├── background.js          # Service worker for handling shortcuts
├── content.js            # Content script for keyboard listeners
├── popup.html            # Popup HTML template
├── sidepanel.html        # Side panel HTML template
├── src/
│   ├── components/
│   │   └── SigninForm.tsx # Main signin component
│   ├── popup.tsx         # Popup entry point
│   ├── sidepanel.tsx     # Side panel entry point
│   └── index.css         # Tailwind CSS styles
└── dist/                 # Built extension files
```

## Technologies Used

- React 18 with TypeScript
- Tailwind CSS for styling
- Lucide React for icons
- Vite for building
- Chrome Extension Manifest V3