"use client";

import type React from "react";
import { Suspense, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useDebounce from "@/hooks/debounce.hook";
import type { ICourseOfferingParams, SemesterStatus } from "@/types";
import TableLoading from "../../shared/table-loading";
import CourseOfferingTable from "./courseOffering-table";

const semesterStatus: ["ALL" | SemesterStatus, string][] = [
  ["ACTIVE", "Active"],
  ["UPCOMING", "Upcoming"],
  ["COMPLETED", "Completed"],
  ["CLOSED", "Closed"],
  ["ALL", "All"],
];

export default function CourseOfferingTabs() {
  const [tab, setTab] = useState<"ALL" | SemesterStatus>("ALL");
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(1);

  const debounceSearch = useDebounce(searchInput);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    setPage(1);
  };

  const queryParams: ICourseOfferingParams = {
    page,
    limit: 10,
    ...(debounceSearch ? { searchTerm: searchInput } : {}),
    ...(tab === "ALL" ? {} : { semesterStatus: tab }),
  };

  return (
    <Tabs value={tab} onValueChange={(value) => setTab(value)}>
      <div className="flex justify-between my-5">
        <div className="flex gap-2">
          <Button>Add New</Button>
          <Input
            onChange={(e) => handleSearch(e)}
            type="search"
            placeholder="Search"
          />
        </div>
        <TabsList>
          {semesterStatus.map(([value, label]) => (
            <TabsTrigger key={value} value={value}>
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      <Suspense fallback={<TableLoading />}>
        <CourseOfferingTable {...queryParams} handlePageChange={setPage} />
      </Suspense>
    </Tabs>
  );
}
