cd server 
npx tsc --build 
cd ../clients/student-desk
npm install
export REACT_APP_AUTH0_DOMAIN=$AUTH0_DOMAIN
export REACT_APP_AUTH0_CLIENT_ID=$AUTH0_CLIENT_ID
npm run build 