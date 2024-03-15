import Card from "./components/Card";
import { features } from "./constants/features";

export default function App () {
  return (
    <main className="bg-[rgb(27_27_31)] h-screen text-neutral-100 px-10 inter">
      <header className=" flex flex-col-reverse lg:grid grid-cols-[60%_40%] max-w-screen-xl mx-auto w-full">
        <div className="pt-10 flex flex-col gap-4">
          <h1 className="text-[32px] lg:text-[52px] leading-10 lg:leading-[60px]  font-bold text-center lg:text-left">
            <span className="bg-gradient-to-br from-blue-400 to-purple-600 text-transparent bg-clip-text">Vite</span> 
            <br />
            Next Generation 
            <br/>
            Frontend Tooling
          </h1>
          <p className="text-2xl text-neutral-50/50">
          Get ready for a development environment that can finally catch up with you.
          </p>
          <div>
            b
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img 
          src="https://vitejs.dev/logo-with-shadow.png"
          alt="vite logo"
          className="size-40"
          />
        </div>  
      </header> 

      <section className=" grid grid-cols-3 gap-4 max-w-screen-xl mx-auto w-full">
        {/*Lis rendering*/}
        {
          features.map((feature, index) => {
            return (
              <Card
                key={`feature-${index}`}
                emoji={feature.emoji}
                feature={feature.feature}
                description={feature.description}
                isNew={feature.isNew}
              />
            )
          })
        }
      </section>
    </main>
  )
}