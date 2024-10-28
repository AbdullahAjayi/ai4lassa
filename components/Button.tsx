import clsx from "clsx"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
    className?: string
}

const Button = ({ children, className }: Props) => {
    return (
        <button className={clsx("font-semibold bg-btn hover:bg-green-900 transition-colors duration-300 text-white px-4 py-3 rounded-lg", className)}>{children}</button>
    )
}

export default Button