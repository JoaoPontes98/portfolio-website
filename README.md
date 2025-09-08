# Portfolio Website

A modern, responsive portfolio website built with React frontend, Java Spring Boot backend, PostgreSQL database, and deployed on AWS cloud infrastructure.

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern JavaScript library for building user interfaces
- **Styled Components** - CSS-in-JS styling solution
- **Framer Motion** - Animation library for React
- **React Icons** - Popular icon library

### Backend
- **Java 17** - Programming language
- **Spring Boot 3.2** - Java framework for building web applications
- **Spring Data JPA** - Data persistence layer
- **Spring Security** - Authentication and authorization
- **Spring Mail** - Email functionality

### Database
- **PostgreSQL 15** - Relational database management system

### Cloud & DevOps
- **AWS** - Cloud platform
  - S3 - Static website hosting
  - CloudFront - CDN
  - RDS - Database hosting
  - ECS - Container orchestration
  - Application Load Balancer
- **Docker** - Containerization
- **CloudFormation** - Infrastructure as Code

## 📁 Project Structure

```
portfolio-website/
├── src/                          # React frontend source code
│   ├── components/               # React components
│   │   ├── Header.js            # Navigation header
│   │   ├── Landing.js           # Landing page section
│   │   ├── About.js             # About section
│   │   ├── Work.js              # Projects showcase
│   │   ├── Contact.js           # Contact form
│   │   └── Resume.js            # Resume download section
│   ├── styles/                  # Global styles
│   └── App.js                   # Main React component
├── backend/                     # Spring Boot backend
│   ├── src/main/java/com/portfolio/
│   │   ├── controller/          # REST controllers
│   │   ├── service/            # Business logic
│   │   ├── dto/                # Data transfer objects
│   │   └── PortfolioApplication.java
│   └── src/main/resources/
│       └── application.yml      # Application configuration
├── database/                    # Database setup
│   ├── init.sql                # Database initialization script
│   └── docker-compose.yml      # PostgreSQL Docker setup
├── aws/                        # AWS deployment
│   ├── infrastructure/         # CloudFormation templates
│   └── deployment/             # Deployment scripts
└── package.json                # Frontend dependencies
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 16+ and npm
- Java 17+
- Maven 3.6+
- Docker and Docker Compose
- AWS CLI (for deployment)

### Local Development

#### 1. Frontend Setup
```bash
# Install dependencies
npm install

# Start development server
npm start
```
The frontend will be available at `http://localhost:3000`

#### 2. Database Setup
```bash
# Start PostgreSQL with Docker
cd database
docker-compose up -d

# The database will be available at localhost:5432
# Database: portfolio_db
# Username: portfolio_user
# Password: portfolio_password
```

#### 3. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Run the Spring Boot application
./mvnw spring-boot:run
```
The backend API will be available at `http://localhost:8080`

### 🚀 Deployment to AWS

#### 1. Configure AWS CLI
```bash
aws configure
```

#### 2. Deploy Infrastructure
```bash
# Deploy to production
./aws/deployment/deploy.sh prod us-east-1

# Deploy to staging
./aws/deployment/deploy.sh staging us-east-1
```

#### 3. Manual Deployment Steps
1. **Build React App**: `npm run build`
2. **Upload to S3**: Upload build files to your S3 bucket
3. **Deploy Backend**: Deploy Spring Boot app to ECS
4. **Configure Database**: Set up RDS PostgreSQL instance
5. **Set up Domain**: Configure CloudFront and Route 53

## 📝 Features

### Frontend Features
- ✅ Responsive design for all devices
- ✅ Smooth scrolling navigation
- ✅ Modern animations with Framer Motion
- ✅ Professional gradient backgrounds
- ✅ Interactive contact form
- ✅ Project showcase with GitHub links
- ✅ Resume download functionality
- ✅ SEO optimized

### Backend Features
- ✅ RESTful API endpoints
- ✅ Contact form submission handling
- ✅ Email notifications
- ✅ Database integration
- ✅ Input validation
- ✅ CORS configuration
- ✅ Security headers

### Database Features
- ✅ Contact messages storage
- ✅ Projects management
- ✅ Skills tracking
- ✅ Proper indexing for performance
- ✅ Data validation

## 🔧 Configuration

### Environment Variables

#### Frontend (.env)
```env
REACT_APP_API_URL=http://localhost:8080/api
```

#### Backend (application.yml)
```yaml
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/portfolio_db
    username: portfolio_user
    password: portfolio_password
  mail:
    host: smtp.gmail.com
    port: 587
    username: your.email@gmail.com
    password: your-app-password
```

### AWS Configuration
- Update `aws/infrastructure/cloudformation-template.yml` with your domain
- Configure Route 53 for DNS management
- Set up SSL certificates in AWS Certificate Manager

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

### Adding New Sections
1. Create new component in `src/components/`
2. Add to `src/App.js`
3. Update navigation in `src/components/Header.js`

## 🧪 Testing

### Frontend Testing
```bash
npm test
```

### Backend Testing
```bash
cd backend
./mvnw test
```

## 📈 Performance Optimization

- ⚡ Code splitting with React.lazy()
- 🖼️ Image optimization
- 📦 Bundle size optimization
- 🚀 CDN delivery via CloudFront
- 💾 Database query optimization
- 🔄 Caching strategies

## 🔒 Security

- 🛡️ Input validation and sanitization
- 🔐 HTTPS enforcement
- 🚫 CORS configuration
- 🔑 Environment variable protection
- 🛡️ SQL injection prevention
- 🔒 XSS protection

## 📞 Support

For questions or support, please contact:
- Email: your.email@example.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 🙏 Acknowledgments

- React team for the amazing framework
- Spring Boot team for the robust backend framework
- AWS for the comprehensive cloud platform
- All open-source contributors

---

**Built with ❤️ for showcasing fullstack engineering skills**
