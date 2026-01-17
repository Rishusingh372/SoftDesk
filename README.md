# SoftDesk

A comprehensive task management system built with React and Node.js, featuring separate dashboards for administrators and employees to efficiently manage and track tasks.

## Features

### Admin Features
- **User Management**: Create, update, and delete employee accounts with automatic email notifications
- **Task Management**: Create, edit, delete tasks with priority levels and due dates
- **Task Assignment**: Assign tasks to employees individually or in bulk
- **Report Management**: Review, approve, or reject employee-submitted reports
- **Dashboard Analytics**: View statistics on employees, tasks, and system status
- **Activity Logging**: Track all system activities for audit purposes
- **Bulk Operations**: Perform bulk task assignments and deletions

### Employee Features
- **Task Tracking**: View all assigned tasks with detailed information
- **Progress Management**: Start/stop work on tasks and track progress
- **Report Submission**: Submit detailed reports upon task completion
- **Profile Management**: Update personal information and change passwords
- **Dashboard Overview**: View task statistics and recent activities

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** with **Mongoose** - Database and ODM
- **JWT** - Authentication and authorization
- **bcrypt** - Password hashing
- **SendGrid** - Email notifications
- **CORS** - Cross-origin resource sharing

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and development server
- **Ant Design** - UI component library
- **Axios** - HTTP client for API calls
- **React Router** - Client-side routing

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (local installation or cloud instance like MongoDB Atlas)
- npm or yarn package manager

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd SoftDesk
   ```

2. **Install server dependencies:**
   ```bash
   cd Server
   npm install
   ```

3. **Install client dependencies:**
   ```bash
   cd ../Client
   npm install
   ```

## Environment Setup

1. **Create environment file:**
   Create a `.env` file in the `Server` directory with the following variables:

   ```env
   MONGO_URI=mongodb://localhost:27017/softdesk
   ACCESS_TOKEN_SECRET=your_access_token_secret_here
   REFRESH_TOKEN_SECRET=your_refresh_token_secret_here
   ACCESS_TOKEN_EXPIRY=1d
   REFRESH_TOKEN_EXPIRY=7d
   SENDGRID_API_KEY=your_sendgrid_api_key_here
   EMAIL_FROM=your_email@example.com
   ```

2. **MongoDB Setup:**
   - For local MongoDB: Ensure MongoDB is running on your system
   - For cloud MongoDB: Update `MONGO_URI` with your connection string

3. **Email Configuration:**
   - Sign up for SendGrid account
   - Generate API key and update `SENDGRID_API_KEY`
   - Update `EMAIL_FROM` with your verified sender email

## Running the Application

1. **Start MongoDB** (if using local instance):
   ```bash
   mongod
   ```

2. **Seed the database** (optional - creates default admin user):
   ```bash
   cd Server
   npm run seed
   ```

3. **Start the backend server:**
   ```bash
   cd Server
   npm start
   ```
   The server will start on `http://localhost:5000`

4. **Start the frontend** (in a new terminal):
   ```bash
   cd Client
   npm run dev
   ```
   The client will start on `http://localhost:5173`

## Usage Guide

### Admin Workflow
1. **Login**: Use admin credentials to access the dashboard
2. **Manage Employees**: Create new employee accounts (credentials sent via email)
3. **Create Tasks**: Add tasks with descriptions, priorities, and due dates
4. **Assign Tasks**: Assign tasks to employees individually or in bulk
5. **Monitor Progress**: Track task status and employee performance
6. **Review Reports**: Approve or reject employee-submitted reports

### Employee Workflow
1. **Login**: Use credentials received via email
2. **View Tasks**: See all assigned tasks in the dashboard
3. **Work on Tasks**: Start/stop work and update progress
4. **Submit Reports**: Complete tasks and submit detailed reports
5. **Manage Profile**: Update personal information and change password

## API Reference

### Admin Endpoints (`/admin`)
- `POST /login` - Admin authentication
- `POST /register-employee` - Create new employee
- `GET /employees` - Retrieve all employees
- `POST /tasks` - Create new task
- `GET /tasks` - Get all tasks
- `PUT /tasks/:taskId` - Update task details
- `POST /assign/:empId/:taskId` - Assign task to employee
- `POST /bulk-assign/:empId` - Bulk task assignment
- `POST /unassign/:taskId` - Unassign task
- `DELETE /tasks/:taskId` - Delete task
- `POST /bulk-delete` - Bulk task deletion
- `GET /reports` - Get all reports
- `POST /approve-report` - Approve employee report
- `POST /reject-report` - Reject employee report
- `POST /undo-report` - Reset report status
- `GET /metadata` - Get dashboard statistics
- `GET /activities` - Get activity logs

### Employee Endpoints (`/employee`)
- `POST /login` - Employee authentication
- `GET /tasks/:empId` - Get employee's tasks
- `GET /task/:taskId` - Get specific task details
- `PUT /start/:taskId` - Start working on task
- `PUT /stop/:taskId` - Stop working on task
- `POST /submit-report` - Submit task completion report
- `GET /reports/:empId` - Get employee's reports
- `PUT /profile/:empId` - Update profile information
- `POST /verify-password/:empId` - Verify current password
- `PUT /change-password/:empId` - Change password

## Project Structure

```
SoftDesk/
├── Client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── contexts/       # React contexts
│   │   ├── utils/          # Utility functions
│   │   └── assets/         # Static assets
│   ├── public/             # Public assets
│   └── package.json
├── Server/                 # Node.js backend
│   ├── controllers/        # Route controllers
│   ├── models/            # MongoDB models
│   ├── routers/           # API routes
│   ├── middlewares/       # Express middlewares
│   ├── utils/             # Utility functions
│   ├── database/          # Database connection
│   └── app.js             # Main application file
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Support

For support or questions, please open an issue in the repository.
