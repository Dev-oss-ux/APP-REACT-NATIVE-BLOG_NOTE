function Sidebar() {
  return (
  <div className="app-sidebar">
  <div className="app-sidebar-header">
    <h1>Notes</h1>
    <button>Add</button>
    </div>
    <div>
      <div className="app-sidebar-notes">
       <div className="app-sidebar-note">
        <div className="app-sidebar-nte-title">
          <strong>TITRE</strong>
          <button>SUPPRIMER</button>
        </div>

          <p>Note preview</p>
          <small className="note-meta">Last modified [date]</small>
       </div>
      </div>
    </div>
  </div>
 );
}
  export default Sidebar;