import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Award, BarChart, GraduationCap, Percent, Star, Target } from "lucide-react";
import { MotionDiv } from "@/components/motion-wrapper";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";


const seistHighlights = [
  {
    title: "Upto 100% Scholarships",
    description: "Students get awarded based on their performance in the scholarship test.",
    icon: Star,
  },
  {
    title: "Overall Analysis",
    description: "The analysis is designed to analyse overall performance growth with data analysis charts in SPR.",
    icon: BarChart,
  },
  {
    title: "Uplift Talent",
    description: "Scholarship test that offers direct entry to various courses for deserving students.",
    icon: Award,
  },
  {
    title: "Self-analysis",
    description: "Students can analyze their strengths and area of improvement accordingly.",
    icon: Target,
  },
];


export default function ScholarshipPage() {
  return (
    <div className="bg-secondary/20">
        <div className="container mx-auto px-4 py-12">
            <MotionDiv
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <h1 className="font-headline text-4xl font-bold tracking-tight lg:text-5xl">
                SEI Scholarship Test (SEIST)
                </h1>
                <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
                Your performance can unlock your potential. Secure your future with our scholarship programs.
                </p>
            </MotionDiv>

            <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-12"
            >
                <Card className="overflow-hidden bg-gradient-to-r from-primary to-accent text-primary-foreground">
                    <CardContent className="p-8 text-center md:p-12">
                        <p className="font-headline text-lg font-semibold">Avail up to</p>
                        <h2 className="font-headline text-5xl font-bold tracking-tighter md:text-7xl">100% SCHOLARSHIP</h2>
                        <p className="mt-2 font-headline text-lg font-semibold">on</p>
                        <p className="mt-2 text-xl font-medium">JEE (Main+Advanced) & NEET Classroom Courses</p>
                        <p className="mt-4 rounded-full bg-background/20 px-4 py-1 text-sm font-semibold d:text-base">
                            For Class 11th, 12th & 12th Pass Students
                        </p>
                    </CardContent>
                </Card>
            </MotionDiv>
            
            <div className="mt-20">
                 <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center"
                >
                    <h2 className="font-headline text-3xl font-bold tracking-tight lg:text-4xl">
                        SEIST Highlights
                    </h2>
                    <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
                        Discover the advantages of taking the SEI Scholarship Test.
                    </p>
                </MotionDiv>

                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {seistHighlights.map((highlight, index) => (
                        <MotionDiv
                            key={highlight.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index + 0.5 }}
                        >
                            <Card className="h-full text-center">
                                <CardHeader>
                                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                                        <highlight.icon className="h-8 w-8"/>
                                    </div>
                                    <CardTitle className="pt-4 font-headline">{highlight.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{highlight.description}</p>
                                </CardContent>
                            </Card>
                        </MotionDiv>
                    ))}
                </div>
            </div>

            <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2">
                 <MotionDiv
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                 >
                    <h2 className="font-headline text-3xl font-bold tracking-tight">Important Information</h2>
                    <p className="mt-2 text-muted-foreground">Everything you need to know about SEIST.</p>
                    <Card className="mt-6">
                        <CardContent className="p-6">
                             <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="font-headline text-lg">What is SEIST?</AccordionTrigger>
                                    <AccordionContent className="text-base text-muted-foreground">
                                        SEIST (SEI Scholarship Test) is a scholarship program that offers students moving to class 11th, 12th & 13th the opportunity to earn scholarships for JEE and NEET classroom programs. Through SEIST, students can secure scholarships of up to 100% for these programs.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </CardContent>
                    </Card>
                 </MotionDiv>
                 <MotionDiv
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                 >
                    <h2 className="font-headline text-3xl font-bold tracking-tight">Important Note</h2>
                     <Alert className="mt-6">
                        <Info className="h-4 w-4" />
                        <AlertTitle className="font-headline">Selection Process</AlertTitle>
                        <AlertDescription className="text-muted-foreground">
                            Students who have scored above 50% in the SEIST Examination will be qualified for the second round. In the second round, students will be interviewed by senior faculty members & then his/her final scholarship will be decided.
                        </AlertDescription>
                    </Alert>
                 </MotionDiv>
            </div>
        </div>
    </div>
  );
}
