import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, IndianRupee, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MotionDiv } from "@/components/motion-wrapper";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function SscCglCoursePage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-headline text-4xl font-bold tracking-tight text-primary lg:text-5xl">
              SSC-CGL SUPER 30 (ANUSHAASAN BATCH)
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Today SSC is one of the most sought-after exams by the students who have just completed their graduation. In the recent years the cut- off of SSC has changed tremendously. And this all became possible because students are now much better aware about the exam and the level of the completion.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              SEI CAMPUS is the best coaching center in India. Our students not only just clear the exams but also manage to get a high rank which in turn helps them to get the job of their dream.
            </p>
            <Link href="/register" prefetch={true}>
              <Button size="lg" className="mt-6">
                Enroll Now
              </Button>
            </Link>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl"
          >
            <Image
              src="https://placehold.co/800x600.png"
              alt="SSC CGL Preparation"
              data-ai-hint="students exam success"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </MotionDiv>
        </div>

        <div className="mt-20">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="font-headline text-3xl font-bold tracking-tight lg:text-4xl">
              Why Choose SEI for SSC-CGL
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
              At SEI CAMPUS the only thing that we have to offer is the ‘Best’ for our candidates as we never compromise with the quality of education we provide, which in turns keep us as a market leader in SSC.
            </p>
          </MotionDiv>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><CheckCircle className="text-primary"/>Flexible Batches</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We have various batches running from 8 am to 9 pm, including weekend batches for working professionals.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><CheckCircle className="text-primary"/>Comprehensive Material</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">The fee includes study material, class schedule, and lifetime access to free online/offline mocks for any competitive exam.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><CheckCircle className="text-primary"/>Expert-Prepared Mocks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Our Online SSC Mock Tests are prepared by industry experts as per the latest SSC guidelines and are the best in the industry.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
                <h2 className="font-headline text-3xl font-bold">Course Options</h2>
                <p className="mt-2 text-muted-foreground">We offer flexible learning options to suit your needs. If you are unable to visit us, we have prepared an exhaustive Online SSC Course. You can also order the complete course in a Pen Drive and study at your own pace.</p>
                <div className="mt-6 space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Online Course</CardTitle>
                            <CardDescription>Learn from anywhere with our comprehensive online materials.</CardDescription>
                        </CardHeader>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle>Pen Drive Course</CardTitle>
                            <CardDescription>Study offline at your own pace with our complete course on a pen drive.</CardDescription>
                        </CardHeader>
                    </Card>
                </div>
            </div>
            <div className="lg:col-span-2">
                 <Card className="sticky top-24">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl">Fee Structure</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between border-b pb-2">
                            <span>Admission + Kit Fee</span>
                            <span className="font-semibold flex items-center"><IndianRupee size={16}/> 5,000</span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                            <span>Tuition Fee</span>
                            <span className="font-semibold flex items-center"><IndianRupee size={16}/> 24,000</span>
                        </div>
                        <div className="flex justify-between text-lg font-bold text-primary">
                            <span>Total</span>
                            <span className="flex items-center"><IndianRupee size={18}/> 29,000</span>
                        </div>
                         <Alert>
                            <Info className="h-4 w-4" />
                            <AlertTitle className="font-headline">Important Information</AlertTitle>
                            <AlertDescription>
                                <ul className="list-disc pl-5 text-muted-foreground">
                                    <li>EMI option available with 0% interest rate.</li>
                                    <li>Admission + Kit Fee of 5000 is non-refundable.</li>
                                </ul>
                            </AlertDescription>
                        </Alert>
                    </CardContent>
                 </Card>
            </div>
        </div>

      </div>
    </div>
  );
}
