import { Lightbulb, ListChecks, MessageCircleMore } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Badge } from "../ui/badge";
import { featuresData } from "./data/featuresData";
import { PanelContent } from "./PanelContent/PanelContent";

export default function GridList() {
  return (
    <section className="pb-20 pt-20 md:pb-32 md:pt-32 container mx-auto">
      <div className="text-center space-y-4 pb-16 mx-auto max-w-4xl">
        <Badge>FEATURES</Badge>
        <h2 className="mx-auto mt-4 text-3xl font-bold sm:text-5xl tracking-tight">
          For growing teams and organizations
        </h2>
        <p className="text-xl text-muted-foreground pt-1">
          A growing team doesn&apos;t need to mean growing pains. Privacy, and
          the right tool for every step of your journey
        </p>
      </div>
      <Tabs defaultValue="panel-0">
        <TabsList className="flex h-auto w-full flex-col gap-2 bg-background md:flex-row">
          <TabsTrigger
            value="panel-0"
            className="flex w-full flex-col items-start justify-start gap-1 whitespace-normal rounded-md border p-4 text-left text-primary hover:border-primary/40 data-[state=active]:border-primary"
          >
            <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
              <span className="flex size-8 items-center justify-center rounded-full bg-accent lg:size-10">
                <MessageCircleMore className="size-4 text-primary" />
              </span>
              <p className="text-lg font-semibold md:text-2xl lg:text-xl text-primary">
                Get Started
              </p>
            </div>
            <p className="font-normal text-muted-foreground md:block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </TabsTrigger>
          <TabsTrigger
            value="panel-1"
            className="flex w-full flex-col items-start justify-start gap-1 whitespace-normal rounded-md border p-4 text-left text-primary hover:border-primary/40 data-[state=active]:border-primary"
          >
            <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
              <span className="flex size-8 items-center justify-center rounded-full bg-accent lg:size-10">
                <Lightbulb className="size-4 text-primary" />
              </span>
              <p className="text-lg font-semibold md:text-2xl lg:text-xl text-primary">
                Get Ideas
              </p>
            </div>
            <p className="font-normal text-muted-foreground md:block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </TabsTrigger>
          <TabsTrigger
            value="panel-2"
            className="flex w-full flex-col items-start justify-start gap-1 whitespace-normal rounded-md border p-4 text-left text-primary hover:border-primary/40 data-[state=active]:border-primary"
          >
            <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
              <span className="flex size-8 items-center justify-center rounded-full bg-accent lg:size-10">
                <ListChecks className="size-4 text-primary" />
              </span>
              <p className="text-lg font-semibold md:text-2xl lg:text-xl text-primary">
                Build
              </p>
            </div>
            <p className="font-normal text-muted-foreground md:block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </TabsTrigger>
        </TabsList>

        {featuresData.map((panel) => (
          <TabsContent key={panel.value} value={panel.value} className="mt-20">
            <PanelContent
              title={panel.title}
              description={panel.description}
              features={panel.features}
              imageSrc={panel.imageSrc}
            />
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}



