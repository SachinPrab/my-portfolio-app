import { getProjects } from "@/sanity/schemas/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      <Navbar />

      <div className="px-4 sm:px-6 lg:px-8 py-10 max-w-screen-xl mx-auto overflow-x-hidden">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
          Hello! I&apos;m <br />
          <span className="block bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
            Sachin Prabhakar
          </span>
        </h1>

        <p className="mt-4 text-base sm:text-lg md:text-xl text-pink-600 font-semibold max-w-2xl">
          Welcome everyone! Check out my projects and feel free to test out their features!
        </p>

        <h2 className="mt-12 text-xl sm:text-2xl md:text-3xl font-bold text-black dark:text-white">
          My Projects
        </h2>

        {/* Carousel Section */}
        <div className="mt-6 w-full">
          <Carousel className="w-full">
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem
                  key={project._id}
                  className="sm:basis-1/1 md:basis-1/2 lg:basis-1/3"
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group border border-gray-300 dark:border-gray-600 rounded-xl overflow-hidden shadow hover:shadow-lg transition-transform duration-200 hover:scale-105 block"
                  >
                    {project.image && (
                      <div className="relative w-full h-64 sm:h-56">
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="text-lg sm:text-xl font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
                        {project.name}
                      </h3>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="relative">
  <CarouselPrevious className="absolute left-0 mt-10 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700" />
  <CarouselNext className="absolute right-0 mt-10 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700" />
</div>
          </Carousel>
        </div>

      <div className="mt-16 flex justify-center">
  <Button variant="outline" className="dark:bg-white text-black">
    <Link href="/about">About Me</Link>
  </Button>
</div>
</div>
    </>
  );
}
