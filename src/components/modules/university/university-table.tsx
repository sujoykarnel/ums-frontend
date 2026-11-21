import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSuspenseGetAllUniversities } from "@/hooks";

export default function UniversityTable() {
  const { data } = useSuspenseGetAllUniversities();

  const universities = data?.data;

  console.log(universities);

  return (
    <div className=" border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold">SL</TableHead>
            <TableHead className="font-bold">Name</TableHead>
            <TableHead className="font-bold">Short Name</TableHead>
            <TableHead className="font-bold">Address</TableHead>
            <TableHead className="font-bold">Email</TableHead>
            <TableHead className="font-bold">Phone</TableHead>
            <TableHead className="font-bold text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {universities.map((row, idx) => (
            <TableRow key={row.id}>
              <TableCell className="font-medium">{idx + 1}</TableCell>
              <TableCell className="font-medium">{row.name}</TableCell>
              <TableCell className="font-medium">{row.shortName}</TableCell>
              <TableCell className="font-medium">{row.address}</TableCell>
              <TableCell className="font-medium">{row.email}</TableCell>
              <TableCell className="font-medium">{row.phone}</TableCell>
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
