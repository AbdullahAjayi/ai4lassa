import clsx from 'clsx';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode
    className?: string
}

const Section = ({ children, className }: Props) => {

    return (
        <div className={clsx("px-10 pb-6 max-w-[1500px] mx-auto", className)}>{children}</div>
    )
}

export default Section