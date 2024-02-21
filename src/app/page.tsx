"use client";

import Link from "next/link";
import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  ListBoxItemProps,
  Popover,
  Select,
  SelectValue,
} from "react-aria-components";

export default function Home() {
  return (
    <main>
      <Link href="/ali">Go to Ali</Link>
      <hr />
      <Select className="flex flex-col gap-1 w-[200px]">
        <Label className="text-white cursor-default">Status</Label>
        <Button className="flex items-center cursor-default rounded-lg border-0 bg-white bg-opacity-90 pressed:bg-opacity-100 transition py-2 pl-5 pr-2 text-base text-left leading-normal shadow-md text-gray-700 focus:outline-none focus-visible:ring-2 ring-white ring-offset-2 ring-offset-rose-700">
          <SelectValue className="flex-1 truncate placeholder-shown:italic" />
          <span aria-hidden="true">▼</span>
        </Button>
        <Popover className="max-h-60 w-[--trigger-width] overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out">
          <ListBox className="outline-none p-1">
            <StatusItem textValue="Backlog">
              <Status className="bg-gray-500" />
              Backlog
            </StatusItem>
            <StatusItem textValue="In Progress">
              <Status className="bg-blue-500" />
              In Progress
            </StatusItem>
            <StatusItem textValue="In Review">
              <Status className="bg-yellow-500" />
              In Review
            </StatusItem>
            <StatusItem textValue="Done">
              <Status className="bg-green-500" />
              Done
            </StatusItem>
            <StatusItem textValue="Won't Do">
              <Status className="bg-red-500" />
              Won't Do
            </StatusItem>
          </ListBox>
        </Popover>
      </Select>
    </main>
  );
}

function StatusItem(props: ListBoxItemProps & { children: React.ReactNode }) {
  return (
    <ListBoxItem
      {...props}
      className="group flex items-center gap-2 cursor-default select-none py-2 px-4 outline-none rounded text-gray-900 focus:bg-rose-600 focus:text-white flex-1 truncate font-normal group-selected:font-medium"
    />
  );
}

function Status({ className }: { className: string }) {
  return (
    <span
      className={`w-3 h-3 rounded-full border border-solid border-white ${className}`}
    />
  );
}
