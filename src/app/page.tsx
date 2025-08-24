import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BookOpen, Calendar, Megaphone, Newspaper } from 'lucide-react';
import Link from 'next/link';
import { MotionDiv } from '@/components/motion-wrapper';
import { featuredCourses, announcements, upcomingEvents, recentNews } from '@/data/home';

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
      <div className="pb-6 md:pb-12"></div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative h-[60vh] w-full bg-secondary">
      <Image
        src="/Institute.webp"
        alt="Students preparing for competitive exams"
        data-ai-hint="students exam preparation"
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
            Your Gateway to Success in Competitive Exams
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
          Our Premier Coaching Programs
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
          Top-tier coaching designed to help you excel in India's most competitive exams.
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
                <CardTitle className="font-headline flex items-center gap-3"><course.icon className="h-6 w-6 text-primary" />{course.title}</CardTitle>
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
          <Card key={index} className="transition-all hover:shadow-lg mb-4">
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
