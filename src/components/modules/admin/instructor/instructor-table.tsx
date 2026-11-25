import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSuspenseGetAllInstructors } from "@/hooks";

export default function InstructorTable() {
  const { data } = useSuspenseGetAllInstructors();

  const universities = data?.data;

  console.log(universities);

  return (
    <div className=" border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold">SL</TableHead>
            <TableHead className="font-bold">Name</TableHead>
            <TableHead className="font-bold">Email</TableHead>
            <TableHead className="font-bold">Department</TableHead>
            <TableHead className="font-bold">Address</TableHead>
            <TableHead className="font-bold">Resume</TableHead>
            <TableHead className="font-bold">Additional Docs</TableHead>
            <TableHead className="font-bold text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {universities.map((row, idx) => (
            <TableRow key={row.id}>
              <TableCell className="font-medium">{idx + 1}</TableCell>
              <TableCell className="font-medium">{row.name}</TableCell>
              <TableCell className="font-medium">{row.email}</TableCell>
              <TableCell className="font-medium">
                {row.department.name}
              </TableCell>
              <TableCell className="font-medium">{row.address}</TableCell>
              <TableCell className="font-medium">
                <Link href={row.resume} target="_blank">
                  <Button variant="outline" className="cursor-pointer">
                    View
                  </Button>
                </Link>
              </TableCell>
              <TableCell className="font-medium flex gap-2">
                {row.additionalFiles.map((item, idx) => (
                  <Link key={item.publicId} href={item.url} target="_blank">
                    <Button
                      variant="outline"
                      size="sm"
                      className="cursor-pointer"
                    >
                      {idx + 1}
                    </Button>
                  </Link>
                ))}
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
