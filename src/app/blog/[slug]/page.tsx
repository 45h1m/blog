import { getAllBlogMeta, getBlogBySlug } from "@/components/functions";
import { notFound } from "next/navigation";
import { Metadata } from 'next';

export async function generateMetadata(props:any): Promise<Metadata> {

  const slugInURL = props.params.slug;

  let blog = null;

  try {
    blog = await getBlogBySlug(slugInURL);
    
  } catch (error) {

    console.log(error)
    notFound();
  }

  const { title, description, thumbnail, tags }:any = blog.meta;

  return {
    title: title,
    description: description,
    openGraph: {
      images: [
        {url: thumbnail}
      ]
    } 
  }
}


export async function generateStaticParams(props:any) {
  const slugInURL = props.params.slug;

  const blogs = await getAllBlogMeta();

  return blogs.map(({realSlug}) => realSlug);
}


const page = async (props:any) => {

  const slugInURL = props.params.slug;

  let blog:any = null;

  try {
    blog = await getBlogBySlug(slugInURL);
    
  } catch (error) {

    console.log(error)
    notFound();
  }


  const CompiledBlog = blog.content;

  return (
    <div className='blog-container flex flex-col gap-4 p-2 sm:px-4 sm:border rounded-lg sm:shadow-sm sm:bg-slate-50 dark:sm:bg-slate-900 py-4 break-words'>
        <h1 className="font-bold text-3xl border-l-4 border-red-600 pl-2">{blog.meta.title}</h1>
        {CompiledBlog}
    </div>
  )
}

export default page