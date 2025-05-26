"use client";

import { useEffect } from "react";

const INSTAGRAM_SCRIPT_ID = "instagram-embed-script";

export default function Home() {
  useEffect(() => {
    // Check if script is already present
    if (!document.getElementById(INSTAGRAM_SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = INSTAGRAM_SCRIPT_ID;
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
      script.onload = () => {
        // Once loaded, parse embeds
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      };
    } else {
      // Script already loaded, just re-process embeds
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    }
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="bg-amber-50 py-10 px-6 text-center">
        <h1 className="text-4xl font-bold mb-2">Wicks & Wax</h1>
        <p className="text-lg text-gray-600">Hand-poured candles that spark joy ✨</p>
      </section>

      <section className="py-12 px-6">
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <blockquote 
                class="instagram-media" 
                data-instgrm-captioned 
                data-instgrm-permalink="https://www.instagram.com/p/DH3gQGRT-EF/?utm_source=ig_embed&utm_campaign=loading" 
                data-instgrm-version="14" 
                style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px auto; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"
              >
                <a href="https://www.instagram.com/p/DH3gQGRT-EF/?utm_source=ig_embed&utm_campaign=loading" target="_blank" rel="noreferrer noopener">
                  View this post on Instagram
                </a>
              </blockquote>
            `,
          }}
        />
      </section>

      <section className="py-12 px-6">
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <blockquote 
                class="instagram-media" 
                data-instgrm-captioned 
                data-instgrm-permalink="https://www.instagram.com/p/DJZMWSSzFp4/?utm_source=ig_embed&utm_campaign=loading" 
                data-instgrm-version="14" 
                style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px auto; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"
              >
                <a href="https://www.instagram.com/p/DJZMWSSzFp4/?utm_source=ig_embed&utm_campaign=loading" target="_blank" rel="noreferrer noopener">
                  View this post on Instagram
                </a>
              </blockquote>
            `,
          }}
        />
      </section>
    </main>
  );
}
