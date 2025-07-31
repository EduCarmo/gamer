interface ProdutoItemProps {
    produto: any;
}

export default function ProdutoItem({produto}: ProdutoItemProps) {
    return (
        <div>
              <div key={produto.id} className="bg-blue-900 m-5">{JSON.stringify(produto)}</div>
        </div>
    )
}