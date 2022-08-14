import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProjectsSwitcherEnum } from "../../assets/types/switchers";

const initialState = {
  projectsFilter: ProjectsSwitcherEnum.ALL,
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setProjectsFilter: (state, action: PayloadAction<ProjectsSwitcherEnum>) => {
      state.projectsFilter = action.payload;
    },
  },
});

export const { setProjectsFilter } = homeSlice.actions;
