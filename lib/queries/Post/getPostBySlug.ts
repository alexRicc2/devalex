import { fetchAPI } from "@/lib/api";

export async function getPostBySlug(slug: string | undefined | string[]) {
  const data = await fetchAPI(
    `query PostBySlug($id: ID!, $idType: PostIdType!){
    post(id: $id, idType: $idType){
      title
    } 
  }`,
    {
      variables: {
        id: slug,
        idType: "SLUG",
      },
    }
  );
    console.log("return do fetchApi", data)
  return data;
}