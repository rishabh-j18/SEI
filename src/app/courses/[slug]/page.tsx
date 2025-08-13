import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, IndianRupee, Info, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MotionDiv } from "@/components/motion-wrapper";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { notFound } from "next/navigation";
import { courseDetails } from "@/data/courses";

type CourseDetail = {
  name: string;
  image: string;
  alt: string;
  aiHint: string;
  description?: string[];
  intro?: string;
  features?: { title: string; description: string }[];
  whySei?: string;
  learningOptions?: {
    title: string;
    description: string;
    options: { title: string; description: string }[];
  };
  highlights?: string[];
  programs?: {
    title: string;
    items: { title: string; description: string }[];
  };
  fees: {
    title: string;
    items: { name: string; amount: string }[];
    total: string;
    total_2?: string;
    duration?: string;
    info: string[];
  };
};

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course: CourseDetail = courseDetails[params.slug as keyof typeof courseDetails];
  let courseContent;

  if (!course) {
    notFound();
  }
  
  if (params.slug === "ssc-cgl") {
    courseContent = (
        <div className="bg-background">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="font-headline text-4xl font-bold tracking-tight text-primary lg:text-5xl">
                  {course.name}
                </h1>
                {course.description && course.description.map((p: string, i: number) => <p key={i} className="mt-4 text-lg text-muted-foreground">{p}</p>)}
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
                  src={course.image}
                  alt={course.alt}
                  data-ai-hint={course.aiHint}
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
                  {course.whySei}
                </p>
              </MotionDiv>
    
              <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {course.features && course.features.map((feature: any) => (
                    <Card key={feature.title}>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 font-headline"><CheckCircle className="text-primary"/>{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </CardContent>
                    </Card>
                ))}
              </div>
            </div>
    
            <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-5">
                <div className="lg:col-span-3">
                    <h2 className="font-headline text-3xl font-bold">{course.learningOptions?.title}</h2>
                    <p className="mt-2 text-muted-foreground">{course.learningOptions?.description}</p>
                    <div className="mt-6 space-y-4">
                        {course.learningOptions && course.learningOptions.options.map((option: any) => (
                            <Card key={option.title}>
                                <CardHeader>
                                    <CardTitle>{option.title}</CardTitle>
                                    <CardDescription>{option.description}</CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
                <div className="lg:col-span-2">
                     <Card className="sticky top-24">
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">{course.fees.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {course.fees.items.map((item: any) => (
                                <div key={item.name} className="flex justify-between border-b pb-2">
                                    <span>{item.name}</span>
                                    <span className="font-semibold flex items-center"><IndianRupee size={16}/> {item.amount}</span>
                                </div>
                            ))}
                            <div className="flex justify-between text-lg font-bold text-primary">
                                <span>Total</span>
                                <span className="flex items-center"><IndianRupee size={18}/> {course.fees.total}</span>
                            </div>
                             <Alert>
                                <Info className="h-4 w-4" />
                                <AlertTitle className="font-headline">Important Information</AlertTitle>
                                <AlertDescription>
                                    <ul className="list-disc pl-5 text-muted-foreground">
                                        {course.fees.info.map((info: string, i: number) => <li key={i}>{info}</li>)}
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
  } else if (params.slug === "jee-mains") {
    courseContent = (
        <div className="bg-background">
          <div className="container mx-auto px-4 py-12">
            {/* Hero Section */}
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                <MotionDiv initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                    <h1 className="font-headline text-4xl font-bold tracking-tight text-primary lg:text-5xl">{course.name}</h1>
                    <p className="mt-4 text-lg text-muted-foreground">{course.intro}</p>
                    <Link href="/register" prefetch={true}><Button size="lg" className="mt-6">Enroll Now</Button></Link>
                </MotionDiv>
                <MotionDiv initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl">
                    <Image src={course.image} alt={course.alt} data-ai-hint={course.aiHint} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </MotionDiv>
            </div>
            
            {/* Course Description */}
            <div className="mt-20">
                 <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight lg:text-4xl">Course Description</h2>
                    <p className="mx-auto mt-3 max-w-3xl text-lg text-muted-foreground">{course.description && course.description.join(' ')}</p>
                </MotionDiv>
            </div>

            {/* Highlights */}
            <div className="mt-20">
                <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight lg:text-4xl">Course Highlights</h2>
                </MotionDiv>
                 <div className="mx-auto mt-12 max-w-4xl space-y-4">
                    {course.highlights && course.highlights.map((highlight: string, i: number) => (
                        <MotionDiv key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                           <div className="flex items-start gap-4 rounded-lg border bg-card p-4">
                                <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                                <p className="text-muted-foreground">{highlight}</p>
                            </div>
                        </MotionDiv>
                    ))}
                </div>
            </div>

            {/* Programs and Fees */}
            <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-5">
                <div className="lg:col-span-3">
                    <h2 className="font-headline text-3xl font-bold">{course.programs?.title}</h2>
                    <div className="mt-6 space-y-6">
                        {course.programs && course.programs.items.map((item: any) => (
                            <Card key={item.title}>
                                <CardHeader><CardTitle>{item.title}</CardTitle></CardHeader>
                                <CardContent><p className="text-muted-foreground">{item.description}</p></CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
                <div className="lg:col-span-2">
                     <Card className="sticky top-24">
                        <CardHeader><CardTitle className="font-headline text-2xl">{course.fees.title}</CardTitle></CardHeader>
                        <CardContent className="space-y-4">
                            {course.fees.items.map((item: any) => (
                                <div key={item.name} className="flex justify-between border-b pb-2">
                                    <span>{item.name}</span>
                                    <span className="font-semibold flex items-center"><IndianRupee size={16}/> {item.amount}</span>
                                </div>
                            ))}
                            <div className="flex justify-between text-lg font-bold text-primary">
                                <span>Total (1st Year)</span>
                                <span className="flex items-center"><IndianRupee size={18}/> {course.fees.total}</span>
                            </div>
                             <div className="flex justify-between text-md font-semibold text-muted-foreground">
                                <span>Total (2nd Year)</span>
                                <span className="flex items-center"><IndianRupee size={16}/> {course.fees.total_2}</span>
                            </div>
                             <Alert>
                                <Info className="h-4 w-4" />
                                <AlertTitle className="font-headline">Important Information</AlertTitle>
                                <AlertDescription>
                                    <ul className="list-disc pl-5 text-muted-foreground">
                                        {course.fees.info.map((info: string, i: number) => <li key={i}>{info}</li>)}
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
  } else if (params.slug === "boards") {
    courseContent = (
        <div className="bg-background">
          <div className="container mx-auto px-4 py-12">
            {/* Hero Section */}
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                <MotionDiv initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                    <h1 className="font-headline text-4xl font-bold tracking-tight text-primary lg:text-5xl">{course.name}</h1>
                    <p className="mt-4 text-lg text-muted-foreground">{course.intro}</p>
                    <Link href="/register" prefetch={true}><Button size="lg" className="mt-6">Enroll Now</Button></Link>
                </MotionDiv>
                <MotionDiv initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl">
                    <Image src={course.image} alt={course.alt} data-ai-hint={course.aiHint} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </MotionDiv>
            </div>
            
            {/* Features and Fees */}
            <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-5">
                <div className="lg:col-span-3">
                    <h2 className="font-headline text-3xl font-bold">Course Features</h2>
                    <p className="mt-2 text-muted-foreground">{course.description && course.description.join(' ')}</p>
                    <div className="mt-6 space-y-6">
                        {course.features && course.features.map((item: any, index: number) => (
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
                            {course.fees.items.map((item: any) => (
                                <div key={item.name} className="flex justify-between border-b pb-2">
                                    <span>{item.name}</span>
                                    <span className="font-semibold flex items-center"><IndianRupee size={16}/> {item.amount}</span>
                                </div>
                            ))}
                            <div className="flex justify-between text-lg font-bold text-primary">
                                <span>Total</span>
                                <span className="flex items-center"><IndianRupee size={18}/> {course.fees.total}</span>
                            </div>
                             <Alert>
                                <Info className="h-4 w-4" />
                                <AlertTitle className="font-headline">Important Information</AlertTitle>
                                <AlertDescription>
                                    <ul className="list-disc pl-5 text-muted-foreground">
                                        {course.fees.info.map((info: string, i: number) => <li key={i}>{info}</li>)}
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
  } else if (params.slug === "neet") {
    courseContent = (
        <div className="bg-background">
          <div className="container mx-auto px-4 py-12">
            {/* Hero Section */}
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                <MotionDiv initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                    <h1 className="font-headline text-4xl font-bold tracking-tight text-primary lg:text-5xl">{course.name}</h1>
                    <p className="mt-4 text-lg text-muted-foreground">{course.intro}</p>
                    <Link href="/register" prefetch={true}><Button size="lg" className="mt-6">Enroll Now</Button></Link>
                </MotionDiv>
                <MotionDiv initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl">
                    <Image src={course.image} alt={course.alt} data-ai-hint={course.aiHint} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </MotionDiv>
            </div>
            
            {/* Highlights */}
            <div className="mt-20">
                <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight lg:text-4xl">Course Highlights</h2>
                </MotionDiv>
                 <div className="mx-auto mt-12 max-w-4xl space-y-4">
                    {course.highlights && course.highlights.map((highlight: string, i: number) => (
                        <MotionDiv key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                           <div className="flex items-start gap-4 rounded-lg border bg-card p-4">
                                <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                                <p className="text-muted-foreground">{highlight}</p>
                            </div>
                        </MotionDiv>
                    ))}
                </div>
            </div>

            {/* Fees */}
            <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-5">
                <div className="lg:col-span-3">
                    <h2 className="font-headline text-3xl font-bold">What You&apos;ll Learn</h2>
                    <p className="mt-2 text-muted-foreground">Our NEET program covers the entire syllabus for Physics, Chemistry, and Biology, with a special focus on problem-solving skills and time management to excel in the competitive exam.</p>
                </div>
                <div className="lg:col-span-2">
                     <Card className="sticky top-24">
                        <CardHeader><CardTitle className="font-headline text-2xl">{course.fees.title}</CardTitle></CardHeader>
                        <CardContent className="space-y-4">
                            {course.fees.items.map((item: any) => (
                                <div key={item.name} className="flex justify-between border-b pb-2">
                                    <span>{item.name}</span>
                                    <span className="font-semibold flex items-center"><IndianRupee size={16}/> {item.amount}</span>
                                </div>
                            ))}
                            <div className="flex justify-between text-lg font-bold text-primary">
                                <span>Total (1st Year)</span>
                                <span className="flex items-center"><IndianRupee size={18}/> {course.fees.total}</span>
                            </div>
                             <div className="flex justify-between text-md font-semibold text-muted-foreground">
                                <span>Total (2nd Year)</span>
                                <span className="flex items-center"><IndianRupee size={16}/> {course.fees.total_2}</span>
                            </div>
                             <Alert>
                                <Info className="h-4 w-4" />
                                <AlertTitle className="font-headline">Important Information</AlertTitle>
                                <AlertDescription>
                                    <ul className="list-disc pl-5 text-muted-foreground">
                                        {course.fees.info.map((info: string, i: number) => <li key={i}>{info}</li>)}
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
  } else if (params.slug === "bank" || params.slug === "up-police") {
    courseContent = (
        <div className="bg-background">
          <div className="container mx-auto px-4 py-12">
            {/* Hero Section */}
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                <MotionDiv initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                    <h1 className="font-headline text-4xl font-bold tracking-tight text-primary lg:text-5xl">{course.name}</h1>
                    <p className="mt-4 text-lg text-muted-foreground">{course.intro}</p>
                    <Link href="/register" prefetch={true}><Button size="lg" className="mt-6">Enroll Now</Button></Link>
                </MotionDiv>
                <MotionDiv initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl">
                    <Image src={course.image} alt={course.alt} data-ai-hint={course.aiHint} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </MotionDiv>
            </div>
            
            {/* Features and Fees */}
            <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-5">
                <div className="lg:col-span-3">
                    <h2 className="font-headline text-3xl font-bold">Key Features</h2>
                    <p className="mt-2 text-muted-foreground">{course.description && course.description.join(' ')}</p>
                    <div className="mt-6 space-y-6">
                        {course.features && course.features.map((item: any, index: number) => (
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
                            {course.fees.items.map((item: any) => (
                                <div key={item.name} className="flex justify-between border-b pb-2">
                                    <span>{item.name}</span>
                                    <span className="font-semibold flex items-center"><IndianRupee size={16}/> {item.amount}</span>
                                </div>
                            ))}
                            <div className="flex justify-between text-lg font-bold text-primary">
                                <span>Total ({course.fees.duration})</span>
                                <span className="flex items-center"><IndianRupee size={18}/> {course.fees.total}</span>
                            </div>
                             <Alert>
                                <Info className="h-4 w-4" />
                                <AlertTitle className="font-headline">Important Information</AlertTitle>
                                <AlertDescription>
                                    <ul className="list-disc pl-5 text-muted-foreground">
                                        {course.fees.info.map((info: string, i: number) => <li key={i}>{info}</li>)}
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
  } else {
    // A generic layout for other courses
    courseContent = (
      <div className="container mx-auto px-4 py-12">
          <MotionDiv
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          >
              <h1 className="font-headline text-4xl font-bold tracking-tight lg:text-5xl">
              {course.name}
              </h1>
          </MotionDiv>
          <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8"
          >
              <Card>
                  <CardHeader>
                      <CardTitle>Course Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                      {course.description && course.description.map((p: string, i: number) => <p key={i} className="text-muted-foreground">{p}</p>)}
                      <p className="mt-6 text-primary font-semibold">More information coming soon. Please check back later or contact us for details.</p>
                       <Link href="/register" prefetch={true}>
                          <Button className="mt-6">
                              Enroll Now
                          </Button>
                      </Link>
                  </CardContent>
              </Card>
          </MotionDiv>
      </div>
    );
  }

  return (
    <div>
      {courseContent}
      <div className="container mx-auto px-4 py-12 text-center">
        <Link href="/courses" prefetch={true}>
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Courses
          </Button>
        </Link>
      </div>
    </div>
  );
}
