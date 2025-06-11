import type { FC, FormEvent } from 'react';
import { useState } from 'react';

interface PostFormProps {
  initialTitle?: string;
  initialSummary?: string;
  initialContent?: string;
  onSubmit: (data: { title: string; summary: string; content: string }) => void;
}

export const PostForm: FC<PostFormProps> = ({
  initialTitle = '',
  initialSummary = '',
  initialContent = '',
  onSubmit,
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [summary, setSummary] = useState(initialSummary);
  const [content, setContent] = useState(initialContent);

  const [errors, setErrors] = useState({
    title: '',
    summary: '',
    content: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newErrors = {
      title: title.trim() ? '' : 'Заголовок обязателен',
      summary: summary.trim() ? '' : 'Краткое описание обязательно',
      content: content.trim() ? '' : 'Контент обязателен',
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);
    if (hasErrors) return;

    onSubmit({ title: title.trim(), summary: summary.trim(), content: content.trim() });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow">
      <div>
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

      <div className="text-right">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Сохранить
        </button>
      </div>
    </form>
  );
};
