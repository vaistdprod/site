'use client';

import React, { useEffect } from 'react';
import scrollToTop from '@/common/scrollToTop';
import ProgressScrollContent from './ProgressScrollContent';

export default function ProgressScroll() {
  useEffect(() => {
    scrollToTop();
  }, []);

  return <ProgressScrollContent />;
}