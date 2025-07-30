Vanilla Extract Normalize
Inspired by modern-normalize, this CSS normalization utility is built specifically for Vanilla Extract projects.
Overview
This normalize implementation provides a consistent foundation for styling across different browsers while leveraging Vanilla Extract's globalStyle function. It addresses common browser inconsistencies and sets sensible defaults for modern web development.
Features

Box Model Normalization: Sets box-sizing: border-box on all elements and pseudo-elements
Typography Standards: Establishes consistent font families and sizing across system fonts
Form Element Consistency: Normalizes appearance and behavior of form controls
WebKit Compatibility: Handles WebKit-specific styling issues
Modern Browser Focus: Optimized for contemporary browser environments

What It Does
Universal Box Sizing
Sets box-sizing: border-box for all elements (_, _:after, \*:before) to ensure predictable sizing behavior.
HTML & Body Defaults

Configures a modern system font stack for optimal cross-platform typography
Sets consistent line-height and text size adjustment
Removes default body margins
Establishes 4-space tab sizing

Typography Normalization

Makes bold elements (b, strong) consistently bolder
Standardizes monospace fonts for code elements (pre, code, kbd, samp)
Adjusts sizing for small text and subscript/superscript elements

Form Controls

Inherits font properties from parent elements
Normalizes sizing and spacing
Handles WebKit appearance issues for buttons and search inputs
Ensures consistent baseline alignment

Browser-Specific Fixes

Addresses WebKit spin button styling
Normalizes search input appearance
Fixes file upload button styling
Ensures proper summary element display

Usage
Simply import this file in your Vanilla Extract project to apply the normalization:
The global styles will be automatically applied when your CSS is built.

Why Vanilla Extract?
This implementation takes advantage of Vanilla Extract's type-safe CSS-in-JS approach while maintaining the benefits of CSS normalization. It provides:

Type Safety: Full TypeScript support for all CSS properties
Build-Time Generation: CSS is extracted at build time, not runtime
Modern Workflow: Integrates seamlessly with modern JavaScript tooling
Maintainability: Easy to modify and extend with full IDE support

Browser Support
Designed for modern browsers with focus on current versions of Chrome, Firefox, Safari, and Edge. The normalization addresses contemporary browser inconsistencies while maintaining lean, efficient CSS output.
