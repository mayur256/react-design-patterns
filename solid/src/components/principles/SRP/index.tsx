// Top level imports
import { ReactElement, useState, useEffect, useMemo } from "react";

import axios from "axios";
import { Rating } from "react-simple-star-rating";

// Constituent components
import { Products } from "./Products";

// types
import type { IProduct } from "../../../utils/types";


// component definition
export function SRP(): ReactElement {
    const [products, setProducts] = useState<Array<IProduct>>([]);
    const [filterRate, setFilterRate] = useState<number>(1);

    const fetchProducts = async () => {
        const response = await axios.get(
            "https://fakestoreapi.com/products"
        );

        if (response && response.data) setProducts(response.data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleRating = (rate: number) => {
        setFilterRate(rate);
    };

    const filteredProducts = useMemo(
        () =>
            products.filter(
                (product: any) => product.rating.rate > filterRate
            ),
        [products, filterRate]
    );

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

            <Products products={filteredProducts} />
        </div>
    );
}
