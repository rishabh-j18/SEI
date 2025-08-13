
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, IndianRupee, Info, ArrowLeft, Video, Clock, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MotionDiv } from "@/components/motion-wrapper";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { onlineCourseDetails } from "@/data/online-courses";

export default function OnlineCourseDetailPage({ params }: { params: { slug: string } }) {
  const course = onlineCourseDetails[params.slug];

  if (!course) {
    notFound();
  }
  
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <MotionDiv initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <Badge variant="default" className="mb-4 bg-accent text-accent-foreground">Online Program</Badge>
                <h1 className="font-headline text-4xl font-bold tracking-tight text-primary lg:text-5xl">{course.name}</h1>
                <p className="mt-4 text-lg text-muted-foreground">{course.description}</p>
                <Link href="/register" prefetch={true}><Button size="lg" className="mt-6">Enroll Now</Button></Link>
            </MotionDiv>
            <MotionDiv initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl">
                <Image src={course.image} alt={course.name} data-ai-hint={course.aiHint} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </MotionDiv>
        </div>
        
        {/* Features and Fees */}
        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
                <h2 className="font-headline text-3xl font-bold">What You'll Get</h2>
                <div className="mt-6 space-y-6">
                    {course.features.map((item: any, index: number) => (
                         <MotionDiv key={item.title} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                            <Card>
                                <CardHeader><CardTitle className="flex items-center gap-3 font-headline"><CheckCircle className="text-primary"/>{item.title}</CardTitle></CardHeader>
                                <CardContent><p className="text-muted-foreground">{item.description}</p></CardContent>
                            </Card>
                        </MotionDiv>
                    ))}
                </div>
            </div>
            <div className="lg:col-span-2">
                 <Card className="sticky top-24">
                    <CardHeader><CardTitle className="font-headline text-2xl">{course.fees.title}</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-baseline justify-center text-4xl font-bold text-primary">
                            <IndianRupee size={32} className="mr-1"/>{course.fees.amount}
                        </div>
                        <div className="text-center text-muted-foreground">For {course.fees.duration}</div>
                         <Alert>
                            <Info className="h-4 w-4" />
                            <AlertTitle className="font-headline">Important Information</AlertTitle>
                            <AlertDescription>
                                <ul className="list-disc pl-5 text-muted-foreground">
                                    {course.fees.info.map((info: string, i: number) => <li key={i}>{info}</li>)}
                                </ul>
                            </AlertDescription>
                        </Alert>
                         <Link href="/register" className="w-full" prefetch={true}>
                            <Button size="lg" className="w-full mt-4">Enroll Now</Button>
                        </Link>
                    </CardContent>
                 </Card>
            </div>
        </div>
        <div className="mt-16 text-center">
            <Link href="/online-classes" prefetch={true}>
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Online Classes
              </Button>
            </Link>
        </div>
      </div>
    </div>
  );
}
