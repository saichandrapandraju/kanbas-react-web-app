import React from 'react';
import { BsGripVertical } from "react-icons/bs";
import { FaTrash, FaPencil } from "react-icons/fa6";
import GreenCheckmark from './GreenCheckmark';

interface ModuleControlButtonsProps {
  moduleId: string;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

export default function ModuleControlButtons({
  moduleId,
  onDelete,
  onEdit
}: ModuleControlButtonsProps) {
  return (
    <div className="float-end">
      <FaPencil 
        className="text-primary me-2"
        onClick={() => onEdit(moduleId)}
      />
      <FaTrash
        className="text-danger me-2"
        onClick={() => onDelete(moduleId)}
      />
      <GreenCheckmark />
      <BsGripVertical className="ms-2" />
    </div>
  );
}