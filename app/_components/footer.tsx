import { Card, CardContent } from "./ui/card"

const Footer = () => {
  return (
    <Card className="rounded-none border-t border-none">
      <CardContent className="px-5 py-6">
        <p className="text-xs text-gray-400">
          © 2023 Copyright <span className="font-bold">FSW Barber</span>
        </p>
      </CardContent>
    </Card>
  )
}

export default Footer
