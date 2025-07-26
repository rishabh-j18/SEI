"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { MotionDiv } from "@/components/motion-wrapper";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().regex(/^\d{10}$/, {
    message: "Please enter a valid 10-digit phone number.",
  }),
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
  address: z.string().min(10, {
    message: "Please enter a complete address.",
  }),
  schoolName: z.string().min(5, {
    message: "Please enter your school name.",
  }),
  class10Board: z.string({
    required_error: "Please select your Class 10th board.",
  }),
  class10Marks: z.string().min(1, {
    message: "Please enter your marks.",
  }),
  currentClass: z.string({
    required_error: "Please select your current class.",
  }),
  targetExam: z.string({
    required_error: "Please select your target exam.",
  }),
});

export default function ScholarshipApplicationPage() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      schoolName: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Scholarship Application Submitted!",
      description: "Thank you for applying. We have received your application and will contact you shortly regarding the next steps.",
    });
    form.reset();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <MotionDiv
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-center font-headline text-4xl font-bold tracking-tight lg:text-5xl">
          Apply for SEIST
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-muted-foreground">
          Fill out the form below to register for the SEI Scholarship Test and take the first step towards a bright future.
        </p>
      </MotionDiv>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-3">
        <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">SEIST Application Form</CardTitle>
              <CardDescription>All fields are required. Please fill your details carefully.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                     <FormField
                      control={form.control}
                      name="dob"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Date of Birth</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date > new Date() || date < new Date("1990-01-01")
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="you@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="9876543210" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                   <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Address</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Enter your complete address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <FormField
                        control={form.control}
                        name="schoolName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>School Name</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. Delhi Public School" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                       <FormField
                          control={form.control}
                          name="class10Board"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Class 10th Board</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select Board" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="CBSE">CBSE</SelectItem>
                                  <SelectItem value="ICSE">ICSE</SelectItem>
                                  <SelectItem value="State Board">State Board</SelectItem>
                                  <SelectItem value="Other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                  </div>
                   <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                     <FormField
                        control={form.control}
                        name="class10Marks"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Class 10th Percentage / CGPA</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. 95% or 9.5 CGPA" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                      control={form.control}
                      name="currentClass"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Currently Studying In</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your class" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Class 11th">Class 11th</SelectItem>
                              <SelectItem value="Class 12th">Class 12th</SelectItem>
                              <SelectItem value="12th Pass (Dropper)">12th Pass (Dropper)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                   </div>
                   <FormField
                    control={form.control}
                    name="targetExam"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Target Exam</FormLabel>
                        <Select onValuechange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your target exam" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="JEE (Main+Advanced)">JEE (Main+Advanced)</SelectItem>
                            <SelectItem value="NEET">NEET</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="w-full">Submit Application</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </MotionDiv>
        <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden lg:block"
        >
            <div className="relative h-full min-h-[500px] w-full overflow-hidden rounded-lg">
                <Image src="https://placehold.co/600x800.png" alt="Student celebrating success" data-ai-hint="student success scholarship" layout="fill" objectFit="cover" />
                <div className="absolute inset-0 bg-primary/30"></div>
            </div>
        </MotionDiv>
      </div>
    </div>
  );
}
