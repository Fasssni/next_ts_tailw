import React from "react";

export default function AdminPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-screen w-full flex-col items-start justify-center p-2 bg-slate-100">
      {children}
    </section>
  );
}
