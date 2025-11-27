# CONTEXTO:

Estou desenvolvendo o portfolio de um amigo e estou montando a parte dos projetos. Estou desenvolvendo em REACT+Vite com TailwindCSS. To usando o remix icons tbm. 

## OBJETIVO:

Seu objetivo é desenvolver esses componentes de projetos para que eles funcionem perfeitamente a partir de um "data.js", seguindo os padrões de design q eu ja desenvovi.

---

## COMPONENTES E DATA:

### projectsData.js:
```
const projects = [
    {
        groupTitle: "Branding",
        groupProjects: [
            {
                projetcName: "Teste",
                projectDescription: "Oi sum um teste",
                projectCoverURL: "https://i.ibb.co/qHFZb4b/pexels-matthiaszomer-206130.jpg",
                projectGalery: ["https://i.ibb.co/fd9hPMrg/steve-Jobs.jpg","https://i.ibb.co/5g9XWp46/jobsgetty.webp"]
            }
        ]
    }
]

export default projects
```

### Projetos.jsx:
```
export default function Projetos() {
    return (
        <main>
            <h1>Projetos</h1>
            

        </main>
    )
}
```

### Project.jsx:
```
import MainTitle from "../shared/components/MainTitle"

export default function Projetos({ projectGroup }) {
    return (
        <section>
            <MainTitle>{projectGroup.groupTitle}</MainTitle>

            <ProjectCard />

        </section>
    )
}
```

### ProjectCard.jsx:
```
import GalleryInlineSlider from "./GalleryInlineSlider";

export default function ProjectCard({
  projetcName,
  projectDescription,
  projectCoverURL,
  projectGalery,
}) {
  return (
    <div>
      
      <div className="">imagem</div>

      <div>

        <div>
            <h2>Nome</h2>
            <p>Descrição</p>
        </div>

        <GalleryInlineSlider />

      </div>

    </div>
  );
}
```

## GalleryInlineSlider.jsx:
```
export default function GalleryInlineSlider() {
    return (
        <div>
            <h1>oi</h1>
        </div>
    )
}
```

## GallerySlider.jsx:
```
export default function GallerySlider() {
    return (
        <div>
            <h1>oi</h1>
        </div>
    )
}
```

---

## INSTRUÇÕES PARA O RESULTADO:

Funciona assim, vou alimentar depois o "data.js" com varios grupos de projetos. Cada grupo tem um titulo e seus projetos dentro. Cada projeto vai ter sua capa ao **lado esquerdo**. Do **lado direito**, vai ter nome e descrição e abaixo um **slider menor** com as fotos do projeto. Caso o usuario **clique no slider**, ele abre um **Modal com um slider maior** que cobre a tela toda para ele ver as footos maiores.

Vai ter um grupo criativos e eles são em **vídeos** que vao ser upados no youtube, prepare os sliders para **receber isso** também.

Siga **obrigatóriamente** o estilo de design que eu vou mandar no exemplo abaixo.

---

## EXEMPLOS DE COMPONENTES

Use para se **inspirar** nas cores, bordas e estilo no geral.

### Exemplo 1:
```
import { RiArrowDownSLine, RiArrowRightSLine } from "@remixicon/react";

function IntroTextBox({ title, text }) {
  return (
    <div className="flex flex-col ring-3 ring-[#461901] shadow-[5px_5px_0px_#461901] w-[580px]">
      <div className="flex items-center justify-between p-2 ring-3 ring-[#461901] bg-orange-200">
        <span className="text-orange-600 font-semibold">{title}</span>
        <div className="flex items-center">
          <RiArrowDownSLine
            className="
            text-orange-600"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 p-5">
        {text.map((p, i) => (
          <p className="text-orange-950 font-medium" key={i}>{p}</p>
        ))}
      </div>
      <button className="flex gap-3 w-fit m-4 self-end ring-3 ring-[#461901] shadow-[5px_5px_0px_#461901] bg-orange-500 p-2 text-white font-semibold cursor-pointer transition-all hover:scale-102 hover:bg-orange-400">
        <a href="#" download={true}>
          Currículo
        </a>
        <RiArrowRightSLine
          className="
            text-white"
        />
      </button>
    </div>
  );
}

export default IntroTextBox;
```

### Exemplo 2:
```
import { RiCloseLine } from "@remixicon/react";
import * as RemixIcons from "@remixicon/react";

function ServiceModal({ service, onClose }) {
  if (!service) return null;
  const IconComponent = RemixIcons[service.icon];

  return (
    <dialog
      open
      className="outline-none w-200 h-150 m-auto flex flex-col gap-4 ring-3 ring-[#461901] shadow-[7px_7px_0px_#461901] bg-yellow-50 transition-all z-50"
    >
      <div className="ring-3 ring-[#461901] p-2 bg-orange-400 flex justify-between">
        <span className="font-bold text-orange-950">{service.serviceName}</span>

        <span onClick={onClose} className="cursor-pointer">
          <RiCloseLine size={24} color="#441306" />
        </span>
      </div>

      <div className="flex justify-between items-center h-full p-14">
        <div>
          <IconComponent size={200} color={"oklch(75% 0.183 55.934)"} />
        </div>
        <div className="p-4 flex flex-col gap-10">
          <p className=" text-orange-950 font-medium w-100">
            {service.descriptionDetailed}
          </p>
          <button onClick={onClose} className="bg-orange-400 ring-3 ring-[#461901] shadow-[5px_5px_0px_#461901] w-fit px-20 py-2 cursor-pointer font-semibold text-orange-950 transition-all hover:bg-orange-500 hover:scale-102">
            Fechar
          </button>
        </div>
      </div>
    </dialog>
  );
}

export default ServiceModal;

```