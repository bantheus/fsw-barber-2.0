import { MenuIcon } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex items-center justify-between p-5">
        <Image
          src="/logo.png"
          alt="logo fsw barber"
          width={130}
          height={22}
          priority
          quality={100}
          className="h-auto w-[130px] object-contain"
        />

        <Button size="icon" variant="ghost">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  )
}

export default Header
