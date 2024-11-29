export default function Biography() {

    const bioData = [
        { year: "2001", description: "Гений айти появился на свет" },
        { year: "2008", description: "Поступил в школу и разнёс всё к чёртовой бабушки" },
        { year: "2018", description: "Поступил на программиста и понял что пора взламывать пентагон" },
        { year: "2022", description: "Закончил взламывать пентагон и поступил на вышку(ну типа чтобы не выделяться :) )." },
        { year: "2023", description: "Стал как и все ходить на работу. В данный момент работаю в РАНХИГС." },
    ];

    return (
        <div>
            <section className="space-y-2">
                <h2 className="text-2xl font-semibold border-b-2 pb-2">
                    Биография
                </h2>
                <ul className="">
                    {bioData.map((item, index) => (
                        <li
                            key={index}
                            className="flex space-x-4"
                        >
                            <span className="font-semibold">{item.year}</span>
                            <span>{item.description}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
};