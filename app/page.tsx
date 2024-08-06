import { SearchIcon } from "lucide-react"
import Image from "next/image"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"

export default function Home() {
  return (
    <>
      <Header />

      <div className="p-5">
        <h2 className="text-xl">
          Olá, <span className="font-bold">Matheus!</span>{" "}
        </h2>
        <p className="text-sm">Terça-feira, 06 de agosto.</p>

        <div className="mt-6 flex items-center gap-x-2">
          <Input placeholder="Faça sua busca..." className="bg-card" />
          <Button>
            <SearchIcon size={20} />
          </Button>
        </div>

        <div className="relative mt-6 h-[200px] w-full">
          <Image
            src="/banner.svg"
            alt="agende nos melhores com fsw barber"
            fill
            quality={100}
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </>
  )
}
