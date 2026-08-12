# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

A multi-page website for **Pandit Umesh Mishra** (Vedic priest, Pune, India), built entirely with `.dc.html` Design Component files and a custom runtime (`support.js`).

## How to run

Serve the directory over HTTP (e.g. `python3 -m http.server 8080`) and open any `.dc.html` file in a browser. The runtime loads React 18 from unpkg CDN on first load, then lazily fetches sibling components via relative URLs — the pages do **not** work when opened as `file://` because of the fetch calls.

## Rebuilding support.js

`support.js` is generated. The header comment says: `cd dc-runtime && bun run build`. The `dc-runtime` source lives outside this directory.

## Design Component (.dc.html) format

Every `.dc.html` file is a self-contained component. The structure is:

```html
<script src="./support.js"></script>  <!-- runtime bootstrap -->
<x-dc>
  <helmet> ... </helmet>              <!-- injected into <head> -->
  <!-- HTML template with {{ bindings }} -->
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{"propName": {...}}'>
class Component extends DCLogic {
  state = { ... };
  renderVals() { return { /* values the template binds to */ }; }
}
</script>
```

### Template features

| Syntax | Purpose |
|---|---|
| `{{ expr }}` | Interpolate a value (string, number, function for event handlers) |
| `<dc-import name="Nav" active="home" hint-size="100%,82px">` | Import and render a sibling component; `hint-size` reserves space while loading |
| `<sc-if value="{{ expr }}">` | Conditional block |
| `<sc-for list="{{ arr }}" as="item">` | Repeat block |
| `<helmet>` | Head injection (fonts, styles) |

### DCLogic API

- `this.state` — reactive state object
- `this.setState({ key: val })` — triggers re-render
- `this.props` — props passed from the parent's `<dc-import>` attributes
- `renderVals()` — returns the flat object the template binds against (merged over props)
- `componentDidMount()`, `componentDidUpdate()`, `componentWillUnmount()` — lifecycle hooks

### Component props declaration

`data-props` on the script tag is a JSON object defining the prop schema (used by the DC editor). Keys starting with `$` are editor metadata (e.g. `$preview: {width, height}`). Example from `Nav.dc.html`:

```json
{"$preview":{"width":1200,"height":640},"active":{"editor":"enum","options":["home","services","about","store","contact"],"default":"home","tsType":"string"}}
```

## Site architecture

- **Nav.dc.html** — sticky top nav with a slide-in booking drawer; accepts `active` prop (`"home" | "services" | "about" | "store" | "contact"`)
- **Footer.dc.html** — dark-background footer, no props
- **Home.dc.html** — hero, trust strip, service preview cards, featured katha section, about teaser, seasonal band, store teaser, final CTA
- **Services.dc.html** — full services catalog with tabs
- **About.dc.html** — Pandit Ji biography and principles
- **Contact.dc.html** — contact details + enquiry form (local state toggles to a success view on submit; no backend wired up)
- **Store.dc.html** — sacred items store (marked "Coming soon")
- **Hero Explorations.dc.html** — design scratchpad, not a production page

## Design tokens (used inline throughout)

| Role | Value |
|---|---|
| Page background | `#fffbeb` |
| Primary red | `#991b1b` |
| Amber / gold accent | `#d97706` |
| Amber border | `#f5d997` |
| Warm amber text | `#b45309` |
| Text dark | `#1c1917` |
| Text muted | `#57534e`, `#78716c` |
| Card border | `#f0e6cf`, `#e7dcc2` |
| Footer background | `#2b1110` |

Fonts: **Playfair Display** (headings, sermon quotes) and **Inter** (body). Both loaded from Google Fonts in each page's `<helmet>`.

Max content width: `1200px`, horizontal page padding: `40px`.
