# Memory Management in Docker Containers

Welcome! In this section, we'll explore how to effectively allocate and manage memory for your Docker containers. Understanding these concepts is crucial for ensuring your applications run smoothly without consuming excessive resources. Let's dive into how to set memory limits, reservations, and swaps for your containers! 🚀

## Overview

Before we break it down step-by-step, here’s a high-level summary of what you should try to implement in this exercise. I encourage you to give it a go yourself before referring to the detailed guide below:

1. Ensure there are no running containers with `docker ps -q` and remove them.
2. Run a MongoDB container with specific memory limits.
3. Experiment with different memory settings: limits, reservations, and swap.
4. Use the `docker stats` command to monitor memory usage.
5. Inspect containers that have exited to understand why they were terminated.

Ready to dive in? Give these steps a try, and once you're done, check out the step-by-step guide for more clarity!

## Step-by-Step Guide

1. **Cleanup Running Containers**: Start by ensuring no other containers are running. Use the command `docker ps -q` and remove any active containers.

2. **Start a MongoDB Container**: Run a MongoDB container in detached mode, utilizing the following command:

   ```
   docker run -d --name mongodb --memory="100m" mongo:7.0
   ```

3. **Monitor Memory Usage**: While the container is running, use `docker stats` to observe the memory usage.

4. **Adjust Memory Settings**:

   - Stop and remove the MongoDB container.
   - Experiment with different memory limits by setting:
     ```
     docker run -d --name mongodb --memory="20m" mongo:7.0
     ```
   - This should result in an out-of-memory error which you can check via `docker inspect`.

5. **Set Memory Reservation**:

   - Use a command that sets memory reservations alongside the limit:
     ```
     docker run -d --name mongodb --memory="100m" --memory-reservation="80m" mongo:7.0
     ```

6. **Explore Memory Swap Options**: Introduce a memory swap:

   ```
   docker run -d --name mongodb --memory="20m" --memory-swap="200m" mongo:7.0
   ```

7. **Check Container Status**: Use `docker ps` and `docker stats` to confirm that the container is running and observe memory behavior.

8. **Final Cleanup**: Stop and remove the MongoDB container once you're finished testing.

## Conclusion

Understanding how to allocate and manage memory in Docker is essential for building robust applications. By setting limits and reservations, you can prevent your containers from monopolizing host resources, ensuring a smoother and more efficient deployment. Keep experimenting with these settings as you continue your Docker journey! 👍
