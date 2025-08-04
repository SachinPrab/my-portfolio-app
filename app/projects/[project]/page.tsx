import { getProject } from "@/sanity/schemas/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { project: string }; // ✅ Correct type
};

export const dynamicParams = true;

export default async function Project({ params }: Props) {
  const slug = params.project;

  // Basic null check
  if (!slug) {
    throw new Error("Slug param is missing.");
  }

  const project = await getProject(slug);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center text-2xl text-red-500">
        Project not found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="flex flex-col items-center justify-center gap-4 mb-8">
        <h1 className="font-extrabold cursor-pointer bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text drop-shadow text-transparent text-4xl sm:text-5xl md:text-7xl text-center">
          {project.name}
        </h1>
        <a
          className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-6 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition text-lg sm:text-xl mx-auto"
          href={project.url ?? "#"}
          title="View project"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </header>

      <div className="flex flex-col items-center justify-center text-center mt-4 text-lg text-gray-700 mb-10">
        {project.content ? (
          <PortableText value={project.content} />
        ) : (
          <span>No content available</span>
        )}
      </div>

      {project.image && (
        <div className="flex justify-center mt-10">
          <Image
            src={project.image}
            alt={project.name}
            width={800}
            height={500}
            className="border-2 cursor-pointer border-gray-700 object-cover rounded-xl w-full max-w-2xl h-auto"
            priority
          />
        </div>
      )}
    </div>
  );
}
