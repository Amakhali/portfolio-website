# Personal Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and professional experience in software development and machine learning.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Dark Theme**: Modern dark theme with blue accents for better visual appeal
- **Smooth Animations**: Page scroll animations and interactive elements
- **Multiple Sections**:
  - Home page with quick introduction
  - About section with detailed background
  - Skills showcase with progress bars
  - Project portfolio with links
  - Contact form

## 🛠️ Technologies Used

### Frontend
- React.js
- Tailwind CSS
- Lucide React (for icons)

### Additional Libraries
- React Hooks (useState, useEffect)
- Intersection Observer API for scroll animations

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-website.git
```

2. Navigate to the project directory:
```bash
cd portfolio-website
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

## 🔧 Configuration

### Image Setup
1. Place your profile image in the `public` folder
2. Update the image path in the About section:
```jsx
<img src="/myphoto.jpg" alt="Your Name" className="block float-left w-40 h-40 m-6 rounded" />
```

### Project Updates
To add or modify projects, update the `projects` array in the Portfolio component:
```javascript
const projects = [
  {
    title: "Project Name",
    description: "Project description",
    tech: ["Tech1", "Tech2"],
    link: "project-url"
  },
  // Add more projects...
];
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎨 Color Scheme

- Primary Background: `bg-gray-900`
- Secondary Background: `bg-gray-800`
- Primary Text: `text-white`
- Secondary Text: `text-gray-300`
- Accent: `text-blue-400`
- Hover Accent: `text-blue-300`

## 🔍 SEO

The website includes:
- Semantic HTML
- Alt text for images
- Meta descriptions
- Proper heading hierarchy

## 🌐 Deployment

This site can be deployed on various platforms:

### Vercel
1. Connect your GitHub repository
2. Import the project
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`

### GitHub Pages
1. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/portfolio-website/',
  // other config...
})
```

2. Deploy using GitHub Actions or manually:
```bash
npm run build
git add dist -f
git commit -m "Adding dist"
git subtree push --prefix dist origin gh-pages
```

## 📝 Future Improvements

- [ ] Add blog section
- [ ] Implement dark/light theme toggle
- [ ] Add more interactive project demos
- [ ] Integrate a CMS for easier content updates
- [ ] Add multilingual support
- [ ] Implement form validation and submission
- [ ] Add loading animations
- [ ] Implement project filtering

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Contact

Ayofe Mukodaz
- LinkedIn: [https://www.linkedin.com/in/mukodaz-ayofe-67513b234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=andriod_app]
- GitHub: [https://github.com/Amakhali]
- Email: [mukodazayofe@gmail.com]

---

Feel free to fork this project and customize it for your own use! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
