import { useNavigate } from "react-router-dom";
import agrupador from "../../utils/agrupador";
import gerador from "../../utils/gerador";
import geradorUnico from "../../utils/geradorUnico";
import notify from "../../utils/notify";

const handleSubmit = (fields, setLoading) => {
    try {
        console.log("fields antes: ", fields);
        setLoading(true)
        // const query = new URLSearchParams(fields).toString()
        // navigate(`/list?${encodeURIComponent(JSON.stringify(fields))}`)
        // setLoading(true)
        let numbers
        if (fields.duplicados) {
            numbers = gerador(fields)
        } else {
            numbers = geradorUnico(fields)
        }
        const grupos = agrupador(numbers, fields.agruparPor || 8)
        const linhasAgrupadas = grupos.map((grupo) => {
            return agrupador(grupo, fields.numerosPorLinha || 1)
        })
        console.log("resuklt", linhasAgrupadas);

        const title = `${fields.categoria}: ${fields.minima}° até ${fields.maxima}°`
        setTimeout(() => {
            setLoading(false)
        })
        return {linhasAgrupadas, title}
    } catch (error) {
        console.log("Erro ao gerar números: ", error)
        notify({
            message: "Erro ao gerar números",
            description: error.message,
            placement: 'top',
            type: 'error',
            duration: 10,
            width: 600,
            pauseOnHover: true
        })
        setLoading(false)
    }
}

export default handleSubmit