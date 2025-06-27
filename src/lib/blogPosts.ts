import { supabase } from '@/integrations/supabase/client';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  image_url: string | null;
  published_at: string;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export async function fetchBlogPosts(publishedOnly: boolean = true): Promise<BlogPost[]> {
  let query = supabase
    .from('blog_posts')
    .select('*')
    .order('published_at', { ascending: false });

  if (publishedOnly) {
    query = query.eq('is_published', true);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
  return data as BlogPost[];
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true) // Only fetch published posts for public view
    .single();

  if (error && error.code !== 'PGRST116') { // PGRST116 means no rows found
    console.error('Error fetching blog post by slug:', error);
    throw error;
  }
  return data as BlogPost | null;
}

export async function addBlogPost(post: Omit<BlogPost, 'id' | 'created_at' | 'updated_at' | 'published_at'> & { published_at?: string }): Promise<BlogPost> {
  const { data, error } = await supabase
    .from('blog_posts')
    .insert({
      ...post,
      published_at: post.published_at || new Date().toISOString(),
    })
    .select()
    .single();

  if (error) {
    console.error('Error adding blog post:', error);
    throw error;
  }
  return data as BlogPost;
}

export async function updateBlogPost(id: string, updates: Partial<Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>>): Promise<BlogPost> {
  const { data, error } = await supabase
    .from('blog_posts')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating blog post:', error);
    throw error;
  }
  return data as BlogPost;
}

export async function deleteBlogPost(id: string): Promise<void> {
  const { error } = await supabase
    .from('blog_posts')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting blog post:', error);
    throw error;
  }
}