export default function Input() {
  return (
    
      <input
        className="w-lg border-2 p-4 border-amber-600 h-12 rounded-md bg-white text-black"
        type="text"
        placeholder="Paste video link here(e.g.,https://..)"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      
   
  );
}
