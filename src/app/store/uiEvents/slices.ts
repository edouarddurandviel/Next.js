import { createSlice } from "@reduxjs/toolkit";

type UIEvents = {
  events: {
    modal: boolean;
  };
  loading: boolean;
};

const initialState: UIEvents = {
  events: {
    modal: false,
  },
  loading: false,
};

export const uiEventsSlices = createSlice({
  name: "events",
  initialState,
  reducers: {
    stopEvent: (state) => {
      state.events = {
        modal: false,
      };
    },
    startEvent: (state) => {
      state.events = {
        modal: true,
      };
    },
  },
});

export const { stopEvent, startEvent } = uiEventsSlices.actions;
export default uiEventsSlices.reducer;
