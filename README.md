# Load Nutrient Web SDK using CDN
A web-based PDF/document viewer leveraging CDN-hosted resources and advanced annotation/bookmark/comment functionality for collaborative, interactive document workflows.

## Features
- View PDF and document files directly in-browser
- Page navigation & adjustable zoom
- Rich annotation tools: add, edit, move, delete, and save annotations
- Bookmarks, comments, form support
- Instant updates via WebSocket for multi-client collaboration
- History (undo/redo) and document comparison
- Signature and ink annotation workflows
- Text selection and search
- Efficient event-driven architecture (see Events list below)

### Getting Started
#### Prerequisites
- Web browser (latest Chrome, Firefox, Edge, etc.)
- Internet access for CDN resources
- Node.js (v16 or higher)
- npm or yarn package manager
- Nutrient/PSPDFKit license key (optional for evaluation)

1. Clone the repository
```
git clone [Load nutrient viewer using CDN](https://github.com/Narashiman-K/NutrientViewerUsingCDN.git)
cd NutrientViewerUsingCDN
```

2. Install dependencies
```
npm install
```

3. Set up environment variables
```
Create a .env file in the root directory: 
VITE_lkey=YOUR_NUTRIENT_LICENSE_KEY
```
Note: The application works without a license key in evaluation mode with watermarks.

4. Run the development server
```
npm run dev
```
The application will be available at http://localhost:5173


#### Usage
- Drag and drop a PDF or enter a document URL (if supported).
- Use the toolbar to navigate, zoom, or annotate.
- Bookmarks and comments are available via their respective panels.

### Event List
Below is a non-exhaustive array of key events supported by this viewer’s API for integrations and extensions:

```
[
  "viewState.change", "viewState.currentPageIndex.change", "viewState.zoom.change",
  "annotationPresets.update", "annotations.load", "annotations.change", "annotations.create",
  "annotations.transform", "annotations.update", "annotations.delete", "annotations.press",
  "annotations.willSave", "annotations.didSave", "annotations.focus", "annotations.blur",
  "annotations.willChange", "bookmarks.change", "bookmarks.willSave", "bookmarks.didSave",
  "bookmarks.load", "bookmarks.create", "bookmarks.update", "bookmarks.delete", "comments.change",
  "comments.willSave", "comments.didSave", "comments.load", "comments.create", "comments.update",
  "comments.delete", "document.change", "document.saveStateChange", "formFieldValues.update",
  "formFieldValues.willSave", "formFieldValues.didSave", "formFields.load", "formFields.change",
  "formFields.create", "formFields.update", "formFields.delete", "formFields.willSave",
  "formFields.didSave", "forms.willSubmit", "forms.didSubmit", "inkSignatures.create",
  "inkSignatures.update", "inkSignatures.delete", "inkSignatures.change", "storedSignatures.create",
  "storedSignatures.update", "storedSignatures.delete", "storedSignatures.change",
  "instant.connectedClients.change", "textSelection.change", "annotationSelection.change",
  "page.press", "textLine.press", "search.stateChange", "search.termChange", "history.undo",
  "history.redo", "history.change", "history.willChange", "history.clear", "cropArea.changeStart",
  "cropArea.changeStop", "documentComparisonUI.start", "documentComparisonUI.end"
]
```

## 🔧 Troubleshooting
#### Document not loading
- Ensure the PDF file is not corrupted
- Check browser console for errors
- Verify Nutrient SDK is loaded correctly

#### License key issues
- Verify your license key is correctly set in .env
- Ensure the domain is whitelisted in your Nutrient account

- localStorage quota exceeded

- Clear old documents from localStorage
- Implement a document limit or cleanup strategy

## 📦 Technologies Used

- React - UI framework
- Vite - Build tool and dev server
- Nutrient Web SDK - PDF viewing and annotation engine
- CSS3 - Styling and animations

## 🙏 Acknowledgments

- Nutrient team for the powerful Web SDK
- React team for the excellent framework

## 📞 Support
- [For issues and questions](https://support.nutrient.io/hc/en-us/requests/new)
- Check Nutrient documentation
- Contact support for license-related queries

Note: This application requires a valid Nutrient license for production use. 
Visit nutrient.io and contact sales team for licensing information.

## Author
[Narashiman](https://www.linkedin.com/in/narashimank/)
