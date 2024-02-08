'use client';

import { IonContent, IonItem, IonPage } from "@ionic/react";
import axios from "axios";
import { useEffect, useState } from "react";

const ProductPage = () => {

    const [ products, setProducts ] = useState<any>([]);

    useEffect(() => {
        getProducts()
    },[])

    const getProducts =  () => {
        axios.get('/products/api').then((res) => {
            setProducts(res.data)
        });
    }
  return (
    <IonPage>
        <IonContent>
            {
                products.map((item:any, index:number) => (
                    <IonItem key={index}>{item?.name}</IonItem>
                ))
            }
        </IonContent>
    </IonPage>
  );
}

export default ProductPage;
