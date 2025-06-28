
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Layout, Pointer, Zap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface Feature108Props {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
}

const Feature108 = ({
  badge = "Inkaer",
  heading = "Show What You've Got!",
  description = "Demonstrate your expertise with actual projects and challenges.",
  tabs = [
    {
      value: "tab-1",
      icon: <Zap className="h-auto w-4 shrink-0" />,
      label: "Portfolio Upload",
      content: {
        badge: "Showcase Work",
        title: "Upload your best projects",
        description:
          "Share your portfolio and demonstrate your skills through real work examples. Let employers see what you can actually build.",
        buttonText: "Upload Portfolio",
        imageSrc:
          "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
        imageAlt: "Portfolio showcase",
      },
    },
    {
      value: "tab-2",
      icon: <Pointer className="h-auto w-4 shrink-0" />,
      label: "Skill Challenges",
      content: {
        badge: "Prove Skills",
        title: "Tackle real-world challenges",
        description:
          "Complete engineering challenges designed by industry experts. Show your problem-solving abilities and technical competence.",
        buttonText: "Start Challenge",
        imageSrc:
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
        imageAlt: "Coding challenge",
      },
    },
    {
      value: "tab-3",
      icon: <Layout className="h-auto w-4 shrink-0" />,
      label: "Get Certified",
      content: {
        badge: "Earn Recognition",
        title: "Receive skill certifications",
        description:
          "Get verified certifications that employers trust. Build your professional credibility with industry-recognized credentials.",
        buttonText: "View Certifications",
        imageSrc:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
        imageAlt: "Professional certification",
      },
    },
  ],
}: Feature108Props) => {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="outline" className="text-inkaer-blue border-inkaer-blue">{badge}</Badge>
          <h1 className="max-w-2xl text-3xl font-semibold md:text-4xl font-sora">
            {heading}
          </h1>
          <p className="text-muted-foreground font-sora">{description}</p>
        </div>
        <Tabs defaultValue={tabs[0].value} className="mt-8">
          <TabsList className="container flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground data-[state=active]:bg-muted data-[state=active]:text-primary"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-muted/70 p-6 lg:p-16">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-20 lg:grid-cols-2 lg:gap-10"
              >
                <div className="flex flex-col gap-5">
                  <Badge variant="outline" className="w-fit bg-background text-inkaer-blue border-inkaer-blue">
                    {tab.content.badge}
                  </Badge>
                  <h3 className="text-3xl font-semibold lg:text-5xl font-sora">
                    {tab.content.title}
                  </h3>
                  <p className="text-muted-foreground lg:text-lg font-sora">
                    {tab.content.description}
                  </p>
                  <Button className="mt-2.5 w-fit gap-2 bg-inkaer-blue hover:bg-inkaer-dark-blue font-sora" size="lg">
                    <a href="/sign-in">
                    {tab.content.buttonText}
                    </a>
                  </Button>
                </div>
                <img
                  src={tab.content.imageSrc}
                  alt={tab.content.imageAlt}
                  className="rounded-xl"
                />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export { Feature108 };
