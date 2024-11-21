import Image from "next/image";
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <div className=""
    >
      <a href="https://theopencommunity.vercel.app/" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="grid grid-rows-[20px_1fr_20px] items-center bg-contain bg-no-repeat bg-center relative justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]"
          style={{ backgroundImage: "url('/intro.png')"}}
        >
          <Analytics />
          <div className="relative z-10 text-center px-4">
          </div>
          <script
            src="https://topmate-embed.s3.ap-south-1.amazonaws.com/v1/topmate-embed.js"
            user-profile="https://topmate.io/embed/profile/abdibrokhim?theme=D5534D"
            btn-style='{"backgroundColor":"#fff","color":"#000","border":"1px solid #000"}'
            embed-version="v1"
            button-text="Book a call"
            custom-padding="0px"
            custom-font-size="16px"
            custom-font-weight="500"
            custom-width="200px"
          ></script>
        </div>
      </a>
    </div>
  );
}
