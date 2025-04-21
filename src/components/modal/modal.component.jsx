'use client';

export const Modal = ({ isOpen, children }) => {
  return <dialog open={isOpen}>{children}</dialog>;
};
