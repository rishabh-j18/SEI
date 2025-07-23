import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { MotionDiv } from "@/components/motion-wrapper";

const courses = [
  {
    title: "Computer Science Engineering",
    description: "Explore the world of algorithms, data structures, artificial intelligence, and software development.",
    image: "https://placehold.co/600x400.png",
    aiHint: "computer science",
    duration: "4 Years",
  },
  {
    title: "Mechanical Engineering",
    description: "Dive into the principles of mechanics, thermodynamics, and material science to design and build innovative machines.",
    image: "https://placehold.co/600x400.png",
    aiHint: "mechanical engineering",
    duration: "4 Years",
  },
  {
    title: "Electrical Engineering",
    description: "Master the fundamentals of electricity, electronics, and electromagnetism to power the future.",
    image: "https://placehold.co/600x400.png",
    aiHint: "electrical engineering",
    duration: "4 Years",
  },
  {
    title: "Civil Engineering",
    description: "Learn to design, construct, and maintain the foundational structures of modern society, from bridges to buildings.",
    image: "https://placehold.co/600x400.png",
    aiHint: "civil engineering",
    duration: "4 Years",
  },
  {
    title: "Business Administration (BBA)",
    description: "Develop leadership and management skills to excel in the corporate world. Specializations in finance, marketing, and HR.",
    image: "https://placehold.co/600x400.png",
    aiHint: "business administration",
    duration: "3 Years",
  },
  {
    title: "Master of Business Administration (MBA)",
    description: "Advance your career with our comprehensive MBA program, focused on strategic thinking and global business challenges.",
    image: "https://placehold.co/600x400.png",
    aiHint: "mba program",
    duration: "2 Years",
  },
];

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <MotionDiv
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-headline text-4xl font-bold tracking-tight lg:text-5xl">
          Our Courses
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          Discover a wide range of programs designed to equip you with the skills and knowledge for a successful career.
        </p>
      </MotionDiv>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
          <MotionDiv
            key={course.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-xl">
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
                <CardTitle className="font-headline">{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{course.description}</p>
                <p className="mt-4 font-semibold text-primary">{course.duration}</p>
              </CardContent>
              <CardFooter>
                <Link href="/register" className="w-full" prefetch={true}>
                  <Button variant="outline" className="w-full">
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
}
