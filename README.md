# imsatomi.github.io

Personal site of Satomi Tokida, built with plain [Jekyll](https://jekyllrb.com/) (no theme).
Deployed to GitHub Pages at https://imsatomi.github.io by `.github/workflows/deploy.yml`
(builds on push to `master`, publishes `_site` to the `gh-pages` branch).

## Structure

| Path | What it is |
| --- | --- |
| `index.html` | About + the project collage (home) |
| `publications.html` | Publications list, generated from `_data/publications.yml` |
| `cv.html` | CV, generated from `_data/cv.yml` (+ PDF in `assets/pdf/`) |
| `_projects/*.md` | One file per project → `/projects/<filename>/` |
| `_layouts/`, `_includes/` | Page skeletons, header, footer |
| `assets/css/main.css` | All styles (colours and fonts are CSS variables at the top) |
| `_old_alfolio/` | The previous al-folio template, kept only for reference. Safe to delete. |

## Adding a project

Create `_projects/my-project.md`:

```yaml
---
title: My Project
title_ja: マイプロジェクト
subtitle: One-line description shown on hover
subtitle_ja: ホバー時に出る一行説明
order: 9                # position in the collage (small = first)
year: 2026
category: Research      # small label on the project page
role: Lead
role_ja: 主担当
venue: CHI 2026
collaborators: Ishiguro Lab
collaborators_ja: 石黒研究室
tools: Unity · Meta Quest 3
cover: /assets/img/projects/my-project/cover.jpg
cover_alt: Screenshot of the system
focus: "50% 50%"        # which part of the cover to keep when the tile crops it (CSS object-position)
cols: 6                 # width on the home grid, out of 12 columns (4–8 works well)
rows: 3                 # height on the home grid in rows (~76px each). All tiles currently use 3
                        # so every row of the grid has the same height.
links:
  - { label: "Paper (CHI 2026)", url: "https://doi.org/..." }
  - { label: "Video", url: "https://youtu.be/..." }
gallery:
  - { src: /assets/img/projects/my-project/01.jpg, caption: "The headset view", caption_ja: "HMD内の見え方" }
  - { src: /assets/img/projects/my-project/02.jpg, caption: "Study setup", caption_ja: "実験の様子" }
---

<div data-lang="en" markdown="1">
English body in Markdown. Paragraphs, headings, lists and images all work.
</div>
<div data-lang="ja" markdown="1">
日本語の本文（Markdown）。
</div>
```

## Japanese / English

Every page contains both languages; the EN / JA toggle in the header sets `<html lang>` and CSS hides
the other one (`html[lang="en"] [data-lang="ja"] { display: none }`). The choice is remembered in
`localStorage`, and first-time visitors get Japanese if their browser language is Japanese.

- UI labels: `_data/ui.yml` (`{% include t.html key="..." %}`)
- Inline pairs: `{% include l.html en="..." ja="..." %}`
- Blocks: wrap in `<div data-lang="en">…</div>` / `<div data-lang="ja">…</div>`
- Data files (`_data/cv.yml`, project front matter) use `*_ja` fields; if a `_ja` field is missing
  the English text is shown in both languages (the `l.html` include falls back to `en`).

### Image guidelines

- **Cover** (`cover`): 1600 × 1000 px or larger, JPG (quality ~80) or WebP. Keep it under ~400 KB.
  The collage crops it to the chosen `shape`, so keep the subject near the centre.
- **Gallery images**: 1600 px on the long side, JPG/WebP. Use PNG only for UI screenshots with
  flat colours and text. Short motion is best as an MP4/WebM `<video>` tag in the body, not a GIF.
- PDFs cannot be shown as images: export the page you want as PNG/JPG first.
- Put files in `assets/img/projects/<project-slug>/`.

All projects have real covers. `assets/img/projects/placeholder-*.jpg` are leftover stock photos and can be deleted.

## Adding a publication

Append an entry to `_data/publications.yml` (types: `full`, `short`, `poster`, `domestic`).
`links` become chips; name them after the destination (`ACM Digital Library`, `IEEE Xplore`, `PDF`,
`arXiv`). Titles are plain text; the chips are the only links. "Satomi Tokida" / "時田聡実" is bolded
automatically; `equal: true` adds an equal-contribution note.

## Updating the CV

Edit `_data/cv.yml`, drop the new PDF into `assets/pdf/` and point `cv_pdf_en` / `cv_pdf_ja` in `_config.yml` at it.

## Running locally

Uses Homebrew Ruby (the Anaconda Ruby on this Mac cannot build native gems).

```bash
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
bundle install            # first time only
bundle exec jekyll serve  # http://127.0.0.1:4000
```
