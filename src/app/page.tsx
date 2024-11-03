import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p className="">{`i'm cookin'`}, stay tuned...</p>
      <p className="">meanwhile, <a href="https://topmate.io/join/abdibrokhim" className="underline text-bold" target="_blank">join topmate.io using this link</a> and get exclusive offers from me!</p>
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
  );
}
