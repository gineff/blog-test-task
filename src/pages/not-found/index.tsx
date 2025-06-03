import { routes } from '@/app/router/routes';
import { useRouter } from '@/shared/lib/navigation/use-router';
import { Link } from '@/shared/ui/link';

export const NotFound = () => {
  const { currentPath } = useRouter();
  const hasRoute = routes.some((route) => route.path === currentPath);

  if (hasRoute) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404 — Страница не найдена</h1>
      <p className="text-lg text-gray-700 mb-6">
        Такой страницы не существует или она была удалена.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        На главную
      </Link>
    </div>
  );
};
