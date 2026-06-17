export default function VideoPreview() {
  return (
    <div className="max-w-3xl mx-auto mt-10 border rounded p-4">
      <img
        src="https://placehold.co/600x300"
        alt="thumbnail"
        className="rounded"
      />

      <h2 className="text-xl font-bold mt-4">Sample Video Title</h2>

      <p className="text-gray-500">Duration: 10:20</p>
    </div>
  );
}
