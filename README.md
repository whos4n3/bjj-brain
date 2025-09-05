# BJJ Brain - Brazilian Jiu-Jitsu Technique Database

A comprehensive web application for Brazilian Jiu-Jitsu practitioners to explore, learn, and organize techniques from various martial arts including BJJ, Judo, and Wrestling.

## Features

- **Comprehensive Technique Database**: 90+ techniques covering submissions, takedowns, sweeps, escapes, and guard techniques
- **Advanced Filtering**: Filter by difficulty level, position, and training type (Gi/No-Gi/Wrestling/Judo)
- **Detailed Technique Views**: Step-by-step instructions with key points and common mistakes
- **Favorites System**: Save techniques to "MY Game" for personalized training
- **User Authentication**: Secure login and registration system
- **Video Integration**: Link YouTube and other videos to techniques
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

### Backend

- **Node.js** with Express.js framework
- **PostgreSQL** database
- **Prisma** ORM for database management
- **JWT** authentication
- **bcryptjs** for password hashing
- **Express middleware**: CORS, Helmet, Morgan, Rate Limiting

### Frontend

- **Next.js** React framework
- **Axios** for API calls
- **Local Storage** for favorites persistence

## Prerequisites

Before running the application, ensure you have:

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- **PostgreSQL** database server
- **Git** for version control

## Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd bjj-brain
```

### 2. Backend Setup

```bash
cd backend
npm install
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

### 4. Database Configuration

Create a `.env` file in the backend directory:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/bjj_brain"

# JWT Secret
JWT_SECRET="your-super-secret-jwt-key-here"

# Server Configuration
PORT=8080
NODE_ENV=development
```

### 5. Database Setup & Migration

```bash
cd backend

# Generate Prisma client
npm run db:generate

# Run database migrations
npm run db:migrate

# Seed the database with initial data
npm run db:seed

# (Optional) Import additional techniques from mind maps
node database/import-mindmaps-extended.js

# (Optional) Open Prisma Studio to view database
npm run db:studio
```

## Running the Application

### Development Mode

**Terminal 1 - Backend Server:**

```bash
cd backend
npm run dev
# Server will start on http://localhost:8080
```

**Terminal 2 - Frontend Server:**

```bash
cd frontend
npm run dev
# Application will start on http://localhost:3001
```

### Production Mode

**Backend:**

```bash
cd backend
npm start
```

**Frontend:**

```bash
cd frontend
npm run build
npm start
```

## Database Commands

| Command | Description |
|---------|-------------|
| `npm run db:generate` | Generate Prisma client |
| `npm run db:migrate` | Run database migrations |
| `npm run db:seed` | Seed database with sample data |
| `npm run db:studio` | Open Prisma Studio (database GUI) |

## API Endpoints

### Authentication

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Techniques

- `GET /api/techniques` - Get all techniques (supports ?limit parameter)
- `GET /api/techniques/:id` - Get specific technique
- `POST /api/techniques` - Create new technique (admin only)
- `PUT /api/techniques/:id` - Update technique (admin only)
- `DELETE /api/techniques/:id` - Delete technique (admin only)

### Users

- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

## Default Login Credentials

After running the seed command, you can login with:

## Application Features

### Technique Filtering

- **Search**: Search by technique name or description
- **Difficulty**: Filter by skill level (Fundamental, Beginner, Intermediate, Advanced, Expert)
- **Position**: Filter by starting position (Standing, Closed Guard, Open Guard, etc.)
- **Training Type**: Filter by Gi, No-Gi, Judo, or Wrestling techniques

### Technique Categories

- **Submissions**: Chokes, armbars, leg locks
- **Takedowns**: Wrestling and judo throws
- **Sweeps**: Guard sweeps and transitions
- **Escapes**: Defensive techniques
- **Guard**: Guard-specific techniques

### Favorites System

- Click the heart icon on any technique card to add to favorites
- View all favorite techniques in "MY Game" section
- Favorites persist across browser sessions

## Troubleshooting

### Database Issues

```bash
# Reset database (WARNING: This will delete all data)
cd backend
npx prisma migrate reset

# Re-seed with fresh data
npm run db:seed
node database/import-mindmaps-extended.js
```

### Port Conflicts

```bash
# Kill processes on specific ports
lsof -ti:8080 | xargs kill -9  # Backend
lsof -ti:3001 | xargs kill -9  # Frontend
```

### Clear Application Data

```bash
# Clear browser localStorage (in browser console)
localStorage.clear()
```

## Development Scripts

### Backend Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run Jest tests
- `npm run build` - Echo build message (Node.js doesn't need building)

### Database Scripts

- `npm run db:generate` - Generate Prisma client
- `npm run db:migrate` - Run database migrations
- `npm run db:seed` - Seed database with sample data
- `npm run db:studio` - Open Prisma Studio

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For issues and questions:

1. Check the troubleshooting section above
2. Review the console logs for error messages
3. Ensure all environment variables are properly configured
4. Verify database connection and migrations are complete

---

**Happy training!**
