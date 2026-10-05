'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Locale } from '@/i18n.config';

const languages = {
  en: { label: 'English', native: 'English' },
  hi: { label: 'Hindi', native: 'हिन्दी' },
  ml: { label: 'Malayalam', native: 'മലയാളം' },
  te: { label: 'Telugu', native: 'తెలుగు' }
};

export default function LanguageSwitcher({ currentLang }: { currentLang: Locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const redirectedPathName = (locale: string) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  const handleLanguageChange = (locale: string) => {
    setIsOpen(false);
    router.push(redirectedPathName(locale));
  };

  return (
    <div className="lang-switcher" ref={dropdownRef}>
      <button 
        className="lang-btn" 
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span className="globe-icon">🌐</span>
        <span className="lang-code">{currentLang.toUpperCase()}</span>
      </button>

      {isOpen && (
        <ul className="lang-dropdown">
          {Object.entries(languages).map(([code, { native }]) => (
            <li key={code}>
              <button 
                className={`lang-option ${currentLang === code ? 'active' : ''}`}
                onClick={() => handleLanguageChange(code)}
              >
                {native}
                {currentLang === code && <span className="check">✓</span>}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
