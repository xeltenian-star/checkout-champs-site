# Checkout Champs

Static front-end build for GitHub Pages testing.

## Files
- `index.html` – main demo page
- `app.js` – app logic
- `styles.css` – demo styling
- `embed.js` – embeddable widget script
- `CHECKOUT_CHAMPS_PLAN.md` – project plan snapshot

## GitHub Pages quick publish
1. Create a new public GitHub repository, for example `checkout-champs-site`.
2. Upload all files from this folder into the root of the repository.
3. In GitHub: `Settings` → `Pages`.
4. Under **Build and deployment** set **Source** to **Deploy from a branch**.
5. Choose branch `main` and folder `/ (root)`.
6. Save and wait for the Pages URL.

## Expected Pages URL
`https://YOUR-USERNAME.github.io/checkout-champs-site/`

## Notes
- This is a static demo build.
- Discount persistence is currently simulated with `localStorage`.
- Real one-use codes / merchant key validation are future steps.
