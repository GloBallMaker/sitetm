import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useLang } from '@/context/LanguageContext';

export function NotFoundPage() {
  const { lang, t } = useLang();

  return (
    <div className="min-h-screen bg-ink text-ivory flex items-center justify-center">
      <div className="text-center px-6">
        <p className="text-8xl font-extrabold text-cobalt mb-6">404</p>
        <h1 className="text-2xl font-bold mb-4">
          {t('Сторінку не знайдено', 'Page not found')}
        </h1>
        <p className="text-silver mb-8 max-w-sm mx-auto">
          {t(
            'Сторінка, яку ви шукаєте, не існує або була переміщена.',
            'The page you are looking for does not exist or has been moved.'
          )}
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-base font-semibold px-8 py-4 bg-cobalt text-ivory hover:bg-cobalt-dark transition-colors"
        >
          {t('На головну', 'Back home')}
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
