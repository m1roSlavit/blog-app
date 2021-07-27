import React, { FC } from 'react';
import MainLayout from '../../layouts/MainLayout';
import AddPostForm from '../../components/AddPostForm/AddPostForm';

const NewPost: FC = () => {
    return (
        <MainLayout>
            <AddPostForm />
        </MainLayout>
    );
};

export default NewPost;
