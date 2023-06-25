import Form from 'react-bootstrap/Form';
import {useEffect, useState} from "react";

const bootswatchThemes = [
    {
        name: "Default",
        cdnUrl: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css",
    },
    {
        name: "Cerulean",
        cdnUrl: "https://cdn.jsdelivr.net/npm/bootswatch@5.2.3/dist/cerulean/bootstrap.min.css",
    },
    {
        name: "Cosmo",
        cdnUrl: "https://cdn.jsdelivr.net/npm/bootswatch@5.2.3/dist/cosmo/bootstrap.min.css",
    },
    {
        name: "Cyborg",
        cdnUrl: "https://cdn.jsdelivr.net/npm/bootswatch@5.2.3/dist/cyborg/bootstrap.min.css",
    },
    {
        name: "Darkly",
        cdnUrl: "https://cdn.jsdelivr.net/npm/bootswatch@5.2.3/dist/darkly/bootstrap.min.css",
    },
    {
        name: "Flatly",
        cdnUrl: "https://cdn.jsdelivr.net/npm/bootswatch@5.2.3/dist/flatly/bootstrap.min.css",
    },
    {
        name: "Journal",
        cdnUrl: "https://cdn.jsdelivr.net/npm/bootswatch@5.2.3/dist/journal/bootstrap.min.css",
    },
    {
        name: "Litera",
        cdnUrl: "https://cdn.jsdelivr.net/npm/bootswatch@5.2.3/dist/litera/bootstrap.min.css",
    },
    {
        name: "Lumen",
        cdnUrl: "https://cdn.jsdelivr.net/npm/bootswatch@5.2.3/dist/lumen/bootstrap.min.css",
    },
    {
        name: "Lux",
        cdnUrl: "https://cdn.jsdelivr.net/npm/bootswatch@5.2.3/dist/lux/bootstrap.min.css",
    },
    {
        name: "Materia",
        cdnUrl: "https://cdn.jsdelivr.net/npm/bootswatch@5.2.3/dist/materia/bootstrap.min.css",
    },
    {
        name: "Minty",
        cdnUrl: "https://cdn.jsdelivr.net/npm/bootswatch@5.2.3/dist/minty/bootstrap.min.css",
    },
    {
        name: "Pulse",
        cdnUrl: "https://cdn.jsdelivr.net/npm/bootswatch@5.2.3/dist/pulse/bootstrap.min.css",
    },
    {
        name: "Sandstone",
        cdnUrl: "https://cdn.jsdelivr.net/npm/bootswatch@5.2.3/dist/sandstone/bootstrap.min.css",
    },
    {
        name: "Simplex",
        cdnUrl: "https://cdn.jsdelivr.net/npm/bootswatch@5.2.3/dist/simplex/bootstrap.min.css",
    },
    {
        name: "Sketchy",
        cdnUrl: "https://cdn.jsdelivr.net/npm/bootswatch@5.2.3/dist/sketchy/bootstrap.min.css",
    },
    {
        name: "Slate",
        cdnUrl: "https://cdn.jsdelivr.net/npm/bootswatch@5.2.3/dist/slate/bootstrap.min.css",
    },
    {
        name: "Solar",
        cdnUrl: "https://cdn.jsdelivr.net/npm/bootswatch@5.2.3/dist/solar/bootstrap.min.css",
    },
    {
        name: "Spacelab",
        cdnUrl: "https://cdn.jsdelivr.net/npm/bootswatch@5.2.3/dist/spacelab/bootstrap.min.css",
    },
    {
        name: "Superhero",
        cdnUrl: "https://cdn.jsdelivr.net/npm/bootswatch@5.2.3/dist/superhero/bootstrap.min.css",
    },
    {
        name: "United",
        cdnUrl: "https://cdn.jsdelivr.net/npm/bootswatch@5.2.3/dist/united/bootstrap.min.css",
    },
    {
        name: "Yeti",
        cdnUrl: "https://cdn.jsdelivr.net/npm/bootswatch@5.2.3/dist/yeti/bootstrap.min.css",
    },
];
export default function ThemeSelector({}) {
    let t = bootswatchThemes[0].cdnUrl

    if (typeof window !== 'undefined') {
        t = window.localStorage.getItem('bootswatch-theme-stylesheet') ?? t
    }
    const [selectedTheme, setSelectedTheme] = useState(t)

    useEffect(() => {
        const el = document.getElementById('bootswatch-theme-stylesheet')
        // @ts-ignore
        if (el.href !== selectedTheme) {
            // @ts-ignore
            el.href = selectedTheme
            window.localStorage.setItem('bootswatch-theme-stylesheet', selectedTheme)
        }
    }, [selectedTheme])

    return <Form.Select value={selectedTheme} onChange={e => setSelectedTheme(e.target.value)}>
        {bootswatchThemes.map((theme, index) =>
            <option
                key={`theme-selection-${index}-${theme.name}`}
                value={theme.cdnUrl}>
                {theme.name}
            </option>)}
    </Form.Select>
}