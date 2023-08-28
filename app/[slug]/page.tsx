import { getAllPostsWithSlug } from "@/lib/queries/Post/getAllPostsSlug"
import { getPostBySlug } from "@/lib/queries/Post/getPostBySlug"

export async function generateStaticParams() {
  const posts = await getAllPostsWithSlug()
  console.log("posts", posts)
  return posts.map((post) => { return { slug: post.slug } })
}

export default async function Page({params}: {params: {slug: string}}){
  const data = await getPostBySlug(params?.slug)

  return (
    <div>
      {data.post.title}
    </div>
  )
}