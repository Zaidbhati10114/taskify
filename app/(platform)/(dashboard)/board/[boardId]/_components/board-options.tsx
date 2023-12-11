"use client";

import { deleteBoard } from "@/actions/delete-board";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useAction } from "@/hooks/use-action";
import { Loader, MoreHorizontal, X } from "lucide-react";
import { toast } from "sonner";

interface BoardOptionProps {
  id: string;
}

export const BoardOptions = ({ id }: BoardOptionProps) => {
  const { execute, isLoading } = useAction(deleteBoard, {
    onError: (error) => {
      toast.error(error);
    },
  });

  const onDelete = () => {
    execute({ id });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="h-auto w-auto p-2" variant="transparent">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent side="bottom" align="start" className="px-0 pt-3 pb-3">
        <div className="text-sm font-medium text-center text-neutral-600 pb-4">
          Board Actions
        </div>
        <PopoverClose asChild>
          <Button
            className="h-auto w-auto p-3 absolute top-2 right-2 text-neutral-600"
            variant="ghost"
          >
            <X className="h-4 w-4" />
          </Button>
        </PopoverClose>
        <Button
          variant="ghost"
          disabled={isLoading}
          onClick={onDelete}
          className="rounded-none w-full text-red-500 h-auto p-2 px-5 justify-start"
        >
          {isLoading ? (
            <Loader className="animate-spin h-4 w-4" />
          ) : (
            "Delete this board"
          )}
        </Button>
      </PopoverContent>
    </Popover>
  );
};

// <Loader />
