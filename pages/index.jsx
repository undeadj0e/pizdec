import dynamic from "next/dynamic";

const ConnectButton = dynamic(
  () => import("thirdweb/react").then((mod) => mod.ConnectButton),
  { ssr: false }
);

export default function Home() {
  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <ConnectButton />
    </div>
  );
}
