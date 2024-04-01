// top level imports
import { useState, useEffect, useRef } from "react";
import axios from "axios";

// type definitions
import { IProduct } from "../utils/types";

// Hook definition
export function useFilteredProducts() {

    // state definitions
    const [products, setProducts] = useState<Array<IProduct>>([]);
    const [filterRate, setFilterRate] = useState<number>(1);

    // Refs
    const allProducts = useRef<Array<IProduct>>([])

    const fetchProducts = async () => {
        const response = await axios.get(
            "https://fakestoreapi.com/products"
        );

        if (response && response.data) {
            setProducts(response.data);
            allProducts.current = response.data;
        };
    };


    const handleRating = (rate: number) => {
        setFilterRate(rate);
    };

    useEffect(() => {
        fetchProducts();
    }, [])

    useEffect(() => {
        const filtered = allProducts.current.filter(
            (product: IProduct) => product.rating.rate > filterRate
        );
        setProducts(filtered);
    }, [filterRate])

    return { products, filterRate, handleRating }
}
