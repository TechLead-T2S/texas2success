# Texas2Success Website

A modern, responsive website for Texas2Success - a boutique IT Staffing consultancy & software development company based in Irving, Texas, providing comprehensive IT solutions.

## Features

- 🎨 Modern, responsive design with Texas-themed colors
- 📱 Mobile-friendly navigation
- ⚡ Smooth scrolling and animations
- 📧 Contact form with validation
- 🎯 Professional IT service showcase with skill metrics
- 📊 Animated statistics and development percentages
- 🔗 Social media integration
- 🚀 Fast loading and optimized
- 💻 IT-focused content and messaging
- 📱 Free consultancy form

## Files Structure

```
website/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Hosting on GoDaddy

### Method 1: Using GoDaddy Website Builder (Recommended for beginners)

1. **Log into your GoDaddy account**
   - Go to [godaddy.com](https://godaddy.com)
   - Sign in to your account

2. **Access Website Builder**
   - Go to "My Products" → "Websites"
   - Click "Manage" next to your domain
   - Choose "Website Builder"

3. **Upload Custom Files**
   - Look for "Custom Code" or "HTML Editor" option
   - Copy the contents of `index.html` into the HTML editor
   - Add the CSS from `styles.css` to the CSS section
   - Add the JavaScript from `script.js` to the JavaScript section

### Method 2: Using GoDaddy cPanel Hosting

1. **Access cPanel**
   - Log into your GoDaddy hosting account
   - Go to "My Products" → "Web Hosting"
   - Click "Manage" → "cPanel"

2. **Upload Files**
   - In cPanel, find "File Manager"
   - Navigate to `public_html` folder
   - Upload all three files (`index.html`, `styles.css`, `script.js`)

3. **Set Permissions**
   - Right-click on files → "Change Permissions"
   - Set to 644 for files, 755 for folders

### Method 3: Using GoDaddy FTP

1. **Get FTP Credentials**
   - In your GoDaddy hosting dashboard, find FTP credentials
   - Note down: Host, Username, Password, Port

2. **Use FTP Client**
   - Download FileZilla or similar FTP client
   - Connect using your credentials
   - Upload files to `public_html` folder

## Customization Guide

### Colors
The website uses Texas-themed colors:
- **Navy Blue**: `#002868` (Texas flag blue)
- **Red**: `#bf0a30` (Texas flag red)
- **Gold**: `#ffd700` (Accent color)

### Content Updates

#### Update Company Information
Edit `index.html`:
- Company name and tagline
- Contact information
- Services offered
- About section content

#### Update Contact Information
In the contact section, update:
- Phone number
- Email address
- Physical address
- Social media links

#### Update Services
Modify the services section to match your actual offerings:
- Service names
- Descriptions
- Icons (using Font Awesome classes)

### Images
Replace placeholder elements with actual images:
1. Add your logo to replace the text logo
2. Add hero section image
3. Add team photos
4. Add service-related images

### Form Handling
The contact form currently shows a success message. To make it functional:
1. **For GoDaddy Website Builder**: Use the built-in form handler
2. **For cPanel**: Set up PHP mailer or use a service like Formspree
3. **For advanced users**: Integrate with email services like Mailgun or SendGrid

## SEO Optimization

The website includes:
- Meta description
- Proper heading structure
- Alt text placeholders for images
- Semantic HTML
- Fast loading times

### Additional SEO Steps
1. Add Google Analytics
2. Submit sitemap to search engines
3. Optimize images with descriptive filenames
4. Add Open Graph tags for social sharing

## Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Performance Tips

1. **Optimize Images**
   - Compress images before uploading
   - Use WebP format when possible
   - Add proper alt text

2. **Minimize HTTP Requests**
   - Combine CSS files
   - Combine JavaScript files
   - Use CSS sprites for icons

3. **Enable Compression**
   - Enable GZIP compression in cPanel
   - Use CDN for external resources

## Troubleshooting

### Common Issues

1. **Styles not loading**
   - Check file paths in HTML
   - Verify CSS file is uploaded
   - Clear browser cache

2. **JavaScript not working**
   - Check browser console for errors
   - Verify script file is uploaded
   - Ensure proper file permissions

3. **Mobile menu not working**
   - Check if JavaScript is enabled
   - Verify script is loaded after HTML

### Support

For technical issues:
1. Check browser console for errors
2. Verify all files are uploaded correctly
3. Test in different browsers
4. Contact GoDaddy support if hosting-related

## License

This website template is created for Texas2Success. Customize as needed for your business.

## Updates

- **v1.0**: Initial release with responsive design
- Mobile navigation
- Contact form
- Texas-themed styling
- Professional layout

---

**Need help?** Contact your web developer or GoDaddy support for assistance with hosting and customization. 