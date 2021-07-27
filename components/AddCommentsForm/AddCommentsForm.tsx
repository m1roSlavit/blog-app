import * as React from 'react';
import * as Yup from 'yup';
import { FC } from 'react';
import { Formik, FormikProps } from 'formik';
import Button from '../Button';
import styled from 'styled-components';
import TextArea from '../TextArea';
import Flex from '../Flex';
import Box from '../Box';

import { useActions } from '../../hooks/useActions';
import FormErrorItem from '../FormErrorItem';

interface AddCommentsFormValues {
    commentText: string;
}

interface AddCommentsFormProps {
    forPostId: number;
}

const AddCommentsFormValidationSchema = Yup.object().shape({
    commentText: Yup.string().min(10, 'Comment must be at least 10 symbols').required('Field is required'),
});

const InnerAddCommentsForm = (props: FormikProps<AddCommentsFormValues>) => {
    const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting } = props;

    return (
        <StyledAddCommentsForm onSubmit={handleSubmit}>
            <Flex direction="column" align="flex-start">
                <Box mb={15}>
                    <TextArea
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.commentText}
                        name="commentText"
                        rows={5}
                        cols={50}
                        placeholder="Type some comment"
                    />
                    <FormErrorItem>{errors.commentText}</FormErrorItem>
                </Box>
                <Button type="submit" disabled={isSubmitting || !!(errors.commentText && touched.commentText)}>
                    Send
                </Button>
            </Flex>
        </StyledAddCommentsForm>
    );
};

export const AddCommentsForm: FC<AddCommentsFormProps> = ({ forPostId }) => {
    const initialValues: AddCommentsFormValues = { commentText: '' };

    const { fetchCreateComment } = useActions();

    return (
        <AddCommentsFormWrapper>
            <Formik
                initialValues={initialValues}
                validationSchema={AddCommentsFormValidationSchema}
                onSubmit={(values, actions) => {
                    const commentData = {
                        postId: forPostId,
                        body: values.commentText,
                    };
                    fetchCreateComment(commentData);
                    actions.resetForm();
                    actions.setSubmitting(false);
                }}
            >
                {InnerAddCommentsForm}
            </Formik>
        </AddCommentsFormWrapper>
    );
};

const AddCommentsFormWrapper = styled.div`
    padding: 30px 0;
`;
const StyledAddCommentsForm = styled.form``;

export default AddCommentsForm;
