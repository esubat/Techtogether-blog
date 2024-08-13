import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {Search} from "lucide-react";
export default function SearchField() {
  return (
    <div className="flex items-center w-full max-w-md">
      <Input
        type="search"
        placeholder="Search"
        className="flex-1 rounded-l-md border-r-0 focus:ring-0 focus:border-primary"
      />
      <Button variant="ghost" size="icon" className="rounded-r-md border border-input">
        <Search />
        <span className="sr-only">Search</span>
      </Button>
    </div>
  )
}