
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, IndianRupee, Info, ArrowLeft, Video, Clock, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MotionDiv } from "@/components/motion-wrapper";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";

const onlineCourseDetails: { [key: string]: any } = {
  "jee-mains-advanced-1-year": {
    name: "JEE (Main + Advanced) - 1 Year Online Program",
    description: "An intensive one-year online program designed to cover the complete JEE syllabus, enhance problem-solving skills, and prepare you for success in both Main and Advanced exams. Perfect for droppers and students in Class 12.",
    features: [
        { title: "Live Interactive Classes", description: "Engage with expert faculty in real-time and clear your doubts instantly." },
        { title: "Recorded Lectures", description: "Access recordings of all live classes to revise concepts at your own pace." },
        { title: "Comprehensive Study Material", description: "Get meticulously crafted digital notes, DPPs, and question banks." },
        { title: "Regular Online Tests", description: "Weekly and monthly tests simulating the real exam pattern to track your progress." },
    ],
    fees: {
        title: "Fee Structure",
        amount: "85,000",
        duration: "1 Year",
        info: [
            "Includes all taxes and study material costs.",
            "EMI option available via all major credit cards.",
            "Scholarships available for meritorious students."
        ]
    }
  },
  "jee-mains-advanced-2-year": {
    name: "JEE (Main + Advanced) - 2 Year Online Program",
    description: "A comprehensive two-year foundation course starting from Class 11. This online program builds a strong conceptual base, covering the entire JEE syllabus alongside board exam preparation.",
    features: [
        { title: "Structured Foundational Learning", description: "Build concepts from scratch with a curriculum designed for Class 11 & 12 students." },
        { title: "Personalized Mentorship", description: "Get dedicated mentors to guide you throughout your two-year preparation journey." },
        { title: "Extensive Doubt Support", description: "24/7 doubt-solving through our app and dedicated live sessions." },
        { title: "All India Test Series", description: "Compete with peers across the country and benchmark your performance." },
    ],
    fees: {
        title: "Fee Structure",
        amount: "150,000",
        duration: "2 Years",
        info: [
            "Fee can be paid in easy installments.",
            "Includes access to all online resources for two years.",
            "Special discounts for early bird registrations."
        ]
    }
  },
  "neet-1-year": {
    name: "NEET - 1 Year Repeater Online Program",
    description: "A focused one-year online program for NEET aspirants looking to reappear for the exam. The course is designed for intense revision, doubt clearing, and extensive test practice.",
    features: [
        { title: "Fast-Track Syllabus Coverage", description: "Quick and thorough revision of the entire NEET syllabus by top medical faculty." },
        { title: "Error Analysis Sessions", description: "Specialized sessions to analyze mistakes made in tests and improve performance." },
        { title: "High-Yield Question Practice", description: "Focus on practicing the most important and frequently asked questions in NEET." },
        { title: "Well-being and Motivation", description: "Regular sessions to keep you motivated and focused on your goal." },
    ],
    fees: {
        title: "Fee Structure",
        amount: "80,000",
        duration: "1 Year",
        info: [
            "Includes all taxes and digital study material.",
            "Flexible EMI options available.",
            "Access to a vast library of recorded lectures."
        ]
    }
  },
  "neet-2-year": {
    name: "NEET - 2 Year Foundation Online Program",
    description: "A two-year online program for aspiring medical students starting in Class 11. This course provides a solid foundation in Physics, Chemistry, and Biology to excel in NEET and board exams.",
    features: [
        { title: "Concept Building from Basics", description: "Strengthen your fundamentals with our expertly designed two-year curriculum." },
        { title: "Interactive 3D Video Lectures", description: "Understand complex biological and chemical processes with immersive visuals." },
        { title: "Regular Parent-Teacher Connect", description: "Stay updated on your progress with regular virtual meetings." },
        { title: "Full-Length Mock Tests", description: "Practice with numerous mock tests that replicate the actual NEET environment." },
    ],
    fees: {
        title: "Fee Structure",
        amount: "140,000",
        duration: "2 Years",
        info: [
            "Two-year access to all course content.",
            "Installment and EMI options available.",
            "Early registration benefits apply."
        ]
    }
  },
};

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
                <Image src="https://placehold.co/800x600.png" alt={course.name} data-ai-hint="student learning online" fill className="object-cover" />
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
