export class Postage {
  static getUrlCountPostage(
    shipper_destination_id: string,
    receiver_destination_id: string,
    weight: number,
    item_value: number
  ): string {
    const url =
      "https://api-sandbox.collaborator.komerce.id/tariff/api/v1/calculate";
    const idPengirim = `shipper_destination_id=${shipper_destination_id}`;
    const idPenerima = `receiver_destination_id=${receiver_destination_id}`;
    const beratBarang = `weight=${weight}`;
    const hargaBarang = `item_value=${item_value}`;
    const query = `?${idPengirim}&${idPenerima}&${beratBarang}&${hargaBarang}`;

    return url + query;
  }
}
