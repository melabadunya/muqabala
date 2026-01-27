# 🔧 Git & GitHub Setup Guide

## ✅ Local Repository Status

**Repository initialized:** ✅  
**First commit created:** ✅  
**Branch:** main  
**Commit ID:** 4477104

---

## 📤 Push to GitHub

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `muqabala`
3. Description: `🌙 Master Quran Tajweed - Interactive learning platform`
4. Visibility: **Public** (or Private if preferred)
5. **DO NOT** initialize with README, .gitignore, or license (we already have them)
6. Click **Create repository**

### Step 2: Add Remote and Push

After creating the repository on GitHub, run these commands:

```bash
# Add GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/muqabala.git

# Push to GitHub
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/johndoe/muqabala.git
git push -u origin main
```

### Step 3: Verify

Visit your repository at: `https://github.com/YOUR_USERNAME/muqabala`

You should see:
- ✅ README.md displayed
- ✅ docs/ folder
- ✅ All project files
- ✅ License file

---

## 🏠 Clone on Another Machine (Home)

### On your home computer:

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/muqabala.git

# Navigate to project
cd muqabala

# Install dependencies (when we add them)
npm install

# Start development server (when ready)
npm run dev
```

---

## 🔄 Daily Workflow

### Before Starting Work

```bash
# Pull latest changes
git pull origin main
```

### After Making Changes

```bash
# Check status
git status

# Add changes
git add .

# Commit
git commit -m "Your commit message"

# Push to GitHub
git push origin main
```

---

## 📋 Useful Git Commands

```bash
# View commit history
git log --oneline

# View current changes
git diff

# View remote URL
git remote -v

# Create new branch
git checkout -b feature-name

# Switch branches
git checkout main

# Merge branch
git merge feature-name
```

---

## 🔐 SSH Setup (Optional but Recommended)

Using SSH instead of HTTPS makes pushing easier (no password needed).

### Generate SSH Key

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

Press Enter to accept default location, then set a passphrase (optional).

### Add SSH Key to GitHub

1. Copy your public key:
   ```bash
   # Windows
   type %USERPROFILE%\.ssh\id_ed25519.pub

   # Copy the output
   ```

2. Go to GitHub → Settings → SSH and GPG keys → New SSH key
3. Paste your key and save

### Update Remote to Use SSH

```bash
git remote set-url origin git@github.com:YOUR_USERNAME/muqabala.git
```

Now you can push without entering password!

---

## 🌿 Branch Strategy (Future)

For now, we're working on `main` branch. Later we'll use:

```
main (production)
  └── develop (integration)
       ├── feature/tajweed-lessons
       ├── feature/quiz-system
       └── feature/user-auth
```

---

## ⚠️ Important Notes

1. **Never commit:**
   - `.env` files with secrets
   - `node_modules/`
   - Large binary files
   - Sensitive data

2. **Always:**
   - Write meaningful commit messages
   - Pull before starting work
   - Test before pushing
   - Keep commits atomic (one feature per commit)

3. **Commit Message Format:**
   ```
   ✨ feat: Add new feature
   🐛 fix: Fix bug
   📝 docs: Update documentation
   💄 style: UI changes
   ♻️ refactor: Code refactoring
   ✅ test: Add tests
   🔧 chore: Maintenance tasks
   ```

---

## 📞 Need Help?

If you encounter issues:

1. Check git status: `git status`
2. View logs: `git log --oneline`
3. Google the error message
4. Ask on Stack Overflow
5. Check GitHub docs: https://docs.github.com

---

**Current Status:** Ready to push to GitHub! 🚀
