import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BookOpen, Calendar, Megaphone, Newspaper } from 'lucide-react';
import Link from 'next/link';
import { MotionDiv } from '@/components/motion-wrapper';

const featuredCourses = [
  {
    title: "Computer Science Engineering",
    description: "Explore the world of algorithms, data structures, and software development.",
    image: "https://placehold.co/600x400.png",
    aiHint: "computer science",
    href: "/courses"
  },
  {
    title: "Mechanical Engineering",
    description: "Dive into the principles of mechanics, thermodynamics, and material science.",
    image: "https://placehold.co/600x400.png",
    aiHint: "mechanical engineering",
    href: "/courses"
  },
  {
    title: "Business Administration (BBA)",
    description: "Develop leadership and management skills to excel in the corporate world.",
    image: "https://placehold.co/600x400.png",
    aiHint: "business administration",
    href: "/courses"
  },
];

const announcements = [
  {
    title: 'Mid-term Exams Schedule Released',
    date: '2024-09-01',
    description: 'The schedule for the upcoming mid-term examinations for all departments has been published. Please check the student portal for details.',
  },
  {
    title: 'Annual Sports Day Registration Open',
    date: '2024-08-28',
    description: 'Registrations for the annual sports day events are now open. All students are encouraged to participate.',
  },
];

const upcomingEvents = [
  {
    title: 'Guest Lecture on AI',
    date: '2024-09-15',
    description: 'A special guest lecture by Dr. Anya Sharma on the future of Artificial Intelligence. Venue: Auditorium.',
  },
  {
    title: 'Inter-College Debate Competition',
    date: '2024-09-22',
    description: 'The annual inter-college debate competition will be held. Topics will be announced on the day of the event.',
  },
];

const recentNews = [
  {
    title: 'SEI Ranked Top 10 in National Survey',
    date: '2024-08-25',
    description: 'We are proud to announce that Shailja Educational Institute has been ranked among the top 10 engineering colleges in the recent national survey.',
  },
  {
    title: 'Successful Tech Fest 2024',
    date: '2024-08-20',
    description: 'Our annual tech fest, "Innovate 2024", concluded with record participation and groundbreaking projects.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-12 md:gap-24">
      <HeroSection />
      <FeaturedCoursesSection />
      <main className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          <InfoSection icon={Megaphone} title="Announcements" items={announcements} />
          <InfoSection icon={Calendar} title="Upcoming Events" items={upcomingEvents} />
          <InfoSection icon={Newspaper} title="Recent News" items={recentNews} />
        </div>
      </main>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative h-[60vh] w-full bg-secondary">
      <Image
        src="https://placehold.co/1800x1000.png"
        alt="University Campus"
        data-ai-hint="university campus"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-primary/60" />
      <div className="container relative mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-primary-foreground">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-headline text-4xl font-bold md:text-6xl">
            Shailja Educational Institute
          </h1>
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            Nurturing Minds, Shaping Futures
          </p>
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/courses" prefetch={true}>
            <Button size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
              Explore Our Courses <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </MotionDiv>
      </div>
    </section>
  );
}

function FeaturedCoursesSection() {
  return (
    <section className="container mx-auto px-4">
      <MotionDiv
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="font-headline text-3xl font-bold tracking-tight lg:text-4xl">
          Our Flagship Programs
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
          Discover a wide range of programs designed to equip you with the skills and knowledge for a successful career.
        </p>
      </MotionDiv>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {featuredCourses.map((course, index) => (
           <MotionDiv
            key={course.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 2) }}
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
              </CardContent>
              <CardFooter>
                 <Link href={course.href} className="w-full" prefetch={true}>
                  <Button variant="outline" className="w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </MotionDiv>
        ))}
      </div>
       <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12 text-center"
      >
        <Link href="/courses" prefetch={true}>
          <Button size="lg" variant="ghost">
            View All Courses <BookOpen className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </MotionDiv>
    </section>
  )
}

interface InfoItem {
  title: string;
  date: string;
  description: string;
}

interface InfoSectionProps {
  icon: React.ElementType;
  title: string;
  items: InfoItem[];
}

function InfoSection({ icon: Icon, title, items }: InfoSectionProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="space-y-6"
    >
      <div className="flex items-center gap-4">
        <Icon className="h-8 w-8 text-primary" />
        <h2 className="font-headline text-3xl font-bold">{title}</h2>
      </div>
      <div className="space-y-4">
        {items.map((item, index) => (
          <Card key={index} className="transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <p className="mt-2 text-foreground/80">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </MotionDiv>
  );
}
