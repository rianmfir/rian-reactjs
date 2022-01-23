import React from "react";
import { Photo } from "../../assets";
import '../index.css'

const Hero = () => {

    return (
        <div className="py-3 my-5" >
            <div className="container text-white">
                <div className="row justify-content-center">
                    <div className="col-md-5 my-5 me-5">
                        <h2 className="mb-3 fw-bold">Rian Muhammad Firdaus</h2>
                        <p>
                            Halo perkenalkan nama saya Rian Muhammad Firdaus, saat ini saya sedang mengikuti program pelatihan Fullstack Javascript(MERN) di Eduwork.id. Selain sedang mengikuti program pelatihan, keseharian saya saat ini juga sebagai
                            seorang freelancer sebagai penata letak/layouter buku di beberapa penerbit/percetakan dan lembaga yang ada di Indonesia.
                        </p>
                    </div>
                    <div className="col-md-5 d-flex justify-content-center">
                        <img src={Photo} alt="" className="img-fluid border-white slide-out-up" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero