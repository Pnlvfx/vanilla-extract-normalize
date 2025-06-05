/**
 * https://github.com/sindresorhus/modern-normalize
 */

import { globalStyle } from '@vanilla-extract/css';

for (const selector of ['*', '*:after', '*:before']) {
  globalStyle(selector, { boxSizing: 'border-box' });
}

globalStyle('html', {
  fontFamily: 'system-ui , Segoe UI , Roboto , Helvetica , Arial , sans-serif , Apple Color Emoji , Segoe UI Emoji',
  lineHeight: '1.15',
  WebkitTextSizeAdjust: '100%',
  tabSize: '4',
});

globalStyle('body', { margin: 0 });

for (const element of ['b', 'strong']) {
  globalStyle(element, { fontWeight: 'bolder' });
}

for (const element of ['pre', 'code', 'kbd', 'samp']) {
  globalStyle(element, { fontFamily: 'ui-monospace, SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace', fontSize: '1em' });
}

globalStyle('small', { fontSize: '80%' });

for (const element of ['sub', 'sup']) {
  globalStyle(element, {
    fontSize: '75%',
    lineHeight: 0,
    position: 'relative',
    verticalAlign: 'baseline',
  });
}

globalStyle('sub', { bottom: '-0.25em' });

globalStyle('sup', { top: '-0.5em' });

globalStyle('table', { borderColor: 'currentcolor' });

for (const element of ['button', 'input', 'optgroup', 'select', 'textarea']) {
  globalStyle(element, { fontFamily: 'inherit', fontSize: '100%', lineHeight: '1.15', margin: 0 });
}

for (const element of ['button', "[type='button']", "[type='reset']", "[type='submit']"]) {
  globalStyle(element, { WebkitAppearance: 'button' });
}

globalStyle('legend', { padding: 0 });

globalStyle('progress', { verticalAlign: 'baseline' });

for (const element of ['::-webkit-inner-spin-button', '::-webkit-outer-spin-button']) {
  globalStyle(element, { height: 'auto' });
}

globalStyle("[type='search']", { WebkitAppearance: 'textfield', outlineOffset: -2 });
globalStyle('::-webkit-search-decoration', { WebkitAppearance: 'none' });
globalStyle('::-webkit-file-upload-button', { WebkitAppearance: 'button', font: 'inherit' });
globalStyle('summary', { display: 'list-item' });
