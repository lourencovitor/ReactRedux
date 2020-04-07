import React from "react";
import { connect } from "react-redux";

const Video = ({ activeModule, activeLesson }) => (
  <>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <strong style={{ fontSize: "1.7rem" }}>
        Modulo: <span style={{ color: "#993399" }}>{activeModule.title}</span>
      </strong>
    </div>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <span style={{ fontSize: "1.5rem" }}>
        Aula: <span style={{ color: "#084d6e" }}>{activeLesson.title}</span>
      </span>
    </div>
  </>
);

export default connect((state) => ({
  activeModule: state.course.activeModule,
  activeLesson: state.course.activeLesson,
}))(Video);
