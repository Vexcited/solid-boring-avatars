export { default as AvatarBeam } from "./Beam";

export interface AvatarProps {
  name: string;
  title?: string;
  size?: number | string;
  square?: boolean;
  colors: string[];
}
