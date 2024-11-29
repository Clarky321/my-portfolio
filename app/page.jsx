import dynamic from "next/dynamic";
const Scene = dynamic(() => import("@/components/model/Scene"), { ssr: false });

import { Button } from "@/components/ui/button";
import { HiDownload } from "react-icons/hi"
import Avatars from "@/components/homepage/Avatars";
import Socail from "@/components/homepage/Social";
import Biography from "@/components/homepage/Biography";


{/* 
    <div style={{ width: "100%", height: "100vh" }}>
      <Scene />
    </div>
*/}

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full py-8">

        <div style={{ width: "100%", height: "50vh" }}>
          {/* 3D модель */}
          <Scene />
        </div>

        {/* Заголовок с аватаром */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-3xl font-semibold">Рябов Сергей Дмитриевич</h1>
            <h2 className="text-lg md:text-xl">Мастер фломастер</h2>
          </div>
          <Avatars />
        </div>

        {/* Раздел "О себе" */}
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold border-b-2 pb-2">
            О себе
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptas hic dolores recusandae iste obcaecati voluptate ipsam doloremque debitis veniam ducimus rem, incidunt sapiente expedita, maiores omnis, quia aut vero!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eaque dolorem delectus beatae earum molestiae reiciendis, neque nemo eos, incidunt nihil, soluta itaque obcaecati amet eligendi sed voluptatum! Quis, tempore?
          </p>

          <div className="flex flex-col xl:flex-row items-center gap-8">
            {/* Кнопка "Скачать резюме" */}
            <Button
              variant="outline"
              className="flex items-center gap-2 ">
              <span>Скачать резюме</span>
              <HiDownload className="text-xl" />
            </Button>

            <div className="mb-8 xl:mb-0">
              {/* Cоциальные иконки */}
              <Socail
                containerStyle="flex gap-6"
                iconStyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              />
            </div>

            <div className="">
              <Biography />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};