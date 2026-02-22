# Frontend Mentor - Entertainment Web App

A responsive entertainment web app built with vanilla JavaScript, HTML, and CSS. Users can browse movies and TV series, view trending content, and bookmark their favourites.

## 📸 Screenshot

<!-- Add a screenshot of your project here -->
![Entertainment Web App](./preview.jpg)

## 🔗 Links

- Live Site URL: [https://github.com/MthoNtanzi/Entertianment-app]
- Frontend Mentor Challenge: [Entertainment web app](https://www.frontendmentor.io/challenges/entertainment-web-app-J-UhgAW1X)

---

## 🛠️ Built With

- Vanilla JavaScript (ES Modules)
- HTML5
- CSS3
- Client-side routing (no framework)
- Local JSON data (no backend required)

---

## ✨ Features

- Browse all movies and TV series
- View trending content on the home page
- Bookmark movies and TV series
- Filter content by category (Movies / TV Series)
- Client-side routing with browser history support (`pushState`)
- Responsive layout for mobile, tablet, and desktop

---

## 📁 Project Structure

```
project/
├── index.html
├── app.js               # Entry point
├── router.js            # Client-side router
├── api.js               # Data access layer (reads from data.js)
├── data.js              # Local data (replaces external API)
├── pages/
│   ├── homePage.js
│   ├── moviesPage.js
│   ├── tvSeriesPage.js
│   ├── bookmarkedPage.js
│   └── movieDetailPage.js
├── components/
│   ├── navBar.js
│   ├── searchBar.js
│   ├── trendingRow.js
│   ├── movieGrid.js
│   └── functions.js
├── utils/
│   └── movieMapper.js
├── styles/
│   ├── main.css
│   ├── home.css
│   ├── navbar.css
│   ├── searchBar.css
│   ├── trendingCard.css
│   └── movieCard.css
└── assets/
    └── thumbnails/
```

---

## 🚀 Getting Started

This project uses ES Modules, so it needs to be served over HTTP — you can't just open `index.html` directly in the browser.

### Option 1: VS Code Live Server

1. Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
2. Right-click `index.html` → **Open with Live Server**

### Option 2: Node.js

```bash
npx serve .
```

Then open `http://localhost:3000` in your browser.

---

## 📖 How It Works

### Routing

The app uses a custom client-side router built with the browser's `history.pushState` API. Each page is a JavaScript function that returns a DOM element, which gets mounted into the `#content` div.

### Data

Instead of a live API, the app reads from a local `data.js` file containing all movies and TV series. This makes it fully self-contained with no API keys or network requests required.

Bookmarks are toggled in memory during the session.

### Components

Each UI component is a plain JavaScript function that creates and returns DOM elements — no framework or build step needed.

---

## 🧠 What I Learned

- Building a client-side router from scratch using `pushState` and `popstate`
- Structuring a vanilla JS app with ES Modules
- Debugging silent module failures in the browser
- Managing state without a framework

---

## 🔮 Future Improvements

- Persist bookmarks to `localStorage` so they survive page refreshes
- Add search functionality across all content
- Animate page transitions
- Connect to a real API (e.g. TMDB) with a backend proxy to keep the token secure

---

## 👤 Author

<!-- - Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername) -->
 - GitHub - [@MthoNtanzi](https://github.com/MthoNtanzi)