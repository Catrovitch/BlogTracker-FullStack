const mongoose = require('mongoose');
const config = require('../utils/config');

// Function to check if MONGODB_URI is defined and not empty
const isMongoDBUriValid = () => {
    return config.MONGODB_URI.length > 0;
  };
  

describe('Database Connection Test', () => {
  it('should log the value of NODE_ENV and test database connection', async () => {
    console.log('NODE_ENV:', process.env.NODE_ENV);
    console.log('Length of MONGODB_URI is not zero: ', isMongoDBUriValid())

    // Establish a connection to the MongoDB database
    await mongoose.connect(config.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }, 10000);

    try {
      // Check if the connection to the database is successful
      expect(mongoose.connection.readyState).toBe(1); // 1 indicates that the connection is open
    } finally {
      // Close the connection after the test
      await mongoose.connection.close();
    }
  });
});
