interface ITitle {
  text: string
}

const Title = ({ text }: ITitle) => {
  return <h2 className="text-xs font-bold uppercase text-gray-400">{text}</h2>
}

export default Title
