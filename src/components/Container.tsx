import clsx from 'clsx'
import { FC, ReactNode } from 'react'

interface Props {
  readonly children: ReactNode
  readonly className?: string
  readonly parentClassName?: string
}

const Container: FC<Props> = ({ children, className, parentClassName }) => {
  return (
    <section className={clsx('w-full flex justify-center', parentClassName)}>
      <div className={clsx('w-full px-4 xl:w-[1195px] xl:px-0', className)}>
        {children}
      </div>
    </section>
  )
}

export default Container
