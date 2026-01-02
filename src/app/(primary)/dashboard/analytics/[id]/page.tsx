"use client";
import { Statistiques } from "@app/types/types";
import { useEffect, useState } from "react";

const AnalyticsCompanyPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const [stat, setCompany] = useState<Statistiques[]>();
  const [error, setError] = useState();
  const urlParams = params;

  useEffect(() => {
    urlParams.then((param) => {
      fetch(`/api/analytics/${param.id}`, {
        cache: "no-store",
      })
        .then((res) => res.json())
        .then((data: Statistiques[]) => {
          setCompany(data);
        })
        .catch((e) => {
          setError(e);
        });
    });
  }, [urlParams]);

  return (
    <>
      <div>My personal list ====== stat detail</div>
      <div>{error && <code>{error}</code>}</div>
      <div>
        {(stat &&
          stat.map((e) => (
            <div key={e.age}>
              gender: {e.gender} - age: {e.age} - from: {e.country}
            </div>
          ))) ||
          "Loading..."}
      </div>
    </>
  );
};

export default AnalyticsCompanyPage;
