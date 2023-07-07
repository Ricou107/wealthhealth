export default function ModalComponent({children}) {
    const style = {
        position: 'absolute',
        zIndex: '2',
        backgroundColor: 'grey',
        width: '80%',
        margin: '0 calc(100% - 90%)',
        top: '15%',
        borderRadius: '10px'
    }

    return(
        <>
            <section style={style}>
                {children}
            </section>
        </>
    )
}