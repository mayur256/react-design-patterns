import { ComponentPropsWithoutRef, ReactElement } from "react";

interface IProps extends ComponentPropsWithoutRef<"button"> {
    label: string
}
export function Button({ label, ...rest }: IProps): ReactElement {
    return (
        <button
            {...rest}
        >
            {label}
        </button>
    )
}