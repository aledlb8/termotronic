# Warranty Management System

A modern web application for managing product warranties across different user roles: Admin, Retail Stores, and Users.

## Features

- **Role-based Access Control**
  - Admin: Full system control and user management
  - Retail Stores: Warranty verification and management
  - Users: View and manage their warranties

- **Warranty Management**
  - Create and manage warranties
  - Track warranty status (active, expired, used)
  - Search and filter warranties
  - Detailed warranty information

- **User Management**
  - Create and manage users
  - Role-based permissions
  - Secure authentication

## Tech Stack

- **Frontend**
  - Next.js 14
  - React
  - TypeScript
  - Tailwind CSS
  - Headless UI
  - React Hook Form
  - Zod

- **Backend**
  - Next.js API Routes
  - Prisma ORM
  - MongoDB
  - NextAuth.js
  - bcryptjs

## Prerequisites

- Node.js 18.x or later
- MongoDB
- npm or yarn

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd warranty-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Update the variables with your values:
     - `DATABASE_URL`: MongoDB connection string
     - `NEXTAUTH_SECRET`: Random string for session encryption
     - `NEXTAUTH_URL`: Your application URL

4. Set up the database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. Create an admin user:
   ```bash
   npx prisma db seed
   ```

6. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint
- `npm run prisma:studio`: Open Prisma Studio

## Project Structure

```
src/
├── app/
│   ├── api/           # API routes
│   ├── dashboard/     # Dashboard pages
│   ├── login/        # Login page
│   └── providers.tsx # Auth provider
├── components/       # Reusable components
├── lib/             # Utility functions
└── types/           # TypeScript types
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
