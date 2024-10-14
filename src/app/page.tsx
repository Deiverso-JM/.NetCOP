import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid min-h-screen place-content-center min-w-full">
      <div className="flex flex-col items-center gap-2">
      <h1 className=" font-bold text-center text-4xl ">.NetCOP Alfa V0.0.1</h1>
      <Button className="  p-5">Click me</Button>
      </div>
    </div>
  );
}
