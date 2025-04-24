import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import { APP_NAME } from "@/lib/constants";

const categories = ['Men', 'Women', 'Electronics', 'Groceries'];

export default async function search() {
  return (
    <form action='/search' method='GET' className="flex items-stretch h-9">
        <Select name='category'>
            <SelectTrigger className="w-auto dark:border-gray-200 bg-gray-100 text-black border-r rounded-r-none h-full p-0 px-3 py-4">
                <SelectValue placeholder="All"/>
            </SelectTrigger>

            <SelectContent position="popper">
                <SelectItem value="all">All</SelectItem>
                {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                        {category}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>

        <Input 
            name='query' 
            placeholder={`Search ${APP_NAME}`} 
            type="search" 
            className="flex-1 rounded-none dark:border-gray-200 bg-gray-100 text-black text-base h-full" 
        />

        <button type="submit" className="bg-primary text-primary-foreground rounded-s-none rounded-e-md px-3 h-full">
            <SearchIcon className="w-5 h-4"/>
        </button>
    </form>
  )
}
