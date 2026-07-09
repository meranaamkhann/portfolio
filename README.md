# Asad Khan — Portfolio

## Structure

```
portfolio/
├── index.html          # all markup, organized by section (nav / hero / about / skills / projects / achievements / contact)
├── css/
│   └── style.css        # all styling — organized in the same section order as index.html
├── js/
│   └── script.js         # cursor blob, scroll-reveal, active nav highlighting
├── assets/
│   └── profile.jpg        # hero photo
└── README.md
```

No build step, no dependencies. The only external resource is the Google Fonts stylesheet (Syne + Instrument Sans), loaded via `<link>` in `index.html`.

## Important: keep the folder together

`index.html` references `css/style.css`, `js/script.js`, and `assets/profile.jpg` by **relative path**. That means:

- Always open/move/zip the whole `portfolio` folder — never copy `index.html` out on its own.
- The subfolders (`css`, `js`, `assets`) must stay exactly where they are, next to `index.html`, not inside each other.

## Running it locally

- **Quickest**: double-click `index.html` — opens directly in your browser.
- **VS Code**: install the "Live Server" extension, right-click `index.html` → "Open with Live Server."
- **Terminal**: from inside the `portfolio` folder, run `python3 -m http.server 8000`, then visit `http://localhost:8000`.

## Deploying

Drag the entire `portfolio` folder onto [app.netlify.com/drop](https://app.netlify.com/drop), or zip it first and drop the zip — either works as long as all four items above are inside it together.

## Projects section

Currently includes: **Finance Dashboard** and **Air Quality Prediction**, with a "+2 more on GitHub" note. Swap that note for two more `.pcard` blocks (copy an existing one in `index.html`) once the remaining two projects are confirmed.
