import { Produto } from "@gstore/core";

interface ProdutoItemProps {
  produto: Produto;
}

export default function ProdutoItem({ produto }: ProdutoItemProps) {
  return (
    <div>
      <div key={produto.id} className="bg-blue-900 m-5">
        {produto.nome}, {produto.marca}
      </div>
    </div>
  );
}
