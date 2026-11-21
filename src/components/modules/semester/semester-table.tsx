import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSuspenseGetAllSemesters } from "@/hooks";

export default function SemesterTable() {
  const { data } = useSuspenseGetAllSemesters();

  const departments = data?.data;

  return (
    <div className=" border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold">SL</TableHead>
            <TableHead className="font-bold">Name</TableHead>
            <TableHead className="font-bold">Year</TableHead>
            <TableHead className="font-bold">Start Date</TableHead>
            <TableHead className="font-bold">End Date</TableHead>
            <TableHead className="font-bold">Status</TableHead>
            <TableHead className="font-bold text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {departments.map((row, idx) => (
            <TableRow key={row.id}>
              <TableCell className="font-medium">{idx + 1}</TableCell>
              <TableCell className="font-medium">{row.name}</TableCell>
              <TableCell className="font-medium">{row.year}</TableCell>
              <TableCell className="font-medium">
                {format(row.startDate, "dd-MMM-yyyy")}
              </TableCell>
              <TableCell className="font-medium">
                {format(row.endDate, "dd-MMM-yyyy")}
              </TableCell>
              <TableCell className="font-medium">{row.status}</TableCell>
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
