import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as CourseActions from "../../Store/actions/course";

const Sidebar = ({ modules, toggleLesson }) => (
  <aside>
    {modules.map((module) => (
      <div key={module.id} style={{ marginBottom: "50px", marginTop: "50px" }}>
        <strong style={{ fontSize: "1.5rem" }}>{module.title}</strong>
        <ul>
          {module.lessons.map((lesson) => (
            <li key={lesson.id} style={{ marginTop: "30px" }}>
              {lesson.title}
              <button
                style={{ marginLeft: "20px", borderRadius: "8px", outline: 0 }}
                onClick={() => toggleLesson(module, lesson)}
              >
                Selecionar
              </button>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </aside>
);

const mapStateToProps = (state) => ({
  modules: state.course.modules,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CourseActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
