import Link from "next/link";
import { useTranslation } from "../i18n";

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng);
  return (
    <>
      <h1 className="text-5xl">{t("title")}</h1>
    </>
  );
}
