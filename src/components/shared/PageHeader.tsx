import Container from '@/components/shared/Container';

type Accent = 'primary' | 'secondary' | 'slate';

interface PageHeaderProps {
  title: string;
  description: string;
  eyebrow?: string;
  accent?: Accent;
}

const accentStyles: Record<Accent, string> = {
  primary: 'from-slate-950 via-slate-900 to-primary/90',
  secondary: 'from-slate-950 via-slate-900 to-secondary/80',
  slate: 'from-slate-950 via-slate-900 to-slate-800',
};

export default function PageHeader({
  title,
  description,
  eyebrow = 'كامتيك',
  accent = 'primary',
}: PageHeaderProps) {
  return (
    <header className={`relative overflow-hidden bg-linear-to-br ${accentStyles[accent]} pt-24 sm:pt-28 pb-12 sm:pb-16`}>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, white 0.8px, transparent 0.8px), radial-gradient(circle at 80% 60%, white 0.8px, transparent 0.8px)',
          backgroundSize: '28px 28px, 36px 36px',
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-white/5 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-primary-light/20 blur-3xl" aria-hidden />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <p className="text-sm font-medium tracking-wide text-white/70 mb-3">{eyebrow}</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-snug">
            {title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>
      </Container>
    </header>
  );
}
