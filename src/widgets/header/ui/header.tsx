import { Link } from '@/shared/ui/link';

export const Header = () => {
  return (
    <header className="absolute w-full bg-white shadow-md top-0 left-0">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">
          <Link to="/">📝 Blog</Link>
        </div>
      </div>
    </header>
  );
};
