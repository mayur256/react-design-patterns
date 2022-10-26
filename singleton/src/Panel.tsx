import { FormEvent, ReactElement } from "react";

// Props type definitions
interface IProps {
    title: string;
    colorAlias: string;
    onColorChange: (event: FormEvent<HTMLInputElement>) => void
}

// component definition for a color box panel
export function Panel({
    title,
    colorAlias,
    onColorChange
}: IProps): ReactElement {
    return (
        <div className="component-a">
            <strong>{title}</strong>
            <div>Pick color</div>
            <span id="selected-color">{colorAlias}</span>
            <input
                type="color"
                onChange={onColorChange}
                value={colorAlias}
            />
        </div>
    )
};
