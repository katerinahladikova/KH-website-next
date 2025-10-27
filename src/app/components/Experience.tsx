type ExperienceProps = {
    title: string;
    subtitle: string;
};

export default function Experience({ title, subtitle }: ExperienceProps) {
    return (
        <div className="border-b border-b-gray max-w-[37.5rem]">
            <h3 className="text-inky mt-5 text-xl font-semibold">{title}</h3>
            <p className="text-darkgray uppercase text-sm font-semibold mb-5">{subtitle}</p>
        </div>
    );
}
