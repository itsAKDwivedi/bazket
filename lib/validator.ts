import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

const Price = (field: string) => z.coerce
    .number()
    .refine((value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(value)), 
    `${field} must be a number with exactly 2 decimal places`)

export const ProductSchema = z.object({
    name: z.string().min(3, "Name should be at least 3 characters long"),
    slug: z.string().min(3, "Slug should be at least 3 characters long"),
    category: z.string().min(1, "Category is required"),
    image: z.array(z.string()).min(1, "Image is required"),
    brand: z.string().min(1, "Brand is required"),
    description: z.string().min(1, "Description is required"),
    isPublished: z.boolean(),
    price: Price("Price"),
    listPrice: Price('List price'),
    countInStock: z.coerce.number().int().nonnegative("Count in stock must be a non-negative integer"),
    tags: z.array(z.string()).default([]),
    sizes: z.array(z.string()).default([]),
    colors: z.array(z.string()).default([]),
    avgRating: z.coerce.number().min(0, 'Average rating must be a non-negative number').max(5, 'Average rating must be a number between 0 and 5').default(0),
    numReviews: z.coerce.number().int().nonnegative("Number of reviews must be a non-negative integer").default(0),
    ratingDistribution: z.array(z.object({ rating: z.number(), count: z.number() })).max(5, "Rating distribution can have a maximum of 5 ratings"),
    reviews: z.array(z.string()).default([]),
    numSales: z.coerce.number().int().nonnegative("Number of sales must be a non-negative integer").default(0),
})