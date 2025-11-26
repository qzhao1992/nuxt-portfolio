<script setup></script>

<template>
  <div class="antialiased text-gray-800 bg-white min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
      <header class="mb-10 lg:mb-16 border-b pb-4">
        <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">My Story</h1>
      </header>

      <!-- Layout: 1/3 Image Column | 2/3 Text Column -->
      <div class="lg:grid lg:grid-cols-3 lg:gap-16">
        <!-- Image Column (1/3) -->
        <div class="lg:col-span-1 flex flex-col items-center lg:items-start mb-10 lg:mb-0">
          <!-- Profile Picture -->
          <img
            src="~/assets/images/pic.png"
            @error="handleImageError"
            alt="Qing Zhao Professional Headshot"
            class="w-64 h-64 rounded-full object-cover shadow-lg border-4 border-gray-100 transform hover:scale-105 transition duration-300"
          />
          <div class="text-center lg:text-left mt-8">
            <h2 class="text-3xl font-bold text-gray-900">Qing Zhao</h2>
            <p class="text-xl text-indigo-600 font-semibold mt-2">Senir Software Engineer</p>
          </div>
        </div>

        <!-- Text Content Column (2/3) -->
        <div class="lg:col-span-2 text-gray-700 space-y-10">
          <p class="text-xl leading-relaxed">
            Hello! I’m Qing, and I thrive at the intersection of focused discipline and relentless
            curiosity. While my professional life is centered on
            <strong>Senior Software Engineer</strong>, my daily life is built on principles that
            directly fuel my success in technology.
          </p>

          <!-- The Foundation of Discipline -->
          <div>
            <h3 class="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">
              The Foundation of Discipline
            </h3>

            <p class="mb-4 leading-relaxed">
              Whether I'm writing clean code or engaging in physical activity, discipline is my
              cornerstone. My commitment to <b>Taekwondo</b> and <b>weightlifting</b> isn't just
              about physical strength; it’s about persistence, incremental gains, and the mental
              stamina required to overcome difficult challenges qualities I apply directly to
              tackling complex technical problems.
            </p>

            <p class="leading-relaxed">
              I also dedicate time every Sunday to serving as a
              <b>buddy for a special needs child at church</b>. This role teaches empathy, patience,
              adaptability, and the profound value of consistent, focused attention all crucial
              skills for clear communication and collaboration on any development team.
            </p>
          </div>

          <!-- Relentless Curiosity -->
          <div>
            <h3 class="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">
              Relentless Curiosity
            </h3>

            <p class="mb-4 leading-relaxed">
              In a field that changes daily, staying current is non-negotiable. I actively engage in
              <b>self-directed learning via YouTube</b> to keep pace with the latest technologies,
              languages, and strategic frameworks. This continuous desire to update my knowledge
              informs my approach to development and guides my strategies in the
              <b>stock market</b>, where successful trading depends on informed, data-driven
              decisions.
            </p>
          </div>

          <!-- Balance and Grounding -->
          <div>
            <h3 class="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">
              Balance and Grounding
            </h3>

            <p class="mb-4 leading-relaxed">
              To sustain a high-paced, high-focus career, balance is essential. My weekends are
              deliberately grounded in maintenance: taking care of
              <b>housework, laundry, and cleaning</b>. Occasionally, I visit a
              <b>yoga class for stretching</b> to maintain posture and mental clarity. This
              commitment to routine and physical well-being ensures that I bring a fresh, focused
              perspective to my professional challenges every week.
            </p>
          </div>

          <!-- Conclusion -->
          <footer class="pt-8 border-t-2 border-gray-200 mt-10">
            <p class="text-xl font-semibold text-gray-800 leading-relaxed">
              I believe that a committed life outside of work fueled by curiosity, discipline, and
              service, makes for a more resilient and innovative professional. I look forward to
              building something great with you.
            </p>
          </footer>
        </div>
      </div>
    </div>
  </div>
  <section>
    <h2 class="text-3xl font-bold mt-8">Latest Blog Posts</h2>
  </section>
</template>
