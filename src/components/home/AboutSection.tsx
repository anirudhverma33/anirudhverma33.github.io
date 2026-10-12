import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import { ContactButton } from './Buttons';
import { BeamSplitter, BlochSphere, SpdcCones, WavePacket } from './Glyphs';

interface Props {
  text: string;
  contact: string;
}

export default function AboutSection({ text, contact }: Props) {
  return (
    <section
      id="about"
      aria-labelledby="about-h"
      className="relative flex min-h-screen flex-col items-center justify-center gap-16 overflow-hidden px-5 py-20 sm:gap-20 sm:px-8 md:gap-24 md:px-10"
    >
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="pointer-events-none absolute left-[1%] top-[4%] sm:left-[2%] md:left-[4%]">
        <BlochSphere className="w-[100px] opacity-80 sm:w-[140px] md:w-[190px]" />
      </FadeIn>
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="pointer-events-none absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]">
        <SpdcCones className="w-[90px] opacity-80 sm:w-[130px] md:w-[170px]" />
      </FadeIn>
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="pointer-events-none absolute right-[1%] top-[4%] sm:right-[2%] md:right-[4%]">
        <BeamSplitter className="w-[100px] opacity-80 sm:w-[140px] md:w-[190px]" />
      </FadeIn>
      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="pointer-events-none absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]">
        <WavePacket className="w-[110px] opacity-80 sm:w-[150px] md:w-[200px]" />
      </FadeIn>

      <div className="relative flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn
          as="h2"
          id="about-h"
          delay={0}
          y={40}
          className="hero-heading text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(2.25rem, 6vw, 84px)' }}
        >
          About me
        </FadeIn>
        <AnimatedText
          text={text}
          className="max-w-[600px] text-center font-medium leading-relaxed text-[#D7E2EA]"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />
      </div>

      <FadeIn delay={0.1} y={20} className="relative">
        <ContactButton href={contact} />
      </FadeIn>
    </section>
  );
}
