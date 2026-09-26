# Running MongoDB with Docker Compose

Welcome! In this session, we’re going to dive into using Docker Compose to set up a MongoDB database. This is a fantastic opportunity to practice your Docker skills, and I encourage you to try implementing the steps on your own before looking at the details below. Ready? Let’s go!

## Overview

In this exercise, you will create a MongoDB database using Docker Compose instead of Docker run commands. Here’s a high-level summary of what you’ll need to do:

1. Create a new file named `compose.yml` at the top level of your project folder.
2. Configure the `compose.yml` file to declare services, specifying the MongoDB image and the desired port mappings.
3. Use the terminal to run `docker-compose up` and observe the logs.
4. Verify that your MongoDB container is running and check the created networks.
5. Access the MongoDB shell to confirm the database setup.
6. Finally, shut down the container gracefully.

Take a moment to attempt these steps on your own. Once you’ve given it a shot, you can refer to the step-by-step guide below for assistance. 🚀

## Step-by-Step Guide

Here’s a concise guide to walk you through the process:

1. **Create `compose.yml`:**

   - In your project folder, create a file called `compose.yml`.

2. **Define Services in `compose.yml`:**

   - Open `compose.yml` and define a service for your MongoDB. Set the image to `mongo:7.0`, and add port mappings for 27017.

   Example `compose.yml`:

   ```yaml
   version: '3.8'
   services:
     mongodb:
       image: mongo:7.0
       ports:
         - '27017:27017'
   ```

3. **Run Docker Compose:**

   - Open your terminal and navigate to your project directory where the `compose.yml` file is located.
   - Run the command:
     ```bash
     docker-compose up
     ```

4. **Check Running Containers and Networks:**

   - In another terminal window, run:
     ```bash
     docker ps
     ```
   - This will show your running MongoDB container.

5. **Access MongoDB Shell:**

   - To access the MongoDB shell, run:
     ```bash
     docker run -it --network compose_default --rm mongo:7.0 mongosh --host mongodb --port 27017
     ```
   - Check that your databases are accessible!

6. **Stop the Container:**
   - Finally, stop the MongoDB container gracefully by running:
     ```bash
     docker-compose down
     ```

## Conclusion

Congratulations on successfully setting up MongoDB with Docker Compose! 🎉 You’ve just taken a big step towards mastering Docker and simplifying your development workflow. Keep experimenting, and don’t hesitate to revisit these steps if you need more practice. The more you play around, the more comfortable you’ll become with Docker tools.
