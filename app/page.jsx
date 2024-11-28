import dynamic from "next/dynamic";

// Убедитесь, что `false` используется вместо `False`
const Scene = dynamic(() => import("@/components/model/scene"), { ssr: false });

export default function Home() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Scene />
    </div>
  );
}