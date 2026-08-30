import { redirect } from "next/navigation";

export default function GoKm60() {
  const number = "5548991565677";
  const message = "Olá! Vim pelo site e gostaria de mais informações. (Unidade KM 60)";
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  
  redirect(url);
}
