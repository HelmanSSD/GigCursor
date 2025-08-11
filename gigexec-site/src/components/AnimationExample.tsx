import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function AnimationExample() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div className="p-8 space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Animation Examples</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Fade Animation */}
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Fade Animations</h3>
          <div className="space-y-4">
            <div className="animate-fade-in bg-blue-100 p-4 rounded">
              Fade In Animation
            </div>
            <div className="animate-fade-out bg-red-100 p-4 rounded">
              Fade Out Animation
            </div>
          </div>
        </div>

        {/* Slide Animation */}
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Slide Animations</h3>
          <div className="space-y-4">
            <div className="animate-slide-in bg-green-100 p-4 rounded">
              Slide In Animation
            </div>
            <div className="animate-slide-out bg-yellow-100 p-4 rounded">
              Slide Out Animation
            </div>
          </div>
        </div>

        {/* Scale Animation */}
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Scale Animations</h3>
          <div className="space-y-4">
            <div className="animate-scale-in bg-purple-100 p-4 rounded">
              Scale In Animation
            </div>
            <div className="animate-scale-out bg-pink-100 p-4 rounded">
              Scale Out Animation
            </div>
          </div>
        </div>

        {/* Bounce Animation */}
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Bounce Animations</h3>
          <div className="space-y-4">
            <div className="animate-bounce-in bg-indigo-100 p-4 rounded">
              Bounce In Animation
            </div>
            <div className="animate-bounce-out bg-orange-100 p-4 rounded">
              Bounce Out Animation
            </div>
          </div>
        </div>

        {/* Rotate Animation */}
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Rotate Animations</h3>
          <div className="space-y-4">
            <div className="animate-rotate-in bg-teal-100 p-4 rounded">
              Rotate In Animation
            </div>
            <div className="animate-rotate-out bg-cyan-100 p-4 rounded">
              Rotate Out Animation
            </div>
          </div>
        </div>

        {/* Flip Animation */}
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Flip Animations</h3>
          <div className="space-y-4">
            <div className="animate-flip-in-x bg-emerald-100 p-4 rounded">
              Flip In Animation
            </div>
            <div className="animate-flip-out-x bg-lime-100 p-4 rounded">
              Flip Out Animation
            </div>
          </div>
        </div>

        {/* Zoom Animation */}
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Zoom Animations</h3>
          <div className="space-y-4">
            <div className="animate-zoom-in bg-rose-100 p-4 rounded">
              Zoom In Animation
            </div>
            <div className="animate-zoom-out bg-amber-100 p-4 rounded">
              Zoom Out Animation
            </div>
          </div>
        </div>

        {/* Continuous Animations */}
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Continuous Animations</h3>
          <div className="space-y-4">
            <div className="animate-pulse bg-blue-200 p-4 rounded">
              Pulse Animation
            </div>
            <div className="animate-spin bg-red-200 p-4 rounded">
              Spin Animation
            </div>
            <div className="animate-ping bg-green-200 p-4 rounded">
              Ping Animation
            </div>
            <div className="animate-wiggle bg-yellow-200 p-4 rounded">
              Wiggle Animation
            </div>
            <div className="animate-heartbeat bg-pink-200 p-4 rounded">
              Heartbeat Animation
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <Button 
          onClick={() => setIsVisible(!isVisible)}
          className="bg-[#DAAA00] text-black hover:bg-[#c09029]"
        >
          Toggle Visibility
        </Button>
      </div>

      {isVisible && (
        <div className="animate-fade-in bg-white rounded-lg p-6 shadow-lg mt-6">
          <h3 className="text-lg font-semibold mb-2">Interactive Animation</h3>
          <p>This element appears and disappears with fade animation!</p>
        </div>
      )}
    </div>
  )
}
