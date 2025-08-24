import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { MotionDiv } from "@/components/motion-wrapper";
import { resultsData } from "@/data/results";

export default function ResultsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <MotionDiv
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-headline text-4xl font-bold tracking-tight lg:text-5xl">
          Examination Results
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          View your semester-wise academic performance. For detailed mark sheets, please visit the student portal.
        </p>
      </MotionDiv>
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-12"
      >
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Results for John Doe</CardTitle>
            <CardDescription>Student ID: SEI-12345</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Semester</TableHead>
                  <TableHead>Subject Code</TableHead>
                  <TableHead>Subject Name</TableHead>
                  <TableHead className="text-center">Grade</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {resultsData.map((result, index) => (
                  <TableRow key={index}>
                    <TableCell>{result.semester}</TableCell>
                    <TableCell className="font-medium">{result.code}</TableCell>
                    <TableCell>{result.subject}</TableCell>
                    <TableCell className="text-center font-semibold">{result.grade}</TableCell>
                    <TableCell className="text-right">
                      <Badge variant={result.status === "Pass" ? "default" : "destructive"}>
                        {result.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </MotionDiv>
    </div>
  );
}
