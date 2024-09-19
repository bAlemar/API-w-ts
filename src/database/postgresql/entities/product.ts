import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number; // Código numérico

  @Column()
  name: string; // Nome do produto

  @Column('decimal')
  price: number; // Valor em reais

  @Column()
  type: string; // Tipo (roupa, eletrônico, comida, limpeza)
}
