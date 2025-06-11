import { generateUUID } from '@/shared/lib';
import { useThunkDispatch } from '@/shared/lib/store/use-thunk-dispatch';
import { Button } from '@/shared/ui/button';
import { Link } from '@/shared/ui/link';
import type { FC, FormEvent } from 'react';
import { useState } from 'react';
import { createPostThunk } from '../model/thunks/create-post';
import { updatePostThunk } from '../model/thunks/update-post';
import { useRouter } from '@/shared/lib/navigation/use-router';

interface PostFormProps {
  id?: string;
  title?: string;
  summary?: string;
  content?: string;
}

export const PostForm: FC<PostFormProps> = ({
  id,
  title: initialTitle = '',
  summary: initialSummary = '',
  content: initialContent = '',
}) => {
  const isNewPost = !id;
  const [title, setTitle] = useState(initialTitle);
  const [summary, setSummary] = useState(initialSummary);
  const [content, setContent] = useState(initialContent);

  const [errors, setErrors] = useState({
    title: '',
    summary: '',
    content: '',
  });
  const { navigate } = useRouter();
  const dispatch = useThunkDispatch();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const newErrors = {
      title: title.trim() ? '' : 'Заголовок обязателен',
      summary: summary.trim() ? '' : 'Краткое описание обязательно',
      content: content.trim() ? '' : 'Контент обязателен',
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);
    if (hasErrors) return;

    const post = {
      title: title.trim(),
      summary: summary.trim(),
      content: content.trim(),
      id: id || generateUUID(),
    };

    if (isNewPost) {
      await dispatch(createPostThunk(post));
    } else {
      await dispatch(updatePostThunk(post));
    }
    navigate('back');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-4 rounded-lg shadow min-w-[320px] w-[560px] flex flex-col"
    >
      <div className="mt-4">
        <label className="block font-medium mb-1">Заголовок</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        {errors.title && <p className="text-sm text-red-500 mt-1">{errors.title}</p>}
      </div>

      <div>
        <label className="block font-medium mb-1">Краткое описание</label>
        <textarea
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
          rows={3}
        />
        {errors.summary && <p className="text-sm text-red-500 mt-1">{errors.summary}</p>}
      </div>

      <div>
        <label className="block font-medium mb-1">Контент (HTML)</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 font-mono"
          rows={10}
        />
        {errors.content && <p className="text-sm text-red-500 mt-1">{errors.content}</p>}
      </div>

      <div className="text-left mt-auto space-x-2">
        <Button type="submit" variant="default">
          Сохранить
        </Button>
        <Button variant="outline">
          <Link to="back">Отмена</Link>
        </Button>
      </div>
    </form>
  );
};
