import React from 'react';
import { BsGripVertical } from "react-icons/bs";
import './Modules.css';  // Import the custom CSS file
import GreenCheckmark from './GreenCheckmark';
import ModuleControls from './ModuleControls';
import * as db from "../../Database";
import { useParams } from "react-router";

// Components for module and lesson control buttons
function ModuleControlButtons() {
  return (
    <div className="module-control-buttons">
      <BsGripVertical className="icon" />
      <span className="more-options">
        <i className="fas fa-ellipsis-v"></i>
      </span>
    </div>
  );
}

function LessonControlButtons() {
  return (
    <div className="lesson-control-buttons">
      <GreenCheckmark />
      <span className="more-options">
        <i className="fas fa-ellipsis-v"></i>
      </span>
    </div>
  );
}

export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules;

  return (
    <div className="modules-container">
      <div style={{ marginBottom: '1rem' }}>
        <ModuleControls />
      </div>
      <ul className="modules-list">
        {modules
          .filter((module) => module.course === cid)
          .map((module) => (
            <li className="module-item" key={module.name}>
              <div className="module-title">
                <BsGripVertical className="icon" />
                {module.name}
                <ModuleControlButtons />
              </div>
              {/* {module.description && (
                <p className="module-description">{module.description}</p>
              )} */}
              {module.lessons && module.lessons.length > 0 && (
                <ul className="lessons-list">
                  {module.lessons.map((lesson) => (
                    <li className="lesson-item" key={lesson.id}>
                      <BsGripVertical className="icon" />
                      {lesson.name}
                      <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}
