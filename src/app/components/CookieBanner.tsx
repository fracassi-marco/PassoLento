'use client';

import {useEffect, useState} from "react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem("count");
    if (!consent) {
      setTimeout(() => {
        return setIsVisible(true);
      }, 1000);
    }
  }, []);

  function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    hideCookieBanner();
  }

  function declineCookies() {
    localStorage.setItem('cookieConsent', 'declined');
    hideCookieBanner();
  }

  function hideCookieBanner() {
    setIsVisible(false)
  }

  return (
    <div id="cookieBanner" className={`cookie-banner ${isVisible ? 'visible' : ''}`}>
      <div className="cookie-content">
        <div className="cookie-text">
          🍪 PassoLento utilizza cookie per migliorare la tua esperienza di navigazione.
          Continuando la navigazione accetti l'uso dei cookie.
          <a href="./privacy_policy.html">Scopri di più</a>
        </div>
        <div className="cookie-buttons">
          <button className="cookie-btn cookie-accept" onClick={acceptCookies}>Accetta</button>
          <button className="cookie-btn cookie-decline" onClick={declineCookies}>Rifiuta</button>
        </div>
      </div>
    </div>
  );
}