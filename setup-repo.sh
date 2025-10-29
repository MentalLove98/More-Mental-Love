#!/bin/bash

# Variables
REPO_URL="https://github.com/<YOUR_USERNAME>/more-mental-love.git"
PROJECT_DIR="more-mental-love"

# Create project folder
mkdir $PROJECT_DIR && cd $PROJECT_DIR

# Initialize Git
git init

# Create folder structure
mkdir -p apps/web/apps/server packages/{ui,utils,types} prisma

# Add example files

# package.json
cat <<EOL > package.json
{
  "name": "more-mental-love",
  "private": true,
  "workspaces": ["apps/*", "packages/*"]
}
EOL

# apps/web/package.json
mkdir -p apps/web
cat <<EOL > apps/web/package.json
{
  "name": "web",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "13.5.0",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "tailwindcss": "^3.3.0"
  }
}
EOL

# apps/server/package.json
mkdir -p apps/server
cat <<EOL > apps/server/package.json
{
  "name": "server",
  "private": true,
  "main": "src/index.ts",
  "scripts": {
    "dev": "ts-node-dev src/index.ts"
  },
  "dependencies": {
    "express": "^4.18.2",
    "prisma": "^5.0.0",
    "cors": "^2.8.5",
    "dotenv": "^16.3.0"
  },
  "devDependencies": {
    "ts-node-dev": "^2.0.0",
    "typescript": "^5.1.0"
  }
}
EOL

# prisma/schema.prisma
cat <<EOL > prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String      @id @default(cuid())
  email     String      @unique
  password  String
  moodEntries MoodEntry[]
}

model MoodEntry {
  id        String   @id @default(cuid())
  userId    String
  date      DateTime @default(now())
  mood      String
  note      String?
  createdAt DateTime @default(now())

  user      User     @relation(fields: [userId], references: [id])
}
EOL

# Initialize Git, commit, push
git add .
git commit -m "Initial scaffold for More Mental Love"
git branch -M main
git remote add origin $REPO_URL
git push -u origin main

echo "✅ Scaffold pushed to GitHub. You can download ZIP from your repo page."
