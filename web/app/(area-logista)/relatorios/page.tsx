"use client";

import React from "react";
import { useRelatoriosBreadcrumb } from "@/src/application/core/hooks/useBreadcrumb";

function RelatoriosPage() {
  useRelatoriosBreadcrumb();

  return (
    <div>
      <h1>Relatórios</h1>
    </div>
  );
}

export default RelatoriosPage;
