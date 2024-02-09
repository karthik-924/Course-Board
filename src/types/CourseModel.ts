type CourseModel = {
    id: string;
    name: string;
    instructor: string;
    description: string;
    enrollmentStatus: string;
    thumbnail: string;
    duration: string;
    schedule: string;
    location: string;
    prerequisites: string[];
    syllabus: {
      week: number;
      topic: string;
      content: string;
    }[];
    students: {
      id: number;
      name: string;
      email: string;
    }[];
  };

export default CourseModel;