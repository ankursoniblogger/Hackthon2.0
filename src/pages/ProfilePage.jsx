import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Edit, UserPlus, Users, Camera, Settings, Send, Filter, Mic, Image } from "lucide-react";

const userProfile = {
  name: "John Doe",
  tagline: "Living life to the fullest",
  designation: "Software Engineer",
  city: "New York",
  profilePicture: "https://picsum.photos/seed/profile/150",
  coverPhoto: "https://picsum.photos/seed/cover/800/300",
  friends: [
    { name: "Alice", image: "https://picsum.photos/seed/alice/60", isFriend: true },
    { name: "Bob", image: "https://picsum.photos/seed/bob/60", isFriend: false },
  ],
};

export default function ProfilePage() {
  const [profile, setProfile] = useState(userProfile);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [filter, setFilter] = useState("all");
  const [selectedFriend, setSelectedFriend] = useState(null);

  const sendMessage = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      if (messageInput.trim() !== "" && selectedFriend) {
        setMessages([...messages, { sender: "You", text: messageInput }]);
        setMessageInput("");
      }
    }
  };

  return (
    <div className="flex bg-gray-50 min-h-screen p-6 space-x-6">
      {/* Left Sidebar - Friends List with Filter */}
      <div className="w-1/4 bg-white shadow-lg rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Friends</h2>
        <div className="flex space-x-2 mb-4">
          <Button variant="outline" className="w-1/2" onClick={() => setFilter("all")}>All Friends</Button>
          <Button variant="outline" className="w-1/2" onClick={() => setFilter("my")}>My Friends</Button>
        </div>
        <ScrollArea className="space-y-4">
          {profile.friends.filter(friend => filter === "all" || friend.isFriend).map((friend) => (
            <div 
              key={friend.name} 
              className="flex items-center justify-between space-x-4 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition cursor-pointer"
              onClick={() => friend.isFriend ? setSelectedFriend(friend) : null}
            >
              <div className="flex items-center space-x-4">
                <Avatar src={friend.image} className="w-12 h-12 rounded-full border-2 border-gray-300" />
                <span className="text-gray-700 font-medium">{friend.name}</span>
              </div>
              {!friend.isFriend && <Button size="icon" variant="ghost"><UserPlus /></Button>}
            </div>
          ))}
        </ScrollArea>
      </div>

      {/* Middle - Real-time Chat Experience */}
      <div className="w-2/4 bg-white shadow-lg rounded-lg p-6 flex flex-col">
        {selectedFriend ? (
          <>
            <div className="flex items-center space-x-4 mb-4">
              <Avatar src={selectedFriend.image} className="w-12 h-12 rounded-full border-2 border-gray-300" />
              <h2 className="text-xl font-semibold">{selectedFriend.name}</h2>
            </div>
            <ScrollArea className="flex-1 space-y-2 mb-4">
              {messages.map((msg, index) => (
                <div key={index} className={`p-2 rounded-lg ${msg.sender === "You" ? "bg-blue-100 self-end" : "bg-gray-100"}`}>
                  <strong>{msg.sender}:</strong> {msg.text}
                </div>
              ))}
            </ScrollArea>
            <div className="flex items-center space-x-2">
              <Input value={messageInput} onChange={(e) => setMessageInput(e.target.value)} placeholder="Type a message..." onKeyDown={sendMessage} />
              <Button onClick={sendMessage} className="bg-blue-500 text-white">
                <Send size={18} />
              </Button>
              <Button className="bg-green-500 text-white">
                <Image size={18} />
              </Button>
              <Button className="bg-red-500 text-white">
                <Mic size={18} />
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center text-gray-500">Select a friend to start chatting</div>
        )}
      </div>

      {/* Right Sidebar - Profile Settings */}
      <div className="w-1/4 bg-white shadow-lg rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">My Profile</h2>
        <div className="flex flex-col items-center space-y-4">
          <Avatar src={profile.profilePicture} className="w-24 h-24 rounded-full border-2 border-gray-300" />
          <h3 className="text-lg font-medium">{profile.name}</h3>
          <p className="text-gray-500">{profile.tagline}</p>
          <p className="text-gray-500">{profile.designation}</p>
          <p className="text-gray-500">{profile.city}</p>
          <Button variant="outline" className="w-full flex items-center">
            <Edit size={18} className="mr-2" /> Edit Profile
          </Button>
        </div>
      </div>
    </div>
  );
}
