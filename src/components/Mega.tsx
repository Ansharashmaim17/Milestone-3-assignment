import React from 'react';
import BlogCard from '../components/BlogCard';
import { title } from 'process';

export default function Mega() {
  const posts = [
    {
      id: '1',
      title: "The Importance of Hydration for Your Body",
      description: "Discover why staying hydrated is crucial for your health, how much water you need daily, and the benefits it brings to your body.",
      date: "2025-1-2",
      imageUrl: "../images/hydration.jpg",
    },

    {
      id: '2',
      title: "Top 5 Superfoods to Boost Your Immunity",
      description: "Learn about five superfoods that can help strengthen your immune system, fight off infections, and keep you feeling your best.",
      date: "2025-1-2",
      imageUrl: "../images/food.jpg",
    },

    {
      id: '3',
      title: "How to Create a Balanced Workout Routine",
      descriptipn: "Building a balanced workout routine can improve your overall fitness. Here's how to incorporate strength, flexibility, and cardio into your week.",
      date: "2025-1-2",
      imageUrl: "../images/workout.jpg",
    },

    {
      id: '4',
      title: "10 Quick and Healthy Breakfast Ideas",
      description: "Start your day right with these 10 delicious, nutritious breakfast ideas that are perfect for a busy morning!",
      date: "2025-1-2",
      imageUrl: "../images/breakfast.jpg",
    },

    {
      id: '5',
      title: "How to Manage Stress for a Healthier You",
      description: "Stress can take a toll on your health. Learn simple strategies to manage stress effectively and maintain a peaceful mind and body.",
      date: "2025-1-2",
      imageUrl: "../images/stress.jpg",
    },

  ];
  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
        {""}
        Healthy Lifestyle
      </h1>

      <div className='grid grid-cols-1 sm:-grid-cols-2 lg:grid-cols3 gap-8'>
        {posts.map((post, index) => (
          <div className='fade-in' key={post.id}>
            <div className='blog-card'>
              <BlogCard post={{...post,description: post.description || "No description avaiable"}} isDarkBackground={index % 2 === 0} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
