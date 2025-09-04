export function Feature({
  title,
  description,
  imgSrc,
}: {
  title: string;
  description: string;
  imgSrc: string;
}) {
  return (
    <div className="flex items-center gap-6">
      <div className="flex h-20 w-20 rounded-3xl border border-border bg-card p-4">
        <img className="m-auto h-8 w-auto" src={imgSrc} alt={`${title} icon`} />
      </div>
      <div className="w-[calc(100%-7.5rem)] flex flex-col items-start">
        <h4 className="text-lg font-semibold text-start">{title}</h4>
        <p className="mt-1 text-muted-foreground text-start">{description}</p>
      </div>
    </div>
  );
}
