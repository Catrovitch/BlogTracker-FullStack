const config = require('../utils/config');

// Function to check if MONGODB_URI is defined and not empty
const isMongoDBUriValid = () => {
  const valid = config.MONGODB_URI.length > 0;
  console.log('Length of MONGODB_URI is not zero: ', valid);
  console.log('MONGO_URI is null:', typeof(config.MONGODB_URI))
  console.log('Length of MONGO_URI:', config.MONGODB_URI.length)
  if (config.MONGODB_URI === "MONGODB_URI_HARDCODED") {
    console.log('Mongo db uri: MONGODB_URI_HARDCODED');
  }
  return valid;
};

describe('Database Connection Test', () => {
    it('should log the value of NODE_ENV and test database connection', async () => {
      console.log('NODE_ENV:', process.env.NODE_ENV);
      isMongoDBUriValid();
  
      // Check if already connected
      if (mongoose.connection.readyState === 1) {
        console.log('Already connected to the database');
      } else {
        // Establish a connection to the MongoDB database
        await mongoose.connect(config.MONGODB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }, 10000);
      }
  
      try {
        // Check if the connection to the database is successful
        expect(mongoose.connection.readyState).toBe(1); // 1 indicates that the connection is open
      } finally {
        // Close the connection after the test
        await mongoose.connection.close();
      }
    });
  });
  
