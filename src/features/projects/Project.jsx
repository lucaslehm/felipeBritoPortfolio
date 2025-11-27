import MainTitle from "../shared/components/MainTitle"

export default function Projetos({ projectGroup }) {
    return (
        <section>
            <MainTitle>{projectGroup.groupTitle}</MainTitle>

            <ProjectCard />

        </section>
    )
}