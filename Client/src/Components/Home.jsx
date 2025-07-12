import React from 'react'
import { toast,Bounce } from 'react-toastify'

const Home = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-stone-50 justify-between overflow-x-hidden"
      style={{
        fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif',
      }}
    >
      <div>
        {/* Hero Section */}
        <div className="p-4">
          <div
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-4"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)),
                url("https://lh3.googleusercontent.com/aida-public/AB6AXuCkA29XYFcIAQqaSo8Mz5ZRJd8jaqRSkZxbNe6JzYkChaG-Tixrp0FIzY-U28VtsiGo0qSqL7LevwHdrzQiQoIQYpJeT54yYnN8JlVONuQvaPBnX6yuL-9wTRFFD1XLbFJ6jHtl9eeyZJHv4Fr7mGaCQSYQ5pITJmTACZZWE62j5eiXPHSfD_4U1_DHDgrLuYA4SbDDSF2fJiPSbxfltU5dKGVTIfcStx2P9ncyWhp2BGaleRvfq6yJzHLuj0oO_M7akWYyVVWVT4HT")`,
            }}
          >
            <h1 className="text-white text-4xl font-black leading-tight tracking-tight text-center">
              ReWear: Sustainable Fashion, Shared.
            </h1>
            <div className="flex flex-wrap gap-3 justify-center">
              <button className="flex min-w-[84px] items-center justify-center rounded-full h-10 px-4 bg-[#c1cdac] text-[#151612] text-sm font-bold">
                Start Swapping
              </button>
              <button className="flex min-w-[84px] items-center justify-center rounded-full h-10 px-4 bg-[#eeefeb] text-[#151612] text-sm font-bold">
                Browse Items
              </button>
            </div>
          </div>
        </div>

        {/* Items Carousel */}
        <div className="flex overflow-x-auto hide-scrollbar p-4 gap-3">
          {[
            {
              title: "Vintage Floral Dress",
              size: "Size M",
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuC5z7qvEoUmZpRN7w6mZ587mAQZboOCB-F9eTZbNoxBuKRs90dIjrLYx3RQ7ovTkccYQH1EAuovOMMBQvhoH8ozZCGcg8aGJQOCLfYx35s83GUA3n8iIwhNx7SxlVborVWcU4v3xgZleA4wJkj3r3NsPQMvFCxZW-Jq-iYxh4SF3ioN1KrZkjOB6kACw4MvxXIp4MaFAsYdNtwZ4-eFFYX6KordYE-fwZljpdXMK5D9zbOhHB33GyIR0Dfi0BWgqmbPoZY1zKt2r5Oq",
            },
            {
              title: "Men's Casual Shirt",
              size: "Size L",
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuD6_b2ySEuU1tvPdH4EmeejX1Ii_4P51qqjv8OvQ3JOTRX4ZuhHTYq_TF8oQhndrQDdLNh985deP3hiiea32IcNeXlIGOBd-zh8HA3ZA7K9qdZkvgbIidpLsUt5gKndPJbN12His2s_zuXHSOSzPDmukUrKC2vZQlnhe9w93cjD_TmPN3sZ8naeS2IfuOfN7UwNKTqbwXr8Mm3i3QyMg0tT3P6BEd9kOgWI-uMJ3biaD_kwuj4TXx-LGvcdAmNT2Q84HFmebPi6Ka1N",
            },
            {
              title: "Designer Jeans",
              size: "Size 32",
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAZUYZPbd9c3NJSEs4x_wx2bFKZ8HFPCKGkJToAPWVBNLDbMKd48wbg-Emlt5vb7xXGakkhHDwl5tq_W9GdWWjncBfqPPjoffgZrt1ATgKFiAsNiT-D-XzkZd1obxyiACci913BQsH7UuaAFPRRbCM-Asi75H7OceOpZNcpA6ovuLa_fMMAM5edc1zCzuZtfdKr0wN4KWQ_fDj-kKqj4dwpvrvh6-Fbu4HIm5NXmqVVsk08BzdbJou1WTBW7vZWyp9wbs54lzpHVBHv",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex h-full flex-col gap-4 rounded-xl bg-stone-50 shadow-md min-w-40"
            >
              <div
                className="w-full aspect-square bg-cover bg-center bg-no-repeat rounded-xl"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="flex flex-col justify-between p-4 pt-0 gap-4">
                <div>
                  <p className="text-[#151612] text-base font-medium">
                    {item.title}
                  </p>
                  <p className="text-[#767e67] text-sm">{item.size}</p>
                </div>
                <button className="flex items-center justify-center rounded-full h-10 px-4 bg-[#eeefeb] text-[#151612] text-sm font-bold">
                  Swap
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Why Swap Section */}
        <div className="px-4 pb-6">
          <h2 className="text-[#151612] text-[22px] font-bold leading-tight tracking-tight pt-5 pb-3">
            Why Swap?
          </h2>
          <p className="text-[#151612] text-base font-normal leading-normal">
            Swapping clothes is a fun and eco-friendly way to refresh your
            wardrobe without contributing to textile waste. Join our community
            and discover new styles while reducing your environmental impact.
          </p>
        </div>
      </div>

      {/* Footer Spacer */}
      <div className="h-5 bg-stone-50"></div>
    </div>
  )
}

export default Home
