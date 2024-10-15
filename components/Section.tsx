import clsx from 'clsx';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode
    className?: string
}

const Section = ({ children, className }: Props) => {

    return (
        <section className={clsx("px-10 pb-10 max-w-[1500px] mx-auto", className)}>{children}</section>
    )
}

export default Section