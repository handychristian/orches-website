'use client'

import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="relative">
      <button
        onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200 text-sm font-medium text-gray-700"
        aria-label="Toggle language"
      >
        {/* Flag Icon */}
        <div className="w-5 h-4 rounded-sm overflow-hidden flex-shrink-0">
          {language === 'en' ? (
            // US Flag
            <svg viewBox="0 0 60 30" className="w-full h-full">
              <clipPath id="us-flag">
                <rect width="60" height="30" />
              </clipPath>
              <g clipPath="url(#us-flag)">
                <rect fill="#B22234" width="60" height="30" />
                <rect fill="#FFFFFF" y="2.31" width="60" height="2.31" />
                <rect fill="#FFFFFF" y="6.92" width="60" height="2.31" />
                <rect fill="#FFFFFF" y="11.54" width="60" height="2.31" />
                <rect fill="#FFFFFF" y="16.15" width="60" height="2.31" />
                <rect fill="#FFFFFF" y="20.77" width="60" height="2.31" />
                <rect fill="#FFFFFF" y="25.38" width="60" height="2.31" />
                <rect fill="#3C3B6E" width="24" height="17.69" />
              </g>
            </svg>
          ) : (
            // Indonesian Flag
            <svg viewBox="0 0 60 30" className="w-full h-full">
              <rect fill="#FF0000" width="60" height="15" />
              <rect fill="#FFFFFF" y="15" width="60" height="15" />
            </svg>
          )}
        </div>

        {/* Language Text */}
        <span className="hidden sm:inline">
          {language === 'en' ? 'EN' : 'ID'}
        </span>

        {/* Dropdown Arrow */}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
}
