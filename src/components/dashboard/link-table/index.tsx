"use client"

import { ShortenUrlService } from "@/services/shorten-url.services";
import { Url, columns } from "./columns";
import { DataTable } from "./data-table";
import { useLinkTableStore } from "@/store/app.store";
import { useEffect, useState } from "react";
import { RefreshCw } from "lucide-react";

async function getData(): Promise<Url[]> {
  try {
    const response = await ShortenUrlService.getUserUrls();
    
    return response.userShortUrls;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default function LinkTable() {
  const { loadingTable, setLoadingTable } = useLinkTableStore();
  const [data, setData] = useState<Url[]>([]);

  async function fetchData() {
    setLoadingTable(true);
    const fetchedData = await getData();
    setData(fetchedData);
    console.log(fetchedData);
    
    setLoadingTable(false);
  }
  useEffect(() => {

    fetchData();
  }, [setLoadingTable]);

  return (
    <div className="container mx-auto text-white text-[30px] font-bold py-10">
      <RefreshCw className={`text-white cursor-pointer mb-4 ${loadingTable ? "animate-spin" : ""}`} onClick={fetchData} />
      {loadingTable ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-col items-start gap-4 justify-start">
          
          <DataTable columns={columns} data={data} />
        </div>
      )}
    </div>
  );
}
