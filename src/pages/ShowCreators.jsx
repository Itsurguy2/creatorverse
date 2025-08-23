import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../supabaseClient'
import Card from '../components/Card'

function ShowCreators() {
  const [creators, setCreators] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    fetchCreators()
  }, [])

  const fetchCreators = async () => {
    try {
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (error) throw error
      setCreators(data || [])
    } catch (error) {
      console.error('Error fetching creators:', error)
    }
    setLoading(false)
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this creator?')) {
      try {
        const { error } = await supabase
          .from('creators')
          .delete()
          .eq('id', id)
        
        if (error) throw error
        fetchCreators() // Refresh the list
      } catch (error) {
        alert('Error deleting creator: ' + error.message)
      }
    }
  }

  const handleView = (id) => {
    navigate(`/view/${id}`)
  }

  const handleEdit = (id) => {
    navigate(`/edit/${id}`)
  }

  if (loading) {
    return (
      <main className="container">
        <div style={{ textAlign: 'center', padding: '4rem 0' }}>
          <div aria-busy="true" style={{ width: '3rem', height: '3rem', margin: '0 auto' }}></div>
          <p>Loading creators...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="container">
      {/* Header Section */}
      <header style={{ textAlign: 'center', padding: '2rem 0' }}>
        <h1 style={{ 
          fontSize: '3rem',
          background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '0.5rem'
        }}>
          ✨ Creatorverse
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          color: 'var(--pico-muted-color)',
          marginBottom: '2rem'
        }}>
          Discover amazing content creators from around the web
        </p>
        
        <Link 
          to="/new"
          role="button"
          style={{
            fontSize: '1.1rem',
            padding: '1rem 2rem',
            textDecoration: 'none'
          }}
        >
          ➕ Add New Creator
        </Link>
      </header>

      {/* Stats Section */}
      <section style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <small style={{ color: 'var(--pico-muted-color)' }}>
          {creators.length === 0 ? 'No creators yet' : 
           creators.length === 1 ? '1 amazing creator' : 
           `${creators.length} amazing creators`}
        </small>
      </section>

      {/* Creators Grid */}
      <section>
        {creators.length === 0 ? (
          <div style={{ 
            textAlign: 'center', 
            padding: '4rem 2rem',
            backgroundColor: 'var(--pico-card-background-color)',
            borderRadius: '8px',
            border: '2px dashed var(--pico-muted-border-color)'
          }}>
            <h3>🎭 No creators yet!</h3>
            <p style={{ color: 'var(--pico-muted-color)', marginBottom: '1.5rem' }}>
              Be the first to add some amazing content creators to the Creatorverse.
            </p>
            <Link to="/new" role="button" className="contrast">
              🚀 Add Your First Creator
            </Link>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '1.5rem',
            justifyItems: 'center'
          }}>
            {creators.map(creator => (
              <Card 
                key={creator.id}
                creator={creator}
                onView={handleView}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer style={{ 
        textAlign: 'center', 
        padding: '3rem 0 2rem 0',
        borderTop: '1px solid var(--pico-muted-border-color)',
        marginTop: '3rem'
      }}>
        <small style={{ color: 'var(--pico-muted-color)' }}>
          Built with ❤️ using React, Supabase & Pico CSS
        </small>
      </footer>
    </main>
  )
}

export default ShowCreators