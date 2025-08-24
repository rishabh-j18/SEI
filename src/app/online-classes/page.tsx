
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, Users, Clock, IndianRupee, ArrowRight } from "lucide-react";
import Link from "next/link";
import { MotionDiv } from "@/components/motion-wrapper";
import { onlineCourses } from "@/data/online-courses";

export default function OnlineClassesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <MotionDiv
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="font-headline text-4xl font-bold tracking-tight lg:text-5xl">
          Online Classes
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
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
