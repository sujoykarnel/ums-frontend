"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export default function TableLoading() {
  return (
    <div className=" border rounded-lg">
      <Table>
        <TableBody>
          {[1, 2, 3].map((_) => (
            <TableRow key={_}>
              <TableCell colSpan={6} className="font-medium">
                <Skeleton className="h-9 w-100" />
              </TableCell>
              <TableCell colSpan={6} className="font-medium">
                <Skeleton className="h-9 w-100" />
              </TableCell>
              <TableCell colSpan={6} className="font-medium">
                <Skeleton className="h-9 w-100" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
