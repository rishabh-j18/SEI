import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Award, GraduationCap, Percent } from "lucide-react";
import { MotionDiv } from "@/components/motion-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const scholarships = [
  {
    title: "Merit-Based Scholarship",
    icon: Award,
    content: "Awarded to students with outstanding academic records. Applicants must have a GPA of 3.8 or higher in their previous academic year. The scholarship covers up to 50% of tuition fees.",
  },
  {
    title: "Need-Based Financial Aid",
    icon: Users,
    content: "Provided to students who demonstrate significant financial need. This aid is determined based on family income and other factors. Required documents include income statements and tax returns.",
  },
  {
    title: "Sports Scholarship",
    icon: Trophy,
    content: "For students who have excelled in sports at the state or national level. This scholarship supports talented athletes to continue their passion while pursuing their education.",
  },
  {
    title: "Alumni Legacy Scholarship",
    icon: GraduationCap,
    content: "Available to children or grandchildren of SEI alumni. This scholarship celebrates the multi-generational connection to our institute and provides a 15% tuition fee waiver.",
  },
];

function Trophy(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

function Users(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}


export default function ScholarshipPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <MotionDiv
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-headline text-4xl font-bold tracking-tight lg:text-5xl">
          Scholarships &amp; Financial Aid
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          We believe in making quality education accessible. Explore the various scholarship opportunities available at SEI.
        </p>
      </MotionDiv>
      <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-5">
        <MotionDiv 
            className="md:col-span-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Available Scholarships</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {scholarships.map((scholarship) => (
                  <AccordionItem key={scholarship.title} value={scholarship.title}>
                    <AccordionTrigger className="font-headline text-lg">
                      <div className="flex items-center gap-3">
                        <scholarship.icon className="h-6 w-6 text-primary" />
                        {scholarship.title}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                      {scholarship.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </MotionDiv>
        <MotionDiv
            className="relative h-96 min-h-[400px] w-full overflow-hidden rounded-lg md:col-span-2 md:h-auto"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
        >
            <Image 
                src="https://placehold.co/600x800.png" 
                alt="Student receiving an award" 
                data-ai-hint="student award"
                layout="fill" 
                objectFit="cover" 
            />
            <div className="absolute inset-0 bg-primary/20"></div>
        </MotionDiv>
      </div>
    </div>
  );
}
