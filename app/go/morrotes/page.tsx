import { redirect } from "next/navigation";

export default function GoMorrotes() {
  const number = "5548974008106";
  const message = "Olá! Vim pelo site e gostaria de mais informações. (Unidade Morrotes)";
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  
  redirect(url);
}
