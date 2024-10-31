import React from 'react';

interface ModuleFormProps {
  module: any;
  setModule: (module: any) => void;
  addModule: () => void;
  updateModule: () => void;
}

export default function ModuleForm({ 
  module, 
  setModule, 
  addModule, 
  updateModule 
}: ModuleFormProps) {
  return (
    <div className="module-form mb-2">
      <input
        className="form-control mb-2"
        value={module.name}
        onChange={(e) => setModule({ ...module, name: e.target.value })}
        placeholder="Module Name"
      />
      <textarea
        className="form-control mb-2"
        value={module.description}
        onChange={(e) => setModule({ ...module, description: e.target.value })}
        placeholder="Module Description"
      />
      <button
        className="btn btn-success me-2"
        onClick={addModule}
        id="wd-add-module-btn"
      >
        Add Module
      </button>
      <button
        className="btn btn-primary"
        onClick={updateModule}
        id="wd-update-module-btn"
      >
        Update Module
      </button>
    </div>
  );
}
