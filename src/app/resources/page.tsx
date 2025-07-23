import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, Book, Library, Users } from "lucide-react";
import Link from "next/link";
import { MotionDiv } from "@/components/motion-wrapper";

const resources = [
  {
    title: "Digital Library",
    description: "Access thousands of e-books, research papers, and academic journals from our comprehensive digital library.",
    link: "#",
    icon: Library,
  },
  {
    title: "Student Portal",
    description: "Check your grades, attendance, and important announcements on the official student portal.",
    link: "#",
    icon: Users,
  },
  {
    title: "Online Course Materials",
    description: "Download lecture notes, presentations, and other course materials provided by your instructors.",
    link: "#",
    icon: Book,
  },
  {
    title: "External Learning Platforms",
    description: "Links to supplementary learning resources like Coursera, edX, and Khan Academy for extra learning.",
    link: "#",
    icon: Book,
  },
];

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <MotionDiv
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-headline text-4xl font-bold tracking-tight lg:text-5xl">
          Student Resources
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          A collection of essential links and tools to support your academic journey at SEI.
        </p>
      </MotionDiv>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        {resources.map((resource, index) => (
          <MotionDiv
            key={resource.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <Link href={resource.link} target="_blank" rel="noopener noreferrer">
              <Card className="group flex h-full transform-gpu flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <CardHeader className="flex-row items-center gap-4">
                  <div className="rounded-lg bg-primary p-3 text-primary-foreground">
                    <resource.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="font-headline">{resource.title}</CardTitle>
                  </div>
                  <ArrowUpRight className="ml-auto h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:rotate-45" />
                </CardHeader>
                <CardContent>
                  <CardDescription>{resource.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
}
