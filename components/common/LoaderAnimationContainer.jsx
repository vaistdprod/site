// /components/common/LoaderAnimationContainer.jsx
'use client';

import dynamic from 'next/dynamic';

const AnimatedLoaderWrapper = dynamic(
  () => import('@/components/common/AnimatedLoaderWrapper'),
  { ssr: false }
);

export default function LoaderAnimationContainer() {
  return <AnimatedLoaderWrapper />;
}
