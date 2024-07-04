import { Skeleton } from "@/components/ui/skeleton";
import PostCardSmall from "@/components/PostCardSmall";
import { getAllBlogMeta, getBlogBySlug } from "@/components/functions";


const AsideLeft = async () => {
    const _blogs = await getAllBlogMeta();

    const blogs = _blogs.slice(0, 3);

    return (
        <aside className="pt-4 pr-3 hidden md:flex flex-col gap-3">
            <div className="flex flex-col gap-3 sticky top-0 pt-20">
                <h3 className="font-bold text-xl p-4 text-slate-700 dark:text-slate-400">Trending Blogs</h3>
                <ul className="flex flex-col gap-2">
                    {blogs.map(blog => <li key={blog.realSlug} className="max-w-sm"><PostCardSmall title={blog.title} description={blog.description} date={blog.date} slug={blog.realSlug} /></li>)}
                </ul>
            </div>
        </aside>
    );
};

export default AsideLeft;
