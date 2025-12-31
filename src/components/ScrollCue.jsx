'use client';

export default function ScrollCue() {
  const handleClick = (e) => {
    e.preventDefault();
    
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }
    
    const next = document.querySelector('[data-next-section]');
    if (next) {
      next.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <button
      type="button"
      aria-label="Explore more"
      className="scrollCue"
      onClick={handleClick}
    >
      <span className="scrollCueLabel">explore more</span>
    </button>
  );
}
