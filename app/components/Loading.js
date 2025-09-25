import {Spinner} from "@heroui/react";

export default function Loading() {
  return (
    <div className="flex justify-center h-screen w-screen items-center">
   
      <Spinner classNames={{label: "text-foreground mt-4"}} variant="gradient" size="xl" />
    
    </div>
  );
}
