import { compileContent } from "@/components/functions";
import { notFound } from "next/navigation";
import { Metadata } from 'next';
import { getBlog, getBlogs } from "@/_actions/blogActions";

export async function generateMetadata(props:any): Promise<Metadata> {

  
  const slugInURL = props.params.slug;
  
  let blog = null;
  
  try {
    blog = await getBlog(slugInURL);
    
  } catch (error) {

    console.log(error)
    notFound();
  }

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      images: [
        {url: blog.thumbnail}
      ]
    } 
  }
}


export async function generateStaticParams(props:any) {

  const {blogs}:any = await getBlogs();

  return blogs.map((blog:any) => blog.slug);
}


const page = async (props:any) => {

  const slugInURL = props.params.slug;

  let blog:any = null;
  let compiledContent = null;

  try {
    blog = await getBlog(slugInURL);
    compiledContent = await compileContent(blog.content);
    
  } catch (error) {

    console.log(error)
    notFound();
  }

  return (
    <div className='blog-container flex flex-col gap-4 p-2 sm:px-4 sm:border rounded-lg sm:shadow-sm sm:bg-slate-50 dark:sm:bg-slate-900 py-4 break-words'>
        <h1 className="font-bold text-3xl border-l-4 border-red-600 pl-2">{blog.title}</h1>
        {compiledContent}
    </div>
  )
}

export default page