import React, { useState, useEffect } from 'react';
import { ImageSlot } from './components/ImageSlot';
import { FloatingPhoto } from './components/FloatingPhoto';
import { CustomImages } from './types';
import { UploadCloud, RotateCcw, Sparkles } from 'lucide-react';

// Default assets generated to match the exact Figma screenshot
import defaultAvatar from './assets/images/smasher_guy_avatar_1790011475050.jpg';
import defaultMainRobot from './assets/images/robot_obstacle_car_1790011491213.jpg';
import defaultFloatTopLeft from './assets/images/robot_top_angle_1790011505020.jpg';
import defaultFloatBottomLeft from './assets/images/robot_rc_car_1790011526253.jpg';
import defaultFloatTopRight from './assets/images/robot_top_angle_1790011505020.jpg';
import defaultFloatBottomRight from './assets/images/robot_front_eyes_1790011581759.jpg';

const initialImages: CustomImages = {
  avatar: defaultAvatar,
  mainRobot: defaultMainRobot,
  floatTopLeft: defaultFloatTopLeft,
  floatBottomLeft: defaultFloatBottomLeft,
  floatTopRight: defaultFloatTopRight,
  floatBottomRight: defaultFloatBottomRight,
};

export default function App() {
  const [images, setImages] = useState<CustomImages>(() => {
    const saved = localStorage.getItem('smasher_images');
    if (saved) {
      try {
        return { ...initialImages, ...JSON.parse(saved) };
      } catch {
        return initialImages;
      }
    }
    return initialImages;
  });

  const [showUploadModal, setShowUploadModal] = useState(false);

  useEffect(() => {
    localStorage.setItem('smasher_images', JSON.stringify(images));
  }, [images]);

  const updateImage = (key: keyof CustomImages, newUrl: string) => {
    setImages((prev) => ({ ...prev, [key]: newUrl }));
  };

  const resetImages = () => {
    setImages(initialImages);
    localStorage.removeItem('smasher_images');
  };

  return (
    <div id="main-canvas" className="min-h-screen bg-retro-grid text-black selection:bg-black selection:text-yellow-300 font-pixel relative flex flex-col items-center justify-start p-4 sm:p-6 md:p-8 lg:p-12">
      
      {/* Top action bar: Allows user to upload their Figma images or reset */}
      <header id="top-toolbar" className="w-full max-w-7xl flex items-center justify-end mb-4 md:mb-6">
        <div className="flex items-center gap-2">
          <button
            id="btn-upload-hub"
            type="button"
            onClick={() => setShowUploadModal(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-bold bg-[#86EFAC] hover:bg-[#6EE7B7] border-[2px] border-black brutal-shadow-sm active:translate-x-0.5 active:translate-y-0.5 cursor-pointer transition-all"
            title="Upload and replace images with your original Figma assets"
          >
            <UploadCloud className="w-4 h-4" />
            <span>UPLOAD IMAGES</span>
          </button>

          <button
            id="btn-reset-images"
            type="button"
            onClick={resetImages}
            className="flex items-center gap-1 px-2.5 py-1.5 text-xs sm:text-sm font-bold bg-white hover:bg-neutral-100 border-[2px] border-black brutal-shadow-sm active:translate-x-0.5 active:translate-y-0.5 cursor-pointer transition-all"
            title="Reset to default Figma-matched images"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">RESET</span>
          </button>
        </div>
      </header>

      {/* Main Grid: Left Column (Profile & Info) + Right Column (Projects with Floating Photos) */}
      <main id="portfolio-container" className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">
        
        {/* ================= LEFT COLUMN ================= */}
        <section id="profile-column" className="lg:col-span-5 flex flex-col items-center lg:items-start gap-6 max-w-md mx-auto lg:mx-0 w-full">
          
          {/* Header Badge: SMASHER WORLD */}
          <div
            id="card-smasher-world"
            className="w-full bg-[#80F59C] border-[3px] border-black brutal-shadow py-3 px-6 text-center transform transition-transform hover:-translate-y-0.5"
          >
            <h1 className="text-2xl sm:text-3xl font-bold tracking-widest uppercase">
              SMASHER WORLD
            </h1>
          </div>

          {/* Profile Photo: Red hoodie hacker mirror selfie */}
          <div
            id="card-profile-photo"
            className="w-full aspect-square rounded-[32px] overflow-hidden border-[3px] border-black brutal-shadow bg-neutral-900 relative group"
          >
            <ImageSlot
              id="avatar"
              src={images.avatar}
              alt="Smasher Guy Avatar"
              className="w-full h-full"
              imgClassName="object-cover"
              onImageChange={(url) => updateImage('avatar', url)}
            />
          </div>

          {/* Pill Badge: SMASHER_GUY */}
          <div
            id="badge-smasher-guy"
            className="w-full max-w-xs mx-auto lg:mx-0 bg-[#FF5C72] border-[3px] border-black brutal-shadow-pill rounded-full py-2.5 px-6 text-center transform transition-transform hover:-translate-y-0.5"
          >
            <span className="text-xl sm:text-2xl font-bold tracking-wider text-black uppercase">
              SMASHER_GUY
            </span>
          </div>

          {/* Bio Info Card */}
          <div
            id="card-personal-info"
            className="w-full bg-[#FFA652] border-[3px] border-black brutal-shadow p-5 sm:p-6 flex flex-col gap-4 text-black transform transition-transform hover:-translate-y-0.5"
          >
            {/* AGE */}
            <div id="info-row-age" className="flex items-center justify-between text-lg sm:text-xl md:text-2xl font-bold">
              <span className="tracking-wide">AGE</span>
              <div className="flex items-center gap-1 flex-1 mx-3 overflow-hidden">
                <span className="tracking-tighter select-none font-sans font-bold">───────────&gt;</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold">15</span>
            </div>

            {/* REAL NAME */}
            <div id="info-row-realname" className="flex items-center justify-between text-lg sm:text-xl md:text-2xl font-bold">
              <span className="tracking-wide whitespace-nowrap">REAL NAME</span>
              <div className="flex items-center gap-1 flex-1 mx-3 overflow-hidden">
                <span className="tracking-tighter select-none font-sans font-bold">───────&gt;</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold whitespace-nowrap">NA</span>
            </div>

            {/* OCCUPATION */}
            <div id="info-row-occupation" className="flex items-center justify-between text-lg sm:text-xl md:text-2xl font-bold">
              <span className="tracking-wide whitespace-nowrap">OCCUPATION</span>
              <div className="flex items-center gap-1 flex-1 mx-3 overflow-hidden">
                <span className="tracking-tighter select-none font-sans font-bold">────&gt;</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold whitespace-nowrap">STUDENT</span>
            </div>

            {/* HOBBIES */}
            <div id="info-row-hobbies" className="flex items-center justify-between text-lg sm:text-xl md:text-2xl font-bold">
              <span className="tracking-wide whitespace-nowrap">HOBBIES</span>
              <div className="flex items-center gap-1 flex-1 mx-3 overflow-hidden">
                <span className="tracking-tighter select-none font-sans font-bold">────────&gt;</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold whitespace-nowrap">CODING,</span>
            </div>
          </div>

        </section>

        {/* ================= RIGHT COLUMN ================= */}
        <section id="projects-column" className="lg:col-span-7 relative w-full pt-4 lg:pt-0">
          
          {/* Floating tilted polaroid photos around the main blue box (Matching exact layout in Figma) */}
          
          {/* 1. Top Left Floating Photo (Arduino top view) */}
          <div className="absolute -top-6 -left-4 sm:-top-8 sm:-left-8 z-20 hidden sm:block">
            <FloatingPhoto
              id="float-top-left"
              src={images.floatTopLeft}
              alt="Arduino car component"
              rotation="-rotate-20"
              onImageChange={(url) => updateImage('floatTopLeft', url)}
            />
          </div>

          {/* 2. Middle Left Floating Photo (Red racing chassis) */}
          <div className="absolute top-[36%] -left-6 sm:-left-10 z-20 hidden sm:block">
            <FloatingPhoto
              id="float-bottom-left"
              src={images.floatBottomLeft}
              alt="Red custom RC chassis"
              rotation="-rotate-15"
              onImageChange={(url) => updateImage('floatBottomLeft', url)}
            />
          </div>

          {/* 3. Top Right Floating Photo (Car top angle) */}
          <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-8 z-20 hidden sm:block">
            <FloatingPhoto
              id="float-top-right"
              src={images.floatTopRight}
              alt="Robotics wiring"
              rotation="rotate-[22deg]"
              onImageChange={(url) => updateImage('floatTopRight', url)}
            />
          </div>

          {/* 4. Middle/Lower Right Floating Photo (Front ultrasonic eyes) */}
          <div className="absolute top-[42%] -right-4 sm:-right-8 z-20 hidden sm:block">
            <FloatingPhoto
              id="float-bottom-right"
              src={images.floatBottomRight}
              alt="Robot car sensor eyes"
              rotation="-rotate-12"
              onImageChange={(url) => updateImage('floatBottomRight', url)}
            />
          </div>

          {/* Central Blue Projects Box */}
          <div
            id="card-projects-main"
            className="w-full bg-[#82B1FF] border-[3px] border-black brutal-shadow-lg p-5 sm:p-7 md:p-8 flex flex-col gap-5 text-black relative z-10"
          >
            {/* Header: PROJECTS I HAVE WORKED ON TILL NOW */}
            <div id="projects-header" className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-wider uppercase leading-snug">
                PROJECTS I HAVE<br className="hidden sm:inline" /> WORKED ON TILL NOW
              </h2>
            </div>

            {/* Robotics Description */}
            <div id="robotics-description" className="text-base sm:text-lg md:text-xl leading-relaxed font-semibold">
              <p>
                ROBOTS- Obstacle Avoidance Car with ultrasonic sensors and having both manual and automatic modes all controlled through esp 32 and arduino UNO ,can be controlled via wifi.
              </p>
            </div>

            {/* Main Robot Project Image Display */}
            <div
              id="featured-robot-image"
              className="w-full max-w-lg mx-auto bg-white/40 border-[2.5px] border-black brutal-shadow-sm rounded-lg overflow-hidden group relative"
            >
              <ImageSlot
                id="main-robot"
                src={images.mainRobot}
                alt="Obstacle Avoidance Car Project"
                className="w-full h-56 sm:h-72 md:h-80"
                imgClassName="object-contain bg-neutral-50 p-2"
                onImageChange={(url) => updateImage('mainRobot', url)}
              />
            </div>

            {/* Red Bidirectional Arrow Divider: <────────────────────────> */}
            <div id="arrow-divider" className="w-full py-1 my-1 flex items-center">
              <div className="w-full flex items-center justify-between text-red-600 font-bold select-none">
                <span className="text-lg leading-none">&lt;</span>
                <div className="h-[2px] bg-red-600 flex-1 mx-0.5" />
                <span className="text-lg leading-none">&gt;</span>
              </div>
            </div>

            {/* AI Projects List */}
            <div id="ai-projects-list" className="flex flex-col gap-4 text-base sm:text-lg md:text-xl leading-relaxed font-semibold">
              {/* AI 1: Praj */}
              <div id="ai-project-praj" className="p-1">
                <p>
                  <strong className="tracking-wide">AI= Praj</strong> ,an ai which runs in the background of your system and does whatever you say or type in its terminal and stays limited to your system only keeping the data safe.
                </p>
              </div>

              {/* AI 2: Aether */}
              <div id="ai-project-aether" className="p-1">
                <p>
                  <strong className="tracking-wide">AI= Aether</strong> , an ai which can evolve itself and which is connected with autonomous learning workflows, local model execution, and hardware controls.
                </p>
              </div>
            </div>

            {/* Mobile floating cards preview (shown when screen width hides absolute floaters) */}
            <div className="sm:hidden flex flex-wrap gap-2 justify-center pt-2 border-t-2 border-black/20">
              <div className="w-16 h-16 border-2 border-black -rotate-6">
                <img src={images.floatTopLeft} alt="thumbnail" className="w-full h-full object-cover" />
              </div>
              <div className="w-16 h-16 border-2 border-black rotate-6">
                <img src={images.floatBottomLeft} alt="thumbnail" className="w-full h-full object-cover" />
              </div>
              <div className="w-16 h-16 border-2 border-black -rotate-3">
                <img src={images.floatTopRight} alt="thumbnail" className="w-full h-full object-cover" />
              </div>
              <div className="w-16 h-16 border-2 border-black rotate-4">
                <img src={images.floatBottomRight} alt="thumbnail" className="w-full h-full object-cover" />
              </div>
            </div>

          </div>

        </section>

      </main>

      {/* Upload Manager Modal for easy bulk file replacement */}
      {showUploadModal && (
        <div
          id="upload-modal-backdrop"
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setShowUploadModal(false)}
        >
          <div
            id="upload-modal-content"
            className="bg-[#FFF79A] border-[4px] border-black brutal-shadow-lg p-6 max-w-xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b-[3px] border-black pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-black" />
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide">
                  Upload Your Figma Images
                </h3>
              </div>
              <button
                id="btn-close-modal"
                type="button"
                onClick={() => setShowUploadModal(false)}
                className="w-8 h-8 flex items-center justify-center bg-[#FF5C72] border-2 border-black font-bold text-lg hover:bg-red-500 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-sm mb-5 font-semibold leading-relaxed">
              You can replace any photo with the exact files you exported from your Figma design. You can also click directly on any photo on the page to change it!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Avatar Uploader */}
              <div className="bg-white p-3 border-2 border-black brutal-shadow-sm flex flex-col gap-2">
                <span className="text-xs font-bold uppercase">1. Profile Avatar (Red Hoodie)</span>
                <div className="w-full h-24 bg-neutral-100 overflow-hidden border border-black">
                  <img src={images.avatar} alt="preview" className="w-full h-full object-cover" />
                </div>
                <label className="text-xs font-bold bg-[#80F59C] border border-black py-1.5 px-2 text-center cursor-pointer hover:bg-green-400">
                  Select Image File
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = (ev) => ev.target?.result && updateImage('avatar', ev.target.result as string);
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                </label>
              </div>

              {/* Main Robot Car Uploader */}
              <div className="bg-white p-3 border-2 border-black brutal-shadow-sm flex flex-col gap-2">
                <span className="text-xs font-bold uppercase">2. Main Robot Car (Yellow Wheels)</span>
                <div className="w-full h-24 bg-neutral-100 overflow-hidden border border-black">
                  <img src={images.mainRobot} alt="preview" className="w-full h-full object-contain p-1" />
                </div>
                <label className="text-xs font-bold bg-[#82B1FF] border border-black py-1.5 px-2 text-center cursor-pointer hover:bg-blue-400">
                  Select Image File
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = (ev) => ev.target?.result && updateImage('mainRobot', ev.target.result as string);
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                </label>
              </div>

              {/* Floating photo 1 */}
              <div className="bg-white p-3 border-2 border-black brutal-shadow-sm flex flex-col gap-2">
                <span className="text-xs font-bold uppercase">3. Top-Left Floating Photo</span>
                <div className="w-full h-20 bg-neutral-100 overflow-hidden border border-black">
                  <img src={images.floatTopLeft} alt="preview" className="w-full h-full object-cover" />
                </div>
                <label className="text-xs font-bold bg-[#FFA652] border border-black py-1 px-2 text-center cursor-pointer hover:bg-orange-400">
                  Select Image File
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = (ev) => ev.target?.result && updateImage('floatTopLeft', ev.target.result as string);
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                </label>
              </div>

              {/* Floating photo 2 */}
              <div className="bg-white p-3 border-2 border-black brutal-shadow-sm flex flex-col gap-2">
                <span className="text-xs font-bold uppercase">4. Bottom-Left Floating Photo</span>
                <div className="w-full h-20 bg-neutral-100 overflow-hidden border border-black">
                  <img src={images.floatBottomLeft} alt="preview" className="w-full h-full object-cover" />
                </div>
                <label className="text-xs font-bold bg-[#FFA652] border border-black py-1 px-2 text-center cursor-pointer hover:bg-orange-400">
                  Select Image File
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = (ev) => ev.target?.result && updateImage('floatBottomLeft', ev.target.result as string);
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                </label>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setShowUploadModal(false)}
                className="bg-black text-white px-6 py-2 font-bold uppercase hover:bg-neutral-800 cursor-pointer"
              >
                DONE
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer credit */}
      <footer id="footer-copyright" className="w-full text-center mt-12 py-4 text-xs font-bold tracking-widest text-black/60">
        SMASHER WORLD • PORTFOLIO • ROBOTICS &amp; AI
      </footer>

    </div>
  );
}
