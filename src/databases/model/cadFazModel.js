import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";

export class CadFazModel extends Model {
  static table = "cadFaz"

  @field("nomefaz") nomefaz
  @field("proprietario") proprietario
  @field("tipoprod") tipoprod
}
