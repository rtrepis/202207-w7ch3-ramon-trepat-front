export interface ProtoRobot {
  name: string;
  image: string;
  creationDate: Date;
}

export interface Robot extends ProtoRobot {
  id: string;
}

export type Robots = Robot[];
