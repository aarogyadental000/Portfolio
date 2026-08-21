"use client";

import { useEffect } from "react";

export default function UnregisterSW() {
  useEffect(() => {
    navigator.serviceWorker
      ?.getRegistrations()
      .then((registrations) => {
        for (const registration of registrations) {
          registration.unregister();
        }
      })
      .catch(() => {});
    caches
      ?.keys()
      .then((keys) => {
        for (const key of keys) {
          caches.delete(key);
        }
      })
      .catch(() => {});
  }, []);

  return null;
}
