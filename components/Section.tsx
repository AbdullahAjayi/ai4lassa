import clsx from 'clsx';
import { ReactNode } from 'react';
import { forwardRef } from 'react';

type Props = {
    children: ReactNode
    className?: string
    id?: string
}

const Section = forwardRef<HTMLElement, Props>(({ children, className, id }: Props, ref) => {
    return (
        <section ref={ref} id={id} className={clsx("px-10 md:px-16 pb-10 max-w-[1500px] mx-auto", className)}>{children}</section>
    )
})

Section.displayName = 'Section'
export default Section