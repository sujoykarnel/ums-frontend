import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSuspenseGetAllPrograms } from "@/hooks";

export default function ProgramTable() {
  const { data } = useSuspenseGetAllPrograms();

  const universities = data?.data;

  console.log(universities);

  return (
    <div className=" border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold">SL</TableHead>
            <TableHead className="font-bold">Name</TableHead>
            <TableHead className="font-bold">Code</TableHead>
            <TableHead className="font-bold">Department</TableHead>
            <TableHead className="font-bold text-center">
              Duration (Years)
            </TableHead>
            <TableHead className="font-bold text-center">
              Total Credits
            </TableHead>
            <TableHead className="font-bold text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {universities.map((row, idx) => (
            <TableRow key={row.id}>
              <TableCell className="font-medium">{idx + 1}</TableCell>
              <TableCell className="font-medium">{row.name}</TableCell>
              <TableCell className="font-medium">{row.code}</TableCell>
              <TableCell className="font-medium">
                {row.department.name}
              </TableCell>
              <TableCell className="font-medium text-center">
                {row.duration}
              </TableCell>
              <TableCell className="font-medium text-center">
                {row.totalCredits}
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
