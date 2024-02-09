import { createSlice } from "@reduxjs/toolkit";
import courseModels from "../../queries/CourseModels";

export const courseSlice = createSlice({
    name: "course",
    initialState: {
        courses: [] as typeof courseModels,
    },
    reducers: {
        updateCourses: (state, action) => {
        state.courses = action.payload;
        },
    },
});

export const { updateCourses } = courseSlice.actions;

export default courseSlice.reducer;