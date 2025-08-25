// Simple script to open browser after a delay
const { exec } = require('child_process');

setTimeout(() => {
  exec('npx open-cli http://localhost:3000', (error) => {
    if (error) {
      console.log('Could not open browser automatically');
    }
  });
}, 1500); // Wait 1.5 seconds for the dev server to start
