# Gatsby Document Site live demo

[https://signaal.me/](https://signaal.me/)

A documentation site powered by Gatsby, using a local, file-based headless CMS approach. All content is managed as Markdown files, making it easy to edit, version, and localize documentation.

---

## Features

- **Headless CMS**: Content is managed via Markdown files in the `contents/` directory. No external CMS required.
- **Multi-language Support**: Organize docs in multiple languages (e.g., `en.md`, `zh.md`, `cn.md`).
- **Sidebar Navigation**: Sidebar structure is defined in JSON files for flexible navigation.
- **Image Support**: Easily add images to your docs.
- **Full-text Search**: Powered by FlexSearch and Gatsby Local Search.

---

## Project Structure

- **Sidebar Configuration**:  
  Place sidebar tree files in the `src/sidebars/` folder.  
  Name them as `sidebars***.json` (e.g., `sidebarsNetApp.json`).

- **Documentation Content**:  
  Place Markdown files under `contents/docs/`.  
  Use subfolders like `get-started/` and `guide/` for organization.  
  Each doc can have multiple language versions (e.g., `en.md`, `zh.md`).

- **Images**:  
  Place images under `contents/img/` (e.g., `contents/img/doc/1.png`).

---

## Local Headless CMS Workflow

- **Add or Edit Content**:  
  Simply add or edit Markdown files in the `contents/` directory. Each file represents a page or section in your documentation.
- **Sidebar Navigation**:  
  Update or create sidebar JSON files in `src/sidebars/` to control navigation structure.
- **Localization**:  
  Add language-specific Markdown files (e.g., `en.md`, `zh.md`) in each content folder.
- **Images**:  
  Reference images from the `contents/img/` directory in your Markdown files.

---

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm start
   # or
   npm run develop
   ```
3. **View your site:**
   Open [http://localhost:8000](http://localhost:8000) in your browser.

---

## Example

![Screenshot](https://user-images.githubusercontent.com/64153133/191435557-989c4c1f-0f75-4269-bd8f-00081cba2739.png)

---

## License

MIT
