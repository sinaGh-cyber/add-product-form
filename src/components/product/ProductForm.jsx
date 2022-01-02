import React from 'react'

import { useForm } from 'react-hook-form'

const ProductForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <div className="row">
        <div className="form-group col-md-6">
          <label htmlFor="name-input" className="form-label">
            نام محصول
          </label>
          <input
            type="text"
            className={`form-control${errors.name ? ' is-invalid' : ''}`}
            data-testid="name-input"
            placeholder="گوشی آیفون"
          />
          <div className="invalid-feedback"></div>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="price-input" className="form-label">
            قیمت
          </label>
          <input
            type="number"
            className={`form-control${errors.price ? ' is-invalid' : ''}`}
            data-testid="price-input"
            placeholder="1000"
          />
          <div className="invalid-feedback"></div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="form-group col-md-6">
          <label htmlFor="category-select" className="form-label">
            دسته‌بندی
          </label>
          <select className="form-select" data-testid="category-select">
            <option value="mobile">موبایل</option>
            <option value="book">کتاب</option>
            <option value="tshirt">تیشرت</option>
          </select>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="description-textarea" className="form-label">
            توضیحات
          </label>
          <textarea
            className={`form-control${errors.description ? ' is-invalid' : ''}`}
            data-testid="description-textarea"
            rows="3"
          />
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-primary mt-4 float-start"
        data-testid="submit-button"
      >
        افزودن محصول
      </button>
    </form>
  )
}

export default ProductForm
