import React from 'react';
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { BsGripVertical } from "react-icons/bs";
import { addModule, deleteModule, updateModule, setModule } from "./reducer";
import ModuleForm from './ModuleForm';
import ModuleControlButtons from './ModuleControlButtons';
import ModuleControls from './ModuleControls';
import './Modules.css';
import GreenCheckmark from './GreenCheckmark';
export default function Modules() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const { modules, module } = useSelector((state: any) => state.modulesReducer);

  const courseModules = modules.filter((m: any) => m.course === cid);

  const handleAddModule = () => {
    dispatch(addModule({ ...module, course: cid }));
    dispatch(setModule({ name: "New Module", description: "", course: "" }));
  };

  const handleDeleteModule = (moduleId: string) => {
    dispatch(deleteModule(moduleId));
  };

  const handleUpdateModule = () => {
    dispatch(updateModule(module));
    dispatch(setModule({ name: "New Module", description: "", course: "" }));
  };

  const handleEditModule = (moduleToEdit: any) => {
    dispatch(setModule(moduleToEdit));
  };

  return (
    <div className="modules-container">
      <ModuleForm
        module={module}
        setModule={(newModule) => dispatch(setModule(newModule))}
        addModule={handleAddModule}
        updateModule={handleUpdateModule}
      />
      
      <div style={{ marginBottom: '1rem' }}>
        <ModuleControls />
      </div>

      <ul className="modules-list">
        {courseModules.map((module: any) => (
          <li className="module-item" key={module._id}>
            <div className="module-title">
              <BsGripVertical className="icon" />
              {module.name}
              <ModuleControlButtons
                moduleId={module._id}
                onDelete={handleDeleteModule}
                onEdit={() => handleEditModule(module)}
              />
            </div>
            {module.description && (
              <p className="module-description">{module.description}</p>
            )}
            {module.lessons && module.lessons.length > 0 && (
              <ul className="lessons-list">
                {module.lessons.map((lesson: any) => (
                  <li className="lesson-item" key={lesson.id}>
                    <BsGripVertical className="icon" />
                    {lesson.name}
                    <div className="float-end">
                      <GreenCheckmark />
                    </div>
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