type QuoteProps = {
    text: string;
};

export default function Quote({ text }: QuoteProps) {
    return (
        <p
            className="m-auto text-xl md:text-4xl w-max max-w-full font-semibold text-center text-gray duration-700 transition-colors ease-in-out hover:text-inky"
            data-test="quote-text"
            dangerouslySetInnerHTML={{ __html: text }}
        ></p>
    );
}
