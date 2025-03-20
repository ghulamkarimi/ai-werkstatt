"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
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
  },
  {
    name: "Entop",
    location: "Frankfurt",
    image: "/entop.jpg",
    review:
      "Hervorragende Beratung und erstklassige Leistung! Das Team von AI-Werkstatt arbeitet äußerst professionell und hat uns mit seiner Expertise überzeugt. Wir sind rundum zufrieden!",
    rating: 5,
  },
];

const CustomerReviews = () => {
  const settings = {
    infinite: true,
    speed: 2000, // Sanfterer Übergang
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000, // 7 Sekunden pro Slide
    arrows: false, // Pfeile ausblenden für ein cleaner Look
    pauseOnHover: true,
    className: "" // Pausiert beim Überfahren mit der Maus
  };

  return (
    <section className="py-16  text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 tracking-tight">
        Was unsere Kunden sagen
      </h2>
      <div className="max-w-5xl mx-auto px-6">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="w-full rounded-xl overflow-hidden px-2 hover:bg-black/5 hover:text-white transition-transform duration-300"
            >
              <CardContent className="p-8 flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="md:w-1/3 w-full flex flex-col items-start">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={60}
                    height={60}
                    className="rounded-full w-[60px] h-[60px] mb-4 border-4 border-gray-100 shadow-sm  transition-transform duration-300"
                  />
                  <p className="text-xl font-bold text-gray-800 md:text-right">
                    {review.name}
                  </p>
                  <p className="text-sm text-gray-500 md:text-right">
                    {review.location}
                  </p>
                  <div className="flex justify-center md:justify-end mt-3 text-yellow-400">
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
                </div>
                {/* Linke Seite: Review */}
                <div className="md:w-2/3 w-full">
                  <p className="text-gray-700 text-lg italic leading-relaxed text-left">
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