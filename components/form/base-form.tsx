import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import Button from '../button';

type ButtonAlign = 'left' | 'right';
export type ColumnSize = 1 | 2 | 3;

interface FormProps {
  onSubmit: (values: any) => void;
  loading?: boolean;
  disabled?: boolean;
  children: ReactNode;
  confirmText?: string;
  buttonAlign?: ButtonAlign;
  spaceY?: number;
  className?: string;
}

export default function BaseForm({
  loading,
  disabled,
  onSubmit,
  children,
  confirmText = 'Submit',
  buttonAlign = 'right',
  spaceY = 2
}: FormProps) {
  return (
    <form onSubmit={onSubmit} className={`space-y-${spaceY} w-full`} noValidate>
      <div className={cn('grid gap-8')}>{children}</div>
      <div
        className={cn('pt-4 space-x-2 flex items-center w-full', {
          'justify-end': buttonAlign === 'right'
        })}
      >
        <Button
          isLoading={loading}
          isDisabled={disabled}
          type="submit"
          className=" rounded-lg"
        >
          {confirmText}
        </Button>
      </div>
    </form>
  );
}
