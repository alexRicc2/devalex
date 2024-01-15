import { fetchAPI } from "@/lib/api"

export async function GET_PROJECTS(){
  const data = await fetchAPI(
    `
    query NewQuery {
      projects(first: 10) {
        nodes {
          title
        }
      }
    }
    `,{}
  )
  return data
}
