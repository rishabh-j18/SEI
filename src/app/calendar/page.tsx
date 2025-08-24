"use client";

import { useState } from 'react';
import { Calendar as CalendarIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { MotionDiv } from "@/components/motion-wrapper";
import { Badge } from '@/components/ui/badge';
import { events } from '@/data/calendar';

export default function AcademicCalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const modifiers = {
    events: events.map(event => event.date),
  };

  const modifiersStyles = {
    events: {
      color: 'hsl(var(--accent-foreground))',
      backgroundColor: 'hsl(var(--accent))',
    },
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <MotionDiv
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-headline text-4xl font-bold tracking-tight lg:text-5xl">
          Academic Calendar
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Important dates, deadlines, holidays, and events for the academic year.
        </p>
      </MotionDiv>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
        >
          <Card>
            <CardContent className="p-2 md:p-6">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="w-full"
                modifiers={modifiers}
                modifiersStyles={modifiersStyles}
                captionLayout="dropdown-buttons"
                fromYear={new Date().getFullYear() - 1}
                toYear={new Date().getFullYear() + 1}
              />
            </CardContent>
          </Card>
        </MotionDiv>
        <MotionDiv 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-1"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline">
                <CalendarIcon className="h-6 w-6" /> Key Dates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {events.sort((a,b) => a.date.getTime() - b.date.getTime()).map((event) => (
                  <li key={event.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex flex-col items-center justify-center rounded-md bg-secondary p-2 text-secondary-foreground">
                         <span className="text-xs font-bold uppercase">{event.date.toLocaleString('default', { month: 'short' })}</span>
                         <span className="text-lg font-bold">{event.date.getDate()}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold">{event.title}</h4>
                      <Badge variant={event.type === 'holiday' ? 'destructive' : event.type === 'exam' ? 'secondary' : 'default'} className="mt-1 capitalize">{event.type}</Badge>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </MotionDiv>
      </div>
    </div>
  );
}
