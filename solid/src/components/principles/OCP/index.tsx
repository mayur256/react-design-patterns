import { ReactElement } from "react";

import {
    HiOutlineArrowNarrowRight,
    HiOutlineArrowNarrowLeft,
} from "react-icons/hi";

// import { NonOCP } from "./NonOCP";
import { Button } from "./Button";

export function OCP(): ReactElement {
    return (
        <>
            {/* <NonOCP /> */}

            <Button text="Go Home" icon={<HiOutlineArrowNarrowRight />} />
            <Button text="Go Back" icon={<HiOutlineArrowNarrowLeft />} />
        </>
    )
}