
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, Users, Clock, IndianRupee, ArrowRight } from "lucide-react";
import Link from "next/link";
import { MotionDiv } from "@/components/motion-wrapper";

const onlineCourses = [
  {
    slug: "jee-mains-advanced-1-year",
    title: "JEE (Main + Advanced) - 1 Year Program",
    description: "An intensive one-year online program designed to cover the complete JEE syllabus and boost your problem-solving skills.",
    image: "https://placehold.co/600x400.png",
    aiHint: "engineering student online",
    level: "Intermediate",
    duration: "1 Year",
    price: "85,000",
  },
  {
    slug: "jee-mains-advanced-2-year",
    title: "JEE (Main + Advanced) - 2 Year Program",
    description: "A comprehensive two-year foundation course for JEE, building concepts from the ground up for 11th grade students.",
    image: "https://placehold.co/600x400.png",
    aiHint: "engineering online class",
    level: "Beginner",
    duration: "2 Years",
    price: "150,000",
  },
  {
    slug: "neet-1-year",
    title: "NEET - 1 Year Repeater Program",
    description: "A focused one-year online course for NEET repeaters, aimed at strengthening concepts and improving test scores.",
    image: "https://placehold.co/600x400.png",
    aiHint: "medical student online",
    level: "Advanced",
    duration: "1 Year",
    price: "80,000",
  },
  {
    slug: "neet-2-year",
    title: "NEET - 2 Year Foundation Program",
    description: "A two-year online program for aspiring medical students, covering the NEET syllabus alongside board exam preparation.",
    image: "https://placehold.co/600x400.png",
    aiHint: "doctor online class",
    level: "Beginner",
    duration: "2 Years",
    price: "140,000",
  },
];

export default function OnlineClassesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <MotionDiv
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-headline text-4xl font-bold tracking-tight lg:text-5xl">
          Online Classes
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          Learn from anywhere, at your own pace. Explore our flexible and comprehensive online courses for JEE & NEET.
        </p>
      </MotionDiv>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {onlineCourses.map((course, index) => (
          <MotionDiv
            key={course.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <Card className="flex h-full flex-col overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-40 w-full">
                <Image
                  src={course.image}
                  alt={course.title}
                  data-ai-hint={course.aiHint}
                  fill
                  className="object-cover"
                />
                 <Badge variant={course.level === 'Beginner' ? 'secondary' : course.level === 'Intermediate' ? 'default' : 'destructive'} className="absolute right-3 top-3 capitalize">{course.level}</Badge>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <CardHeader className="p-0">
                    <CardTitle className="font-headline text-lg">{course.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow p-0 pt-3">
                  <p className="text-sm text-muted-foreground">{course.description}</p>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4 p-0 pt-5">
                   <div className="flex items-center gap-1.5 text-xl font-bold text-primary">
                      <IndianRupee size={18}/>
                      <span>{course.price}</span>
                    </div>
                  <div className="flex w-full items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  <Link href={`/online-classes/${course.slug}`} className="w-full" prefetch={true}>
                    <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </div>
            </Card>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
}
