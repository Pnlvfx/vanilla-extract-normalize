import { globalStyle } from '@vanilla-extract/css';

globalStyle('*, ::after, ::before, ::backdrop, ::file-selector-button', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  border: '0 solid',
});

globalStyle('html, :host', {
  lineHeight: '1.5',
  WebkitTextSizeAdjust: '100%',
  tabSize: 4,
  fontFamily:
    "--theme(--default-font-family, ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji')",
  fontFeatureSettings: '--theme(--default-font-feature-settings, normal)',
  fontVariationSettings: '--theme(--default-font-variation-settings, normal)',
  WebkitTapHighlightColor: 'transparent',
});

globalStyle('hr', {
  height: 0,
  color: 'inherit',
  borderTopWidth: '1px',
});

globalStyle('abbr[title]', { textDecoration: 'underline dotted' });

globalStyle('h1, h2, h3, h4, h5, h6', {
  fontSize: 'inherit',
  fontWeight: 'inherit',
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'inherit',
});

globalStyle('b, strong', {
  fontWeight: 'bolder',
});

// TODO [2025-11-20] this must be ended
