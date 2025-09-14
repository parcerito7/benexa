// /workspaces/benexa/benexa-web/src/app/ayudas-nuevas/page.tsx
import AyudasNuevasClient from "./AyudasNuevasClient";

export const metadata = {
  title: "Ayudas nuevas | Benexa",
  description: "Resumen humano de las ayudas recién publicadas, con avisos y buscador.",
};

export default function AyudasNuevasPage() {
  return <AyudasNuevasClient />;
}
