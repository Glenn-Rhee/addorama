export function getMessageShare(
  productName: string,
  productPrice: number,
  productLink: string,
  shareTo: "whatsapp" | "facebook" | "telegram"
) {
  const links = {
    whatsapp: "https://wa.me/?text=",
    facebook: "https://www.facebook.com/sharer/sharer.php?u=",
    telegram: "https://t.me/share/url?url=",
  };
  const msg = `Temukan ${productName} seharga Rp${productPrice.toLocaleString(
    "id-ID"
  )}. Dapatkan sekarang juga di Addorama! ${productLink}`;

  const encodedMsg = encodeURIComponent(msg.trim());
  const encodeLink = encodeURIComponent(productLink);
  let link = links[shareTo as keyof typeof links];

  switch (shareTo) {
    case "whatsapp":
      link += encodedMsg;
      break;
    case "facebook":
      link += encodeLink;
      break;
    case "telegram":
      link += `${encodeLink}&text=${encodedMsg}`;
      break;
  }

  return link;
}
