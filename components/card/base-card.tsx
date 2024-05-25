import React, { ReactNode } from 'react'
import {
  CardBody,
  CardFooter,
  CardHeader,
  Card as NextUiCard,
} from '@nextui-org/card'
import { CardVariantProps } from '@nextui-org/theme'
import { cn } from '@/lib/utils'

interface BaseCardProps {
  title?: string
  children: ReactNode
  shadow?: CardVariantProps['shadow']
  onPress?: () => void
  actions?: ReactNode
  className?: string
}

interface BaseCardHeaderProps {
  className?: string
  children: ReactNode
}

interface BaseCardBodyProps extends BaseCardHeaderProps {}
interface BaseCardFooterProps extends BaseCardHeaderProps {}

export default function BaseCard({
  children,
  onPress,
  className,
  shadow = 'sm',
}: BaseCardProps) {
  return (
    <NextUiCard
      className={cn('py-4 w-full', className)}
      shadow={shadow}
      isPressable={!!onPress}
      onPress={onPress}
    >
      {children}
    </NextUiCard>
  )
}

export function BaseCardHeader({ className, children }: BaseCardHeaderProps) {
  return <CardHeader className={className}>{children}</CardHeader>
}

export function BaseCardBody({ className, children }: BaseCardBodyProps) {
  return <CardBody className={className}>{children}</CardBody>
}

export function BaseCardFooter({ className, children }: BaseCardFooterProps) {
  return <CardFooter className={className}>{children}</CardFooter>
}
