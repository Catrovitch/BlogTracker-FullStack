# BlogTracker

This is a full stack application where I have set up a CI/CD pipeline to increase productivity. Focus is not on UI design.

The CI/CD pipeline uses Github Actions to perform several checks before commiting changes.

Main pipeline:
1. Frontend testing
2. Backend testing
3. End-to-End testing
4. Deployment to Fly.io
5. Create a tagged release
6. Notify Discord server of update.

Secondary:
1. Pings the webpage once every day to check that it is still alive.
