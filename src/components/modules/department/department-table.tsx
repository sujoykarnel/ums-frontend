import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSuspenseGetAllDepartments } from "@/hooks";

export default function DepartmentTable() {
  const { data } = useSuspenseGetAllDepartments();

  const departments = data?.data;

  return (
    <div className=" border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">SL</TableHead>
            <TableHead className="">Name</TableHead>
            <TableHead className="">Code</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {departments.map((department) => (
            <TableRow key={department.id}>
              <TableCell className="font-medium">1</TableCell>
              <TableCell className="font-medium">{department.name}</TableCell>
              <TableCell className="font-medium">{department.code}</TableCell>
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
