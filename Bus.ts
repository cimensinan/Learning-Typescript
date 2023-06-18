import { Vehicle } from "./Vehicle";
import { Point } from "./Point";

// Bus'ın üzerine gelip implement etmek için küçük uyarılara bastığımızda alt taraftaki travelTo metodu otomatik gelir.
export class Bus implements Vehicle {
  travelTo(point: Point): void {
    throw new Error("Method not implemented.");
  }
}
