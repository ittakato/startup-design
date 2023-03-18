import '../styles/styles.scss';
import './gradient';

const hamburgerButton = document.querySelector('.hamburger-btn');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavExitButton = document.querySelector('.mobile-navbar-exit-btn');

function openMobileNavigation(): void {
  mobileNav?.classList.add('openMobileNav');
}

function closeMobileNavigation(): void {
  mobileNav?.classList.remove('openMobileNav');
}

hamburgerButton?.addEventListener('touchstart', openMobileNavigation);
hamburgerButton?.addEventListener('touchend', openMobileNavigation);
hamburgerButton?.addEventListener('touchcancel', openMobileNavigation);
hamburgerButton?.addEventListener('click', openMobileNavigation);

mobileNavExitButton?.addEventListener('touchstart', closeMobileNavigation);
mobileNavExitButton?.addEventListener('touchend', closeMobileNavigation);
mobileNavExitButton?.addEventListener('touchcancel', closeMobileNavigation);
mobileNavExitButton?.addEventListener('click', closeMobileNavigation);
