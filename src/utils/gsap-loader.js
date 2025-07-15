// Carga dinámica de GSAP solo en desktop
export async function loadGSAP() {
  if (window.innerWidth <= 768) return null;
  
  const [gsap, SplitType, CSSPlugin] = await Promise.all([
    import('gsap'),
    import('split-type'),
    import('gsap/CSSPlugin')
  ]);
  
  gsap.default.registerPlugin(CSSPlugin.CSSPlugin);
  
  return {
    gsap: gsap.default,
    SplitType: SplitType.default
  };
}

// Intersection Observer para animaciones
export function createObserver(callback, options = {}) {
  const defaultOptions = {
    threshold: 0,
    rootMargin: '0px 0px 50px 0px',
    ...options
  };
  
  return new IntersectionObserver((entries) => {
    callback(entries);
  }, defaultOptions);
}