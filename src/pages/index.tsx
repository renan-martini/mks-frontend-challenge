"use client";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { fetchProducts } from "@/slices/products.slice";
import { AppDispatch, RootState } from "@/store/store";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { ProductsList } from "@/components/ProductsList";
import { Footer } from "@/components/Footer";
import { getCart } from "@/slices/cart.slice";

export default function Home() {
  const productsRef = useRef(false);
  const cartRef = useRef(false);
  const { products, loading } = useSelector(
    (state: RootState) => state.products
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!cartRef.current) {
      dispatch(getCart());
    }

    return () => {
      cartRef.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (productsRef.current === false) {
      dispatch(fetchProducts());
    }

    return () => {
      productsRef.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Head>
        <title>MKS Sistemas</title>
        <meta
          name="description"
          content="Loja de produtos eletrônicos MKS Sistemas"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="apple, iphone, apple watch, jbl, speaker, relogio, macbook, earbuds"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main>
        <ProductsList products={products} loading={loading} />
      </Main>
      <Footer />
    </>
  );
}
