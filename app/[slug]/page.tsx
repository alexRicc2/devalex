import { getAllPostsWithSlug } from "@/lib/queries/Post/getAllPostsSlug"
import { getPostBySlug } from "@/lib/queries/Post/getPostBySlug"
import {notFound} from 'next/navigation'

export async function generateStaticParams() {
  const posts = await getAllPostsWithSlug()
  console.log("posts", posts)
  return posts.map((post) => { return { slug: post.slug } })
}

// export async function generateMetadata(params: any){
//   const slug = params?.slug
//   const post = await getPostBySlug(slug)
//   if(!post){
//     return {}
//   }
//   return post
// }

export default async function Page({params}: {params: {slug: string}}){
  const data = await getPostBySlug(params?.slug)
  
  if(!data.post){
    return notFound()
  }

  return (
    <div>
      {data.post.title}
    </div>
  )
}