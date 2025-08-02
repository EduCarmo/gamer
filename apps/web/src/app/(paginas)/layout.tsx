import Pagina from "@/components/template/Pagina";

export default function Layout({ children}: { children: React.ReactNode }) {
    return <Pagina>{children}</Pagina>
}