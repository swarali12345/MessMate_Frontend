import React, { useState, useRef, useEffect } from 'react';

interface InlineEditProps {
  value: string | number;
  onSave: (value: string | number) => void;
  type?: 'text' | 'number';
  className?: string;
}

const InlineEdit: React.FC<InlineEditProps> = ({ value, onSave, type = 'text', className = '' }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleClick = () => {
    setIsEditing(true);
    setEditValue(value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (editValue !== value) {
      onSave(editValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
      if (editValue !== value) {
        onSave(editValue);
      }
    } else if (e.key === 'Escape') {
      setIsEditing(false);
      setEditValue(value);
    }
  };

  if (isEditing) {
    return (
      <input
        ref={inputRef}
        type={type}
        value={editValue}
        onChange={(e) => setEditValue(type === 'number' ? Number(e.target.value) : e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className={`bg-white border border-primary-main rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary-main/20 ${className}`}
      />
    );
  }

  return (
    <span
      onClick={handleClick}
      className={`cursor-pointer hover:bg-gray-50 rounded px-2 py-1 ${className}`}
    >
      {type === 'number' ? `₹${value}` : value}
    </span>
  );
};

export default InlineEdit; 