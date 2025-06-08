import EmptyCart from "@/components/cartpage/EmptyCart";
import FilledCart from "@/components/cartpage/FilledCart";
import Container from "@/components/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart | Addroma Shop",
  description: "Your cart in Addroma Shop",
};

export default async function CartPage() {
  const isEmpty = true;
  return (
    <Container className="lg:px-20 md:px-[70px] px-6 mb-[80px] overflow-visible">
      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
}
