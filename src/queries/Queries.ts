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

const updateCourse = async (courseId: string, completeValue: boolean) => {
    const docRef = doc(db, 'courses', courseId);
    try {
        await setDoc(docRef, { complete: completeValue }, { merge: true });
        console.log("Complete field updated successfully!");
    } catch (error) {
        console.error("Error updating complete field: ", error);
    }
}

    

const getCourse = async (id: string) => {
    const courseCol = collection(db, 'courses');
    const courseSnapshot = await getDocs(courseCol);
    const courseList = courseSnapshot.docs.map(doc => doc.data());
    const course = courseList.find(course => course.id === id);
    return course;
}

const getStudentDetails = async (id: string) => {
    console.log(id);
    const courseCol = collection(db, 'courses');
    const courseSnapshot = await getDocs(courseCol);
    const courseList = courseSnapshot.docs.map(doc => doc.data());
    const studentCourses = courseList.filter(course =>
        course.students.some((student: { id: number; }) => student.id === parseInt(id))
      );
    console.log(studentCourses);
    return studentCourses;
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

export { getCourses, getCourse, getStudentDetails, addCourses,updateCourse };