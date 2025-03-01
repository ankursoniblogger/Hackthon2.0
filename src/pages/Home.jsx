import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, ThumbsUp, MessageCircle } from "lucide-react";

const categories = [
  { name: "Technology", count: 10 },
  { name: "Health", count: 8 },
  { name: "Sports", count: 15 },
  { name: "Entertainment", count: 12 },
];

const posts = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title: `Post Title ${i + 1}`,
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  image: `https://picsum.photos/seed/${i + 1}/600/400`,
  likes: Math.floor(Math.random() * 100),
  comments: Math.floor(Math.random() * 20),
}));

const friends = [
  { name: "Alice", online: true, image: "https://picsum.photos/seed/alice/50" },
  { name: "Bob", online: false, image: "https://picsum.photos/seed/bob/50" },
  { name: "Charlie", online: true, image: "https://picsum.photos/seed/charlie/50" },
  { name: "David", online: true, image: "https://picsum.photos/seed/david/50" },
  { name: "Emma", online: false, image: "https://picsum.photos/seed/emma/50" },
];

export default function Dashboard() {
  const [feed, setFeed] = useState(posts);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = feed.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <div className="text-2xl font-bold text-blue-600">Logo</div>
        <div className="flex-1 mx-6 relative">
          <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
          <Input
            className="w-full pl-10 border-gray-300"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline">My Account</Button>
      </header>
      
      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Categories */}
        <aside className="w-64 p-6 bg-white shadow-lg border-r hidden md:block">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <ul className="space-y-3">
            {categories.map((cat) => (
              <li key={cat.name} className="flex justify-between py-2 text-gray-700">
                <span>{cat.name}</span>
                <span className="bg-gray-300 rounded-full px-3 py-1">{cat.count}</span>
              </li>
            ))}
          </ul>
        </aside>
        
        {/* Feed Section */}
        <main className="flex-1 overflow-y-auto p-6">
          <ScrollArea className="space-y-6">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="shadow-md bg-white rounded-lg p-4">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src={post.image} alt="Post" className="w-full h-64 object-cover rounded-lg" />
                  <p className="text-gray-600 mt-4">{post.content}</p>
                  <div className="flex items-center justify-between mt-5 text-gray-600">
                    <div className="flex items-center space-x-3 cursor-pointer">
                      <ThumbsUp className="text-blue-500" size={20} />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-3 cursor-pointer">
                      <MessageCircle className="text-gray-500" size={20} />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </ScrollArea>
        </main>
        
        {/* Friends List */}
        <aside className="w-72 p-6 bg-white shadow-lg border-l hidden md:block">
          <h2 className="text-lg font-semibold mb-4">Connected Friends</h2>
          <ScrollArea className="space-y-4">
            {friends.map((friend) => (
              <div key={friend.name} className="flex items-center space-x-4 p-3 bg-gray-100 rounded-lg shadow-sm">
                <div className="relative">
                  <Avatar src={friend.image} className="w-14 h-14 rounded-full" />
                  {friend.online && <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />}
                </div>
                <span className="text-gray-700 font-medium text-lg">{friend.name}</span>
              </div>
            ))}
          </ScrollArea>
        </aside>
      </div>
    </div>
  );
}