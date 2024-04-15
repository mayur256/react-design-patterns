
/**
 * OCP (Open Closed Principle) maintains that a component should be open for extension, but closed for modification.
 * This principle is very well adapted by composition feature of React. It advocates Composition over Inheritance
 */

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