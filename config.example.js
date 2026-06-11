// Firebase setup (one-time, ~5 min):
// 1. https://console.firebase.google.com → Create project
// 2. Build → Realtime Database → Create database (any region)
// 3. Rules tab → paste:
//    { "rules": { "milestones": { "$id": { ".read": true, ".write": true } } } }
// 4. Project settings → Your apps → Add web app → copy config below
// 5. Save as config.js (do not commit secrets you care about; apiKey is public by design)

const FIREBASE_CONFIG = {
  apiKey: "AIza...",
  authDomain: "your-project.firebaseapp.com",
  databaseURL: "https://your-project-default-rtdb.firebaseio.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
