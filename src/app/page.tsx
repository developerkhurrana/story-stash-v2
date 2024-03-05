import { fetchBooks } from "@/api/Index";
import Homepage from "@/pages/homepage/Homepage";

export default async function Home() {
  const randomBooks = await fetchBooks;

  console.log(randomBooks);

  return (
    <>
      <Homepage />
    </>
  );
}
