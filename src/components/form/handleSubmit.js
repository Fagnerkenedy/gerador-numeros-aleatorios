
const handleSubmit = (fields) => {
    try {
        let numbers
        if (fields.duplicados) {
            numbers = gerador(fields)
        } else {
            numbers = geradorUnico(fields)
        }
        const grupos = agrupador(numbers, fields.agruparPor || 20)
        const linhasAgrupadas = grupos.map((grupo) => {
            return agrupador(grupo, fields.numerosPorLinha || 5)
        })
        setResult(linhasAgrupadas)
        navigate(`/list`)
        setTimeout(() => {
            setTitle(`${fields.categoria} ${fields.minima}° até ${fields.maxima}°`)
        }, 200)
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
        setResult([])
    }
}

export default handleSubmit