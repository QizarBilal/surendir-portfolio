# 🚀 Surendiran V - Premium Portfolio Website

A **breathtaking, cinematic, futuristic, red-themed portfolio website** showcasing the professional profile of **Surendiran V**, Assistant Professor at Priyadarshini Engineering College.

![Portfolio Preview](assets/preview.png)

---

## ✨ Features

### 🎬 **Cinematic Splash Screen**
- 5-second mandatory welcome animation
- Animated "SV" logo reveal with glowing effects
- Role cycling text (Educator, Developer, Innovator, Engineer, Mentor)
- Futuristic loading bar with red-to-gold gradient
- Smooth auto-redirect to main portfolio

### 🎨 **Red-Theme Color System**
- **Light Mode**: Soft ivory/peach backgrounds with dark red accents
- **Dark Mode**: Deep dark red/navy with gold accents
- Smooth 0.6s theme transitions
- Theme preference saved in localStorage
- Premium glassmorphism effects

### 🌟 **Premium Sections**
1. **Hero Section** - Dramatic fullscreen presentation with typing animation
2. **About Section** - Split-screen layout with floating photo and animated statistics
3. **Experience Section** - Vertical timeline with glowing hover effects
4. **Skills Section** - Tabbed categories with radial progress bars
5. **Projects Section** - 3D rotating cards with modal details
6. **Education Section** - Luxurious academic timeline
7. **Certifications** - Badge gallery with glow animations
8. **Contact Section** - Glass-morphic form with neon focus rings

### 🎭 **Advanced Animations**
- Scroll reveal animations (fade, zoom, flip)
- Parallax floating elements
- Magnetic button interactions
- Typing effect for hero subtitle
- Animated progress bars
- Pulse and glow effects
- Smooth page transitions

### 📱 **Fully Responsive**
- Mobile-first design
- Tablet optimization
- Desktop enhancement
- Touch-friendly interactions

---

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Advanced animations, gradients, glassmorphism
- **JavaScript (ES6+)** - Interactive features, theme management
- **Font Awesome 6.4.0** - Icon library

---

## 📁 Project Structure

```
Surendir's Portfolio/
│
├── splash.html              # 5-second welcome screen
├── index.html               # Main portfolio page
│
├── css/
│   ├── splash.css          # Splash screen styles
│   └── style.css           # Main portfolio styles
│
├── js/
│   ├── splash.js           # Splash screen logic
│   └── script.js           # Main portfolio interactions
│
└── assets/
    ├── profile.jpg         # Profile photo (add your image)
    └── preview.png         # Portfolio preview (optional)
```

---

## 🚀 Getting Started

### **1. Clone or Download**
```bash
git clone <repository-url>
cd "Surendir's Portfolio"
```

### **2. Add Your Profile Photo**
Place your profile photo in the `assets` folder:
- **File name**: `profile.jpg`
- **Recommended size**: 400x400px (square)
- **Format**: JPG, PNG, or WebP

### **3. Customize Content**
Edit `index.html` to update:
- Personal information
- Experience details
- Skills and percentages
- Project descriptions
- Contact information
- Social media links

### **4. Launch**
Open `splash.html` in your browser to experience the full portfolio with the cinematic welcome screen.

**Direct access**: Open `index.html` to skip the splash screen.

---

## 🎨 Color Customization

### **Dark Mode Colors** (Default)
```css
--bg-primary: #0a0a0f;
--red-primary: #dc143c;
--gold: #ffd700;
```

### **Light Mode Colors**
```css
--bg-primary: #fff5f5;
--red-primary: #c41230;
--gold: #daa520;
```

Edit CSS variables in `css/style.css` to change colors.

---

## ⚙️ Key Features Breakdown

### **Theme Toggle**
- Customized red-gold morphing switch
- Saves preference in browser
- Smooth 0.6s transitions
- Changes all colors dynamically

### **Navigation**
- Floating glass navbar
- Scroll-shrink animation
- Active link indicator
- Mobile-responsive hamburger menu

### **Skills Tabs**
- Technical Skills
- Teaching Skills
- Tools & Platforms
- Animated progress bars on scroll

### **Project Modals**
- Click any project card
- Animated backdrop blur
- Detailed project information
- Technology tags
- GitHub and Demo links

### **Contact Form**
- Glass-morphic design
- Neon focus rings
- Floating labels
- Ripple submit effect
- Form validation

---

## 🎯 Performance Optimizations

- Debounced scroll listeners
- Intersection Observer for animations
- CSS hardware acceleration
- Lazy loading animations
- Optimized asset delivery

---

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

---

## 🌐 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

---

## 🔧 Customization Tips

### **Change Logo Text**
Edit the `.logo-text` in `index.html`:
```html
<span class="logo-text">SV</span>
```

### **Modify Typing Roles**
Edit the `roles` array in `js/script.js`:
```javascript
const roles = [
    'Your Role 1',
    'Your Role 2',
    'Your Role 3'
];
```

### **Update Statistics**
Edit the `.stat-item` sections in `index.html`:
```html
<div class="stat-number">5+</div>
<div class="stat-label">Years Experience</div>
```

### **Add More Projects**
1. Add new project card in `index.html`
2. Add project data in `js/script.js` under `projectData`
3. Update the project image/icon

---

## 📞 Contact Integration

### **Email Form**
Currently shows an alert. To integrate with a backend:

```javascript
// In js/script.js, replace the form submission code:
fetch('your-backend-api.com/send', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' }
})
.then(response => response.json())
.then(data => alert('Message sent successfully!'));
```

### **WhatsApp Button**
Update the WhatsApp number in `index.html`:
```html
<a href="https://wa.me/919876543210" class="whatsapp-float">
```

---

## 🎉 Special Effects

### **Cursor Trail** (Optional)
Uncomment at the bottom of `js/script.js`:
```javascript
initCursorTrail();
```

### **Sound Effects** (Optional)
Uncomment in `splash.html`:
```html
<audio id="whooshSound" src="assets/whoosh.mp3"></audio>
```
Add `whoosh.mp3` to the `assets` folder.

---

## 📄 License

This portfolio template is free to use for personal and educational purposes.

**Created with ❤️ for Surendiran V**

---

## 🙏 Credits

- **Design & Development**: AI-Powered Premium Design
- **Icons**: Font Awesome
- **Fonts**: System Fonts (Segoe UI, Arial, Sans-serif)

---

## 📧 Support

For questions or support:
- **Email**: surendiran@example.com
- **GitHub**: [Your GitHub Profile]
- **LinkedIn**: [Your LinkedIn Profile]

---

## 🚀 Deployment

### **GitHub Pages**
1. Push code to GitHub repository
2. Go to Settings > Pages
3. Select branch: `main`
4. Save and wait for deployment

### **Netlify**
1. Drag and drop folder to Netlify
2. Or connect GitHub repository
3. Deploy automatically

### **Vercel**
```bash
npm i -g vercel
vercel --prod
```

---

## ⭐ Star This Project

If you find this portfolio design useful, please give it a star! ⭐

---

**Made with passion, powered by code! 🔥**
