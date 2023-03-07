import ApiHelper from "../utilities/ApiHelper";

export function getBlogsById(params: { id: string | undefined}) {
  return new Promise((resolve, reject) => {
    ApiHelper.get<BlogData>(`/api/v1/blogs/${params.id}`)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}
export function fetchAllBlog() {
  return new Promise((resolve, reject) => {
    ApiHelper.get(`/api/v1/blogs/`)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}
export function fetchBlog(params: {
  Blogid: string|undefined;
  includeMetaData?: boolean;
}) {
  return new Promise((resolve, reject) => {
    ApiHelper.get<BlogData[]>(`/api/v1/blogs/${params.Blogid}`, {
      params: { includeMetaData: params.includeMetaData ?? false },
    })
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}