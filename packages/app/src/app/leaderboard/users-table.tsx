"use client";

import * as React from "react";
import type { Result, User } from "@prisma/client";

import { type ColumnDef } from "unstyled-table";
import Image from "next/image";
import Link from "next/link";
import { DataTable } from "@/components/data-table/data-table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { sortFilters } from "./sort-filters";

type UserWithResults = User & { results: Result[] };

function convertNumberToOrdinal({ n }: { n: number }) {
  // special case for 11, 12, 13
  if (n % 100 === 11 || n % 100 === 12 || n % 100 === 13) {
    return n + "th";
  }

  // standard ordinal rules
  switch (n % 10) {
    case 1:
      return n + "st";
    case 2:
      return n + "nd";
    case 3:
      return n + "rd";
    default:
      return n + "th";
  }
}

export function UsersTable({
  data,
  pageCount,
  ranks,
  field,
}: {
  data: UserWithResults[];
  pageCount: number;
  ranks: {[key: string]: { [key: string]: { [key: string]: number | boolean }}};
  field: string;
}) {
  const columns = React.useMemo<ColumnDef<UserWithResults, unknown>[]>(
    () => [
      {
        accessorFn: (user) => {
          return user.id; // Display the "place" property in the table cell
        },
        header: "Rank", // Header title for the new column
        cell: ({ cell }) => {
          const userId = cell.getValue() as string;
          console.log(ranks)
          return (
            <span className="ml-2">
              {ranks[userId][field]["shared"] ? "T-" : ""}
              {convertNumberToOrdinal({
                n: ranks[userId][field]["rank"] as number,
              })}
            </span>
          );
        },
        enableSorting: false,
      },
      {
        accessorFn: (user) => {
          return {
            id: user.id,
            image: user.image ?? "",
            name: user.name,
          };
        },
        header: "User",
        cell: ({ cell }) => {
          const userInfo = cell.getValue() as User;

          return (
            <Link href={`/users/${userInfo.id}`}>
              <div className="flex items-center gap-2">
                <Image
                  className="rounded-full"
                  src={userInfo.image ?? ""}
                  alt="user avatar"
                  height={30}
                  width={30}
                />
                <span>{userInfo.name}</span>
              </div>
            </Link>
          );
        },
        enableSorting: false,
      },
      {
        accessorFn: (user) => {
          return user.averageCpm;
        },
        accessorKey: "averageCpm",
        header: () => {
          return (
            <div className="flex items-center gap-2">
              <span>Average cpm</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Icons.info className="w-4 h-4" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Characters per minute</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          );
        },
        cell: ({ cell }) => {
          const averageCpm = cell.getValue() as number;

          return <span>{averageCpm}</span>;
        },
      },
      {
        accessorFn: (user) => {
          return user.averageAccuracy;
        },
        accessorKey: "averageAccuracy",
        header: "Average accuracy",
        cell: ({ cell }) => {
          const avgAccuracy = cell.getValue() as number;

          return (
            <span
              className={cn("text-green-600", {
                "text-orange-600": avgAccuracy > 0.5 && avgAccuracy < 0.8,
                "text-destructive": avgAccuracy < 0.5,
              })}
            >
              {avgAccuracy}%
            </span>
          );
        },
      },
      {
        accessorFn: ({ results }) => {
          return results.length;
        },
        header: "Races played",
      },
      {
        accessorFn: (user) => {
          return user.topLanguages;
        },
        header: "Top languages",
        cell: ({ cell }) => {
          const topLanguages = cell.getValue() as string[];
          return (
            <div>
              {topLanguages.length > 0 ? (
                <span className="capitalize">{topLanguages.join(", ")}</span>
              ) : (
                <span className="capitalize text-gray-400">---</span>
              )}
            </div>
          );
        },
      },
    ],
    [field],
  );

  return (
    <>
      <DataTable
        columns={columns}
        data={data}
        pageCount={pageCount}
        defaultSorting={{
          prop: "averageCpm",
          val: "desc",
        }}
      />
      <p className="text-sm md:text-base mt-1 text-muted-foreground">
        You must have completed 5 races to be placed in the leaderboards.
      </p>
    </>
  );
}
