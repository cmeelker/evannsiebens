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
    <div className={`min-h-screen flex flex-col ${className}`}>
      <div className="mt-[10rem] md:mt-[11rem] flex-grow">
        <div className="max-w-[88rem] m-auto px-3 text-body">{children}</div>
      </div>
      <div>
        <Footer
          className={`max-w-[88rem] m-auto px-3 lg:px-5 ${footerClassName}`}
        />
      </div>
    </div>
  );
}
