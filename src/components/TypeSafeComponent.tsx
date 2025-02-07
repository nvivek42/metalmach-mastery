import React from 'react';

// Define a type for the component props
interface TypeSafeComponentProps {
  title: string;
  description?: string;
  count?: number;
}

// Create a type-safe functional component
const TypeSafeComponent: React.FC<TypeSafeComponentProps> = ({ 
  title, 
  description = 'Default description', 
  count = 0 
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold text-blue-600">{title}</h2>
      <p className="mt-2 text-gray-700">{description}</p>
      {count > 0 && (
        <div className="mt-4 text-sm text-gray-500">
          Count: {count}
        </div>
      )}
    </div>
  );
};

export default TypeSafeComponent;
