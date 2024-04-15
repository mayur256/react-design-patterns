/**
 * Liskov Substitution principle (LSP) states that a subtype entity can be used to substitute a supertype entity 
 * without breaking the exiting funbctionality
 */

// top level imports
import { ReactElement } from "react";
import { Button } from "./Button";

// Component definition
/**
 * In our example we will be developing a component that is composed of native HTML
 * button element and this component can be used in all places where a native or some enhanced
 * button is required
 */
export function LSP(): ReactElement {
    return (
        <div className="mx-auto container flex justify-around mt-4">
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Native Button</button>

            {/** This component can easily substitute native HTML button element throughout the codebase without
             * affecting the functionality, as it supports all the properties and attributes of native button
             */}
            <Button
                label="Button Component"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            />
        </div>
    )
}