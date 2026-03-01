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

globalStyle('hr', { height: 0, color: 'inherit', borderTopWidth: '1px' });

globalStyle('abbr[title]', { textDecoration: 'underline dotted' });

globalStyle('h1, h2, h3, h4, h5, h6', {
  fontSize: 'inherit',
  fontWeight: 'inherit',
});

globalStyle('a', { color: 'inherit', textDecoration: 'inherit' });

globalStyle('b, strong', { fontWeight: 'bolder' });

globalStyle('code, kbd, samp, pre', { fontFamily: 'ui-monospace, monospace', fontSize: '1em' });

globalStyle('small', { fontSize: '80%' });

globalStyle('sub, sup', {
  fontSize: '75%',
  lineHeight: 0,
  position: 'relative',
  verticalAlign: 'baseline',
});

globalStyle('sub', { bottom: '-0.25em' });

globalStyle('sup', { top: '-0.5em' });

globalStyle('table', {
  textIndent: 0,
  borderColor: 'inherit',
  borderCollapse: 'collapse',
});

globalStyle('button, input, optgroup, select, textarea, ::file-selector-button', {
  font: 'inherit',
  fontFeatureSettings: 'inherit',
  fontVariationSettings: 'inherit',
  letterSpacing: 'inherit',
  color: 'inherit',
  background: 'transparent',
});

globalStyle("button, input:where([type='button']), input:where([type='reset']), input:where([type='submit']), ::file-selector-button", {
  appearance: 'button',
});

globalStyle(':-moz-focusring', { outline: 'auto' });

globalStyle(':-moz-ui-invalid', { boxShadow: 'none' });

globalStyle('progress', { verticalAlign: 'baseline' });

globalStyle('::-webkit-inner-spin-button, ::-webkit-outer-spin-button', { height: 'auto' });

globalStyle('::-webkit-search-decoration', { appearance: 'textfield' });

globalStyle('summary', { display: 'list-item' });

globalStyle('ol, ul, menu', { listStyle: 'none' });

globalStyle('textarea', { resize: 'vertical' });

globalStyle('input::placeholder, textarea::placeholder', { opacity: 1, color: 'color-mix(in srgb, currentColor 50%, transparent)' });

globalStyle("button, [role='button']", { cursor: 'pointer' });

globalStyle(':disabled', { cursor: 'default' });

globalStyle('img, svg, video, canvas, audio, iframe, embed, object', {
  display: 'block',
  verticalAlign: 'middle',
});

globalStyle('img, video', { maxWidth: '100%', height: 'auto' });

globalStyle("[hidden]:not([hidden='until-found'])", { display: 'none' });
