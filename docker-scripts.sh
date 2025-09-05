#!/bin/bash

# BJJ Brain Docker Management Scripts
set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Functions
print_help() {
    echo -e "${BLUE}BJJ Brain Docker Management${NC}"
    echo ""
    echo "Usage: ./docker-scripts.sh [command]"
    echo ""
    echo "Commands:"
    echo "  dev                 Start development environment"
    echo "  prod                Start production environment"
    echo "  stop                Stop all services"
    echo "  down                Stop and remove all containers"
    echo "  clean               Remove containers, images, and volumes"
    echo "  logs [service]      View logs for all services or specific service"
    echo "  scale [service] [n] Scale a service to n replicas"
    echo "  health              Check health of all services"
    echo "  build               Build all images"
    echo "  migrate             Run database migrations"
    echo ""
}

# Development environment
start_dev() {
    echo -e "${YELLOW}Starting development environment...${NC}"
    docker-compose up -d --build
    echo -e "${GREEN}Development environment started!${NC}"
    echo -e "${BLUE}Frontend:${NC} http://localhost:3000"
    echo -e "${BLUE}Backend API:${NC} http://localhost:8080"
    echo -e "${BLUE}Database:${NC} localhost:5432"
}

# Production environment
start_prod() {
    echo -e "${YELLOW}Starting production environment...${NC}"
    docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build
    echo -e "${GREEN}Production environment started!${NC}"
    echo -e "${BLUE}Application:${NC} http://localhost"
    echo -e "${BLUE}API:${NC} http://localhost:8080"
}

# Stop services
stop_services() {
    echo -e "${YELLOW}Stopping services...${NC}"
    docker-compose down
    echo -e "${GREEN}Services stopped!${NC}"
}

# Clean everything
clean_all() {
    echo -e "${YELLOW}Cleaning up Docker resources...${NC}"
    docker-compose down -v --rmi all --remove-orphans
    docker system prune -f
    echo -e "${GREEN}Cleanup complete!${NC}"
}

# View logs
view_logs() {
    if [ -n "$2" ]; then
        echo -e "${YELLOW}Viewing logs for service: $2${NC}"
        docker-compose logs -f "$2"
    else
        echo -e "${YELLOW}Viewing logs for all services...${NC}"
        docker-compose logs -f
    fi
}

# Scale service
scale_service() {
    if [ -z "$2" ] || [ -z "$3" ]; then
        echo -e "${RED}Usage: ./docker-scripts.sh scale [service] [replicas]${NC}"
        exit 1
    fi
    
    echo -e "${YELLOW}Scaling $2 to $3 replicas...${NC}"
    docker-compose up -d --scale "$2"="$3"
    echo -e "${GREEN}Service $2 scaled to $3 replicas!${NC}"
}

# Health check
check_health() {
    echo -e "${YELLOW}Checking service health...${NC}"
    docker-compose ps
    echo ""
    echo -e "${YELLOW}Detailed health status:${NC}"
    docker-compose exec -T backend wget --spider -q http://localhost:8080/api/health && echo -e "${GREEN}✓ Backend API healthy${NC}" || echo -e "${RED}✗ Backend API unhealthy${NC}"
    docker-compose exec -T frontend wget --spider -q http://localhost:3000/ && echo -e "${GREEN}✓ Frontend healthy${NC}" || echo -e "${RED}✗ Frontend unhealthy${NC}"
    docker-compose exec -T postgres pg_isready -U bjj_user && echo -e "${GREEN}✓ Database healthy${NC}" || echo -e "${RED}✗ Database unhealthy${NC}"
}

# Build images
build_images() {
    echo -e "${YELLOW}Building Docker images...${NC}"
    docker-compose build --parallel
    echo -e "${GREEN}Images built successfully!${NC}"
}

# Run migrations
run_migrations() {
    echo -e "${YELLOW}Running database migrations...${NC}"
    docker-compose exec backend npm run db:migrate
    echo -e "${GREEN}Migrations completed!${NC}"
}

# Main script logic
case "$1" in
    "dev")
        start_dev
        ;;
    "prod")
        start_prod
        ;;
    "stop")
        stop_services
        ;;
    "down")
        stop_services
        ;;
    "clean")
        clean_all
        ;;
    "logs")
        view_logs "$@"
        ;;
    "scale")
        scale_service "$@"
        ;;
    "health")
        check_health
        ;;
    "build")
        build_images
        ;;
    "migrate")
        run_migrations
        ;;
    "help"|"--help"|"-h")
        print_help
        ;;
    *)
        echo -e "${RED}Unknown command: $1${NC}"
        echo ""
        print_help
        exit 1
        ;;
esac