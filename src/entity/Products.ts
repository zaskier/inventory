import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  Name: string

  // @Column({ nullable: true })
  // RawgID: number

  @Column({ nullable: true })
  Category: string

  @Column({ nullable: true })
  Promotion: boolean

  @Column({ nullable: true })
  InStock: number

  @Column({ nullable: true })
  OriginalCost: number

  @Column({ nullable: true })
  DiscountedCost: number

  // @Column({ nullable: true })
  // Vendor: string

  // @Column({ nullable: true })
  // Description: string

  // @Column({ nullable: true })
  // Tags: string
}
