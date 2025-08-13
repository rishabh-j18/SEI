import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { MotionDiv } from "@/components/motion-wrapper";
import { syllabusData } from "@/data/syllabus";

type Department = keyof typeof syllabusData;

export default function SyllabusNotesPage() {
  const departments = Object.keys(syllabusData) as Department[];

  return (
    <div className="container mx-auto px-4 py-12">
      <MotionDiv
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-headline text-4xl font-bold tracking-tight lg:text-5xl">
          Syllabus &amp; Notes
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          Access and download course syllabi and lecture notes for all departments.
        </p>
      </MotionDiv>
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-12"
      >
        <Tabs defaultValue={departments[0]} className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            {departments.map((dept) => (
              <TabsTrigger key={dept} value={dept}>{dept}</TabsTrigger>
            ))}
          </TabsList>
          {departments.map((dept) => (
            <TabsContent key={dept} value={dept}>
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">{dept}</CardTitle>
                  <CardDescription>
                    All available documents for the {dept} department.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {syllabusData[dept].map((doc) => (
                      <li key={doc.file} className="flex items-center justify-between rounded-lg border p-4">
                        <div>
                          <p className="font-semibold">{doc.title}</p>
                          <p className="text-sm text-muted-foreground">{doc.type}</p>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Download className="h-5 w-5" />
                          <span className="sr-only">Download {doc.file}</span>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </MotionDiv>
    </div>
  );
}
