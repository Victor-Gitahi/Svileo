import React from "react";
import styles from "./CustomButton.module.css";

interface buttonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function CustomButton({ children, className }: buttonProps) {
  return (
    <button className={`${styles.button}  ${className} btn`}>{children}</button>
  );
}
