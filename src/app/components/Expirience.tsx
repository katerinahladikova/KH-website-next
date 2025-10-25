type experienceProps = {
    title: string;
    subtitle: string;
    button: string;
};

export default function Expirience({ title, subtitle, button }: experienceProps) {
    return (
        <div className="border-b-gray max-w-[37.5rem]">
            <h3>{title}</h3>
            <p>{subtitle}</p>
            <button>{button}</button>
        </div>
    );
}
