# Realeasing dist

```bash
npm run build
git add dist && git commit -m "Release"
git subtree push --prefix dist origin gh-pages
```