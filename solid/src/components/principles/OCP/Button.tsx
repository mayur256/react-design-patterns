/* import {
    HiOutlineArrowNarrowRight,
    HiOutlineArrowNarrowLeft,
} from "react-icons/hi"; */

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    role?: "back" | "forward" | "main" | "not-found";
    icon?: React.ReactNode
}

export function Button(props: IButtonProps) {
    const { text, /* role ,*/ icon } = props;

    return (
        <button
            className="flex items-center font-bold outline-none pt-4 pb-4 pl-8 pr-8 rounded-xl bg-gray-200 text-black"
            {...props}
        >
            {text}

            {/** The following block of code is susceptible to modification when new icon against
             * a role is to be rendered. This violates OCP
             */}
            {/* <div className="m-2">
                {role === "forward" && <HiOutlineArrowNarrowRight />}
                {role === "back" && <HiOutlineArrowNarrowLeft />}
            </div> */}

            {/**
             * The following block of code is open to extension and is not susceptible to 
             * modification.
             */}
            <div className="m-2">
                {icon}
            </div>
        </button>
    );
}