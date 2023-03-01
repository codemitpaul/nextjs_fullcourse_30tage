"use client";

import { useRouter } from "next/navigation";

const RouterBack = () => {
  const router = useRouter();
  return (
    <button
      className="px-3 py-2 rounded-xl border"
      onClick={() => router.back()}>
      Zurück
    </button>
  );
};

export default RouterBack;
