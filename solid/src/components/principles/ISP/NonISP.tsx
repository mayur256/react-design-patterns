import { ReactElement } from "react";

import type { UserInfo } from ".";

/** Here - this component is forced to have all the properties to be passed of Userinfo interface
 * However it only uses name and age of UserInfo.
 * This example is a violation of ISP
 */
function DisplayUser({ user }: { user: UserInfo }): ReactElement {
    return (
        <div>
            <p>Name: <strong>{user.name}</strong></p>
            <p>Age: <strong>{user.age}</strong></p>
        </div>
    )
}

// Component definition
export function NonISP(): ReactElement {
    const dummyUser: UserInfo = {
        name: 'John Doe',
        age: 30,
        education: {
            university: 'MIT',
            passout_year: 2008,
            degree: 'Masters'
        }
    }

    return <DisplayUser user={dummyUser} />
}
