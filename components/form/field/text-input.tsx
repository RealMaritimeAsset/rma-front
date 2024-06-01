import { Input } from '@nextui-org/input';
import { InputVariantProps } from '@nextui-org/theme';
import { ReactNode } from 'react';

export interface TextInputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  description?: string;
  className?: string;
  autoFocus?: boolean;
  fullWidth?: boolean;
  isReadOnly?: boolean;
  size?: InputVariantProps['size'];
  variant?: InputVariantProps['variant'];
  radius?: InputVariantProps['radius'];
  labelPlacement?: InputVariantProps['labelPlacement'];
  isInvalid?: boolean;
  errorMessage?: string | React.ReactElement;
  value?: string;
  onChange?: (value: any) => void;
  autoCapitalize?: string;
  autoComplete?: string;
  autoCorrect?: string;
  endContent?: ReactNode;
}

export default function TextInput({
  label,
  type,
  placeholder,
  isDisabled,
  description,
  className,
  autoFocus,
  fullWidth,
  isReadOnly,
  variant,
  radius,
  labelPlacement,
  isRequired = true,
  size = 'lg',
  isInvalid,
  errorMessage,
  value,
  onChange,
  autoCapitalize,
  autoComplete,
  autoCorrect,
  endContent
}: TextInputProps) {
  return (
    <Input
      type={type}
      label={label}
      labelPlacement={labelPlacement}
      className={className}
      isRequired={isRequired}
      isReadOnly={isReadOnly}
      size={size}
      variant={variant}
      radius={radius}
      placeholder={placeholder}
      description={description}
      fullWidth={fullWidth}
      autoFocus={autoFocus}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      errorMessage={errorMessage}
      value={value}
      onChange={onChange}
      autoCapitalize={autoCapitalize}
      autoComplete={autoComplete}
      autoCorrect={autoCorrect}
      endContent={endContent}
    />
  );
}
