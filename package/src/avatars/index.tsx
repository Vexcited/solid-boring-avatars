export { default as AvatarBeam } from "./Beam";

export interface AvatarComponentProps {
  name: string;
  title: boolean;
  size: number | string;
  square: boolean;
  colors: string[];
}
