type ExperienceProps = {
    title: string;
    subtitle: string;
};

export default function Experience({ title, subtitle }: ExperienceProps) {
    return (
        <div className="border-b border-b-gray max-w-[37.5rem]" data-test="experience-item">
            <h3 className="text-inky mt-5 text-xl font-semibold" data-test="experience-title">
                {title}
            </h3>
            <p className="text-darkgray uppercase text-sm font-semibold mb-5" data-test="experience-subtitle">
                {subtitle}
            </p>
        </div>
    );
}
