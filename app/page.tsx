import { SearchIcon } from "lucide-react"
import Image from "next/image"
import BarbershopItem from "./_components/barbershop-item"
import Header from "./_components/header"
import Title from "./_components/title"
import { Avatar, AvatarFallback, AvatarImage } from "./_components/ui/avatar"
import { Badge } from "./_components/ui/badge"
import { Button } from "./_components/ui/button"
import { Card, CardContent } from "./_components/ui/card"
import { Input } from "./_components/ui/input"
import { db } from "./_lib/prisma"

export default async function Home() {
  const baberShops = await db.barberShop.findMany({})
  const popularBarberShops = await db.barberShop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  return (
    <>
      <Header />

      <div className="p-5">
        <h2 className="text-xl">
          Olá, <span className="font-bold">Matheus!</span>
        </h2>
        <p className="text-sm">Terça-feira, 06 de agosto.</p>

        <div className="mt-6 flex items-center gap-x-2">
          <Input placeholder="Faça sua busca..." className="bg-card" />
          <Button>
            <SearchIcon size={20} />
          </Button>
        </div>

        <div className="relative mt-2 h-48 w-full">
          <Image
            src="/banner.svg"
            alt="agende nos melhores com fsw barber"
            fill
            quality={100}
            className="rounded-xl object-contain"
          />
        </div>

        <div className="mb-3 mt-6">
          <Title text="agendamentos" />
        </div>

        <Card>
          <CardContent className="flex justify-between p-0">
            {/* esquerda */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="size-6">
                  <AvatarImage src="https://utfs.io/f/178da6b6-6f9a-424a-be9d-a2feb476eb36-16t.png" />
                  <AvatarFallback>MS</AvatarFallback>
                </Avatar>

                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>

            {/* direita */}
            <div className="flex flex-col items-center justify-center gap-2 border-l border-solid px-5 py-5">
              <p className="text-sm">agosto</p>
              <p className="text-2xl">07</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>

        <div className="mb-3 mt-6">
          <Title text="Recomendados" />
        </div>
      </div>

      <div className="flex gap-4 overflow-auto px-5 [&::-webkit-scrollbar]:hidden">
        {baberShops.map((barbershop) => (
          <BarbershopItem key={barbershop.id} barbershop={barbershop} />
        ))}
      </div>

      <div className="p-5">
        <div className="mb-3 mt-6">
          <Title text="Populares" />
        </div>
      </div>

      <div className="flex gap-4 overflow-auto px-5 [&::-webkit-scrollbar]:hidden">
        {popularBarberShops.map((barbershop) => (
          <BarbershopItem key={barbershop.id} barbershop={barbershop} />
        ))}
      </div>
    </>
  )
}
