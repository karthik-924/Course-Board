import firebaseconfig from "./connection";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, getDocs, setDoc } from 'firebase/firestore/lite';
import courseModels from "./CourseModels";
import CourseModel from "../types/CourseModel";

console.log(firebaseconfig);
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
        const coursesRef = collection(db, 'courses'); // Collection reference
        const newCourseRef = doc(coursesRef); // Create a new document reference
        await setDoc(newCourseRef, course);
    });
}

export { getCourses, getCourse, getStudentDetails, addCourses };