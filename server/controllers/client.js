import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import User from "../models/User.js"

export const getProducts = async (req, res) => {
    try {
        console.log("i am puran from controller")
        const products = await Product.find();

        const productsWithStats = await Promise.all(
            products.map(async (product) => {
                const stat = await ProductStat.find({
                    productId: product._id,
                });
                return {
                    ...product._doc,
                    stat,
                };
            })
        );

        res.status(200).json(productsWithStats);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Failed to fetch products", error });
    }
};


export const getCustomers = async (req, res) => {
    try {
        const customers = await User.find({ role: "user"}).select("-password")
        res.status(200).json(customers);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}