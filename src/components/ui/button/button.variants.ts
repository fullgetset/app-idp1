import { ButtonColors, ButtonSizes } from '@enums';
import { cva } from 'class-variance-authority';

export const buttonVariants = cva('inline-flex items-center justify-center', {
  variants: {
    color: {
      [`${ButtonColors.primary}`]:
        'bg-buttonColor-primary text-textColor-white',
      [`${ButtonColors.secondary}`]:
        'bg-buttonColor-secondary text-textColor-white',
      [`${ButtonColors.error}`]: 'bg-backgroundColor-secondary',
    },
    size: {
      [`${ButtonSizes.xs}`]: 'rounded-xs px-3 py-1 gap-2 !text-caption1',
      [`${ButtonSizes.sm}`]: 'rounded-sm px-4 py-2 gap-3 !text-body2',
      [`${ButtonSizes.md}`]: 'rounded-md px-5 py-3 gap-4 !text-body1',
    },
  },
  defaultVariants: {
    color: `${ButtonColors.primary}`,
    size: `${ButtonSizes.md}`,
  },
  compoundVariants: [
    {
      color: `${ButtonColors.primary}`,
      className: 'hover:bg-buttonColor-primary-hover',
    },
    {
      color: `${ButtonColors.secondary}`,
      className: 'hover:bg-buttonColor-secondary-hover',
    },
  ],
});
