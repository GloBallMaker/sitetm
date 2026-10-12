import { Link } from 'react-router-dom';
import { Clock, ArrowUpRight } from 'lucide-react';
import { useLang } from '@/context/LanguageContext';
import { Reveal } from '@/components/Reveal';
import { PageHeader } from '@/components/PageHeader';
import { insights } from '@/data/content';

export function InsightsPage() {
  const { lang, t } = useLang();

  const featured = insights[0];
  const rest = insights.slice(1);

  return (
    <>
      <PageHeader
        label={t('Аналітика', 'Insights')}
        title={t('Правовий контекст для бізнесу', 'Legal context for business')}
        subtitle={t(
          'Практичні матеріали, правові оновлення та коментарі для тих, хто приймає рішення.',
          'Practical articles, legal updates, and commentary for decision-makers.'
        )}
      />

      <section className="bg-ivory py-20 lg:py-32">
        <div className="mx-auto max-w-editorial px-6 lg:px-12">
          {/* Featured article */}
          <Reveal>
            <Link
              to={`/insights/${featured.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-16 mb-16 border-b border-ink/10"
            >
              <div className="lg:col-span-5">
                <div className="aspect-[4/3] bg-ink relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl font-extrabold text-ivory/5 tracking-ultra-tight">
                      01
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-mono text-cobalt bg-ink/80 px-2 py-1">
                      {featured.category[lang]}
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs text-silver">{formatDate(featured.date, lang)}</span>
                  <span className="text-xs text-silver">·</span>
                  <span className="flex items-center gap-1 text-xs text-silver">
                    <Clock className="w-3 h-3" />
                    {featured.readingTime} {t('хв', 'min')}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-4xl font-bold tracking-tight mb-4 group-hover:text-cobalt transition-colors leading-snug">
                  {featured.title[lang]}
                </h2>
                <p className="text-base lg:text-lg text-ink/70 leading-relaxed mb-6 max-w-lg">
                  {featured.excerpt[lang]}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-cobalt">
                  {t('Читати статтю', 'Read article')}
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                </span>
              </div>
            </Link>
          </Reveal>

          {/* Article grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {rest.map((article, i) => (
              <Reveal key={article.id} delay={(i % 3) * 0.08}>
                <Link to={`/insights/${article.slug}`} className="group block">
                  <div className="aspect-[4/3] bg-ink relative overflow-hidden mb-6">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl font-extrabold text-ivory/5 tracking-ultra-tight">
                        0{i + 2}
                      </span>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-mono text-cobalt bg-ink/80 px-2 py-1">
                        {article.category[lang]}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-silver">{formatDate(article.date, lang)}</span>
                    <span className="text-xs text-silver">·</span>
                    <span className="flex items-center gap-1 text-xs text-silver">
                      <Clock className="w-3 h-3" />
                      {article.readingTime} {t('хв', 'min')}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold tracking-tight mb-3 group-hover:text-cobalt transition-colors leading-snug">
                    {article.title[lang]}
                  </h3>
                  <p className="text-sm text-ink/70 leading-relaxed">
                    {article.excerpt[lang]}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function formatDate(dateStr: string, lang: 'uk' | 'en') {
  const date = new Date(dateStr);
  const months = {
    uk: ['січ', 'лют', 'бер', 'квіт', 'трав', 'черв', 'лип', 'серп', 'вер', 'жовт', 'лист', 'груд'],
    en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  };
  return `${date.getDate()} ${months[lang][date.getMonth()]} ${date.getFullYear()}`;
}
