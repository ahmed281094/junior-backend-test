import 'dotenv/config';
import app from './app.js';
import { connectDB } from './config/db.js';

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await connectDB();
  } catch (err) {
    console.warn('Database connection failed or skipped:', err.message);
  }

  const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

  process.on('SIGINT', () => {
    console.log('Shutting down server');
    server.close(() => process.exit(0));
  });
})();
