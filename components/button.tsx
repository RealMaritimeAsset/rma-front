import { ButtonProps, Button as NextButton } from '@nextui-org/button';
import { Link } from '@nextui-org/react';
import { MouseEventHandler, ReactNode } from 'react';

interface CustomButtonProps {
  children: ReactNode;
  className?: string;
  color?: ButtonProps['color'];
  size?: ButtonProps['size'];
  radius?: ButtonProps['radius'];
  fullWidth?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isLoading?: boolean;
  startContent?: ReactNode;
  endContent?: ReactNode;
  isDisabled?: boolean;
  isIconOnly?: boolean;
  type?: ButtonProps['type'];
  variant?: ButtonProps['variant'];
  href?: string;
}

export default function Button({
  className,
  children,
  onClick,
  fullWidth,
  isLoading,
  startContent,
  endContent,
  isDisabled,
  isIconOnly,
  variant,
  href,
  color = 'primary',
  type = 'button',
  size = 'lg'
}: CustomButtonProps) {
  return (
    <NextButton
      type={type}
      variant={variant}
      color={color}
      size={size}
      fullWidth={fullWidth}
      className={className}
      isLoading={isLoading}
      startContent={!isLoading && startContent}
      endContent={endContent}
      isDisabled={isDisabled}
      isIconOnly={isIconOnly}
      onClick={onClick}
      href={href}
      as={href ? Link : undefined}
    >
      {children}
    </NextButton>
  );
}
