import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSuspenseGetAllCourses } from "@/hooks";

export default function CourseTable() {
  const { data } = useSuspenseGetAllCourses();

  const departments = data?.data;

  return (
    <div className=" border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold">SL</TableHead>
            <TableHead className="font-bold">Title</TableHead>
            <TableHead className="font-bold">Code</TableHead>
            <TableHead className="font-bold">Program</TableHead>
            <TableHead className="font-bold text-center">Semester</TableHead>
            <TableHead className="font-bold text-center">Credit</TableHead>
            <TableHead className="font-bold text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {departments.map((row, idx) => (
            <TableRow key={row.id}>
              <TableCell className="font-medium">{idx + 1}</TableCell>
              <TableCell className="font-medium">{row.title}</TableCell>
              <TableCell className="font-medium">{row.code}</TableCell>
              <TableCell className="font-medium">{row.program.code}</TableCell>
              <TableCell className="font-medium text-center">
                {row.semesterNo}
              </TableCell>
              <TableCell className="font-medium text-center">
                {row.credit}
              </TableCell>
              <TableCell className="text-center">
                <Button variant="outline">Update</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
