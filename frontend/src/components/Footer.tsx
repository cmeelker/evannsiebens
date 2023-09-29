// TO DO: Regular Font, CMS

export default function Footer({
  className = "text-mirage",
}: {
  className?: string;
}) {
  return (
    <footer className={`text-regular text-2xl mt-10 pb-3 ${className}`}>
      Footer
    </footer>
  );
}
