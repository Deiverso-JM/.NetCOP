import { Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ArticuleCard } from "@/types"



type CardActiculeProps = React.ComponentProps<typeof Card> & {
  articule: ArticuleCard
} 
  

export function CardActicule({ className, articule, ...props }: CardActiculeProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>{articule.title}</CardTitle>
        <CardDescription>{articule.description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Check className="mr-2 h-4 w-4" /> Leer mas 
        </Button>
      </CardFooter>
    </Card>
  )
}
