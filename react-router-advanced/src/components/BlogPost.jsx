import { useParams } from 'react-router-dom';

function BlogPost() {
  const { Id } = useParams();
  return <h2>Viewing Post {Id}</h2>;
}

export default Post;
