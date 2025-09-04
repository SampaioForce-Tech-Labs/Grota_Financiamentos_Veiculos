import { Feature } from "./Feature";

export function PanelContent({
  title,
  description,
  features,
  imageSrc,
}: {
  title: string;
  description: string;
  features: {
    title: string;
    description: string;
    imgSrc: string;
  }[];
  imageSrc: string;
}) {
  return (
    <div className="gap-6 space-y-12 md:flex md:space-y-0">
      <div className="relative md:w-1/2">
        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-bold md:text-2xl text-start">{title}</h3>
          <p className="mt-4 text-muted-foreground text-start">{description}</p>
          <div className="mt-12 space-y-6">
            {features.map(
              (
                feature: { title: string; description: string; imgSrc: string },
                index: number
              ) => (
                <Feature
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  imgSrc={feature.imgSrc}
                />
              )
            )}
          </div>
        </div>
      </div>
      <div className="-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible md:px-0">
        <div className="relative bg-muted before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-border after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-border">
          <div className="relative overflow-clip  p-10">
            <img
              src={imageSrc}
              className="mx-auto h-80 w-full rounded-3xl border object-cover object-top shadow-2xl border-transparent sm:h-[28rem]"
              alt="Feature preview"
            />
          </div>
        </div>
      </div>
    </div>
  );
}