import Image from "next/image";
import calendar from "/public/calendar.png";

function Program() {
  return (
    <div className="col-span-full col-start-7 row-start-2 ml-[112px] -translate-y-24">
      <aside className="sticky top-0 bg-main-grey-100 ps-16 pt-40">
        <h2 className="mb-12 text-[27px] font-bold leading-10 text-main-grey">
          Програма
        </h2>
        <article className="mb-8 flex flex-col">
          <div className="flex gap-4">
            <Image src={calendar} alt="Икона" className="h-9 w-8" />
            <div className="font-bold">
              <p className="text-[15px] opacity-30">1 ден (11.03.20)</p>
              <p className="text-lg">София – Акаба</p>
            </div>
          </div>
          <div className="border-main-grey-300 ml-4 w-[50%] border-l ps-8 pt-6">
            <p className="text-sm leading-[25px]">
              Среща на летище София, Терминал 2 в 14.30 часа Директен полет на
              Ryan air до Йордания-Акаба в 16.35 часа. Пристигане на летище Кинг
              Хюсиен, преминаваме митнически и гранични процедури.
            </p>
            <p className="text-sm leading-[25px]">
              Трансфер към хотела, разположен в залива Tala Bay - най-
              престижния курорт в близост до гр. Акаба, известен със своите
              пясъчни, девствени плажове и едни от най-красивите коралови рифове
              на Червено море.
            </p>
            <p className="text-sm leading-[25px]">
              Настаняване в хотел Tala Bay Resort(ex Radisson BLU
            </p>
            <p className="text-sm leading-[25px]">
              5*{" "}
              <a href="#" className="font-bold text-[#0085FF] underline">
                http://talabay.net/hotel/tala-bay-resort/
              </a>{" "}
              на база полупансион.
            </p>
            <p className="text-sm leading-[25px]">Вечеря. Нощувка.</p>
          </div>
        </article>
        <article className="mb-8 flex flex-col">
          <div className="flex gap-4">
            <Image src={calendar} alt="Икона" className="h-9 w-8" />
            <div className="font-bold">
              <p className="text-[15px] opacity-30">2 ден (12.03.20)</p>
              <p className="w-[85%] text-lg">
                Акаба - Мъртво море - Мадаба - Небо - Акаба
              </p>
            </div>
          </div>
          <div className="border-main-grey-300 ml-4 border-l ps-8 pt-6 text-sm leading-[25px]">
            <p className="w-[37%]">
              Закуска. Свободно време. По желание срещу доплащане - Екскурзия до
              Мъртво море - Мадаба - планината Небо.
            </p>
            <p className="w-[50%]">
              Целодневно пътуване до най-ниската точка на земното кълбо,
              разположена на 420 м под морското равнище – Мъртво море. Цена - 90
              евро с включен обяд.
            </p>
            <p>Вечеря. Нощувка.</p>
          </div>
        </article>
        <article className="mb-8 flex flex-col">
          <div className="flex gap-4">
            <Image src={calendar} alt="Икона" className="h-9 w-8" />
            <div className="font-bold">
              <p className="text-[15px] opacity-30">3 ден (13.03.20)</p>
              <p className="text-lg">Акаба – Вади Рум – Акаба</p>
            </div>
          </div>
          <div className="border-main-grey-300 ml-4 w-[50%] border-l ps-8 pt-6 text-sm leading-[25px]">
            <p className="">Закуска. Свободно време.</p>
            <p className="">
              По желание срещу доплащане - Екскурзия до пустинята Вади Рум. С
              автобус и джип сафари, което ще ви отведе до пустинята на едно
              недокоснато от човешката ръка място.
            </p>
            <p className="">
              Цена - 80 евро с включена вечеря в пустинен оазис. Нощувка.
            </p>
          </div>
        </article>
        <article className="mb-8 flex flex-col">
          <div className="flex gap-4">
            <Image src={calendar} alt="Икона" className="h-9 w-8" />
            <div className="font-bold">
              <p className="text-[15px] opacity-30">4 ден (14.03.20)</p>
              <p className="text-lg">Акаба – Петра – Акаба</p>
            </div>
          </div>
          <div className="border-main-grey-300 ml-4 w-[52%] border-l ps-8 pt-6 text-sm leading-[25px]">
            <p>Закуска</p>
            <p>По желание срещу доплащане - Екскурзия до Петра.</p>
            <p>
              Градът е включен в листата на новите Седем чудеса на света на
              ЮНЕСКО.
            </p>
            <p>
              Открит е случайно през 1812 г. от швейцарския пътешественик
              Буркхард. Преди се е наричал “Изгубеният град” и е бил известен
              само на бедуините. До него се стига след като се прекоси пустинята
              и се мине през стръмен каньон, дълъг над 1 км, със стени високи
              около 200 м, наречен Сик. След това пред погледа ни се открива
              смайващата 50 метрова Съкровищница, наречена Ал-Каснех Фарун,
              позната ни от филма “Индиана Джонс”, в която се счита също, че е
              скрит Светия Граал.
            </p>
            <p>Цена - 130 евро с включен обяд Вечеря. Нощувка.</p>
          </div>
        </article>
        <article className="mb-20 flex flex-col">
          <div className="flex gap-4">
            <Image src={calendar} alt="Икона" className="h-9 w-8" />
            <div className="font-bold">
              <p className="text-[15px] opacity-30">5 ден (15.03.20)</p>
              <p className="text-lg">Акаба – София</p>
            </div>
          </div>
          <div className="ml-4 w-[52%] ps-8 pt-6 text-sm leading-[25px]">
            <p className="mb-6">
              Закуска. Свободно време. Късно освобождаване на стаите.
            </p>
            <p>
              В 18.00 часа трансфер до летище Кинг Хюсиен. Директен полет до
              София на Ryan air в 21.05 часа.
            </p>
          </div>
        </article>
      </aside>
    </div>
  );
}

export default Program;
