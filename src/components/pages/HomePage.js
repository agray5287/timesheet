export function HomePage() {
  return (
    <div class="flex items-center justify-center h-full">
    <form class="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
      <div class="flex flex-col mb-4">
        <label for="username" class="mb-2 text-sm font-medium text-gray-700">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
          class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-black"
        />
      </div>
      <div class="flex flex-col mb-6">
          <label for="password" class="mb-2 text-sm font-medium text-gray-700">Password</label>
          <input type="password" id="password" name="password" placeholder="password" class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-black" />
        </div>
        <button type="submit" class="w-full px-4 py-2 font-medium bg-[#02325d] rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
          Login
        </button>
    </form>
    </div>
  );
}
