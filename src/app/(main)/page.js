import { redirect } from "next/dist/server/api-utils";

export default function Home() {
  const defaultRouteId = '02'
  return (
    redirect('/login')
  );
}
