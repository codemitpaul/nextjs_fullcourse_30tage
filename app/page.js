import ClientKomponente from "@/components/ClientKomponente";
import ServerComponente from "@/components/ServerComponente";

export default function Home() {
  return (
    <main>
      <ServerComponente />
      <ClientKomponente />
    </main>
  );
}
