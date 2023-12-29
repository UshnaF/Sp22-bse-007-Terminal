import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCategories } from '../Slices/categorySlice';

const HomePage = () => {
    const categories = useSelector((state) => state.categories.list);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAllEmojis = async () => {
            try {
                const response = await fetch('https://emojihub.yurace.pro/api/all');
                const data = await response.json();
                dispatch(setCategories(data));
            } catch (error) {
                console.error(error);
            }
        };

        fetchAllEmojis();
    }, [dispatch]);

    return (
        <div>
            <h1>Home Page</h1>
            <ul>
                {categories.map((cat) => (
                    <li key={cat.unicode}>
                        <Link to={`/${cat.category}`}>{cat.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;
