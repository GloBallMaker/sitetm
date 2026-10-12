import { useParams, Link } from 'react-router-dom';
import { Clock, ArrowUpRight } from 'lucide-react';
import { useLang } from '@/context/LanguageContext';
import { Reveal } from '@/components/Reveal';
import { BackLink } from '@/components/PageHeader';
import { insights } from '@/data/content';

export function ArticlePage() {
  const { slug } = useParams();
  const { lang, t } = useLang();
  const article = insights.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="text-silver mb-4">{t('Статтю не знайдено', 'Article not found')}</p>
          <Link to="/insights" className="text-cobalt font-semibold">
            {t('Повернутися до аналітики', 'Back to insights')}
          </Link>
        </div>
      </div>
    );
  }

  const related = insights.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <>
      <section className="bg-ink text-ivory pt-40 pb-16 lg:pt-52 lg:pb-24">
        <div className="mx-auto max-w-prose px-6">
          <BackLink to="/insights" label={t('Усі статті', 'All articles')} />
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono text-cobalt">{article.category[lang]}</span>
              <span className="text-xs text-silver">·</span>
              <span className="text-xs text-silver">{formatDate(article.date, lang)}</span>
              <span className="text-xs text-silver">·</span>
              <span className="flex items-center gap-1 text-xs text-silver">
                <Clock className="w-3 h-3" />
                {article.readingTime} {t('хв читання', 'min read')}
              </span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold tracking-tight text-balance leading-tight">
              {article.title[lang]}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-20 lg:py-32">
        <div className="mx-auto max-w-prose px-6">
          <Reveal>
            <p className="text-lg lg:text-xl text-ink/80 leading-relaxed mb-12 font-light">
              {article.excerpt[lang]}
            </p>
            <div className="space-y-6">
              {article.content[lang].split('\n\n').map((para, i) => (
                <p key={i} className="text-base lg:text-lg text-ink/70 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related */}
      <section className="bg-ivory-200 py-20 lg:py-32 border-t border-ink/10">
        <div className="mx-auto max-w-editorial px-6 lg:px-12">
          <Reveal>
            <p className="label-lg mb-12">{t('Пов\'язані статті', 'Related articles')}</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            {related.map((a, i) => (
              <Reveal key={a.id} delay={i * 0.08}>
                <Link to={`/insights/${a.slug}`} className="group block">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono text-cobalt">{a.category[lang]}</span>
                    <span className="text-xs text-silver">·</span>
                    <span className="text-xs text-silver">{formatDate(a.date, lang)}</span>
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold tracking-tight mb-3 group-hover:text-cobalt transition-colors leading-snug">
                    {a.title[lang]}
                  </h3>
                  <p className="text-sm text-ink/70 leading-relaxed mb-3">
                    {a.excerpt[lang]}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-cobalt">
                    {t('Читати', 'Read')}
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
                  </span>
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
