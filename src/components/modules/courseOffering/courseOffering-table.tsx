import type { Dispatch, SetStateAction } from "react";
import TablePagination from "@/components/shared/table-pagination";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSuspenseGetAllCourseOffering } from "@/hooks";
import type { ICourseOfferingParams } from "@/types";

interface IProps extends ICourseOfferingParams {
  handlePageChange: Dispatch<SetStateAction<number>>;
}

export default function CourseOfferingTable({
  handlePageChange,
  ...params
}: IProps) {
  const { data } = useSuspenseGetAllCourseOffering(params);

  const departments = data?.data;

  return (
    <>
      <div className=" border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">SL</TableHead>
              <TableHead className="font-bold">Title</TableHead>
              <TableHead className="font-bold">Semester</TableHead>
              <TableHead className="font-bold">Instructor</TableHead>
              <TableHead className="font-bold text-center">
                Course Fee
              </TableHead>
              <TableHead className="font-bold text-center">
                Total Seat
              </TableHead>
              <TableHead className="font-bold text-center">
                Available Seat
              </TableHead>
              <TableHead className="font-bold text-center">Status</TableHead>
              <TableHead className="font-bold text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {departments.map((row, idx) => (
              <TableRow key={row.id}>
                <TableCell className="font-medium">{idx + 1}</TableCell>
                <TableCell className="font-medium">
                  {row.course?.title}
                </TableCell>
                <TableCell className="font-medium">
                  {row.semester?.name}
                </TableCell>
                <TableCell className="font-medium">
                  {row.instructor?.name}
                </TableCell>
                <TableCell className="font-medium text-center">
                  {row.courseFee}
                </TableCell>
                <TableCell className="font-medium text-center">
                  {row.totalSeat}
                </TableCell>
                <TableCell className="font-medium text-center">
                  {row.availableSeat}
                </TableCell>
                <TableCell className="font-medium text-center">
                  <Badge>{row.semester?.status}</Badge>
                </TableCell>
                <TableCell className="text-center">
                  <Button variant="outline">Update</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="my-5">
        <TablePagination
          totalPages={data?.meta.totalPages ?? 0}
          handlePageChange={handlePageChange}
          page={params.page ?? 0}
        />
      </div>
    </>
  );
}
