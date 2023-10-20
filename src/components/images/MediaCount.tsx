export default function MediaCount({
  selected,
  total,
}: {
  selected: number;
  total: number;
}) {
  return (
    <div className="absolute text-nav top-0 right-0">
      {selected === -1 ? 0 : selected + 1}/{total}
    </div>
  );
}
