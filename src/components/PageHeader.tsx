import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { useLang } from '@/context/LanguageContext';
import { Reveal } from '@/components/Reveal';

export function PageHeader({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-ink text-ivory pt-40 pb-20 lg:pt-52 lg:pb-28">
      <div className="mx-auto max-w-editorial px-6 lg:px-12">
        <Reveal>
          <p className="label-lg text-silver/60 mb-6">{label}</p>
          <h1 className="text-display font-extrabold tracking-ultra-tight text-balance max-w-4xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-8 text-lg lg:text-xl text-silver max-w-xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export function BackLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 text-sm text-silver hover:text-cobalt transition-colors mb-12"
    >
      <ArrowLeft className="w-4 h-4" />
      {label}
    </Link>
  );
}

export function ArrowLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-1.5 text-sm font-semibold text-cobalt hover:text-cobalt-dark transition-colors editorial-link"
    >
      {label}
      <ArrowUpRight className="w-4 h-4" />
    </Link>
  );
}
