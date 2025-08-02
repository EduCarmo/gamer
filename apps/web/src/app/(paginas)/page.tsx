"use client";
import ListaProdutos from "@/components/produto/ListaProdutos";
import ProdutoItem from "@/components/produto/ProdutoItem";
import { Produto } from "@gstore/core";
import { useEffect, useState } from "react";

export default function Home() {
  
  return (
    <div className="flex flex-1 flex-col container gap-5 py-10">
      <ListaProdutos />
    </div>
  );
}
