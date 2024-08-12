import * as React from 'react';
import { SVGProps } from 'react';

import { IconKind } from '@/components/Shared/Icon/Icon';
import { cn } from '@/utils';

type Props = {
  kind?: IconKind;
} & SVGProps<SVGSVGElement>;

export const Warning: React.FC<Props> = ({ className, kind, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    className={cn('h-full w-full fill-inherit', className)}
    {...props}
  >
    {kind === 'default' ? (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 3.5C1 2.11929 2.11929 1 3.5 1H12.5C13.8807 1 15 2.11929 15 3.5V12.5C15 13.8807 13.8807 15 12.5 15H3.5C2.11929 15 1 13.8807 1 12.5V3.5ZM7.84923 9.54385C7.63326 9.54385 7.50822 9.4223 7.50822 9.21236C7.50822 8.35723 7.50617 7.50211 7.50411 6.64699C7.50205 5.79187 7.5 4.93675 7.5 4.08163C7.5 3.87168 7.62503 3.75014 7.84101 3.75014H8.15899C8.37496 3.75014 8.5 3.87168 8.5 4.08163C8.5 4.93675 8.50055 5.79187 8.50109 6.64699C8.50164 7.50211 8.50218 8.35724 8.50218 9.21236C8.50218 9.4223 8.37714 9.54385 8.16117 9.54385L7.84923 9.54385ZM8.04473 10.3058C7.48473 10.3058 7.05273 10.7102 7.05273 11.2857C7.05273 11.8301 7.48473 12.25 8.04473 12.25C8.60473 12.25 9.05273 11.8301 9.05273 11.2857C9.05273 10.7102 8.60473 10.3058 8.04473 10.3058Z"
        fill="inherit"
      />
    ) : (
      <>
        <path
          d="M7.84923 9.54385C7.63326 9.54385 7.50822 9.4223 7.50822 9.21236C7.50822 8.35723 7.50617 7.50211 7.50411 6.64699C7.50205 5.79187 7.5 4.93675 7.5 4.08163C7.5 3.87168 7.62503 3.75014 7.84101 3.75014H8.15899C8.37496 3.75014 8.5 3.87168 8.5 4.08163C8.5 4.93675 8.50055 5.79187 8.50109 6.64699C8.50164 7.50211 8.50218 8.35724 8.50218 9.21236C8.50218 9.4223 8.37714 9.54385 8.16117 9.54385L7.84923 9.54385Z"
          fill="inherit"
        />
        <path
          d="M8.04473 10.3058C7.48473 10.3058 7.05273 10.7102 7.05273 11.2857C7.05273 11.8301 7.48473 12.25 8.04473 12.25C8.60473 12.25 9.05273 11.8301 9.05273 11.2857C9.05273 10.7102 8.60473 10.3058 8.04473 10.3058Z"
          fill="inherit"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 1C2.34315 1 1 2.34315 1 4V12C1 13.6569 2.34315 15 4 15H12C13.6569 15 15 13.6569 15 12V4C15 2.34315 13.6569 1 12 1H4ZM2 4C2 2.89543 2.89543 2 4 2H12C13.1046 2 14 2.89543 14 4V12C14 13.1046 13.1046 14 12 14H4C2.89543 14 2 13.1046 2 12V4Z"
          fill="inherit"
        />
      </>
    )}
  </svg>
);