import Gen from '../../components/shared/Gen'
import firered from '../../assets/firered.jpeg'

function GenList(){
    return (
        <>
        <div className="grid grid-cols-3 gap-10">
            <Gen title='Gen 1 - Kanto' img={firered}></Gen>
            <Gen title='Gen 2 - Kanto' img={firered}></Gen>
            <Gen title='Gen 3 - Kanto' img={firered}></Gen>
            <Gen title='Gen 4 - Kanto' img={firered}></Gen>
            <Gen title='Gen 5 - Kanto' img={firered}></Gen>
            <Gen title='Gen 6 - Kanto' img={firered}></Gen>
            <Gen title='Gen 7 - Kanto' img={firered}></Gen>
            <Gen title='Gen 8 - Kanto' img={firered}></Gen>
            <Gen title='Gen 9 - Kanto' img={firered}></Gen>
        </div>
        </>
    )
}

export default GenList