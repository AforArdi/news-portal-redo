import { redirect } from "next/navigation";

export default function Home() {
  const defaultRouteId = '02'
  return (
    redirect(`/category/${defaultRouteId}`)
  );
}
