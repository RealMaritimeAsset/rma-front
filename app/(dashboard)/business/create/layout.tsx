export default function Createlayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">{children}</div>
    </div>
  );
}
