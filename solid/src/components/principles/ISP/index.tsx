/**
 * Interface Segregation Principle (ISP) states that Consumers should be forced to rely upon
 * interfaces that they don't use.
 * In React this means "Pass only props components that are required by component"
 */

import { ReactElement } from "react";
// import { NonISP } from "./NonISP";

export interface UserInfo {
    name: string;
    age: number;
    education: {
        university: string;
        degree: string;
        passout_year: number;
    }
}

type User = Omit<UserInfo, 'education'>

function DisplayUser({ user }: { user: User }): ReactElement {
    return (
        <div>
            <p>Name: <strong>{user.name}</strong></p>
            <p>Age: <strong>{user.age}</strong></p>
        </div>
    )
}

// Component definition
export function ISP(): ReactElement {
    const user: User = {
        name: 'Alice Sparks',
        age: 25
    }

    return (
        <>
            {/* <NonISP /> */}
            <DisplayUser user={user} />
        </>
    )
}