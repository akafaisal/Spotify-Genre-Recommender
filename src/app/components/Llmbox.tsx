import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import axios from "axios";
import { TbInputSpark } from "react-icons/tb";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function Llmbox({ mood }: { mood: string }) {
  const [loading, setLoading] = useState(false);
  const [reply, setReply] = useState("");

  async function sendMessage() {
    setLoading(true);
    const res = await axios.post("/api/llm", {
      message: `What music genre is ${mood} in 120 words only no exceed , dont write word count at end`,
    });

    setReply(res.data.reply);
    setLoading(false);
  }

  return (
    <>
      <Popover
        onOpenChange={(open) => {
          if (!open) setReply("");
        }}
      >
        <PopoverTrigger>
          <div className="ml-2 mb-1.5 hover:scale-110 hover:rotate-2 transition-transform cursor-pointer">
            <TbInputSpark size={35} onClick={sendMessage} />
          </div>
        </PopoverTrigger>
        <PopoverContent className="font-semibold p-5 pb-6  w-90 bg-black text-white">
          <div>
            What genre is{" "}
            <span className="font-honk italic text-xl rounded-xl pl-2 pr-2 border ">
              {" "}
              {mood} ?
            </span>
            {loading && (
              <p className="animate-pulse">Revealing its secrets...</p>
            )}
            {reply && <ReactMarkdown>{reply}</ReactMarkdown>}
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
}
