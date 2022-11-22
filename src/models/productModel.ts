export interface IProductContextType {
    product: Product[]
    products: Product[]
    featuredProducts: Product[]
    twoForProducts: Product[]
    topProducts: Product[]
    getProduct: (articleNumber: string) => void
    getProducts: () => void
    getFeaturedProducts: (take: number) => void
    getTwoForProducts: (take: number) => void
    getTopProducts: (take: number) => void
}

export interface Product {
    description: string
    imageName: string;
    name: string;
    articleNumber: string;
    category: string;
    rating: string
    price: number;
}

export interface CartItem {
    imageName: string;
    name: string;
    articleNumber: string;
    category: string;
    price: number;
    quantity: number
}