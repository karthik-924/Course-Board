import Thumbnail from "../assets/React-thumbnail.png";
import CourseModel from "../types/CourseModel";


const courseModels:CourseModel[] = [
  {
    id: 'itrn1',
    name: "Introduction to React Native",
    instructor: "John Doe",
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open",
    thumbnail: Thumbnail,
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
    ],
  },
  {
    id: 'arnd2',
    name: "Advanced React Native Development",
    instructor: "Jane Smith",
    description:
      "Take your React Native skills to the next level with advanced techniques and best practices.",
    enrollmentStatus: "Closed",
    thumbnail: Thumbnail,
    duration: "10 weeks",
    schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: [
      "Intermediate React Native knowledge",
      "Experience with mobile app development",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Advanced State Management",
        content:
          "Explore advanced state management techniques using Redux and Context API.",
      },
      {
        week: 2,
        topic: "Optimizing Performance",
        content:
          "Learn how to optimize performance in React Native apps for better user experience.",
      },
    ],
    students: [
      {
        id: 201,
        name: "Charlie Brown",
        email: "charlie@example.com",
      },
      {
        id: 202,
        name: "Diana Smith",
        email: "diana@example.com",
      },
    ],
  },
  {
    id: 'rnwd3',
    name: "React Native for Web Developers",
    instructor: "John Doe",
    description:
      "Learn how to use React Native to build mobile apps for iOS and Android.",
    enrollmentStatus: "Open",
    thumbnail: Thumbnail,
    duration: "6 weeks",
    schedule: "Saturdays, 10:00 AM - 12:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
    ],
    students: [
      {
        id: 301,
        name: "Eve Johnson",
        email: "evejohnson301@gmail.com",
      },
      {
        id: 302,
        name: "Frank Smith",
        email: "fs302@gmail.com",
      },
    ],
  },
];

export default courseModels;