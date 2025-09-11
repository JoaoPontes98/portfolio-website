# João Pontes - Portfolio Website

A modern, responsive portfolio website showcasing full-stack development skills. Features a React frontend with AWS SES email integration via Vercel serverless functions.

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern JavaScript library for building user interfaces
- **Styled Components** - CSS-in-JS styling solution with responsive design
- **Framer Motion** - Smooth animations and transitions
- **React Icons** - Professional icon library

### Backend & Email
- **Vercel Serverless Functions** - Node.js serverless API
- **AWS SES** - Professional email delivery service
- **AWS SDK** - AWS service integration

### Deployment
- **Vercel** - Frontend and serverless function hosting
- **Node.js 22** - Runtime environment

## 📁 Project Structure

```
portfolio-website/
├── src/                          # React frontend source code
│   ├── components/               # React components
│   │   ├── Header.js            # Navigation header with mobile drawer
│   │   ├── Landing.js           # Hero section with animations
│   │   ├── About.js             # About section with skills
│   │   ├── Work.js              # Projects showcase
│   │   ├── Contact.js           # Contact form with serverless integration
│   │   ├── Resume.js            # Resume download section
│   │   └── MobileDrawer.js      # Mobile navigation drawer
│   ├── styles/                  # Global styles and animations
│   └── App.js                   # Main React component
├── api/                         # Vercel serverless functions
│   └── contact.js               # Contact form email handler
├── public/                      # Static assets
│   ├── resume/                  # Resume PDF files
│   ├── logos/                   # Logo images
│   ├── project-imgs/            # Project screenshots
│   ├── company-logos/           # Company logos
│   ├── og-image.png             # Social media thumbnail
│   └── index.html               # HTML template with OG meta tags
├── .gitignore                   # Git ignore rules
├── .nvmrc                       # Node.js version specification
├── package.json                 # Frontend dependencies
├── vercel.json                  # Vercel deployment configuration
└── README.md                    # This file
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 22+ and npm
- AWS Account (for SES email service)

### Local Development

#### Quick Start
```bash
# Install dependencies
npm install

# Start development server
npm start
```

The frontend will be available at `http://localhost:3000`

#### Testing Email Functionality
The contact form uses Vercel serverless functions for production. For local testing, you can:
1. Deploy to Vercel for full functionality
2. Use the deployed version for testing

## 🚀 Deployment

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Environment Variables
Configure these in your Vercel dashboard:
- `AWS_ACCESS_KEY_ID` - Your AWS access key
- `AWS_SECRET_ACCESS_KEY` - Your AWS secret key
- `AWS_REGION` - AWS region (e.g., `ca-central-1`)
- `FROM_EMAIL` - Your verified SES email
- `TO_EMAIL` - Your personal email

## 📝 Features

### Frontend Features
- ✅ **Responsive Design** - Optimized for all devices
- ✅ **Smooth Navigation** - Single-page application with smooth scrolling
- ✅ **Modern Animations** - Framer Motion animations and transitions
- ✅ **Professional UI** - Gradient backgrounds and modern styling
- ✅ **Interactive Contact Form** - Real-time validation and feedback
- ✅ **Project Showcase** - GitHub integration with live project links
- ✅ **Resume Download** - PDF resume download functionality
- ✅ **Mobile Drawer** - Collapsible navigation for mobile devices
- ✅ **Social Media Integration** - Open Graph meta tags for link sharing

### Backend Features
- ✅ **Serverless Functions** - Vercel serverless API endpoints
- ✅ **Contact Form Processing** - Secure form submission handling
- ✅ **AWS SES Integration** - Professional email delivery service
- ✅ **Input Validation** - Comprehensive data validation
- ✅ **Error Handling** - Graceful error handling and logging

### Email Features
- ✅ **AWS SES Integration** - Professional email delivery
- ✅ **Email Templates** - Structured email formatting
- ✅ **Delivery Tracking** - Message ID tracking for debugging
- ✅ **Spam Prevention** - Proper email headers and formatting

## 🔧 Configuration

### AWS SES Setup
1. **Create IAM User** with SES permissions
2. **Verify Email Address** in AWS SES Console
3. **Configure Environment Variables** in Vercel dashboard
4. **Test Email Functionality** using the contact form

### Social Media Thumbnails
The website includes Open Graph meta tags for social media sharing:
- **OG Image**: `public/og-image.png` (1200x630px recommended)
- **OG Title**: "João Pontes - Full Stack Engineer"
- **OG Description**: Professional portfolio description

## 📱 Responsive Design

The website is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1200px+)

## 🎨 Customization

### Colors and Styling
- Primary gradient: `#667eea` to `#764ba2`
- Update colors in `src/styles/index.css`
- Modify component styles in individual component files

### Content Updates
1. **About Section**: Update `src/components/About.js`
2. **Projects**: Modify `src/components/Work.js`
3. **Contact Info**: Update `src/components/Contact.js`
4. **Resume**: Replace resume PDF and update `src/components/Resume.js`
5. **Social Thumbnail**: Replace `public/og-image.png`

## 🔒 Security

- 🛡️ **Input Validation** - Comprehensive data validation
- 🔐 **HTTPS Enforcement** - SSL/TLS encryption
- 🚫 **CORS Configuration** - Cross-origin request security
- 🔑 **Environment Protection** - Secure credential management
- 📧 **Email Security** - AWS SES with proper authentication

## 📞 Contact & Support

**João Pontes**
- 📧 Email: [joao.vrpontes@gmail.com](mailto:joao.vrpontes@gmail.com)
- 💼 LinkedIn: [João Pontes](https://www.linkedin.com/in/jo%C3%A3o-pontes-8b8101179/)
- 🐙 GitHub: [JoaoPontes98](https://github.com/JoaoPontes98)
- 📍 Location: Ottawa, ON, Canada

## 📄 License

This project is licensed under the MIT License.

## 🚀 Deployment Status

- ✅ **Frontend**: React application with responsive design
- ✅ **Backend**: Vercel serverless functions with AWS SES
- ✅ **Email**: AWS SES professional email delivery
- ✅ **Security**: Comprehensive security configuration
- ✅ **Social Media**: Open Graph meta tags for link sharing
- ✅ **Optimization**: Clean, minimal codebase

---

**Built with ❤️ by João Pontes - Showcasing full-stack engineering skills with modern technologies**

*Deployed on Vercel with Node.js 22*