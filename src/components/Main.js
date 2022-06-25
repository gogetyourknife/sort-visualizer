import React from 'react';
import Quick from './Quick';
import Bubble from './Bubble';
import Selection from './Selection';

import Select from 'react-select';

function Main() {

    const [sort, setSort] = React.useState('')

    const [bubble, setBubble] = React.useState(false);
    const [selection, setSelection] = React.useState(false);
    const [quick, setQuick] = React.useState(false);

    const options = [
        { value: 'bubble', label: 'Bubble Sort' },
        { value: 'selection', label: 'Selection Sort' },
        { value: 'quick', label: 'Quick Sort' }
    ]

    React.useEffect(() => {
        sort === 'bubble'
            ? setBubble(true) : setBubble(false);
        sort === 'selection'
            ? setSelection(true) : setSelection(false);
        sort === 'quick'
            ? setQuick(true) : setQuick(false);
    }, [sort])


    function handleOnChange(e) {
        setSort(e.value);
    }

    return (
        <section className='main'>
            <div className='main__wrapper'>
                <Select
                    className='select'
                    defaultValue={sort}
                    options={options}
                    onChange={handleOnChange}
                />
                <div className='main__select-wrapper'>
                    <h1 className='main__select-title'>{sort.charAt(0).toUpperCase() + sort.slice(1) + ' ' + 'Sorting'}</h1>
                    <div className='main__blocks'>
                        {bubble && <Bubble />}
                        {selection && <Selection />}
                        {quick && <Quick />}
                    </div>
                </div>
            </div>
        </section>
    )

}
export default Main;