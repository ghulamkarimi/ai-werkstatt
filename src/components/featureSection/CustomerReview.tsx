"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, CheckCircle } from "lucide-react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: "A & O Autoservice",
    location: "Sprendlingen",
    image: "/logo.png",
    review:
      "Dank dieser Plattform können wir unsere Werkstatt jetzt viel effizienter verwalten. Die Online-Terminbuchung funktioniert reibungslos, und wir können unsere Abläufe im Voraus planen. Eine echte Erleichterung für unseren Alltag",
    rating: 5,
    date: "März 2025",
    category: "Online-Terminbuchung",
    verified: true,
  },
  {
    name: "Entop",
    location: "Frankfurt",
    image: "/entop.jpg",
    review:
      "Hervorragende Beratung und erstklassige Leistung! Das Team von AI-Werkstatt arbeitet äußerst professionell und hat uns mit seiner Expertise überzeugt. Wir sind rundum zufrieden!",
    rating: 5,
    date: "Februar 2025",
    category: "Beratung & Support",
    verified: true,
  },
];

const CustomerReviews = () => {
  const settings = {
    infinite: true,
    speed: 4000, 
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000, 
    arrows: false,
    pauseOnHover: true,
    
  };

  return (
    <section className="py-16 text-center">
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-12 tracking-tight">
        Zufriedene Kunden sprechen für uns
      </h2>
      <div className="max-w-5xl mx-auto px-6">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="w-full rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 min-h-[300px] md:min-h-[250px]"
            >
              <CardContent className="p-8 flex flex-col md:flex-row items-center md:items-start gap-6 h-full">
                {/* Linke Seite: Details */}
                <div className="md:w-1/3 w-full flex flex-col items-start">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={60}
                    height={60}
                    className="rounded-full w-[60px] h-[60px] mb-4 border-4 border-gray-300 shadow-sm transition-transform duration-300 hover:scale-105"
                  />
                  <p className="text-xl font-bold text-gray-800">
                    {review.name}
                  </p>
                  <p className="text-sm text-gray-500">{review.location}</p>
                  <div className="flex mt-3 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={22}
                        fill={i < review.rating ? "currentColor" : "none"}
                        stroke={i < review.rating ? "none" : "currentColor"}
                        className="transition-colors duration-200"
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-2">{review.date}</p>
                  {review.verified && (
                    <span className="flex items-center gap-1 text-green-500 text-sm mt-1">
                      <CheckCircle size={14} />
                      Verifizierter Kunde
                    </span>
                  )}
                </div>
                {/* Rechte Seite: Review */}
                <div className="md:w-2/3 w-full flex flex-col justify-center">
                  <p className="text-gray-500 text-sm font-medium mb-2">
                    {review.category}
                  </p>
                  <p className="text-gray-700 lg:text-lg italic leading-relaxed text-left min-h-[210px] overflow-y-auto">
                    "{review.review}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </Slider>
      </div>

    
    </section>
  );
};

export default CustomerReviews;