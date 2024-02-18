const mongoose = require('mongoose');
const config = require('../utils/config');



describe('Database Connection Test', () => {
  it('should log the value of NODE_ENV and test database connection', async () => {
      console.log('NODE_ENV:', process.env.NODE_ENV);


      // Connect to the MongoDB database
      await mongoose.connect(config.MONGODB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      });

      try {
          // Check if the connection to the database is successful
          expect(mongoose.connection.readyState).toBe(1); // 1 indicates that the connection is open
      } finally {
          // Close the connection after the test
          await mongoose.connection.close();
      }
  }, 50000);
});

  
