import type { BarberShop } from "@prisma/client"
import { StarIcon } from "lucide-react"
import Image from "next/image"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

interface IBarbershopItemProps {
  barbershop: BarberShop
}

const BarbershopItem = ({ barbershop }: IBarbershopItemProps) => {
  return (
    <Card className="min-w-44 rounded-2xl">
      <CardContent className="p-0 px-2 pt-2">
        <div className="relative h-40 w-full">
          <Image
            src={barbershop.imageUrl}
            alt={barbershop.name}
            fill
            sizes="100vw"
            quality={100}
            className="rounded-lg object-cover shadow-md"
          />

          <Badge className="absolute left-2 top-2 flex items-center gap-x-1 bg-primary/30 backdrop-blur-sm">
            <StarIcon size={12} className="fill-yellow-500 text-yellow-500" />
            <p>5</p>
          </Badge>
        </div>

        <div className="px-1 py-2">
          <h3 className="truncate font-semibold">{barbershop.name}</h3>
          <p className="truncate text-sm text-gray-400">{barbershop.address}</p>
          <Button variant="secondary" className="mt-3 w-full rounded-lg">
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default BarbershopItem
