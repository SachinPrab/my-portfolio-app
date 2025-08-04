import { getProjects } from "@/sanity/schemas/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-10 max-w-screen-xl mx-auto">
      <h1 className="text-4xl sm:text-5xl leading-relaxed md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white">
  Hello! I&apos;m <br />
  <span className="block mt-1 bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
    Sachin Prabhakar
  </span>
</h1>


      <p className="mt-4 text-base sm:text-lg md:text-xl text-pink-600 font-semibold max-w-2xl">
        Welcome everyone! Check out my projects and feel free to test out their features!
      </p>

      <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-black dark:text-black">
        My Projects
      </h2>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="group border border-gray-300 dark:border-gray-600 rounded-xl overflow-hidden shadow hover:shadow-lg transition-transform duration-200 hover:scale-105"
          >
            {project.image && (
              <div className="relative w-full h-64">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover rounded-t-xl"
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
        ))}
      </div>
    </div>
  );
}
