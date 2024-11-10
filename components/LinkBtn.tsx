import clsx from "clsx"
import Link from "next/link"
import { ReactNode } from "react"

type Props = {
    link: string
    children: ReactNode
    className?: string

}

const LinkBtn = ({ children, link, className }: Props) => {
    return (
        <Link href={link} className={clsx("underline hover:no-underline transition-all duration-300 block w-fit mt-6", className)}>{children}</Link>
    )
}

export default LinkBtn