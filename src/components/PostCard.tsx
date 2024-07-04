import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { EllipsisVertical, Heart, MessageSquareText, MoveUpRight, Pin, Share2 } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { Span } from "next/dist/trace";

interface postCardProps {
    slug: string;
    title: string;
    description: string;
    date: string;
    author: string;
    dp: string;
    thumbnail: string;
    tags: Array<string>;
}

const PostCard = ({ slug, title, description, date, author, thumbnail, dp, tags }: postCardProps) => {
    return (
        <div className="max-w-2xl bg-slate-50 dark:bg-slate-900 sm:dark:bg-slate-800 rounded-lg border-2 shadow-sm overflow-hidden">
            <div className="p-3 flex justify-between items-center">
                <div className="left flex gap-3 items-center">
                    <Avatar>
                        <AvatarImage src={dp} />
                        <AvatarFallback>{author.slice(0,2)}</AvatarFallback>
                    </Avatar>

                    <div>
                        <p className="font-semibold">{author}</p>
                        <dl>
                            <dt className="hidden">Published on</dt>
                            <dd>
                                <p className="text-sm text-slate-500">{date}</p>
                            </dd>
                        </dl>
                    </div>
                </div>

                <div className="right grid">
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <EllipsisVertical />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>Share</DropdownMenuItem>
                            <DropdownMenuItem>Report</DropdownMenuItem>
                            <DropdownMenuItem>Block</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            <div className="lg:grid grid-cols-2">
                <div className="focus-content p-4 pt-0">
                    <h1 className="text-2xl font-bold py-2">{title}</h1>
                    <p className="text-slate-700 dark:text-slate-300 line-clamp-4 py-1">{description} </p>
                    <Link className="" href={"blog/" + slug}>
                        read more
                    </Link>
                </div>
                <div className="lg:pr-4 lg:pb-4 rounded-lg overflow-hidden">
                    <Link href={"blog/" + slug} className=" w-full h-full flex relative items-end">
                        <Image
                            width={300}
                            height={200}
                            src={thumbnail}
                            alt="post-thumbnail"
                            className="object-cover w-full h-full lg:max-h-full rounded-lg aspect-video"
                        />
                        <div className="absolute flex flex-wrap-reverse gap-2 bg-gradient-to-t rounded-lg from-black/20 to-transparent p-2">
                            {tags.map((tag) => (
                                <span key={tag} className="bg-white/80 dark:bg-black/50 text-black dark:text-slate-100 px-2 rounded-sm backdrop-blur-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PostCard;