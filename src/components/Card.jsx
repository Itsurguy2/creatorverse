function Card({ creator, onEdit, onDelete, onView }) {
  return (
    <article style={{
      margin: '1rem',
      maxWidth: '400px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      overflow: 'hidden'
    }}>
      
      {/* Display Image */}
      {creator.imageURL && (
        <div style={{
          width: '100%',
          height: '250px',
          overflow: 'hidden'
        }}>
          <img 
            src={creator.imageURL} 
            alt={creator.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
      )}
      
      <div style={{ padding: '1.5rem' }}>
        {/* Display Name */}
        <h3 style={{ 
          marginTop: 0,
          marginBottom: '0.75rem',
          fontSize: '1.4rem'
        }}>
          {creator.name}
        </h3>
        
        {/* Display URL */}
        <p style={{ 
          fontSize: '0.9rem',
          color: 'var(--pico-muted-color)',
          marginBottom: '0.75rem'
        }}>
          <strong>Channel: </strong>
          <a 
            href={creator.url} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              wordBreak: 'break-all',
              color: 'var(--pico-primary-color)'
            }}
          >
            {creator.url.length > 50 ? `${creator.url.substring(0, 50)}...` : creator.url}
          </a>
        </p>
        
        {/* Display Description */}
        {creator.description && (
          <p style={{
            color: 'var(--pico-muted-color)',
            lineHeight: '1.5',
            marginBottom: '1.5rem',
            fontSize: '0.95rem'
          }}>
            {creator.description.length > 120 
              ? `${creator.description.substring(0, 120)}...` 
              : creator.description}
          </p>
        )}
        
        {/* Action Buttons */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '0.5rem',
          marginBottom: '0.75rem'
        }}>
          <a 
            href={creator.url} 
            target="_blank" 
            rel="noopener noreferrer"
            role="button"
            style={{
              textAlign: 'center',
              fontSize: '0.9rem',
              textDecoration: 'none'
            }}
          >
            🚀 Visit
          </a>
          
          <button 
            onClick={() => onView(creator.id)}
            className="secondary"
            style={{ fontSize: '0.9rem' }}
          >
            👁️ View
          </button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '0.5rem'
        }}>
          <button 
            onClick={() => onEdit(creator.id)}
            className="contrast"
            style={{ fontSize: '0.9rem' }}
          >
            ✏️ Edit
          </button>
          
          <button 
            onClick={() => onDelete(creator.id)}
            style={{ 
              fontSize: '0.9rem',
              backgroundColor: 'var(--pico-del-color)',
              borderColor: 'var(--pico-del-color)'
            }}
          >
            🗑️ Delete
          </button>
        </div>
      </div>
    </article>
  )
}

export default Card