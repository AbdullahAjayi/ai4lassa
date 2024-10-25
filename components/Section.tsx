import clsx from 'clsx';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode
    className?: string
    id?: string
}

const Section = ({ children, className, id }: Props) => {

    return (
        <section id={id} className={clsx("px-10 md:px-16 pb-10 max-w-[1500px] mx-auto", className)}>{children}</section>
    )
}

export default Section