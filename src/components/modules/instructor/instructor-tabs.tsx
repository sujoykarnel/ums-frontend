"use client";

import { Suspense } from "react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TableLoading from "../../shared/table-loading";
import InstructorTable from "./instructor-table";

export default function InstructorTabs() {
  return (
    <Tabs defaultValue="overview">
      <div className="flex justify-between my-5">
        <div>
          <Input type="search" placeholder="Search" />
        </div>
        <TabsList>
          <TabsTrigger value="overview">All</TabsTrigger>
          <TabsTrigger value="add-new">Add New</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="overview">
        <Suspense fallback={<TableLoading />}>
          <InstructorTable />
        </Suspense>
      </TabsContent>
      <TabsContent value="add-new">Change your password here.</TabsContent>
    </Tabs>
  );
}
