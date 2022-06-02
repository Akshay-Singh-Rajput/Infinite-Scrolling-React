import React, { useState } from 'react';
import useInfiniteScroll from "./useInfiniteScroll";

const List = () => {
    const [ listItems, setListItems ] = useState(Array.from(Array(25).keys(), n => n + 1));
    const [ isFetching, setIsFetching ] = useInfiniteScroll(fetchMoreListItems);

    function fetchMoreListItems() {
        setTimeout(() => {
            setListItems(prevState => ([ ...prevState, ...Array.from(Array(25).keys(), n => n + prevState.length + 1) ]));
            setIsFetching(false);
        }, 10);
    }

    return (
        <>
            <div>
                { listItems.map(listItem => <h3>Masai Student { listItem }</h3>) }
            </div>
            { isFetching && 'Fetching more list items...' }
        </>
    );
};

export default List;