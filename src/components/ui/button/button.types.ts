import { VariantProps } from 'class-variance-authority';
import { buttonVariants } from './button.variants';
import { ButtonColors } from '@enums';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  color?: `${ButtonColors}`;
}
