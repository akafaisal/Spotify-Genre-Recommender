"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

// --- Type Definitions ---
interface SpotifyController {
  play: () => Promise<void>;
  loadUri: (uri: string) => void;
  addListener: (event: string, cb: () => void) => void;
  removeListener?: (event: string) => void;
  destroy?: () => void;
}

interface SpotifyIframeApi {
  createController: (
    element: HTMLElement,
    options: {
      uri: string;
      width: string;
      height: string;
      theme?: string;
    },
    callback: (controller: SpotifyController) => void
  ) => SpotifyController | void;
}

declare global {
  interface Window {
    SpotifyIframeApi?: SpotifyIframeApi;
    onSpotifyIframeApiReady?: (api: SpotifyIframeApi) => void;
  }
}

export default function SpotifyEmbed({ uri }: { uri: string }) {
  const embedRef = useRef<HTMLDivElement>(null);
  const controllerRef = useRef<SpotifyController | null>(null);
  const [iFrameAPI, setIFrameAPI] = useState<SpotifyIframeApi | null>(null);
  const [playerLoaded, setPlayerLoaded] = useState(false);
  const [showSpinner, setShowSpinner] = useState(true);

  // --- Load Spotify IFrame API ---
  useEffect(() => {
    if (document.getElementById("spotify-iframe-api")) return;

    const script = document.createElement("script");
    script.id = "spotify-iframe-api";
    script.src = "https://open.spotify.com/embed/iframe-api/v1";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // --- Initialize API ---
  useEffect(() => {
    if (iFrameAPI) return;

    const checkApi = () => {
      if (window.SpotifyIframeApi) {
        setIFrameAPI(window.SpotifyIframeApi);
      } else {
        window.onSpotifyIframeApiReady = (api: SpotifyIframeApi) => {
          setIFrameAPI(api);
        };
      }
    };

    checkApi();
  }, [iFrameAPI]);

  // --- Create controller once ---
  useEffect(() => {
    if (!iFrameAPI || controllerRef.current || !embedRef.current) return;

    const timeout = setTimeout(() => setPlayerLoaded(true), 5000);

    return () => {
      clearTimeout(timeout);
      controllerRef.current?.removeListener?.("playback_update");
      controllerRef.current?.destroy?.();
    };
  }, [iFrameAPI, uri]);

  // --- Update track when URI changes ---
  useEffect(() => {
    if (!controllerRef.current || !uri) return;

    try {
      controllerRef.current.loadUri(uri);
      setPlayerLoaded(false);
      controllerRef.current
        .play()
        .catch((err: unknown) => console.warn("Autoplay failed:", err));
    } catch (err) {
      console.error("Failed to load URI:", err);
    }
  }, [uri]);

  // --- Hide spinner after player load ---
  useEffect(() => {
    if (playerLoaded) {
      const timer = setTimeout(() => setShowSpinner(false), 2000);
      return () => clearTimeout(timer);
    } else {
      setShowSpinner(true);
    }
  }, [playerLoaded]);

  return (
    <div className="w-full h-[80px] overflow-hidden rounded-xl relative">
      <div ref={embedRef} />

      {showSpinner && (
        <div
          className={`absolute inset-0 flex items-center justify-center border-8 border-black w-full bg-black transition-opacity duration-500 ${
            playerLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div className="flex flex-col items-center">
            <Image
              src="/favicon.ico"
              alt="Logo image"
              width={32}
              height={32}
              className="animate-bounce rounded-2xl mb-[-12]"
            />
            <p className="text-white font-honk mt-2">Loading your Jam...</p>
          </div>
        </div>
      )}

      <style jsx>{`
        iframe {
          border: none;
          overflow: hidden !important;
        }
      `}</style>
    </div>
  );
}
