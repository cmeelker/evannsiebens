export default function Layout({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <div className={`min-h-screen ${className}`}>
      <div className="max-w-[88rem] m-auto pt-[11rem]">{children}</div>
    </div>
  );
}
