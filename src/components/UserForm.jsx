import React from 'react';

export default function UserForm({ formData, handleChange, handleSubmit, editingId }) {
  return (
    <form onSubmit={handleSubmit} className="modern-form">
      <h2>{editingId ? 'Update User' : 'Add New User'}</h2>
      <div className="form-group">
        <label>Name</label>
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">{editingId ? 'Update' : 'Add User'}</button>
    </form>
  );
}
