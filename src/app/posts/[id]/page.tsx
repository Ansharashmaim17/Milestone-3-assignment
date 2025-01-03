'use client'
import React from 'react';
import CommentSection from '@/components/CommentSection';
import AuthorCard from '@/components/AuthorCard';

const posts = [
  {
    id: '1',
    title: "The Importance of Hydration for Your Body",
    description: "Discover why staying hydrated is crucial for your health, how much water you need daily, and the benefits it brings to your body.",
    image: "../images/hydration.jpg",
  },

  {
    id: '2',
    title: "Top 5 Superfoods to Boost Your Immunity",
    description: "Learn about five superfoods that can help strengthen your immune system, fight off infections, and keep you feeling your best.",
    image: "../images/food.jpg",
  },

  {
    id: '3',
    title: "How to Create a Balanced Workout Routine",
    description: "Building a balanced workout routine can improve your overall fitness. Here's how to incorporate strength, flexibility, and cardio into your week.",
    image: "../images/workout.jpg",
  },

  {
    id: '4',
    title: "10 Quick and Healthy Breakfast Ideas",
    description: "Start your day right with these 10 delicious, nutritious breakfast ideas that are perfect for a busy morning!",
    image: "../images/breakfast.jpg",
  },

  {
    id: '5',
    title: "How to Manage Stress for a Healthier You",
    description: "Stress can take a toll on your health. Learn simple strategies to manage stress effectively and maintain a peaceful mind and body.",
    image: "../images/stress.jpg",
  },
];


export default function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <h2 className='text-2xl font-bold text-center mt-10'>Post not found</h2>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split("/n").map((para, index) => (
      <p key={index} className='mt-4 text-justify'>
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className='max-w-3xl mx-auto p-5'>
      <h1 className='md:text-4xl text-3xl font-bold text-red-600 text-center'>
        {""}
        {post.title}
      </h1>

      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className='w-full h-auto rounded-md mt-4' />
      )}

      <div className='mt-6 text-lg text-slate-700'>
        {renderParagraphs(post.description)}

      </div>
      <CommentSection postId={post.id} />
      <AuthorCard />
    </div>
  );
}
