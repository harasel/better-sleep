# BETTER Sleep — 90-Day Challenge

A premium DTC storytelling experience for the BETTER Sleep brand.
Single-scroll page: hero → problem → education → 90-day timeline → benefits →
lifestyle → how it works → PDP → reviews → FAQ → final CTA.

## Stack

- HTML5
- CSS3 (custom design system — brand tokens pulled from the product label)
- Vanilla JavaScript (no frameworks, no build step)
- Google Fonts: Archivo Black + Inter

## Run locally

Open `index.html` in a browser. That's it.

For a local server (recommended for correct font loading):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages

1. Push this folder to a new GitHub repository.
2. In the repo settings → **Pages** → set source to `main` / root.
3. Your site will be live at `https://<username>.github.io/<repo>/`.

## Structure

```
/
├── index.html          Full page markup
├── style.css           Design system + all sections
├── script.js           Reveal-on-scroll, plan picker, sticky CTA
├── README.md
└── assets/
    └── images/         Label, bottle, gummy, mascot scenes
```

## Brand notes

- Colors are locked to the product label: lavender purple, white, cream, soft
  gray, black.
- The illustrated woman is the mascot — her line-art style is preserved
  across every scene.
- All copy is FDA-compliant structure/function language.
