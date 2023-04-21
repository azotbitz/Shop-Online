import React, {useEffect, useState} from 'react';
import {getItemsSelector} from "../redux/reducers/itemsReducer/itemsSelector";
import {useDispatch, useSelector} from "react-redux";
import {searchItems} from "../redux/reducers/itemsReducer/itemsReducer";

const Search = (props) => {

    const items = props;
    const [query, setQuery] = useState("");
    const [filter, setFilter] = useState("");
    const data = Object.values(items);
    const search_parameters = Object.keys(Object.assign({}, ...data));
    const dispatch = useDispatch()
    const searchItemsBasket = useSelector(getItemsSelector)

    useEffect(() => {
        if(query !== '') {
            dispatch(searchItems(query))
        }

    },[dispatch])

    function search(items) {
        return items.filter(
            (item) =>
                item.region.includes(filter) &&
                search_parameters.some((parameter) =>
                    item[parameter].toString().toLowerCase().includes(query)
                )
        );
    }
    return (
        <>
        <div className="row">
            <div className="col-12">
                <div className="search--form">
                        <label htmlFor="search-form">
                            <input type="search"
                                   name="search-form"
                                   id="search-form"
                                   onChange={(e) => setQuery(e.target.value)}
                                   className="search--input"/>
                            <input type="button" value="Поиск" className="white--btn"/>
                        </label>
                </div>
                {/*{search(data).map((item) => (*/}
                {/*    <li key={item.alpha3Code}>*/}
                {/*        <article className="card">*/}
                {/*            <div className="card-image">*/}
                {/*                <img src={item.flag.large} alt={item.name} />*/}
                {/*            </div>*/}
                {/*            <div className="card-content">*/}
                {/*                <h2 className="card-name">{item.name}</h2>*/}
                {/*            </div>*/}
                {/*        </article>*/}
                {/*    </li>*/}
                {/*))}*/}
            </div>
        </div>
        </>
    );
};

export default Search;