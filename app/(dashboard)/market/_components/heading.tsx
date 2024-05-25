import React, { ReactNode } from 'react'

interface HeadingProps {
  children?: ReactNode
}

export default function Heading({ children }: HeadingProps) {
  return <h1 className=" text-3xl font-medium m-4">{children}</h1>
}
