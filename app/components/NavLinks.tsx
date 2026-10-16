'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' }
];

export default function NavLinks() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop links */}
      <div className="hidden sm:flex items-center gap-8 text-sm font-medium text-slate-400">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="hover:text-indigo-400 transition-colors">{link.label}</a>
        ))}
      </div>

      {/* Mobile menu toggle */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="sm:hidden p-2 -mr-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900 transition-colors cursor-pointer"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile dropdown */}
      {open && (
        <div className="sm:hidden absolute top-16 inset-x-0 border-b border-slate-900 bg-slate-950/95 backdrop-blur-md">
          <div className="flex flex-col px-6 py-2 text-base font-medium text-slate-300">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="py-3 hover:text-indigo-400 transition-colors">{link.label}</a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
