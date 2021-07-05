import React, { useState, useEffect, useGlobal, useMemo } from "reactn";
import lunr from "lunr";
import Link from "next/link";
import Image from "next/image";
import { CgClose } from "react-icons/cg";

export default function Search() {
  const [text, setText] = useState("");
  const [products, setProducts] = useGlobal("products");
  const data = useMemo(() => products, [products]);
  const [search, setSearch] = useGlobal("search");

  console.log("data", data);
  const index = lunr(function () {
    this.field("title");
    this.field("description");
    this.field("price");

    for (let i = 0; i < data.length; i++) {
      this.add(data[i]);
    }
  });

  function searchProducts(query) {
    const result = index.search(query);

    return result.map((item) => {
      return data.find((product) => item.ref === product.id.toString());
    });
  }

  const results = searchProducts(text);

  function markup(string) {
    return { __html: `${string}` };
  }

  return (
    <div className="search">
      <div className="search-close-container">
        <CgClose onClick={() => setSearch(false)} size="1.5em" />
      </div>
      <div className="search-title">
        <h2>Search</h2>
        <input
          autoFocus
          type="text"
          placeholder="search for something fake"
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></input>
      </div>
      <ul className="search-results">
        {text !== "" ? (
          results.length !== 0 ? (
            results.map((result) => (
              <Link
                key={result.id}
                href={{ pathname: "/product/" + result.id }}
                passHref
              >
                <li
                  className="search-item"
                  key={result.id}
                  onClick={() => {
                    setSearch(false);
                  }}
                >
                  <div className="search-item-image">
                    <Image
                      src={result.image}
                      alt={result.title}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <p>
                    <div
                      dangerouslySetInnerHTML={markup(
                        result.title.replace(
                          text,
                          `<b class="highlight">${text}</b>`
                        )
                      )}
                    />
                  </p>
                  <p>
                    <div
                      dangerouslySetInnerHTML={markup(
                        result.description.replace(
                          text,
                          `<b class="highlight">${text}</b>`
                        )
                      )}
                    />
                  </p>
                </li>
              </Link>
            ))
          ) : (
            <p>
              nothing matched <b>{text}</b>, try searching for something more
              specific!
            </p>
          )
        ) : (
          <p>Try searching for something!</p>
        )}
      </ul>
    </div>
  );
}
