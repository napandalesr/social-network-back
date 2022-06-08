import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;

  @Index({ unique: true })
  @Column()
    email: string;
}
