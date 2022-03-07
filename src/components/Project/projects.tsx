import { useEffect, useState } from "react"
import { ProjectCard } from "./index";

export const Projects = () => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        (async () => {
            const response = await fetch('https://api.github.com/repos/moabukar/Everything-Tech/contents').then(res => res.json())
            setData(response.filter((item: any) => {
                return !item.name.includes('.') && item.name !== "LICENSE" && item.name !== "docs";
            }))
        })();
    }, []);

    return (
        data && data.map((item: any, index: number) =>
            <ProjectCard key={index} project={item} />
        )
    )
}