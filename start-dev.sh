#!/bin/bash

# Portfolio Website Development Startup Script
# This script starts all services for local development

set -e

echo "🚀 Starting Portfolio Website Development Environment"
echo "=================================================="

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker first."
    exit 1
fi

# Start PostgreSQL database
echo "🗄️ Starting PostgreSQL database..."
cd database
docker-compose up -d
echo "✅ Database started successfully"
cd ..

# Wait for database to be ready
echo "⏳ Waiting for database to be ready..."
sleep 10

# Load environment variables for AWS SES
echo "🔑 Loading AWS SES environment variables..."
source backend/env-config.sh

# Start backend (in background)
echo "🔧 Starting Spring Boot backend..."
cd backend
./mvnw spring-boot:run &
BACKEND_PID=$!
cd ..
echo "✅ Backend started successfully (PID: $BACKEND_PID)"

# Wait for backend to be ready
echo "⏳ Waiting for backend to be ready..."
sleep 15

# Start frontend
echo "🎨 Starting React frontend..."
npm start &
FRONTEND_PID=$!
echo "✅ Frontend started successfully (PID: $FRONTEND_PID)"

echo ""
echo "🎉 Development environment is ready!"
echo "=================================="
echo "🌐 Frontend: http://localhost:3000"
echo "🔧 Backend API: http://localhost:8080"
echo "🗄️ Database: localhost:5432"
echo ""
echo "📝 To stop all services:"
echo "   kill $BACKEND_PID $FRONTEND_PID"
echo "   cd database && docker-compose down"
echo ""
echo "🔍 Check logs:"
echo "   Backend: tail -f backend/logs/application.log"
echo "   Frontend: Check terminal output"
echo "   Database: docker-compose logs -f postgres"
