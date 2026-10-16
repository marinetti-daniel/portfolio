'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyEmailButtonProps {
  email: string;
  hoverBg?: string;
}

export default function CopyEmailButton({ email, hoverBg = 'hover:bg-slate-900' }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked (e.g. insecure context); fall back to a prompt the user can copy from
      window.prompt('Copy my email address:', email);
    }
  };

  const Icon = copied ? Check : Copy;
  const label = copied ? 'Copied!' : 'Copy email';

  return (
    <button type="button" onClick={handleCopy} className={`relative p-2.5 text-slate-400 hover:text-white rounded-lg ${hoverBg} transition-colors cursor-pointer`} title={label} aria-label={label}>
      <Icon className={`w-5 h-5 ${copied ? 'text-emerald-400' : ''}`} />
      {copied && (
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium px-2 py-1 rounded bg-slate-800 text-emerald-300 border border-slate-700">
          Copied!
        </span>
      )}
    </button>
  );
}
