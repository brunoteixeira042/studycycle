# 📚 StudyCycle

> Cross-platform desktop app to organize and track study cycles for competitive exams.

---

## ✨ Features

- **Multiple Cycles** — create and switch between different study cycles (e.g. pre-exam, post-exam)
- **Free Timer** — tracks net study time per subject
- **Pomodoro Mode** — focus sessions with automatic breaks and audio alert
- **Detailed Checklist** — organize subjects into topic groups with checkable subtopics
- **Donut Chart** — proportional visualization of study hours per subject
- **Progress Bar** — track the percentage of content studied
- **JSON Backup** — easily export and import your data

---

## 📸 Screenshots & Demo

### 🎬 Demo Video

- [Assista ao vídeo de demonstração](Captura%20de%20tela/2026-06-30%2012-49-59.mp4)

### 🖼️ Screenshots

<p align="center">
  <img src="Captura%20de%20tela/Captura%20de%20tela%20de%202026-06-30%2012-34-23.png" alt="StudyCycle Dashboard" width="800">
</p>

<p align="center">
  <img src="Captura%20de%20tela/Captura%20de%20tela%20de%202026-06-30%2012-34-39.png" alt="StudyCycle Checklist" width="800">
</p>

<p align="center">
  <img src="Captura%20de%20tela/Captura%20de%20tela%20de%202026-06-30%2012-35-06.png" alt="StudyCycle Timer" width="800">
</p>

---

## 🖥️ Supported Platforms

| Platform | Format |
|----------|--------|
| Linux    | AppImage |
| Windows  | NSIS Installer |

---

## 🚀 Running in Development

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm

### Setup

```bash
# Clone the repository
git clone https://github.com/brunoteixeira042/studycycle.git
cd studycycle

# Install dependencies
npm install

# Run the app
npm start
```

---

## 📦 Building

```bash
# Linux (AppImage)
npm run build:linux

# Windows (NSIS)
npm run build:win
```

Built files will be in the `dist/` folder.

---

## 🔒 Security

- `nodeIntegration: false` — renderer has no access to Node.js APIs
- `contextIsolation: true` — isolation between Electron contexts
- `sandbox: true` — renderer process in sandbox mode
- CSP (Content Security Policy) set via meta tag
- External navigation blocked — external links do not open inside the app window
- Data stored locally only via `localStorage` (no server)

---

## 📂 Project Structure

```
studycycle/
├── main.js          # Electron main process
├── index.html       # Application UI (HTML + CSS + JS)
├── package.json     # Dependencies and build config
└── README.md
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues and pull requests.

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'feat: add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.
