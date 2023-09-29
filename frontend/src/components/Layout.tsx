import Footer from "./Footer";

export default function Layout({
  children,
  className = "bg-bright-gray",
  footerClassName,
}: {
  children: React.ReactNode;
  footerClassName?: string;
  className?: string;
}) {
  return (
    <div className={`min-h-screen ${className}`}>
      <div className="max-w-[88rem] m-auto pt-[11rem]">
        <div className="content">{children}</div>
        <Footer className={footerClassName} />
      </div>
    </div>
  );
}
