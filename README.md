# Project README

This project is a web application designed to manage courses and provide a student dashboard. It offers functionalities such as viewing course details, enrolling in courses, and marking courses as complete. Below is detailed information about the application's routes, folder structure, and instructions on how to run it locally.

## Routes

- **/courses**: This route displays a comprehensive list of all available courses retrieved from the Firebase database. Users can browse through various courses and select ones they're interested in.
- **/course/:id**: By navigating to this route and providing a specific course ID, users can access detailed information about the selected course. This includes the course's name, instructor, description, schedule, and other relevant details.
- **/dashboard/:id**: The student dashboard route provides enrolled students with an overview of their courses. It displays information about the courses they are currently enrolled in, including the course name, instructor, due date, and progress. Additionally, students can mark courses as complete from this dashboard, which updates their progress in the Firebase database.

## Folder Structure

- **src/app**: This directory contains configurations for the Redux store, including reducers and actions. It helps manage the application's state, though currently not extensively used.
- **src/assets**: All images and logos used within the application are stored here. This ensures easy access and management of resources.
- **src/components**: This directory houses reusable components used across various pages of the application. Components are organized based on their functionality and usage for improved maintainability.
- **src/pages**: Defines the routes and associated components/pages of the application. Each page corresponds to a specific route and contains relevant content and functionality.
- **src/queries**: Firebase queries and dummy data utilized during development are stored here. These queries interact with the Firebase database to retrieve and update course information.
- **src/types**: TypeScript type definitions, especially the structure of courses, are defined in this directory. It ensures consistency and type safety throughout the application.

## Instructions to Run Locally

1. Clone the repository to your local machine.
2. Run `npm install` to install project dependencies listed in the `package.json` file.
3. Create an `.env` file in the root directory and provide your Firebase configuration details, including the API key and other necessary credentials.
4. Uncomment the `useEffect` function located in `src/queries/Queries.ts` to populate the Firebase database with dummy data for testing purposes.
5. After pushing data to Firebase, execute the command `npm run dev` to start the development server.
6. Open a web browser and navigate to the following routes to explore the application:
   - `/courses`: Browse through the available courses.
   - `/course/:id`: View detailed information about a specific course by providing its ID in the URL.
   - `/dashboard/:id`: Access the student dashboard to view enrolled courses and mark them as complete.
7. Any likes added to courses on the backend will reflect in the frontend upon page reload.
8. The "Mark as Complete" feature allows students to update their course progress, which is reflected in the Firebase database.

