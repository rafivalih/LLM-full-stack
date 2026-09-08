# 🤖 AI LLM Full Stack Application

A full-stack AI-powered question-answering application built using **React, Spring Boot, OpenAI LLM, and Supabase**.

The application allows users to ask questions through a modern frontend interface. The request is sent to the Spring Boot backend, which communicates with the OpenAI API and returns the AI-generated response to the user.

---

## 🚀 Tech Stack

### Frontend
- React
- JavaScript / TypeScript
- Tailwind CSS
- HTML5
- CSS3

### Backend
- Java
- Spring Boot
- REST API
- Spring Web

### AI / LLM
- OpenAI API
- Large Language Model (LLM)

### Database / Authentication
- Supabase
- PostgreSQL

### Development Tools
- Git
- GitHub
- VS Code
- IntelliJ IDEA

---

## ✨ Features

- 💬 Ask questions to an AI assistant
- 🤖 AI-generated responses using OpenAI LLM
- ⚡ Fast communication between frontend and backend
- 🔐 Supabase integration
- 🗄️ PostgreSQL database support
- 🌐 REST API architecture
- 📱 Responsive user interface
- ⌨️ Press Enter to send questions
- 🔄 Loading state while AI generates a response
- ❌ Error handling for failed requests
- 🔑 Environment variable support for API configuration

---

## 🏗️ Project Architecture

```text
User
 │
 ▼
React Frontend
 │
 │ HTTP POST Request
 ▼
Spring Boot Backend
 │
 │ OpenAI API Request
 ▼
OpenAI LLM
 │
 │ AI Generated Response
 ▼
Spring Boot Backend
 │
 │ JSON Response
 ▼
React Frontend
 │
 ▼
User


📁 Project Structure


llm-fullstack/
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       └── resources/
│   ├── pom.xml
│   └── ...
│
└── README.md



🎨 Frontend

The frontend is responsible for providing the user interface and communicating with the Spring Boot backend.

Frontend Responsibilities
Display the AI chat interface
Accept user questions
Send questions to the backend
Display AI responses
Handle loading states
Handle API errors
Provide responsive UI
Example API Request
POST /api/openai
Content-Type: application/json

Request:

{
  "question": "What is Spring Boot?"
}

Response:

{
  "answer": "Spring Boot is a Java framework..."


  ☕ Backend

The backend is developed using Java and Spring Boot.

The Spring Boot application acts as the middle layer between the frontend and OpenAI.

Backend Responsibilities
Receive requests from React
Validate incoming data
Communicate with OpenAI API
Process the AI response
Return JSON responses to the frontend
Handle errors
Manage database communication
🤖 OpenAI LLM Integration

The application uses the OpenAI API to generate intelligent responses.

The general flow is:

User Question
      ↓
React
      ↓
Spring Boot REST API
      ↓
OpenAI API
      ↓
LLM Processing
      ↓
AI Response
      ↓
Spring Boot
      ↓
React

The OpenAI API key should never be exposed in the frontend.

It should be stored securely as an environment variable on the backend.

Example:

OPENAI_API_KEY=your_openai_api_key
🗄️ Supabase

Supabase is used as the application's database and backend service.

Supabase provides:

PostgreSQL database
Authentication
Secure database access
Database management
API support

The application can store information such as:

Users
Questions
AI Responses
Conversation History
Created At

Example database concept:

users
 ├── id
 ├── email
 └── created_at

conversations
 ├── id
 ├── user_id
 ├── question
 ├── answer
 └── created_at
⚙️ Environment Variables

Create environment configuration files for sensitive information.

Frontend

Example:

NEXT_PUBLIC_API_URL=http://localhost:8080
Backend

Example:

OPENAI_API_KEY=your_openai_api_key
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key

Never commit API keys, passwords, or other sensitive credentials to GitHub.

🛠️ Installation
1. Clone the Repository
git clone https://github.com/your-username/your-repository.git
cd your-repository
🎨 Frontend Setup

Navigate to the frontend directory:

cd frontend

Install dependencies:

npm install

Create your environment file:

NEXT_PUBLIC_API_URL=http://localhost:8080

Start the development server:

npm run dev

The frontend will run on:

http://localhost:3000
☕ Backend Setup

Navigate to the backend directory:

cd backend

Configure your environment variables:

OPENAI_API_KEY=your_openai_api_key
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key

Run the Spring Boot application using Maven:

./mvnw spring-boot:run

On Windows:

mvnw.cmd spring-boot:run

The backend will run on:

http://localhost:8080
🔌 API Endpoint
Ask AI
POST /api/openai
Request
{
  "question": "Explain object-oriented programming"
}
Response
{
  "answer": "Object-oriented programming is a programming paradigm..."
}
🔐 Security

Sensitive credentials are managed using environment variables.

The following should never be committed to GitHub:

OpenAI API Keys
Supabase Keys
Database Passwords
JWT Secrets
Environment Files

Add environment files to .gitignore:

.env
.env.local
.env.*.local
🧪 Testing

Before pushing the project, verify:

npm run build

For the backend, verify that the Spring Boot application starts successfully and that the API endpoint responds correctly.

You can also test the API using:

Postman
Thunder Client
Browser Developer Tools
🚀 Production Deployment

The application can be deployed using separate services for the frontend and backend.

Frontend

Possible platforms:

Vercel
Netlify
Backend

Possible platforms:

Render
Railway
AWS
Azure
Google Cloud
Database
Supabase
AI
OpenAI API


👨‍💻 Author

Rafivali Shaik

B.Tech Computer Science & Engineering

Skills
React
JavaScript
TypeScript
Tailwind CSS
Java
Spring Boot# 🤖 AI LLM Full Stack Application

A full-stack AI-powered question-answering application built using **React, Spring Boot, OpenAI LLM, and Supabase**.

Users can ask questions through the frontend, which sends requests to the Spring Boot backend. The backend communicates with OpenAI and returns the AI-generated response.

---

## 🚀 Tech Stack

### Frontend
- React
- JavaScript / TypeScript
- Tailwind CSS
- HTML5 / CSS3

### Backend
- Java
- Spring Boot
- REST API
- Spring Web

### AI / Database
- OpenAI API / LLM
- Supabase
- PostgreSQL

### Tools
- Git & GitHub
- VS Code
- IntelliJ IDEA

---

## ✨ Features

- 💬 AI-powered question answering
- 🤖 OpenAI LLM integration
- ⚡ React + Spring Boot REST communication
- 🔐 Supabase authentication/database integration
- 🗄️ PostgreSQL database support
- 📱 Responsive UI
- ⌨️ Press Enter to send questions
- 🔄 Loading and error handling
- 🔑 Environment variable support

---

## 🏗️ Project Architecture

```text
User
 ↓
React Frontend
 ↓ HTTP Request
Spring Boot Backend
 ↓
OpenAI API / LLM
 ↓
Spring Boot Backend
 ↓ JSON Response
React Frontend
 ↓
User
REST APIs
OpenAI API
Supabase
PostgreSQL
Git & GitHub
⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

📄 License

This project is created for learning and development purposes.
