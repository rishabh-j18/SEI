import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Lightbulb, Users } from 'lucide-react';
import { MotionDiv } from '@/components/motion-wrapper';

const stats = [
  { value: '10,000+', label: 'Alumni Network', icon: Users },
  { value: '50+', label: 'Years of Excellence', icon: GraduationCap },
  { value: '95%', label: 'Placement Rate', icon: Lightbulb },
];

export default function WhySeiPage() {
  return (
    <div className="bg-secondary/50">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <MotionDiv
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="font-headline text-4xl font-bold tracking-tight lg:text-6xl">
            Why Choose SEI?
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground md:text-xl">
            Discover the values and vision that make Shailja Educational Institute a premier destination for higher learning.
          </p>
        </MotionDiv>
        
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-lg">
                    <Image
                        src="/Vision.webp"
                        alt="Our Mission"
                        data-ai-hint="diverse students group"
                        fill
                        className="object-cover"
                    />
                </div>
            </MotionDiv>
            <MotionDiv
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <h2 className="font-headline text-3xl font-bold text-primary">Our Mission</h2>
                <p className="mt-4 text-lg text-foreground/80">
                To foster a transformative learning environment that equips students with the knowledge, skills, and ethical values necessary to excel in a dynamic global society. We are committed to nurturing innovation, promoting research, and inspiring a passion for lifelong learning.
                </p>
            </MotionDiv>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
             <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="md:order-2"
            >
                <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-lg">
                    <Image
                        src="/Values.jpg"
                        alt="Our Values"
                        data-ai-hint="students collaborating"
                        fill
                        className="object-cover"
                    />
                </div>
            </MotionDiv>
            <MotionDiv
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="md:order-1"
            >
                <h2 className="font-headline text-3xl font-bold text-primary">Our Core Values</h2>
                <ul className="mt-4 space-y-3 text-lg text-foreground/80">
                    <li className="flex items-start gap-3">
                        <span className="mt-1 text-accent">&#10148;</span>
                        <strong>Excellence:</strong> Striving for the highest standards in teaching, research, and service.
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-1 text-accent">&#10148;</span>
                        <strong>Integrity:</strong> Upholding the principles of honesty, ethics, and transparency in all our actions.
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-1 text-accent">&#10148;</span>
                        <strong>Inclusivity:</strong> Fostering a diverse and welcoming community that respects all individuals.
                    </li>
                </ul>
            </MotionDiv>
        </div>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20"
        >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {stats.map((stat, index) => (
                <Card key={index} className="text-center">
                    <CardHeader>
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                        <stat.icon className="h-8 w-8" />
                    </div>
                    </CardHeader>
                    <CardContent>
                    <p className="font-headline text-4xl font-bold">{stat.value}</p>
                    <p className="mt-2 text-muted-foreground">{stat.label}</p>
                    </CardContent>
                </Card>
                ))}
            </div>
        </MotionDiv>
      </div>
    </div>
  );
}
