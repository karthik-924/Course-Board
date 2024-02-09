import firebaseconfig from "./connection";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, getDocs, setDoc } from 'firebase/firestore/lite';
import courseModels from "./CourseModels";
import { v4 as uuidv4 } from 'uuid';

// console.log(firebaseconfig);
const app = initializeApp(firebaseconfig);
const db = getFirestore(app);

const getCourses = async () => {
    const coursesCol = collection(db, 'courses');
    const courseSnapshot = await getDocs(coursesCol);
    const courseList = courseSnapshot.docs.map(doc => doc.data());
    return courseList;
}

const getCourse = async (id: string) => {
    const courseCol = collection(db, 'courses');
    const courseSnapshot = await getDocs(courseCol);
    const courseList = courseSnapshot.docs.map(doc => doc.data());
    const course = courseList.find(course => course.id === id);
    return course;
}

const getStudentDetails = async (id: string) => {
    const studentCol = collection(db, 'students');
    const studentSnapshot = await getDocs(studentCol);
    const studentList = studentSnapshot.docs.map(doc => doc.data());
    const student = studentList.find(student => student.id === id);
    return student;
}

const addCourses = async () => {
    courseModels.forEach(async (course) => {
        try {
            const courseId = uuidv4();
            const coursesRef = collection(db, 'courses');
            await setDoc(doc(coursesRef, courseId), { ...course, id: courseId });
        } catch (error) {
            console.error("Error adding course: ", error);
        }
    });
}

export { getCourses, getCourse, getStudentDetails, addCourses };