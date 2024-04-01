// Top level imports
import { ReactElement } from "react";

// Custom hooks
import { useFilteredProducts } from "../../../hooks/useFilteredProducts";

import { Rating } from "react-simple-star-rating";

// Constituent components
import { Products } from "./Products";

// types
// import type { IProduct } from "../../../utils/types";


// component definition
export function SRP(): ReactElement {

    // hooks
    const { products, handleRating, filterRate } = useFilteredProducts();

    return (
        <div className="flex flex-col h-full">
            <div className="flex flex-col justify-center items-center">
                <span className="font-semibold">Minimum Rating </span>
                <Rating
                    initialValue={filterRate}
                    SVGclassName="inline-block"
                    onClick={handleRating}
                />
            </div>

            <Products products={products} />
        </div>
    );
}
