const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: "Iniciando Com React",
      lessons: [
        { id: 1, title: "Iniciando Com React" },
        { id: 2, title: "Proceguindo Com React" },
      ],
    },
    {
      id: 2,
      title: "Aprendendo Redux",
      lessons: [
        { id: 3, title: "Iniciando com Redux" },
        { id: 4, title: "Aprendendo Store e reducers" },
      ],
    },
  ],
};

export default function course(state = INITIAL_STATE, action) {
  console.log(action);
  if (action.type === "TOGGLE_LESSON") {
    return {
      ...state,
      activeLesson: action.lesson,
      activeModule: action.module,
    };
  }
  return state;
}
