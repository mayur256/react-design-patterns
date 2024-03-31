type Rating = {
    rate: number;
    count: number;
}

export interface IProduct {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    rating: Rating
}