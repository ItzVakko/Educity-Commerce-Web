"use client";

import React, { useEffect, useState } from "react";
import NavBar from "@/app/Components/GlobalComponents/NavBar";
import Footer from "@/app/Components/GlobalComponents/Footer";
import CryptoJS from "crypto-js";
import ClothesDetailsChoose from "./ClothesDetailsChoose";

const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY;

const ClothesDetailsPage = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const decryptId = (id) => {
    try {
      const bytes = CryptoJS.AES.decrypt(decodeURIComponent(id), SECRET_KEY);
      return bytes.toString(CryptoJS.enc.Utf8);
    } catch {
      return null;
    }
  };

  const fetchProduct = async (id) => {
    try {
      const res = await fetch(`/api/clothes`);
      const data = await res.json();
      setProduct(data.find((item) => item._id === id) || null);
    } catch {
      setProduct(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const encryptedId = window.location.pathname.split("/").pop();
    const id = encryptedId ? decryptId(encryptedId) : null;
    if (id) fetchProduct(id);
    else setLoading(false);
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {loading ? (
          <div>Loading...</div>
        ) : product ? (
          <>
            <ClothesDetailsChoose product={product} />
          </>
        ) : (
          <div>No product found</div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default ClothesDetailsPage;
