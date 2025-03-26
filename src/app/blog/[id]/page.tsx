"use client";
import Head from "next/head";
import MaxWithWrapper from "@/components/MaxWithWrapper";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/feature/store";
import { displayBlog } from "@/feature/reducer/blogPostslice";
import Link from "next/link";

const BlogPost = ({ params }: { params: { id: string } }) => {
  const { blogId } = useSelector((state: RootState) => state.blogPost);
  const post = useSelector((state: RootState) => displayBlog(state, blogId));

  if (!post) {
    return (
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <MaxWithWrapper>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Blogbeitrag nicht gefunden
          </h2>
          <Link href="/blog" className="text-yellow-500 hover:text-yellow-600">
            Zurück zum Blog
          </Link>
        </MaxWithWrapper>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <Head>
        <title>{post.title} | AI-Werkstatt Blog</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content="AI, Werkstatt, Automatisierung, Diagnose" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta
          property="og:image"
          content={post.image ? `http://localhost:7030${post.image}` : "/images/default-og-image.jpg"}
        />
      </Head>
      
      <MaxWithWrapper>
        <nav className="mb-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-yellow-500">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-yellow-500">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span>{post.title}</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <p className="text-gray-500 text-sm mb-6">{post.date}</p>
        
        {post.image && (
          <div className="relative aspect-video w-full mb-8">
            <Image
              src={`http://localhost:7030${post.image}`}
              alt={post.title || "Blog Bild"}
              fill
              className="rounded-lg object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
        )}

        <article className="prose max-w-none text-gray-600">
          {post.fullContent}
        </article>

        <Link
          href="/blog"
          className="inline-flex items-center text-yellow-500 hover:text-yellow-600 mt-8"
        >
          Zurück zum Blog
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </MaxWithWrapper>
    </section>
  );
};

export default BlogPost;