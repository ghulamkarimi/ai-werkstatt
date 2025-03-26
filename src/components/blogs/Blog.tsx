"use client";
import Link from "next/link";
import Image from "next/image";
import MaxWithWrapper from "../MaxWithWrapper";
import { ArrowRight } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { displayBlogs, setBlogId } from "@/feature/reducer/blogPostslice";
import { RootState } from "@/feature/store";
import { useRouter } from "next/navigation";

const Blogs = () => {
  const getAllBlogs = useSelector(displayBlogs);
  const blogs = useSelector((state: RootState) => displayBlogs(state));

  const { blogId } = useSelector((state: RootState) => state.blogPost)
  const dispatch = useDispatch()
  const router = useRouter()
  console.log("blogs", blogs);
  console.log("getAllBlogs", getAllBlogs);
  console.log("blogId", blogId);


  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <MaxWithWrapper>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 text-center tracking-tight uppercase">
          Unser Blog
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {getAllBlogs && getAllBlogs?.map((post, index) => {
            // Log the image path before rendering the Image component
            console.log("Post image:", post?.image);

            return (
              <div
                key={post?._id}
                className={`p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col sm:flex-row border-y-1 border-yellow-500 ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  } items-center gap-6`}
              >
                {post?.image && (
                  <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                    <Image
                      //  src={
                      //   post.image.startsWith('/uploads') 
                      //     ? `http://localhost:7030${post.image}`
                      //     : post.image.startsWith('/Users/')
                      //       ? `/api/proxy?path=${encodeURIComponent(post.image)}`
                      //       : post.image
                      // }  
                      src={`http://localhost:7030${post?.image}`}
                      alt={post?.title}

                      width={400}
                      height={200}
                      className="rounded-lg object-cover w-full"
                      priority

                    />
                  </div>
                )}
                <div className="w-full sm:w-1/2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {post?.title}
                    </h3>
                    {/* <p className="text-gray-500 text-sm mb-3">{post?.date}</p> */}
                    <div className="text-gray-500 text-sm mb-3">
                      {post?.date ? new Date(post?.date).toLocaleDateString('de-DE', {
                        day: '2-digit',
                        month: '2-digit', 
                        year: 'numeric'
                      }) : "Keine Daten verfügbar"}
                    </div>
                    <div className="text-gray-600 text-sm mb-4">
                      {post?.description}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div
                      onClick={() => {
                        dispatch(setBlogId(post?._id))
                        router.push(`/blog/${post?._id}`)
                      }}

                      className="text-yellow-500 hover:text-yellow-600 flex items-center gap-2 text-sm font-semibold cursor-pointer"
                    >
                      Vollständigen Artikel lesen
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </MaxWithWrapper>
    </section>
  );
};

export default Blogs;