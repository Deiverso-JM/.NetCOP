import Image from "next/image";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArticuleCard } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CardActiculeProps = React.ComponentProps<typeof Card> & {
  articule: ArticuleCard;
};

export function CardActicule({
  className,
  articule,
  ...props
}: CardActiculeProps) {
  return (
    <Card className={cn("w-[500px]  rounded-md border-none ", className)} {...props}>
      <CardHeader className="p-0 mb-6">
        {!!articule.image && (
          <Image
            src={articule.image}
            width={500}
            height={500}
            alt={"artucule image"}
            objectFit="cover"
            className=" rounded-t-lg"
          />
        )}
      </CardHeader>
      <CardContent className="grid gap-4">
        <CardTitle>{articule.title}</CardTitle>
        <CardDescription className=" overflow-hidden text-ellipsis  line-clamp-3 max-h-24"  >{articule.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Check className="mr-2 h-4 w-4" /> Leer mas
        </Button>
      </CardFooter>
    </Card>
  );
}
