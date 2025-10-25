type QuoteProps = {
    text: string;
};

export default function Quote({ text }: QuoteProps) {
    return <p className="m-auto text-4xl w-max font-semibold text-center text-gray duration-700 transition-colors ease-in-out hover:text-inky">{text}</p>;
}
