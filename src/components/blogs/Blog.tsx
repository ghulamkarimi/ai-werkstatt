"use client";
import { useState } from "react";
import Link from "next/link";
import MaxWithWrapper from "../MaxWithWrapper";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const Blogs = () => {
  const [expandedPost, setExpandedPost] = useState<number | null>(null);

  const togglePost = (id: number) => {
    setExpandedPost(expandedPost === id ? null : id);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <MaxWithWrapper>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 text-center tracking-tight uppercase">
          Unser Blog
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm mb-3">{post.date}</p>
              <div className="text-gray-600 text-sm mb-4">
                {expandedPost === post.id ? post.fullContent : post.description}
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => togglePost(post.id)}
                  className="text-yellow-500 hover:text-yellow-600 flex items-center gap-2 text-sm font-semibold"
                >
                  {expandedPost === post.id ? "Weniger lesen" : "Mehr lesen"}
                  {expandedPost === post.id ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </button>
                <Link
                  href={`/blog/${post.id}`}
                  className="text-yellow-500 hover:text-yellow-600 flex items-center gap-2 text-sm font-semibold"
                >
                  Vollständigen Artikel lesen
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </MaxWithWrapper>
    </section>
  );
};

export default Blogs;