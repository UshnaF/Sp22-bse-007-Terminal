import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectCategory } from '../Slices/categorySlice';

const DetailsPage = () => {
    const dispatch = useDispatch();
    const { category } = useParams();
    const selectedCategory = useSelector((state) => state.categories.selectedCategory);

    useEffect(() => {
        const fetchCategoryEmojis = async () => {
            try {
                const response = await fetch(`https://emojihub.yurace.pro/api/all/category/${category}`);
                const data = await response.json();
                dispatch(selectCategory(data));
            } catch (error) {
                console.error('Error fetching category emojis:', error);
            }
        };

        fetchCategoryEmojis();
    }, [dispatch, category]);

    return (
        <div>
            <h1>Details Page - {category} Emojis</h1>
            {selectedCategory.map((emoji) => (
                <div key={emoji.unicode}>
                    <Link to={`/details/${emoji.category}`}>{emoji.name}</Link>
                    <h2>{emoji.name}</h2>
                    <p>Category: {emoji.category}</p>
                    <p>Group: {emoji.group}</p>
                    <p>HTML Code: {emoji.htmlCode}</p>
                    <p>Unicode: {emoji.unicode}</p>


                </div>
            ))}
        </div>
    );
};

export default DetailsPage;
