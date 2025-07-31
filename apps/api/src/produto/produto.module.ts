import { Module } from '@nestjs/common';
import { Produto } from './produto';
import { ProdutoController } from './produto.controller';

@Module({
  providers: [Produto],
  controllers: [ProdutoController]
})
export class ProdutoModule {}
