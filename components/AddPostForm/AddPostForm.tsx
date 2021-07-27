import React, { FC } from 'react';
import * as Yup from 'yup';
import { Formik, FormikProps } from 'formik';
import Box from '../Box';
import TextArea from '../TextArea';
import Button from '../Button';
import { useActions } from '../../hooks/useActions';
import styled from 'styled-components';
import Input from '../Input';
import FormErrorItem from '../FormErrorItem';

interface AddPostFormValues {
    title: string;
    postText: string;
}

const AddPostFormValidationSchema = Yup.object().shape({
    title: Yup.string().min(10, 'Title must be at least 10 symbols').required('Field is required'),
    postText: Yup.string().min(30, 'Post text must be at least 30 symbols').required('Field is required'),
});

const InnerAddPostForm = (props: FormikProps<AddPostFormValues>) => {
    const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting } = props;

    return (
        <StyledAddPostForm onSubmit={handleSubmit}>
            <Box mb={15}>
                <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                    name="title"
                    fluid
                    placeholder="Type Title"
                />
                <FormErrorItem>{touched.title && errors.title}</FormErrorItem>
            </Box>
            <Box mb={15}>
                <TextArea
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.postText}
                    name="postText"
                    rows={15}
                    fluid
                    placeholder="Type post text"
                />
                <FormErrorItem>{touched.postText && errors.postText}</FormErrorItem>
            </Box>
            <Button
                type="submit"
                disabled={isSubmitting || !!(errors.title && touched.title) || !!(errors.postText && touched.postText)}
            >
                Send
            </Button>
        </StyledAddPostForm>
    );
};

export const AddPostForm: FC = () => {
    const initialValues: AddPostFormValues = { title: '', postText: '' };

    const { fetchCreatePost } = useActions();

    return (
        <AddPostFormWrapper>
            <Formik
                initialValues={initialValues}
                validationSchema={AddPostFormValidationSchema}
                onSubmit={(values, actions) => {
                    const postData = {
                        title: values.title,
                        body: values.postText,
                    };
                    fetchCreatePost(postData);
                    actions.resetForm();
                    actions.setSubmitting(false);
                }}
            >
                {InnerAddPostForm}
            </Formik>
        </AddPostFormWrapper>
    );
};

const AddPostFormWrapper = styled.div``;
const StyledAddPostForm = styled.form``;

export default AddPostForm;
