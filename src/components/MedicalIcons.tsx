import React from 'react';

export const RibbonIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
    <path d="M12 22l4-5" />
    <path d="M12 22l-4-5" />
  </svg>
);

export const ThyroidIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20" />
    <path d="M5 8c0 4 3 7 7 7s7-3 7-7-3-5-7-5-7 1-7 5z" />
    <path d="M12 15c-3 0-5 2-5 5h10c0-3-2-5-5-5z" />
  </svg>
);

export const StomachIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 2c0 2 2 4 2 7 0 4-4 7-4 10 0 2 2 3 4 3h5c3 0 5-2 5-6 0-5-4-8-4-11 0-2 2-3 2-3" />
    <path d="M14 11c-2 1-3 3-3 5" />
  </svg>
);

export const ColonIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 20h2v-4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4h2" />
    <rect x="3" y="4" width="18" height="10" rx="2" ry="2" />
    <path d="M8 4v10" />
    <path d="M16 4v10" />
  </svg>
);

export const UterusIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="10" r="4" />
    <path d="M12 14v8" />
    <path d="M10 22h4" />
    <path d="M4 8c2 0 4 2 5 5" />
    <path d="M20 8c-2 0-4 2-5 5" />
    <circle cx="3" cy="8" r="1" />
    <circle cx="21" cy="8" r="1" />
  </svg>
);

export const BoneIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2 2 2 0 0 1-4 0 2 2 0 0 1 2-2V8a2 2 0 0 1-2-2 2 2 0 0 1 4 0 2 2 0 0 0 2 2h6a2 2 0 0 0 2-2 2 2 0 0 1 4 0 2 2 0 0 1-2 2v8a2 2 0 0 1 2 2 2 2 0 0 1-4 0z" />
  </svg>
);

export const ScalpelIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 3L21 9.5 10 20.5 3 13.5z" />
    <path d="M10 20.5l-7 2.5 2.5-7" />
    <path d="M6 18l-1.5-1.5" />
    <path d="M8.5 15.5L7 14" />
  </svg>
);
