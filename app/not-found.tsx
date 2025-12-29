"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.push("/"), 5000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div>
      <h1 className="not-found">404 - Page not found</h1>
      <p className="not-found">
        Sorry, the page you are looking for does not exist. 
      </p>
      <p className="not-found">
        You will be redirected to the main page in a few seconds...
      </p>
    </div>
  );
}

export default NotFound;