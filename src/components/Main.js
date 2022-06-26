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

    function customTheme(theme) {
        return {
            ...theme,
            colors: {
                ...theme.colors,
                primary: '#6494AA'
            }
        }
    }

    const makeFirstLetterCapital = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1) + ' ' + 'Sorting';
    };

    const renderResult = () => {
        let result;
        sort === ''
            ? (result = "Choose a sorting type")
            : (result = makeFirstLetterCapital(sort));
        return result;
    };

    return (
        <section className='main'>
            <div className='main__wrapper'>
                <Select
                    className='select'
                    theme={customTheme}
                    defaultValue={sort}
                    options={options}
                    onChange={handleOnChange}
                />
                <div className='main__select-wrapper'>
                    <h1 className='main__select-title'>{renderResult()}</h1>
                    {bubble && <Bubble />}
                    {selection && <Selection />}
                    {quick && <Quick />}
                </div>
            </div>
        </section>
    )

}
export default Main;