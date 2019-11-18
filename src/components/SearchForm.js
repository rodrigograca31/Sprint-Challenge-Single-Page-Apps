import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

export default function SearchForm(props) {
	// const onChange = (name, value) => {
	// 	console.log(name, value);
	// 	Formik.setFieldValue("name", name.target.value);
	// };

	return (
		<section className="search-form">
			<Formik
				initialValues={{ name: "" }}
				validate={values => {
					// const errors = {};
					// if (!values.email) {
					// 	errors.email = "Required";
					// } else if (
					// 	!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
					// 		values.email
					// 	)
					// ) {
					// 	errors.email = "Invalid email address";
					// }
					// return errors;
				}}
				onSubmit={(values, { setSubmitting }) => {}}
				validationSchema={Yup.object().shape({
					name: Yup.string()
				})}
			>
				{}
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
					setFieldValue
				}) => (
					<form onSubmit={handleSubmit}>
						<input
							type="name"
							name="name"
							onChange={e => {
								// onChange(e.target.value);
								setFieldValue("name", e.target.value);
								console.log(props.chars);
								props.setSearch(e.target.value);
								// props.setChars([
								// 	...props.chars.filter(ch => {
								// 		return (
								// 			ch.name
								// 				.toLowerCase()
								// 				.indexOf(e.target.value) !== -1
								// 		);
								// 	})
								// ]);
							}}
							onBlur={handleBlur}
							value={values.name}
						/>
						{errors.name && touched.name && errors.name}
					</form>
				)}
			</Formik>
		</section>
	);
}
