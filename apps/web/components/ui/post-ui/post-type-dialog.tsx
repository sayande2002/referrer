"use client";

import { useRouter } from "@/navigation";
import { X } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel2,
  AlertDialogContent,
  AlertDialogDescription, // AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@referrer/ui";

import { useStore } from "@/store/store";

export function PostTypeDialog({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const setPostType = useStore((state) => state.setPostType);
  const postType = (type: string) => {
    setPostType(type);
    router.push("/post");
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader className="flex flex-row items-center justify-between">
          <AlertDialogTitle>What you want to Post ?</AlertDialogTitle>
          <AlertDialogCancel2>
            <X />
          </AlertDialogCancel2>
        </AlertDialogHeader>
        <AlertDialogDescription>Select one</AlertDialogDescription>
        <div className="flex items-center justify-center gap-5">
          <AlertDialogAction onClick={() => postType("Referral")}>Referral Post</AlertDialogAction>
          <AlertDialogAction onClick={() => postType("Normal")}>Normal Post</AlertDialogAction>
          <AlertDialogAction onClick={() => postType("Find")}>Find Referer</AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
