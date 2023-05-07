const BLOG_COUNT = 2;

export type Blog = {
  attributes: {
    title: string;
    writeDate: string;
  };
  content: any;
  id: number;
};

export async function getBlog(id: number): Promise<Blog> {
  const { attributes, default: content } = await import(`../blogs/${id}.md`);
  return { attributes, content, id };
}

export async function getRecentBlogs(): Promise<Blog[]> {
  const start = BLOG_COUNT >= 3 ? BLOG_COUNT - 3 : 0;
  const promises = [];

  for (let i = start; i < BLOG_COUNT; i++) {
    promises.push(getBlog(i));
  }

  const blogs = await Promise.all(promises);
  return blogs;
}

export async function getBlogs(): Promise<Blog[]> {
  const promises = [];

  for (let i = 0; i < BLOG_COUNT; i++) {
    promises.push(getBlog(i));
  }

  const blogs = await Promise.all(promises);
  return blogs;
}
