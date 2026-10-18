# Responsive Image Gallery

A small image gallery built with plain HTML5, CSS, and JavaScript.

## Files

- `index.html` — page structure
- `style.css` — gallery grid, preview overlay, and responsive layout
- `script.js` — image list, preview, and Previous/Next controls
- `images/` — folder for your own local images (optional)

## Run locally

Open `index.html` in a browser. The sample photos load from Unsplash, so an internet connection is needed for those images.

## Add your own images

1. Copy your image files into the `images` folder.
2. In `script.js`, update an image entry to use a relative path, for example:

   ```js
   {
       src: "images/my-photo.jpg",
       alt: "A short description of the photo",
       caption: "My photo"
   }
   ```

3. Repeat for each image you want to show.

Relative paths work when deploying the folder to a static host.

## Deploy with GitHub Pages

1. Create a GitHub repository and upload `index.html`, `style.css`, `script.js`, and the `images` folder.
2. Open the repository's **Settings → Pages**.
3. Under the build/deployment section, choose **Deploy from a branch**.
4. Select your main branch and the root (`/`) folder, then save.
5. Wait for GitHub Pages to publish the site and open the URL it provides.

You can also drag the project folder into Netlify's manual deploy area.

## Notes

- Previous/Next navigation wraps around at the ends.
- Keyboard: `Esc` closes the preview; left/right arrow keys change images.
- The gallery uses no frameworks or build step.
