# João Pontes - Portfolio Website

A modern, responsive portfolio website showcasing full-stack development skills with React frontend and AWS SES email integration. Features a fully functional contact form with serverless functions. **Optimized and streamlined** for minimal dependencies and maximum performance.

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern JavaScript library for building user interfaces
- **Styled Components** - CSS-in-JS styling solution with responsive design
- **Framer Motion** - Smooth animations and transitions
- **React Icons** - Professional icon library (FontAwesome)

### Backend
- **Java 17** - Enterprise-grade programming language
- **Spring Boot 3.2** - Microservices-ready Java framework
- **Spring Data JPA** - Data persistence with Hibernate
- **Spring Security** - Authentication and authorization
- **AWS SDK for Java** - AWS service integration

### Database
- **PostgreSQL 15** - Robust relational database management system
- **Docker Compose** - Local development database setup

### Cloud & DevOps
- **AWS** - Comprehensive cloud platform
  - **SES (Simple Email Service)** - Professional email delivery
  - **IAM** - Secure access management
  - **S3** - Static website hosting
  - **CloudFront** - Global CDN
  - **RDS** - Managed database hosting
  - **ECS** - Container orchestration
  - **Application Load Balancer** - High availability
- **Docker** - Containerization
- **CloudFormation** - Infrastructure as Code
- **Maven** - Build automation and dependency management

## 📁 Project Structure

```
portfolio-website/
├── src/                          # React frontend source code
│   ├── components/               # React components
│   │   ├── Header.js            # Navigation header with mobile drawer
│   │   ├── Landing.js           # Hero section with animations
│   │   ├── About.js             # About section with skills
│   │   ├── Work.js              # Projects showcase with GitHub links
│   │   ├── Contact.js           # Contact form with AWS SES integration
│   │   ├── Resume.js            # Resume download section
│   │   └── MobileDrawer.js      # Mobile navigation drawer
│   ├── styles/                  # Global styles and animations
│   └── App.js                   # Main React component
├── backend/                     # Spring Boot backend
│   ├── src/main/java/com/portfolio/
│   │   ├── controller/          # REST controllers
│   │   │   └── ContactController.java
│   │   ├── service/            # Business logic
│   │   │   └── ContactService.java
│   │   ├── dto/                # Data transfer objects
│   │   │   └── ContactMessageDto.java
│   │   ├── config/             # Configuration classes
│   │   │   ├── AwsConfig.java  # AWS SES configuration
│   │   │   └── SecurityConfig.java # Spring Security setup
│   │   └── PortfolioApplication.java
│   ├── src/main/resources/
│   │   └── application.yml      # Application configuration
│   ├── env-config.sh           # Environment variables (gitignored)
│   ├── test-email.sh           # Email testing script
│   ├── test-ses-setup.sh       # AWS SES testing script
│   └── pom.xml                 # Maven dependencies (optimized)
├── database/                    # Database setup
│   ├── init.sql                # Database initialization script
│   └── docker-compose.yml      # PostgreSQL Docker setup
├── aws/                        # AWS deployment
│   ├── infrastructure/         # CloudFormation templates
│   └── deployment/             # Deployment scripts
├── public/                     # Static assets
│   ├── resume/                 # Resume PDF files
│   ├── logos/                  # Logo images
│   ├── project-imgs/           # Project screenshots
│   └── company-logos/          # Company logos
├── .gitignore                  # Comprehensive gitignore
├── start-dev.sh               # Development startup script
├── package.json               # Frontend dependencies (optimized)
└── README.md                  # This file
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 16+ and npm
- Java 17+
- Maven 3.6+
- Docker and Docker Compose
- AWS CLI (for deployment)

### Local Development

#### Quick Start (Recommended)
```bash
# Start all services with one command
./start-dev.sh
```
This script will:
- Start PostgreSQL database
- Start Spring Boot backend
- Start React frontend
- Load environment variables

#### Manual Setup

##### 1. Database Setup
```bash
# Start PostgreSQL with Docker
cd database
docker-compose up -d

# The database will be available at localhost:5432
# Database: portfolio_db
# Username: portfolio_user
# Password: portfolio_password
```

##### 2. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Configure AWS credentials (required for email functionality)
# Edit env-config.sh with your AWS credentials
nano env-config.sh

# Run the Spring Boot application
source env-config.sh && ./mvnw spring-boot:run
```
The backend API will be available at `http://localhost:8080`

##### 3. Frontend Setup
```bash
# Install dependencies
npm install

# Start development server
npm start
```
The frontend will be available at `http://localhost:3000`

#### Testing Email Functionality
```bash
# Test AWS SES integration
cd backend
./test-email.sh

# Test SES setup
./test-ses-setup.sh
```

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
- ✅ **Responsive Design** - Optimized for mobile, tablet, and desktop
- ✅ **Smooth Navigation** - Single-page application with smooth scrolling
- ✅ **Modern Animations** - Framer Motion animations and transitions
- ✅ **Professional UI** - Gradient backgrounds and modern styling
- ✅ **Interactive Contact Form** - Real-time validation and feedback
- ✅ **Project Showcase** - GitHub integration with live project links
- ✅ **Resume Download** - PDF resume download functionality
- ✅ **Mobile Drawer** - Collapsible navigation for mobile devices
- ✅ **Optimized Bundle** - Minimal dependencies for fast loading
- ✅ **SEO Optimized** - Meta tags and structured data

### Backend Features
- ✅ **RESTful API** - Clean REST endpoints with proper HTTP methods
- ✅ **Contact Form Processing** - Secure form submission handling
- ✅ **AWS SES Integration** - Professional email delivery service
- ✅ **Input Validation** - Comprehensive data validation with Bean Validation
- ✅ **Security Configuration** - Spring Security with CORS and CSRF protection
- ✅ **Error Handling** - Graceful error handling and logging
- ✅ **Environment Configuration** - Flexible configuration management

### Email Features
- ✅ **AWS SES Integration** - Professional email delivery
- ✅ **Email Templates** - Structured email formatting
- ✅ **Delivery Tracking** - Message ID tracking for debugging
- ✅ **Spam Prevention** - Proper email headers and formatting
- ✅ **Gmail Filtering** - Instructions for organizing portfolio emails

### Performance & Optimization
- ✅ **Minimal Dependencies** - Streamlined package.json and pom.xml
- ✅ **Clean Database Schema** - Only essential tables and indexes
- ✅ **Optimized Bundle Size** - Removed unused libraries and dependencies
- ✅ **Fast Startup** - Reduced application startup time
- ✅ **Efficient Resource Usage** - Lower memory and CPU footprint

### Database Features
- ✅ **PostgreSQL Integration** - Robust relational database
- ✅ **Docker Setup** - Easy local development environment
- ✅ **Data Persistence** - Contact message storage (if implemented)
- ✅ **Connection Pooling** - HikariCP for optimal performance

## 🔧 Configuration

### Environment Variables

#### AWS SES Configuration (backend/env-config.sh)
```bash
# AWS SES Configuration
export AWS_REGION=ca-central-1
export AWS_ACCESS_KEY_ID=your_aws_access_key_here
export AWS_SECRET_ACCESS_KEY=your_aws_secret_key_here
export FROM_EMAIL=joao.vrpontes@gmail.com
export TO_EMAIL=joao.vrpontes@gmail.com

# Database Configuration
export DB_USERNAME=portfolio_user
export DB_PASSWORD=portfolio_password
```

#### Backend Configuration (application.yml)
```yaml
server:
  port: 8080

spring:
  application:
    name: portfolio-backend
  
  datasource:
    url: jdbc:postgresql://localhost:5432/portfolio_db
    username: ${DB_USERNAME:portfolio_user}
    password: ${DB_PASSWORD:portfolio_password}
    driver-class-name: org.postgresql.Driver
  
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true
    properties:
      hibernate:
        dialect: org.hibernate.dialect.PostgreSQLDialect
        format_sql: true

aws:
  ses:
    region: ${AWS_REGION:ca-central-1}
    access-key: ${AWS_ACCESS_KEY_ID:}
    secret-key: ${AWS_SECRET_ACCESS_KEY:}
    from-email: ${FROM_EMAIL:joao.vrpontes@gmail.com}
    to-email: ${TO_EMAIL:joao.vrpontes@gmail.com}
```

### AWS SES Setup
1. **Create IAM User** with SES permissions
2. **Verify Email Address** in AWS SES Console
3. **Configure Environment Variables** in `env-config.sh`
4. **Test Email Functionality** using provided test scripts

### AWS Configuration
- Update `aws/infrastructure/cloudformation-template.yml` with your domain
- Configure Route 53 for DNS management
- Set up SSL certificates in AWS Certificate Manager
- Configure SES for production email delivery

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

## 🧪 Testing

### Email Testing
```bash
# Test AWS SES email functionality
cd backend
./test-email.sh

# Test SES configuration
./test-ses-setup.sh

# Manual API testing
curl -X POST http://localhost:8080/api/contact/send \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","subject":"Test","message":"Test message"}'
```

### Frontend Testing
```bash
npm test
```

### Backend Testing
```bash
cd backend
./mvnw test
```

## 📈 Performance Features

- ⚡ **Code Splitting** - React.lazy() for optimal loading
- 🖼️ **Image Optimization** - Compressed images and lazy loading
- 📦 **Bundle Optimization** - Webpack optimization and tree shaking
- 🚀 **CDN Delivery** - CloudFront for global content delivery
- 💾 **Database Optimization** - Connection pooling and query optimization
- 🔄 **Caching Strategies** - Browser and server-side caching

## 🔒 Security Features

- 🛡️ **Input Validation** - Comprehensive data validation
- 🔐 **HTTPS Enforcement** - SSL/TLS encryption
- 🚫 **CORS Configuration** - Cross-origin request security
- 🔑 **Environment Protection** - Secure credential management
- 🛡️ **SQL Injection Prevention** - Parameterized queries
- 🔒 **XSS Protection** - Content Security Policy
- 📧 **Email Security** - AWS SES with proper authentication

## ⚡ Performance & Optimization

### Code Cleanup Benefits
- 📦 **Reduced Bundle Size**: Frontend bundle ~50KB smaller
- 🚀 **Faster Startup**: Backend JAR ~2MB smaller
- 💾 **Lower Memory Usage**: Removed unused dependencies
- 🔧 **Simplified Maintenance**: Cleaner codebase structure

### Dependency Optimization
- **Frontend**: Removed unused `react-router-dom` and TypeScript types
- **Backend**: Removed unused JWT and Spring Mail dependencies
- **Database**: Cleaned up unused tables and sample data
- **Configuration**: Streamlined application.yml settings

## 📞 Contact & Support

**João Pontes**
- 📧 Email: [joao.vrpontes@gmail.com](mailto:joao.vrpontes@gmail.com)
- 💼 LinkedIn: [João Pontes](https://www.linkedin.com/in/jo%C3%A3o-pontes-8b8101179/)
- 🐙 GitHub: [JoaoPontes98](https://github.com/JoaoPontes98)
- 📍 Location: Ottawa, ON, Canada

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Create a Pull Request

## 🙏 Acknowledgments

- **React Team** - For the amazing frontend framework
- **Spring Boot Team** - For the robust backend framework
- **AWS Team** - For the comprehensive cloud platform
- **Open Source Community** - For all the amazing libraries and tools

## 🚀 Deployment Status

- ✅ **Frontend**: React application with responsive design
- ✅ **Backend**: Spring Boot API with AWS SES integration
- ✅ **Database**: PostgreSQL with Docker setup
- ✅ **Email**: AWS SES professional email delivery
- ✅ **Security**: Comprehensive security configuration
- ✅ **Testing**: Automated testing scripts
- ✅ **Documentation**: Complete setup and configuration guide
- ✅ **Optimization**: Streamlined dependencies and clean codebase

---

**Built with ❤️ by João Pontes - Showcasing full-stack engineering skills with modern technologies**
