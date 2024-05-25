import React, { ReactNode } from 'react'
import BaseCard, {
  BaseCardBody,
  BaseCardFooter,
  BaseCardHeader,
} from './base-card'

interface CardProps {
  title?: string
  children: ReactNode
  onPress?: () => void
  actions?: ReactNode
  footer?: ReactNode
}

export default function Card({
  title,
  children,
  onPress,
  actions,
  footer,
}: CardProps) {
  return (
    <BaseCard onPress={onPress}>
      <BaseCardHeader className="pb-0 pt-2 px-4 flex items-center justify-between">
        <h4 className="font-bold text-large">{title}</h4>
        <div>{actions}</div>
      </BaseCardHeader>
      <BaseCardBody className="overflow-visible py-2">{children}</BaseCardBody>
      {footer && <BaseCardFooter>{footer}</BaseCardFooter>}
    </BaseCard>
  )
}
