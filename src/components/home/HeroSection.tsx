import FadeIn from './FadeIn';
import { ContactButton, GhostButton } from './Buttons';
import type { Img, Links } from './types';

interface Props {
  name: string;
  intro: string;
  current: string;
  portrait: Img;
  links: Links;
  cv?: string;
}

export default function HeroSection({ name, intro, current, portrait, links, cv }: Props) {
  return (
    <section className="relative flex min-h-[80vh] flex-col" style={{ overflowX: 'clip' }}>
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col-reverse items-center gap-12 px-6 py-16 md:flex-row md:items-center md:justify-between md:gap-16 md:px-10">
        <div className="flex max-w-2xl flex-col gap-6">
          <FadeIn delay={0.1} y={20}>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#8E9AA3] sm:text-sm">{current}</p>
          </FadeIn>
          <FadeIn
            as="h1"
            delay={0.2}
            y={30}
            className="hero-heading font-black uppercase leading-[0.95] tracking-tight"
            style={{ fontSize: 'clamp(2.75rem, 6.5vw, 5.75rem)' }}
          >
            {name}
          </FadeIn>
          <FadeIn delay={0.3} y={20}>
            <p className="max-w-xl font-light leading-relaxed text-[#D7E2EA]/85" style={{ fontSize: 'clamp(1.05rem, 1.6vw, 1.3rem)' }}>
              {intro}
            </p>
          </FadeIn>
          <FadeIn delay={0.4} y={20} className="flex flex-wrap items-center gap-4 pt-2">
            <ContactButton href={links.contact} />
            {cv && <GhostButton href={cv} label="CV" />}
          </FadeIn>
        </div>

        <FadeIn delay={0.3} y={20} className="w-[min(240px,60vw)] shrink-0 md:w-[300px] lg:w-[340px]">
          <img
            src={portrait.src}
            srcSet={portrait.srcSet}
            sizes="(min-width: 1024px) 340px, (min-width: 768px) 300px, 240px"
            width={portrait.width}
            height={portrait.height}
            alt={portrait.alt}
            className="block h-auto w-full rounded-[28px] border border-solid border-[#D7E2EA]/15"
            style={{ backgroundColor: '#F4F2EE', boxShadow: '0 24px 80px rgba(118, 33, 176, 0.22)' }}
            fetchPriority="high"
          />
        </FadeIn>
      </div>
    </section>
  );
}
