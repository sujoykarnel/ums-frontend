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

  const universities = data?.data ;

  console.log(universities);

  return (
    <div className=" border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">SL</TableHead>
            <TableHead className="">Name</TableHead>
            <TableHead className="">Short Name</TableHead>
            <TableHead className="">Address</TableHead>
            <TableHead className="">Email</TableHead>
            <TableHead className="">Phone</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {universities.map((university) => (
            <TableRow key={university.id}>
              <TableCell className="font-medium">1</TableCell>
              <TableCell className="font-medium">{university.name}</TableCell>
              <TableCell className="font-medium">
                {university.shortName}
              </TableCell>
              <TableCell className="font-medium">
                {university.address}
              </TableCell>
              <TableCell className="font-medium">{university.email}</TableCell>
              <TableCell className="font-medium">{university.phone}</TableCell>
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
