
# Photo Cropping Adjustment for Valentin and Walford

## What We're Fixing
The photos for Valentin and Walford need their visible crop area moved up slightly. Currently using `object-top` which anchors to the very top edge - we'll use a custom position to fine-tune where the crop focuses.

## The Change
In `src/pages/AboutPage.tsx`, we'll replace the Tailwind class `object-top` with inline `style` for custom `object-position` values on Valentin and Walford's images.

**Current code (line 89):**
```jsx
className={`... ${index === 0 ? 'object-center' : 'object-top'}`}
```

**Updated approach:**
- Joel (index 0): Keep `object-center`
- Valentin & Walford (index 1, 2): Use `style={{ objectPosition: 'center 15%' }}` 

This positions the crop 15% from the top instead of 50% (center) or 0% (top), giving more headroom while still showing faces prominently.

## Technical Details
The `object-position` CSS property controls which part of the image is visible when using `object-cover`. Using `center 15%` means:
- Horizontal: centered
- Vertical: 15% from the top (adjustable if needed)

If 15% isn't quite right, we can easily tweak this value (10%, 20%, etc.) after seeing the result.
