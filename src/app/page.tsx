import { CardActicule } from "@/components/main/CardArticule";
import { ArticuleCard } from "@/types";

export default function Home() {
  const articules: ArticuleCard[] = [
    {
      idArticule: 1,
      title: ".NET is Better",
      description:
        "Discover why .NET stands ßout as one of the best frameworks for building modern, scalable applications. In this article, we compare its performance, flexibility, and ease of use, making it a strong choice for developers looking to build robust enterprise-level solutions. Learn about the advantages of .NET over its competitors in the world of software development.",
      date: "2024-10-14",
      autor: "John Doe",
    },
    {
      idArticule: 2,
      title: "Java Vs .NET",
      description:
        "In the ongoing debate between Java and .NET, we dive deep into the strengths and weaknesses of both technologies. Whether you're building web apps, mobile apps, or desktop applications, choosing the right framework is crucial. This article offers a detailed comparison, helping developers make an informed decision on which platform suits their needs best.",
      date: "2024-10-14",
      autor: "Jane Smith",
    },
    {
      idArticule: 3,
      title: "Your subscription is expiring soon!",
      description:
        "Don't miss out on exclusive content and updates! Your subscription is set to expire soon. Renew now to continue enjoying premium features, including in-depth articles, tutorials, and access to our developer community. Stay up to date with the latest trends in software development by keeping your subscription active.",
      date: "2024-10-14",
      autor: "Tech News",
    },
    {
      idArticule: 4,
      title: "Next.js and React: The Perfect Match",
      description:
        "Next.js has rapidly gained popularity as the go-to framework for building React applications, providing out-of-the-box features like server-side rendering, static site generation, and easy API routes. This article explores why Next.js and React are the perfect combination for developers seeking efficiency and performance in modern web development.",
      date: "2024-10-14",
      autor: "Alice Johnson",
    },
  ];

  return (
    <>
      <main className=" mx-auto container grid grid-cols-3 p-5 bg-black gap-5">
        {articules.map((articule) => (
          <CardActicule articule={articule} key={articule.idArticule} />
        ))}
      </main>
    </>
  );
}
