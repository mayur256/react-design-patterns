import { Button } from "./Button";

export function NonOCP() {
    return (
        <div className="flex space-x-10">
            <Button text="Go Home" role="forward" />
            <Button text="Go Back" role="back" />
        </div>
    );
};
