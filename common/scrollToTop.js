const scrollToTop = () => {
  const offset = 150;
  const progressWrap = document.querySelector('.progress-wrap');
  const progressPath = document.querySelector('.progress-wrap .progress-path');

  if (!progressWrap || !progressPath) return;

  const pathLength = progressPath.getTotalLength();

  progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
  progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
  progressPath.style.strokeDashoffset = pathLength;
  
  progressPath.getBoundingClientRect();
  
  progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

  const updateProgress = () => {
    const scroll = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;

    if (scroll > offset) {
      progressWrap.classList.add('active-progress');
    } else {
      progressWrap.classList.remove('active-progress');
    }
  };

  const onScroll = () => {
    window.requestAnimationFrame(updateProgress);
  };

  updateProgress();
  window.addEventListener('scroll', onScroll);

  progressWrap.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return false;
  });

  return () => {
    window.removeEventListener('scroll', onScroll);
  };
};

export default scrollToTop;