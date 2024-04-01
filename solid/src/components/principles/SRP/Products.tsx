// Top level definition
import { ReactElement } from "react";

// Constituent components
import { Product } from "./Product";

// types
import type { IProduct } from "../../../utils/types";

// props type definition
interface IProps {
    products: Array<IProduct>
}

// Comonent definition
export function Products({ products = [] }: IProps): ReactElement {
    return (
        <div className="h-full flex flex-wrap justify-center">
            {products.map((product: IProduct) => (
                <Product key={`${product.title}-${product.id}`} product={product} />
            ))}
        </div>
    )
};

