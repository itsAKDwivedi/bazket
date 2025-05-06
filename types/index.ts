import { ProductSchema } from "@/lib/validator";
import {z} from "zod";

export type IProductInput = z.infer<typeof ProductSchema>;

export type Data = {
    products: IProductInput[];
    headerMenus: {
        name: string;
        href: string;
    }[],
    carousels: {
        title: string;
        buttonCaption: string;
        image: string;
        url: string;
        isPublished: boolean;
    }[],
}