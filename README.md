# BJJ Brain

The ultimate Brazilian Jiu-Jitsu techniques knowledge platform. BJJ Brain combines traditional technique learning with cutting-edge technology to create an immersive training experience for Brazilian Jiu-Jitsu, Judo, and Wrestling practitioners.

## Features

- **Comprehensive Technique Library**: Build and manage your technique collection with detailed steps, variations, and progressions
- **Smart Filtering**: Filter techniques by difficulty, position, training type, and body type
- **User Authentication**: Secure user registration and login system
- **Favorites System**: Save and organize your favorite techniques
- **Interactive Forms**: Add new techniques with detailed step-by-step instructions
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Future Features**:
  - **BJJ Chess Game**: Strategic martial arts gameplay against AI opponents
  - **3D Mind Map**: Interactive visualization of technique connections and flows
  - **Personal Game Tracker**: Track your favorited techniques and progress

## Tech Stack

### Frontend
- **Next.js**: React framework for production
- **React**: JavaScript library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework
- **Axios**: HTTP client for API requests

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **Prisma**: Database ORM and query builder
- **PostgreSQL**: Relational database
- **JWT**: JSON Web Tokens for authentication
- **bcryptjs**: Password hashing

### Security & Performance
- **Helmet**: Security headers
- **CORS**: Cross-origin resource sharing
- **Rate Limiting**: API request limiting
- **Input Validation**: Request validation with express-validator

## Project Structure

```
bjj-brain/
├── frontend/               # Next.js frontend application
│   ├── pages/             # Next.js pages
│   ├── package.json       # Frontend dependencies
│   └── ...
├── backend/               # Express.js backend API
│   ├── api/              # API routes and middleware
│   │   ├── routes/       # API route handlers
│   │   └── middleware/   # Custom middleware
│   ├── database/         # Database schema and migrations
│   ├── app.js           # Main application file
│   └── package.json     # Backend dependencies
├── docs/                 # Documentation and ideas
├── pics/                 # Images and media (ignored in git)
├── .env.example         # Environment variables template
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **PostgreSQL** (v12 or higher)
- **Git**

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd bjj-brain
```

### 2. Environment Setup

Create a `.env` file in the root directory by copying from the example:

```bash
cp .env.example .env
```

Update the `.env` file with your configuration:

```env
# Database Configuration
DATABASE_URL="postgresql://bjj_user:bjj_password@localhost:5432/bjj_brain?schema=public"

# JWT Secret (generate a secure random string)
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"

# Server Configuration
PORT=8080
NODE_ENV=development

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:3001
```

### 3. Database Setup

#### Option A: Using Docker (Recommended)

If you have Docker installed, you can use the provided docker-compose.yml:

```bash
# Start PostgreSQL database
docker-compose up -d
```

#### Option B: Local PostgreSQL Installation

1. Install PostgreSQL on your system
2. Create a database and user:

```sql
CREATE DATABASE bjj_brain;
CREATE USER bjj_user WITH ENCRYPTED PASSWORD 'bjj_password';
GRANT ALL PRIVILEGES ON DATABASE bjj_brain TO bjj_user;
```

### 4. Backend Setup

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```

Generate Prisma client and run database migrations:

```bash
# Generate Prisma client
npm run db:generate

# Run database migrations
npm run db:migrate

# Optional: Seed the database with sample data
npm run db:seed
```

Start the backend server:

```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

The backend API will be available at `http://localhost:8080`

### 5. Frontend Setup

Open a new terminal and navigate to the frontend directory:

```bash
cd frontend
npm install
```

Start the frontend development server:

```bash
# Start on port 3001 (to avoid conflicts)
PORT=3001 npm run dev
```

The frontend application will be available at `http://localhost:3001`

## Database Management

### Prisma Commands

```bash
cd backend

# Generate Prisma client after schema changes
npm run db:generate

# Create and apply database migrations
npm run db:migrate

# Open Prisma Studio (database GUI)
npm run db:studio

# Seed database with sample data
npm run db:seed

# Reset database (⚠️ WARNING: This will delete all data)
npx prisma db push --force-reset
```

### Database Schema

The application uses the following main models:

- **User**: User accounts with authentication and profile information
- **Technique**: BJJ techniques with metadata (difficulty, position, training type)
- **TechniqueStep**: Step-by-step instructions for techniques
- **Tag**: Categorization tags for techniques
- **UserTechniqueFavorite**: User's favorite techniques
- **TechniqueTransition**: Connections between techniques

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user profile

### Techniques
- `GET /api/techniques` - Get all techniques (with filtering)
- `GET /api/techniques/:id` - Get single technique
- `POST /api/techniques` - Create new technique
- `POST /api/techniques/:id/favorite` - Toggle favorite technique
- `GET /api/techniques/favorites/me` - Get user's favorite techniques

### Health Check
- `GET /api/health` - API health status

## Testing

### Backend Tests

```bash
cd backend
npm test
```

### Test User Account

For development and testing, you can use:
- **Email**: `test@example.com`
- **Password**: `password123`

## Security Features

- Password hashing with bcryptjs
- JWT token-based authentication
- Request rate limiting
- Input validation and sanitization
- Security headers with Helmet
- CORS protection
- SQL injection prevention with Prisma

## Development Workflow

1. **Make changes** to frontend (`/frontend`) or backend (`/backend`)
2. **Test locally** using the development servers
3. **Run database migrations** if you modify the schema
4. **Update documentation** if needed
5. **Commit and push** your changes

## Deployment

### Environment Variables for Production

Make sure to set these environment variables in production:

```env
NODE_ENV=production
DATABASE_URL=<your-production-database-url>
JWT_SECRET=<strong-random-secret>
FRONTEND_URL=<your-frontend-domain>
PORT=<desired-port>
```

### Database Deployment

For production deployment:

1. Set up PostgreSQL database
2. Update `DATABASE_URL` with production credentials
3. Run migrations: `npm run db:migrate`
4. Optionally seed data: `npm run db:seed`

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes
4. Run tests: `npm test`
5. Commit your changes: `git commit -m 'Add new feature'`
6. Push to the branch: `git push origin feature/new-feature`
7. Submit a pull request

## Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Verify PostgreSQL is running
   - Check DATABASE_URL in `.env`
   - Ensure database and user exist

2. **Port Already in Use**
   - Change PORT in `.env` file
   - Kill process using the port: `lsof -ti:8080 | xargs kill`

3. **Prisma Client Error**
   - Regenerate client: `npm run db:generate`
   - Check schema syntax in `database/schema.prisma`

4. **CORS Issues**
   - Verify FRONTEND_URL in backend `.env`
   - Check frontend is running on expected port

### Reset Everything

If you need to completely reset your development environment:

```bash
# Stop all servers
# Delete node_modules in both frontend and backend
rm -rf frontend/node_modules backend/node_modules

# Reinstall dependencies
cd backend && npm install
cd ../frontend && npm install

# Reset database
cd backend
npx prisma db push --force-reset
npm run db:migrate
npm run db:seed
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you encounter any issues or have questions, please create an issue in the GitHub repository.

---

**Happy training!**
