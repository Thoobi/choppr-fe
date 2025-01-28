"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Url = {
  userShortUrls: {
    createdAt: string;
    createdBy: string;
    longURL: string;
    shortURL: string;
    shortkey: string;
    updatedAt: string;
    __v: number;
    _id: string;
  }
}

export const columns: ColumnDef<Url>[] = [
  {
    accessorKey: "longURL",
    header: "Long Url",
    enableResizing: true,
    size: 10
  },
  {
    accessorKey: "shortURL",
    header: "Short Url",
    size: 20
  },
  {
    accessorKey: "shortkey",
    header: "Short Key",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
]
