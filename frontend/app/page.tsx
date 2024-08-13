import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {cn} from "@/lib/utils"

export default function Home() {
  return (
  <>
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32">
    <div className="container flex flex-col gap-4 text-center">
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance">
        Welcome to Techtogether
      </h1>
      <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance">
        Ablog for Techies 😎.
      </p>
      <div className="flex flex-col gap-4 justify-center sm:flex-row">
        <Link
          href="/blogs"
          className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-fit")}
        >
          Read blogs
        </Link>
        <Link
          href="#"
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "w-full sm:w-fit"
          )}
        >
          Visit my gitHub
        </Link>
      </div>
    </div>
  </section>
  </>
  );
}
