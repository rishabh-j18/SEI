"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, IndianRupee, Info, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { MotionDiv } from "@/components/motion-wrapper";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { notFound } from "next/navigation";

interface CourseDetail {
  name: string;
  image: string;
  alt: string;
  aiHint: string;
  intro?: string;
  description?: string[];
  features?: { title: string; description: string }[];
  whySei?: string;
  learningOptions?: {
    title: string;
    description: string;
    options: { title: string; description: string }[];
  };
  programs?: {
    title: string;
    items: { title: string; description: string }[];
  };
  highlights?: string[];
  fees: {
    title: string;
    items: { name: string; amount: string }[];
    total: string;
    total_2?: string;
    duration?: string;
    info: string[];
  };
}

const courseDetails: { [key: string]: CourseDetail } = {
  "ssc-cgl": {
    name: "SSC-CGL SUPER 30 (ANUSHAASAN BATCH)",
    image: "/SSC.jpg",
    alt: "SSC CGL Preparation",
    aiHint: "students exam success",
    description: [
        "Today SSC is one of the most sought-after exams by the students who have just completed their graduation. In the recent years the cut- off of SSC has changed tremendously. And this all became possible because students are now much better aware about the exam and the level of the completion.",
        "SEI CAMPUS is the best coaching center in India. Our students not only just clear the exams but also manage to get a high rank which in turn helps them to get the job of their dream.",
    ],
    features: [
        {
            title: "Flexible Batches",
            description: "We have various batches running from 8 am to 9 pm, including weekend batches for working professionals."
        },
        {
            title: "Comprehensive Material",
            description: "The fee includes study material, class schedule, and lifetime access to free online/offline mocks for any competitive exam."
        },
        {
            title: "Expert-Prepared Mocks",
            description: "Our Online SSC Mock Tests are prepared by industry experts as per the latest SSC guidelines and are the best in the industry."
        }
    ],
    whySei: "At SEI CAMPUS the only thing that we have to offer is the ‘Best’ for our candidates as we never compromise with the quality of education we provide, which in turns keep us as a market leader in SSC.",
    learningOptions: {
        title: "Course Options",
        description: "We offer flexible learning options to suit your needs. If you are unable to visit us, we have prepared an exhaustive Online SSC Course. You can also order the complete course in a Pen Drive and study at your own pace.",
        options: [
            {
                title: "Online Course",
                description: "Learn from anywhere with our comprehensive online materials."
            },
            {
                title: "Pen Drive Course",
                description: "Study offline at your own pace with our complete course on a pen drive."
            }
        ]
    },
    fees: {
        title: "Fee Structure",
        items: [
            { name: "Admission + Kit Fee", amount: "5,000" },
            { name: "Tuition Fee", amount: "24,000" }
        ],
        total: "29,000",
        info: [
            "EMI option available with 0% interest rate.",
            "Admission + Kit Fee of 5000 is non-refundable."
        ]
    }
  },
  "jee-mains": { 
    name: "JEE (Main+Advanced) 2025-26",
    image: "/jee2.png",
    alt: "JEE Preparation",
    aiHint: "engineering students studying",
    intro: "SEI ensures to provide quality education for the optimum results and success of students, so far, we have acquired remarkable selection ratios in competitive exams.",
    description: [
        "SEI has long been distinguished for providing the Best Classroom Coaching, Online Learning Facility and getting excellent results. The curriculum is specifically designed for the JEE 2027 aspirants along with their 11th & Board preparations. To strengthen the foundation, conceptual knowledge and enhance the academic skills this course is the best option. The course helps the aspirants with better understanding of the examination pattern and ensure their success in the JEE with ease through a year-long curriculum."
    ],
    highlights: [
        "Structured Academic Planner for JEE 2027.",
        "Complete Syllabus Coverage of Class 11th.",
        "Printed Study Material & Daily Practice Sheets.",
        "Free Access to SEI Learning App for conceptual revision of Syllabus.",
        "One on One doubt solving support & Regular Test facility.",
        "Until the 10th board exams, classes will be conducted online and will include board preparation lectures. The offline classes will start from 2nd April,2025",
        "18000+ Questions Practice accessible in both Online and Offline mode",
        "35+ Test Papers Will Conduct for Practice."
    ],
    programs: {
        title: "Our JEE Programs",
        items: [
            {
                title: "Regular Yearlong Classroom Program",
                description: "Our classroom programs are very interactive and are designed with such proficiency that no extra study material is needed to achieve your desired success in JEE."
            },
            {
                title: "Topic wise DPPs and Question Bank",
                description: "Focuses on boosting confidence of students for facing National Level competitive exams by providing subject wise and topic wise questions with solutions."
            },
            {
                title: "SEI Online Test Series",
                description: "Online Test Series (OTS) is designed according to JEE Main + Advanced pattern that stimulates the actual examination environment and provides an opportunity to revise every concept thoroughly."
            }
        ]
    },
    fees: {
        title: "Fee Structure",
        items: [
            { name: "Admission + Kit Fee", amount: "15,000" },
            { name: "Tuition Fee (1st Year)", amount: "140,000" },
        ],
        total: "155,000",
        total_2: "300,000",
        info: [
            "EMI option available with 0% interest rate.",
            "Admission + Kit Fee of 15,000 is non-refundable."
        ]
    }
   },
  "boards": { 
    name: "Class X & XII Boards (CBSE, ICSE, UP)",
    image: "/Boards.avif",
    alt: "Students in a classroom",
    aiHint: "students classroom exam",
    intro: "Excel in your board exams with our comprehensive coaching for UP, CBSE, and ICSE students. Build a strong foundation and achieve outstanding results.",
    description: [
        "Our board preparation course is designed to provide students with a thorough understanding of the syllabus for CBSE, ICSE, and UP boards. We focus on clearing fundamental concepts, providing extensive practice, and conducting regular assessments to ensure students are well-prepared to score high marks in their final examinations."
    ],
    features: [
        { title: "Multi-Board Curriculum", description: "Specialized coaching tailored for UP, CBSE, and ICSE board patterns, covering the complete syllabus for each." },
        { title: "Expert Faculty", description: "Learn from experienced teachers who have a deep understanding of board exam requirements and marking schemes." },
        { title: "Focused Practice", description: "Receive comprehensive study materials, practice questions, and previous year paper analysis to master every topic." },
        { title: "Regular Assessments", description: "Weekly and monthly tests to track progress, simulate exam conditions, and identify areas for improvement." },
    ],
    fees: {
        title: "Fee Structure",
        items: [
            { name: "Admission + Kit Fee", amount: "1,500" },
            { name: "Tuition Fee", amount: "32,400" },
        ],
        total: "33,900",
        info: [
            "EMI option available with 0% interest rate.",
            "Admission + Kit Fee of 1,500 is non-refundable."
        ]
    }
  },
  "neet": { 
    name: "NEET (PRE-MEDICAL) 2025-26",
    image: "/Neet2.jpg",
    alt: "NEET Preparation",
    aiHint: "medical students doctor",
    intro: "SEI ensures to provide quality education for the optimum results and success of students, so far, we have acquired remarkable selection ratios in competitive exams.",
    description: [
        "Our NEET program covers the entire syllabus for Physics, Chemistry, and Biology, with a special focus on problem-solving skills and time management to excel in the competitive exam."
    ],
    highlights: [
        "Structured Academic Planner for NEET 2027.",
        "Complete Syllabus Coverage of Class 11th.",
        "Printed Study Material & Daily Practice Sheets.",
        "Free Access to SEI Learning App for conceptual revision of Syllabus.",
        "One on One doubt solving support & Regular Test facility.",
        "Until the 10th board exams, classes will be conducted online and will include board preparation lectures. The offline classes will start from 2nd April,2025",
        "18000+ Questions Practice accessible in both Online and Offline mode",
        "35+ Test Papers Will Conduct for Practice."
    ],
    fees: {
        title: "Fee Structure",
        items: [
            { name: "Admission + Kit Fee", amount: "15,000" },
            { name: "Tuition Fee (1st Year)", amount: "120,000" },
        ],
        total: "135,000",
        total_2: "270,000",
        info: [
            "EMI option available with 0% interest rate.",
            "Admission + Kit Fee of 15,000 is non-refundable."
        ]
    }
  },
  "bank": {
    name: "BANK",
    image: "/Bank.jpg",
    alt: "Banking and Finance",
    aiHint: "banking finance success",
    intro: "If you're an individual looking for growth and success, the banking sector is for you. When you think about a career in banking, think about collaborating with SEI. After all, the best careers require the best guidance.",
    description: [
        "Financial institutions are a prime opportunity for students, as this is an industry that always shows growth. If you have the capability of being trustworthy and you attain a sense of responsibility, the banking sector is for you."
    ],
    features: [
        { title: "Interactive & Tech Enabled Classrooms", description: "Engage in dynamic learning with our state-of-the-art classroom technology." },
        { title: "Exam Before Exam", description: "Experience real exam conditions with our frequent mock tests to build confidence." },
        { title: "Extraordinary Performance Analysis", description: "Receive detailed feedback and analysis to identify your strengths and weaknesses." },
        { title: "Elaborated Content", description: "Access comprehensive and meticulously curated study materials covering the entire syllabus." }
    ],
    fees: {
        title: "Fee Structure",
        items: [
            { name: "Admission + Kit Fee", amount: "1,500" },
            { name: "Tuition Fee", amount: "80,000" },
        ],
        total: "81,500",
        duration: "6 Months",
        info: [
            "EMI option available with 0% interest rate.",
            "Admission + Kit Fee of 1,500 is non-refundable."
        ]
    }
  },
  "up-police": { 
    name: "UP POLICE",
    image: "/Police.webp",
    alt: "UP Police",
    aiHint: "police training law",
    intro: "Prepare to serve and protect. Our UP Police coaching program is designed to build the physical and mental strength required to excel in the demanding law enforcement recruitment process.",
    description: [
        "SEI provides comprehensive training for the UP Police entrance exam, covering all aspects of the selection process. From written exams to physical fitness tests, our expert faculty will guide you every step of the way to ensure you are fully prepared to join the force."
    ],
    features: [
        { title: "Interactive & Tech Enabled Classrooms", description: "Engage in dynamic learning with our state-of-the-art classroom technology and modern teaching aids." },
        { title: "Exam Before Exam", description: "Experience real exam conditions with our frequent mock tests to build confidence and improve time management." },
        { title: "Extraordinary Performance Analysis", description: "Receive detailed feedback and in-depth analysis of your performance to identify your strengths and weaknesses." },
        { title: "Elaborated Content", description: "Access comprehensive and meticulously curated study materials covering the entire syllabus for the UP Police exam." }
    ],
    fees: {
        title: "Fee Structure",
        items: [
            { name: "Admission + Kit Fee", amount: "1,500" },
            { name: "Tuition Fee", amount: "48,500" },
        ],
        total: "50,000",
        duration: "6 Months",
        info: [
            "EMI option available with 0% interest rate.",
            "Admission + Kit Fee of 1,500 is non-refundable."
        ]
    }
  }
};

function HeroSection({ course }: { course: CourseDetail }) {
  return (
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
      <MotionDiv initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary lg:text-5xl">{course.name}</h1>
        {course.intro && <p className="mt-4 text-lg text-muted-foreground">{course.intro}</p>}
        {course.description && course.description.length > 0 && (
          <div className="mt-4">
            {course.description.map((p, i) => (
              <p key={i} className="text-lg text-muted-foreground">{p}</p>
            ))}
          </div>
        )}
        <Link href="/register" prefetch={false}>
          <Button size="lg" className="mt-6">Enroll Now</Button>
        </Link>
      </MotionDiv>
      <MotionDiv initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl">
        <Image src={course.image} alt={course.alt} data-ai-hint={course.aiHint} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </MotionDiv>
    </div>
  );
}

function FeaturesSection({ features, title }: { features?: { title: string; description: string }[]; title: string }) {
  if (!features || features.length === 0) return null;
  return (
    <div className="mt-20">
      <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight lg:text-4xl">{title}</h2>
      </MotionDiv>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <MotionDiv key={feature.title} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline">
                  <CheckCircle className="text-primary" />
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
}

function HighlightsSection({ highlights }: { highlights?: string[] }) {
  if (!highlights || highlights.length === 0) return null;
  return (
    <div className="mt-20">
      <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight lg:text-4xl">Course Highlights</h2>
      </MotionDiv>
      <div className="mx-auto mt-12 max-w-4xl space-y-4">
        {highlights.map((highlight, i) => (
          <MotionDiv key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }}>
            <div className="flex items-start gap-4 rounded-lg border bg-card p-4">
              <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
              <p className="text-muted-foreground">{highlight}</p>
            </div>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
}

function FeesSection({ fees }: { fees: CourseDetail['fees'] }) {
  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">{fees.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {fees.items.map((item) => (
          <div key={item.name} className="flex justify-between border-b pb-2">
            <span>{item.name}</span>
            <span className="font-semibold flex items-center">
              <IndianRupee size={16} /> {item.amount}
            </span>
          </div>
        ))}
        <div className="flex justify-between text-lg font-bold text-primary">
          <span>Total{fees.duration ? ` (${fees.duration})` : ''}</span>
          <span className="flex items-center">
            <IndianRupee size={18} /> {fees.total}
          </span>
        </div>
        {fees.total_2 && (
          <div className="flex justify-between text-md font-semibold text-muted-foreground">
            <span>Total (2nd Year)</span>
            <span className="flex items-center">
              <IndianRupee size={16} /> {fees.total_2}
            </span>
          </div>
        )}
        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle className="font-headline">Important Information</AlertTitle>
          <AlertDescription>
            <ul className="list-disc pl-5 text-muted-foreground">
              {fees.info.map((info, i) => (
                <li key={i}>{info}</li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
}

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course: CourseDetail | undefined = courseDetails[params.slug];
  if (!course) {
    notFound();
  }

  return (
    <div className="bg-background">
      <Head>
        <title>{course.name} | SEI Campus</title>
        <meta name="description" content={course.intro || (course.description ? course.description.join(' ') : 'Prepare for your exams with SEI Campus.')} />
      </Head>
      <div className="container mx-auto px-4 py-12">
        <HeroSection course={course} />

        {course.whySei && (
          <div className="mt-20">
            <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tight lg:text-4xl">Why Choose SEI</h2>
              <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">{course.whySei}</p>
            </MotionDiv>
          </div>
        )}

        <FeaturesSection features={course.features} title="Course Features" />
        <HighlightsSection highlights={course.highlights} />

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            {course.learningOptions && (
              <>
                <h2 className="font-headline text-3xl font-bold">{course.learningOptions.title}</h2>
                <p className="mt-2 text-muted-foreground">{course.learningOptions.description}</p>
                <div className="mt-6 space-y-4">
                  {course.learningOptions.options.map((option) => (
                    <Card key={option.title}>
                      <CardHeader>
                        <CardTitle>{option.title}</CardTitle>
                        <CardDescription>{option.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </>
            )}
            {course.programs && (
              <>
                <h2 className="font-headline text-3xl font-bold">{course.programs.title}</h2>
                <div className="mt-6 space-y-6">
                  {course.programs.items.map((item) => (
                    <Card key={item.title}>
                      <CardHeader>
                        <CardTitle>{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            )}
            {(!course.features || course.features.length === 0) && 
             (!course.highlights || course.highlights.length === 0) && 
             !course.learningOptions && 
             !course.programs && (
              <Card>
                <CardHeader>
                  <CardTitle>Course Details</CardTitle>
                </CardHeader>
                <CardContent>
                  {course.description && course.description.map((p, i) => (
                    <p key={i} className="text-muted-foreground">{p}</p>
                  ))}
                  <p className="mt-6 text-primary font-semibold">
                    More information coming soon. Please check back later or contact us for details.
                  </p>
                  <Link href="/register" prefetch={false}>
                    <Button className="mt-6">Enroll Now</Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </div>
          <div className="lg:col-span-2">
            <FeesSection fees={course.fees} />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12 text-center">
        <Link href="/courses" prefetch={false}>
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Courses
          </Button>
        </Link>
      </div>
    </div>
  );
}