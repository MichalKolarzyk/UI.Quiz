import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiQuizInstance from "../../apis/apiQuiz/ApiQuizInstance";

export const getCategories = createAsyncThunk("getCategories", async () => {
      const response = await ApiQuizInstance.getReferenceItems("Category");
      return response.data;
});