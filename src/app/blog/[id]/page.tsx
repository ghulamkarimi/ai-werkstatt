// app/blog/[id]/page.tsx
"use client";
import Link from "next/link";
import Head from "next/head";
import MaxWithWrapper from "@/components/MaxWithWrapper";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/feature/store";
import { displayBlog } from "@/feature/reducer/blogPostslice";
import { useParams } from "next/navigation";

export default function BlogPost() {
  const { id: postId } = useParams();
  const post = useSelector((state: RootState) => displayBlog(state, postId as string));
  console.log("postId", postId);
  console.log("post", post);

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
          content={post.image || "/images/default-og-image.jpg"}
        />
        <meta property="og:url" content={`https://ai-werkstatt.de/blog/${postId}`} />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={`https://ai-werkstatt.de/blog/${postId}`} />
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

        <h2 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h2>
        <p className="text-gray-500 text-sm mb-6">{post.date}</p>

        {post.image && (
          <div className="mb-6">
            <Image
              src={`http://localhost:7030/${post.image}`}
              alt={post.title}
              width={800}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        )}

        <div className="text-gray-600">{post.fullContent || post.description}</div>
        <Link
          href="/blog"
          className="text-yellow-500 hover:text-yellow-600 flex items-center gap-2 mt-6"
        >
          Zurück zum Blog
          <ArrowRight size={16} />
        </Link>
      </MaxWithWrapper>
    </section>
  );
}