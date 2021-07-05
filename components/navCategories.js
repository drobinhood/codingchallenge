import React, { useGlobal } from "reactn";
import Link from "next/link";

export default function NavCategories() {
  const [categories] = useGlobal("categories");

  const categoryList = categories.map((category) => {
    return <Link key={category} href={`/category/${category}`} passHref><a>{category}</a></Link>;
  });

  return <>{categoryList}</>;
}
