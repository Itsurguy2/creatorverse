import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../supabaseClient'

function AddCreator() {
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: ''
  })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { error } = await supabase
        .from('creators')
        .insert([formData])
      
      if (error) throw error
      
      alert('Creator added successfully!')
      navigate('/') // Go back to main page
    } catch (error) {
      alert('Error adding creator: ' + error.message)
    }
    setLoading(false)
  }

  return (
    <div style={{maxWidth: '600px', margin: '2rem auto', padding: '0 1rem'}}>
      <div style={{marginBottom: '1rem'}}>
        <Link to="/" style={{color: '#007bff', textDecoration: 'none'}}>
          ← Back to All Creators
        </Link>
      </div>

      <h1>Add New Creator</h1>
      
      <form onSubmit={handleSubmit}>
        <div style={{marginBottom: '1rem'}}>
          <label>Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              fontSize: '1rem',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          />
        </div>

        <div style={{marginBottom: '1rem'}}>
          <label>URL *</label>
          <input
            type="url"
            name="url"
            value={formData.url}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              fontSize: '1rem',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          />
        </div>

        <div style={{marginBottom: '1rem'}}>
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            style={{
              width: '100%',
              padding: '0.75rem',
              fontSize: '1rem',
              border: '1px solid #ddd',
              borderRadius: '4px',
              resize: 'vertical'
            }}
          />
        </div>

        <div style={{marginBottom: '1rem'}}>
          <label>Image URL</label>
          <input
            type="url"
            name="imageURL"
            value={formData.imageURL}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.75rem',
              fontSize: '1rem',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          />
        </div>

        <button 
          type="submit" 
          disabled={loading}
          style={{
            padding: '1rem 2rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '1.1rem',
            cursor: 'pointer',
            marginRight: '1rem'
          }}
        >
          {loading ? 'Adding...' : 'Add Creator'}
        </button>

        <Link 
          to="/" 
          style={{
            padding: '1rem 2rem',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '1.1rem',
            textDecoration: 'none',
            display: 'inline-block'
          }}
        >
          Cancel
        </Link>
      </form>
    </div>
  )
}

export default AddCreator