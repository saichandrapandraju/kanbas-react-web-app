import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { BsGripVertical } from "react-icons/bs";
import { setModules, addModule, deleteModule, updateModule, setModule } from "./reducer";
import ModuleForm from './ModuleForm';
import ModuleControlButtons from './ModuleControlButtons';
import ModuleControls from './ModuleControls';
import './Modules.css';
import GreenCheckmark from './GreenCheckmark';
import * as coursesClient from "../client";
import * as modulesClient from "./client";

export default function Modules() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const [moduleName, setModuleName] = useState("");

  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, []);

  const { modules, module } = useSelector((state: any) => state.modulesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  
  const isFaculty = currentUser?.role === "FACULTY";
  const courseModules = modules.filter((m: any) => m.course === cid);

  const handleAddModule = (moduleAdd: any) => {
    console.log("handleAddModule", moduleAdd);
    createModuleForCourse(moduleAdd);
  };

  const handleDeleteModule = (moduleId: string) => {
    if (window.confirm("Are you sure you want to delete this module?")) {
      dispatch(deleteModule(moduleId));
    }
  };

  const handleUpdateModule = (moduleToEdit: any) => {
    saveModule(moduleToEdit);
  };

  const handleEditModule = (moduleToEdit: any) => {
    dispatch(setModule(moduleToEdit));
    
  };
  const createModuleForCourse = async (moduleAdd: any) => {
    if (!cid) return;
    // const newModule = { name: moduleName, course: cid };
    const module = await coursesClient.createModuleForCourse(cid, moduleAdd);
    dispatch(addModule(module));
  };
  const removeModule = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };
  const saveModule = async (module: any) => {
    console.log("saveModule", module);
    await modulesClient.updateModule(module);
  };



  return (
    <div className="modules-container">
      {isFaculty && (
        <ModuleForm
          module={module}
          setModule={(newModule) => dispatch(setModule(newModule))}
          addModule={handleAddModule}
          updateModule={handleUpdateModule}
        />
      )}
      
      <div style={{ marginBottom: '1rem' }}>
        {isFaculty ? (
         <ModuleControls />

        ) : (
          <div className="d-flex justify-content-end mb-3">
            <button className="btn btn-outline-secondary">
              Collapse All
            </button>
          </div>
        )}
      </div>

      <ul className="modules-list">
        {modules.map((module: any) => (
          <li className="module-item" key={module._id}>
            <div className="module-title">
              {isFaculty && <BsGripVertical className="icon" />}
              {!module.editing && module.name}
              { module.editing && (
                <input 
                  className="form-control w-50 d-inline-block" 
                  value={module.name}
                  onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      saveModule({ ...module, editing: false });
                    }
                  }}
                />
              )}

              {isFaculty && (
                <ModuleControlButtons
                  moduleId={module._id}
                  onDelete={removeModule}
                  onEdit={() => handleEditModule(module)}
                />
              )}
            </div>
            {module.description && (
              <p className="module-description">{module.description}</p>
            )}
            {module.lessons && module.lessons.length > 0 && (
              <ul className="lessons-list">
                {module.lessons.map((lesson: any) => (
                  <li className="lesson-item" key={lesson.id}>
                    {isFaculty && <BsGripVertical className="icon" />}
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