import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookCheck, Briefcase, Code, Microscope, Shield, Star } from "lucide-react";
import Link from "next/link";
import { MotionDiv } from "@/components/motion-wrapper";

const courses = [
    {
        slug: "ssc-cgl",
        title: "SSC-CGL SUPER 30 (ANUSHAASAN BATCH)",
        description: "A specialized batch designed to crack the SSC-CGL exam with a disciplined and focused approach. Join SEI Campus, the best coaching center in India, to not only clear the exam but achieve a high rank.",
        image: "/SSC.jpg",
        aiHint: "government exam preparation",
        duration: "1 Year",
        icon: Star,
    },
    {
        slug: "jee-mains",
        title: "JEE MAINS",
        description: "Comprehensive preparation for the Joint Entrance Examination (Main) to get into top engineering colleges.",
        image: "/jee.webp",
        aiHint: "engineering student studying",
        duration: "2 Years",
        icon: Code,
    },
    {
        slug: "boards",
        title: "Boards",
        description: "Focused curriculum to excel in Class X and XII board examinations for CBSE, ICSE, and state boards.",
        image: "/Boards.avif",
        aiHint: "student writing exam",
        duration: "1 Year",
        icon: BookCheck,
    },
    {
        slug: "neet",
        title: "NEET",
        description: "Intensive coaching for the National Eligibility cum Entrance Test for aspiring medical students.",
        image: "/Neet.jpg",
        aiHint: "medical student dna",
        duration: "2 Years",
        icon: Microscope,
    },
    {
        slug: "bank",
        title: "BANK",
        description: "Targeted training for various banking sector exams like IBPS PO, Clerk, and Specialist Officer.",
        image: "/Bank.jpg",
        aiHint: "banking finance",
        duration: "6 Months",
        icon: Briefcase,
    },
    {
        slug: "up-police",
        title: "UP POLICE",
        description: "Rigorous physical and academic training to prepare candidates for the Uttar Pradesh Police recruitment.",
        image: "/Police.webp",
        aiHint: "police officer",
        duration: "6 Months",
        icon: Shield,
    },
];

export default function CoursesPage() {
  return (
    <div className="bg-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="font-headline text-4xl font-bold tracking-tight text-primary lg:text-5xl">
                Find Your Path to Excellence
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                At Shailja Educational Institute, we offer a diverse range of programs meticulously designed to build your skills, foster innovation, and launch a successful career. Explore our courses and discover where your passion can take you.
                </p>
                <Link href="/register" prefetch={true}>
                    <Button size="lg" className="mt-6">
                        Start Your Application <ArrowRight className="ml-2" />
                    </Button>
                </Link>
            </MotionDiv>
            <MotionDiv
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative h-80 w-full overflow-hidden rounded-lg shadow-xl"
            >
                <Image
                src="/Skills.jpg"
                alt="Students collaborating"
                data-ai-hint="students collaborating learning"
                fill
                className="object-cover"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </MotionDiv>
        </div>
      </div>
      <div className="bg-background py-16">
        <div className="container mx-auto px-4">
             <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center"
            >
                <h2 className="font-headline text-3xl font-bold tracking-tight lg:text-4xl">
                    Our Academic Programs
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
                    Choose from a variety of disciplines to match your career goals.
                </p>
            </MotionDiv>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {courses.map((course, index) => (
                <MotionDiv
                    key={course.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index + 0.5 }}
                >
                    <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
                    <div className="relative h-48 w-full">
                        <Image
                        src={course.image}
                        alt={course.title}
                        data-ai-hint={course.aiHint}
                        fill
                        className="object-cover"
                        />
                    </div>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 font-headline">
                            <course.icon className="h-7 w-7 text-primary" />
                            {course.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground">{course.description}</p>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-4">
                        <div className="font-semibold text-primary">{course.duration}</div>
                         <Link href={`/courses/${course.slug}`} className="w-full" prefetch={true}>
                            <Button variant="outline" className="w-full">
                                Learn More <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </CardFooter>
                    </Card>
                </MotionDiv>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}
