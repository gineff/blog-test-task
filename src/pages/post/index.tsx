import { useEffect } from 'react';

type PostPageProps = {
  params?: {
    id: string;
  };
};

export const PostPage: React.FC<PostPageProps> = ({ params }) => {
  useEffect(() => {
    if (params?.id) {
      console.log('Загружаем пост с ID:', params.id);
    }
  }, [params?.id]);

  return (
    <div>
      <h1>Пост ID: {params?.id}</h1>
    </div>
  );
};
