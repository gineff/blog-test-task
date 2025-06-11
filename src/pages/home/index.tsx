import { Link } from '@/shared/ui/link';
import { Header } from '@/widgets/header';

export const HomePage = () => {
  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto px-4 py-12 space-y-10">
        <section className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526378722630-4c6e1519aeca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] opacity-20 bg-cover bg-center"></div>

          <div className="relative max-w-3xl mx-auto px-6 py-12 md:py-20 text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              📝 Список статей (блог) — Тестовое задание
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-xl mx-auto">
              Простое веб-приложение (без использование сторонних библиотек) для управления списком
              статей. React, React Hooks, custom Router, custom State-Manager c async thunks,
              хранением данных.
            </p>
            <Link
              to="/blog"
              className="inline-block mt-4 px-6 py-3 text-sm font-medium bg-white text-blue-600 rounded hover:bg-blue-50 transition"
            >
              Перейти к списку статей →
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">🔧 Базовая настройка</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            <li>
              <strong>Prettier</strong> — автоматическое форматирование кода
            </li>
            <li>
              <strong>Tailwind CSS</strong> — стилизация компонентов
            </li>
            <li>
              <strong>Алиасы путей</strong> — поддержка <code>@/</code>-импортов
            </li>
          </ul>
        </section>

        <section id="route-management" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <span>🔄</span> Управление маршрутами
          </h2>

          <div className="mb-6">
            Маршруты приложения управляются через кастомный менеджер маршрутов на базе{' '}
            <strong className="font-semibold">useContext useReducer</strong> с использованием параметров
             <strong className="font-semibold"> /post/:id</strong>:
          </div>
        </section>

        <section id="state-management" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <span>🔄</span> Управление состоянием
          </h2>

          <div className="mb-6">
            Состояние приложения управляется через кастомный менеджер состояний на базе{' '}
            <strong className="font-semibold">useReducer + useContext</strong> с применением
            следующих концепций <strong className="font-semibold">Redux</strong>:
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <span>🧩</span> Slice (
              <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm">entities/post</code>)
            </h3>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                <strong className="font-medium">Actions:</strong> действия над статьями
              </li>
              <li>
                <strong className="font-medium">Reducer:</strong> обработка изменений состояния
              </li>
              <li>
                <strong className="font-medium">Selectors:</strong> мемоизированные методы получения
                данных из стора
              </li>
            </ol>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <span>⚙️</span> Async Thunk'и
            </h3>
            <p className="mb-2">Реализована асинхронная логика:</p>
            <ul className="space-y-2 ml-4">
              <li>
                <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm">createPostThunk</code>
              </li>
              <li>
                <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm">updatePostThunk</code>
              </li>
              <li>
                <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm">deletePostThunk</code>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <span>🔌</span> Middleware
            </h3>
            <p>
              Подключен <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm">thunk</code>,
              чтобы обрабатывать асинхронные операции.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">💾 Хранение данных</h2>
          <div className="text-gray-700">
            Список статей хранится в <strong className="font-semibold">localStorage</strong>.{' '}
            Архитектура приложения позволяет легко расширить функционал до{' '}
            <strong className="font-semibold">REST API</strong> или другого источника данных.
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">🎨 UI-компоненты</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Компонент</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Описание</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-mono text-blue-600 whitespace-nowrap">
                    <code>PostItem</code>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-800">
                    Статья с возможностью редактирования
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-mono text-blue-600 whitespace-nowrap">
                    <code>PostList</code>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-800">
                    Список статей с возможностью добавления новой статьи, редактирования и удаления
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-mono text-blue-600 whitespace-nowrap">
                    <code>Pagination</code>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-800">Пагинация для списка статей</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-mono text-blue-600 whitespace-nowrap">
                    <code>ViewToggle</code>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-800">
                    Переключение вида просмотра списка статей, в виде списка или таблицы
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
};
