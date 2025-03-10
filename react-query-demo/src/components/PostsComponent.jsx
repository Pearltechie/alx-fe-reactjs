import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
    const { data, error, isError, isLoading } = useQuery("posts", fetchPosts, {
      cacheTime: 1000 * 60 * 5, // Data is cached for 5 minutes (300
      staleTime: 1000 * 60 * 1, // Data is fresh for 1 minute (60,000ms)
      refetchOnWindowFocus: false, // Prevent refetch when switching back to tab
      keepPreviousData: true, // Show old data while fetching new data
    });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refresh Posts</button> {/* Added Button */}
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;

