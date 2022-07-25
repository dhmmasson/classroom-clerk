# classroom-clerk

Administrate classroom for git/github based project

# DEV NOTES

I installed

```bash
npm init

# Prepare Typescript
npm i -D typescript @types/express @types/node
npx tsc --init
echo -e "\e[31m"Update "outDir": "./dist"
# Dev setup
# Prettier
npm i -D prettier
# Linter
npm i -D @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint
npm i -D eslint-config-standard-with-typescript
npm i -D prettier-config-standard

# Create prettier config
cat > .eslintrc.json <<EOF
{
  "root": true,
  "extends": "standard-with-typescript",
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "ignorePatterns": ["dist/**"]
}
EOF
# Create prettier config
cat > .prettierrc.json <<EOF
"prettier-config-standard"
EOF
# Nodemon
npm i -D nodemon
# CI ?
npm install --save-dev lint-staged
# Git hook
npm install husky -D
npm set-script prepare "husky install"
npm run prepare
npx husky add .husky/pre-commit "npm lint-staged"

# Project stuff
npm -S install dotenv express
```

## Run dev

```bash
npm run dev &
```
