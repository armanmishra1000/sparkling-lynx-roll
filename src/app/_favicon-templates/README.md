# Favicon Template Files

These files are kept here as backup templates and are **not active**.

- `icon.tsx`
- `apple-icon.tsx`

Your current active favicon is configured in:
- `src/app/layout.tsx` -> `metadata.icons`

Current active image path:
- `/favicon-preview/wave-favicon-preview-512.png`

## How to activate template icons later

1. Move `src/app/_favicon-templates/icon.tsx` to `src/app/icon.tsx`
2. Move `src/app/_favicon-templates/apple-icon.tsx` to `src/app/apple-icon.tsx`
3. Remove or comment `metadata.icons` in `src/app/layout.tsx` if needed

After that, Next.js file-based icons will be used automatically.
