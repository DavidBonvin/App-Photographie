// iPhone-style tab interactions
export const initializeTabEffects = () => {
  // Add haptic feedback simulation
  const addHapticEffect = (element: HTMLElement) => {
    element.style.transform = 'scale(0.95)';
    element.style.transition = 'transform 0.1s ease-out';
    
    setTimeout(() => {
      element.style.transform = 'scale(1)';
    }, 100);
  };

  // Tab button click effects
  const handleTabClick = (event: Event) => {
    const target = event.currentTarget as HTMLElement;
    if (target && target.classList.contains('tab-button')) {
      addHapticEffect(target);
      
      // Add a subtle vibration effect if supported
      if ('vibrate' in navigator) {
        navigator.vibrate(10);
      }
    }
  };

  // Observe for tab buttons and add event listeners
  const observer = new MutationObserver(() => {
    const tabButtons = document.querySelectorAll('ion-tab-button');
    tabButtons.forEach(button => {
      // Remove existing listeners to avoid duplicates
      button.removeEventListener('click', handleTabClick);
      // Add new listener
      button.addEventListener('click', handleTabClick);
    });
  });

  // Start observing
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Initial setup
  const initialTabButtons = document.querySelectorAll('ion-tab-button');
  initialTabButtons.forEach(button => {
    button.addEventListener('click', handleTabClick);
  });
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeTabEffects);
} else {
  initializeTabEffects();
}