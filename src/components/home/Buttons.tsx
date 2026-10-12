import { ArrowUpRight, Mail } from 'lucide-react';

export function ContactButton({ href, label = 'Contact Me' }: { href: string; label?: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#C9B8FF] px-8 py-3 text-xs font-medium uppercase tracking-widest text-[#0C0C0C] no-underline transition-colors duration-200 hover:bg-[#DDD1FF] sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base"
      style={{ boxShadow: '0 8px 28px rgba(185, 166, 255, 0.25)' }}
    >
      <Mail aria-hidden="true" className="h-4 w-4" />
      {label}
    </a>
  );
}

export function GhostButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border-2 border-solid border-[#D7E2EA] px-6 py-2.5 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest text-[#D7E2EA] no-underline transition-colors duration-200 hover:bg-[#D7E2EA]/10"
    >
      {label}
      <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
    </a>
  );
}
