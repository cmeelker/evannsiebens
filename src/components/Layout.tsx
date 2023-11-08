export default function Layout({
  children,
  className = "bg-bright-gray",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      <div className="mt-[10rem] md:mt-[11rem] min-h-[80vh]">
        <div className="max-w-[88rem] m-auto px-3 text-body">{children}</div>
      </div>
    </div>
  );
}
