import { useRouter } from "next/router";

export default function PhysicianProfile() {
  const router = useRouter();
  return (
    <main>
      <h1>Profile: {router.query.slug}</h1>
    </main>
  );
}
