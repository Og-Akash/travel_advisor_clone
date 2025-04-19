
import React from 'react';
import { Button } from '@/components/ui/button';

const AtillaBanner = () => {
  return (
    <div className="bg-amber-50 mx-4 md:mx-6 mb-8 p-4 rounded-lg flex items-center">
      <div className="flex-1 pr-4">
        <h2 className="text-sm text-gray-600 mb-1">SPONSORED CONTENT</h2>
        <h3 className="text-lg font-bold mb-1">Discover Atilla</h3>
        <p className="text-sm text-gray-600 mb-3">Find out why Atilla makes the perfect blend of tradition & fun</p>
        <Button className="bg-white border border-black text-black hover:bg-gray-100 rounded-full text-xs px-4 py-1">
          Sign up now
        </Button>
      </div>
      <div className="w-16 h-16 md:w-24 md:h-24 rounded-md overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1568797629192-55f25233ac7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
          alt="Atilla landscape"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default AtillaBanner;
