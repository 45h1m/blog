import { getAllBlogMeta, getBlogBySlug } from "@/components/functions";
import PostCard from "@/components/PostCard";

const page = async () => {
    const blogs:any = await getAllBlogMeta();

    return (
        <article className="blog-container flex flex-col gap-4 p-2 prose">
            {
                <ul className="flex flex-col gap-4 pt-4">
                    {blogs.map((blog:any) => (
                        <li className="" key={blog.realSlug}>
                            <PostCard 
                            title={blog.title} 
                            description={blog.description} 
                            slug={blog.realSlug} 
                            date={blog.date} 
                            author={blog.author} 
                            dp={blog.dp}
                            thumbnail={blog.thumbnail}
                            tags={blog.tags}/>
                        </li>
                    ))}
                </ul>
            }
        </article>
    );
};

export default page;
