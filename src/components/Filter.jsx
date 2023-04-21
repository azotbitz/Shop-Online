import React, {useState} from 'react';

const Filter = (props) => {
    const data = Object.values(props);
    const filter_items = [...new Set(data.map((item) => item.region))];

    const [filter, setFilter] = useState("");

    const [query, setQuery] = useState("");
    const search_parameters = Object.keys(Object.assign({}, ...data));

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
            <div className="select">
                <select
                    onChange={(e) => setFilter(e.target.value)}
                    className="custom-select"
                    aria-label="Filter Countries By Region">
                    <option value="">Filter By Region</option>
                    {filter_items.map((item) => (
                        <option value={item}>Filter By {item}</option>
                    ))}
                </select>
                <span className="focus"></span>
            </div>
            {search(data).map((item) => (
                <li key={item.alpha3Code}>
                    <article className="card">
                        <div className="card-image">
                            <img src={item.flag.large} alt={item.name} />
                        </div>
                        <div className="card-content">
                            <h2 className="card-name">{item.name}</h2>
                            ...
                        </div>
                    </article>
                </li>
            ))}
                </div>
            </div>
        </>
    );
};

export default Filter;