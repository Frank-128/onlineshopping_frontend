import React from 'react';
import classNames from 'classnames';

// Define your badge component
const Badge = ({ variant, children }) => {
  const baseStyles = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium';

  const variantStyles = {
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
    primary: 'bg-blue-100 text-blue-800',
  };

  const combinedStyles = classNames(baseStyles, variantStyles[variant]);

  return <span className={combinedStyles}>{children}</span>;
};

export default Badge;
